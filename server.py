import os
import re
import shutil
import atexit
import json
import asyncio
from typing import List, Dict
import yaml
import numpy as np
from fastapi import FastAPI, WebSocket, APIRouter
from fastapi.staticfiles import StaticFiles
from starlette.websockets import WebSocketDisconnect
from main import OpenLLMVTuberMain
from live2d_model import Live2dModel
from tts.stream_audio import AudioPayloadPreparer
import websockets
import ollama
import random
import glob
import requests
from urllib.parse import urlparse
import base64
import io
from PIL import Image
import time
from collections import deque

class WebSocketServer:
    """
    WebSocketServer initializes a FastAPI application with WebSocket endpoints and a broadcast endpoint.

    Attributes:
        config (dict): Configuration dictionary.
        app (FastAPI): FastAPI application instance.
        router (APIRouter): APIRouter instance for routing.
        connected_clients (List[WebSocket]): List of connected WebSocket clients for "/client-ws".
        server_ws_clients (List[WebSocket]): List of connected WebSocket clients for "/server-ws".
    """

    def __init__(self, open_llm_vtuber_config: Dict | None = None):
        """
        Initializes the WebSocketServer with the given configuration.
        """
        self.app = FastAPI()
        self.router = APIRouter()
        self.new_connected_clients: List[WebSocket] = []
        self.connected_clients: List[WebSocket] = []
        self.server_ws_clients: List[WebSocket] = []
        self.open_llm_vtuber: OpenLLMVTuberMain | None = None
        self.open_llm_vtuber_config: Dict | None = open_llm_vtuber_config
        self._setup_routes()
        self._mount_static_files()
        self.app.include_router(self.router)
        self.last_shown_image = None
        self.recently_used_images = deque(maxlen=15)  # Keep track of last 15 images
        random.seed(time.time())  # Seed with current time

    def _setup_routes(self):
        """Sets up the WebSocket and broadcast routes."""

        # the connection between this server and the frontend client
        # The version 2 of the client-ws. Introduces breaking changes.
        # This route will initiate its own main.py instance and conversation loop
        @self.app.websocket("/client-ws")
        async def websocket_endpoint(websocket: WebSocket):
            await websocket.accept()
            await websocket.send_text(
                json.dumps({"type": "full-text", "text": "Connection established"})
            )

            self.connected_clients.append(websocket)
            print("Connection established")
            l2d = Live2dModel(self.open_llm_vtuber_config["LIVE2D_MODEL"])
            open_llm_vtuber = OpenLLMVTuberMain(self.open_llm_vtuber_config)
            audio_payload_preparer = AudioPayloadPreparer()

            def _play_audio_file(sentence: str | None, filepath: str | None) -> None:
                if filepath is None:
                    print("No audio to be streamed. Response is empty.")
                    return

                if sentence is None:
                    sentence = ""
                print(f">> Playing {filepath}...")
                payload, duration = audio_payload_preparer.prepare_audio_payload(
                    audio_path=filepath,
                    display_text=sentence,
                    expression_list=l2d.extract_emotion(sentence),
                )
                print("Payload send.")

                async def _send_audio():
                    await websocket.send_text(json.dumps(payload))
                    await asyncio.sleep(duration)

                new_loop = asyncio.new_event_loop()
                asyncio.set_event_loop(new_loop)
                new_loop.run_until_complete(_send_audio())
                new_loop.close()

                print("Audio played.")

            open_llm_vtuber.set_audio_output_func(_play_audio_file)

            await websocket.send_text(
                json.dumps({"type": "set-model", "text": l2d.model_info})
            )
            print("Model set")
            received_data_buffer = np.array([])
            # start mic
            await websocket.send_text(
                json.dumps({"type": "control", "text": "start-mic"})
            )

            conversation_task = None

            try:
                while True:
                    print(".", end="")
                    message = await websocket.receive_text()
                    data = json.loads(message)
                    # print(f"\033\n Received ws req: {data.get('type')}\033[0m\n")

                    if data.get("type") == "interrupt-signal":
                        print("Start receiving audio data from front end.")
                        if conversation_task is not None:
                            print(
                                "\033[91mLLM hadn't finish itself. Interrupting it...",
                                "heard response: \n",
                                data.get("text"),
                                "\033[0m\n",
                            )
                            # Wait for the interrupt to complete before proceeding
                            await asyncio.to_thread(open_llm_vtuber.interrupt, data.get("text"))
                            # Add this line to ensure the conversation task is properly cancelled
                            if not conversation_task.done():
                                conversation_task.cancel()
                                try:
                                    await conversation_task
                                except asyncio.CancelledError:
                                    print("Conversation task cancelled successfully")

                    elif data.get("type") == "mic-audio-data":
                        received_data_buffer = np.append(
                            received_data_buffer,
                            np.array(
                                list(data.get("audio").values()), dtype=np.float32
                            ),
                        )
                        print("*", end="")

                    elif data.get("type") == "mic-audio-end":
                        print("Received audio data end from front end.")
                        await websocket.send_text(
                            json.dumps({"type": "full-text", "text": "Thinking..."})
                        )
                        audio = received_data_buffer
                        received_data_buffer = np.array([])

                        async def _run_conversation():
                            try:
                                await websocket.send_text(
                                    json.dumps(
                                        {
                                            "type": "control",
                                            "text": "conversation-chain-start",
                                        }
                                    )
                                )
                                await asyncio.to_thread(
                                    open_llm_vtuber.conversation_chain,
                                    user_input=audio,
                                )
                                await websocket.send_text(
                                    json.dumps(
                                        {
                                            "type": "control",
                                            "text": "conversation-chain-end",
                                        }
                                    )
                                )
                                print("One Conversation Loop Completed")
                            except asyncio.CancelledError:
                                print("Conversation task was cancelled.")
                            except InterruptedError as e:
                                print(f"😢Conversation was interrupted. {e}")

                        conversation_task = asyncio.create_task(_run_conversation())
                    elif data.get("type") == "text-input":
                        print("Received text input from front end.")
                        user_input = data.get("text")

                        async def _run_text_conversation():
                            try:
                                await websocket.send_text(
                                    json.dumps(
                                        {
                                            "type": "control",
                                            "text": "conversation-chain-start",
                                        }
                                    )
                                )
                                await asyncio.to_thread(
                                    open_llm_vtuber.conversation_chain,
                                    user_input=user_input,
                                )
                                await websocket.send_text(
                                    json.dumps(
                                        {
                                            "type": "control",
                                            "text": "conversation-chain-end",
                                        }
                                    )
                                )
                                print("Text Conversation Loop Completed")
                            except asyncio.CancelledError:
                                print("Text conversation task was cancelled.")
                            except InterruptedError as e:
                                print(f"😢Text conversation was interrupted. {e}")

                        conversation_task = asyncio.create_task(_run_text_conversation())
                    elif data.get("type") == "vision-request":
                        print("Processing vision request")
                        try:
                            image_path = os.path.join(os.path.dirname(__file__), 'static', 'images', 'image.jpg')
                            print(f"Looking for image at: {image_path}")
                            
                            if os.path.exists(image_path):
                                print(f"Image found at {image_path}")
                                try:
                                    # Get vision model response
                                    vision_response = ollama.chat(
                                        model='llama3.2-vision',
                                        messages=[{
                                            'role': 'user',
                                            'content': data.get("content", "What is in this image? No more than 3 sentences"),
                                            'images': [image_path]
                                        }]
                                    )
                                    print(f"Ollama vision response: {vision_response}")
                                    
                                    if vision_response:
                                        await websocket.send_text(json.dumps({
                                            "type": "control",
                                            "text": "conversation-chain-start"
                                        }))
                                        
                                        # Clean the response text
                                        cleaned_response = self.clean_markdown(vision_response['message']['content'])
                                        
                                        vtuber_prompt = self.clean_markdown(
                                            f"Let me describe what I see in this image: "
                                            f"{cleaned_response}"
                                        )
                                        
                                        # Use conversation_chain with the vision response
                                        await asyncio.to_thread(
                                            open_llm_vtuber.conversation_chain,
                                            user_input=vtuber_prompt,
                                            skip_llm=True  # Skip LLM processing since we already have the response
                                        )
                                        
                                        await websocket.send_text(json.dumps({
                                            "type": "control",
                                            "text": "conversation-chain-end"
                                        }))
                                except Exception as e:
                                    print(f"Ollama chat error: {str(e)}")
                                    raise
                            else:
                                error_msg = f"Image not found at {image_path}"
                                print(error_msg)
                                await websocket.send_text(json.dumps({
                                    "type": "full-text", 
                                    "text": error_msg
                                }))
                                
                        except Exception as e:
                            error_msg = f"Vision request failed: {str(e)}"
                            print(error_msg)
                            await websocket.send_text(json.dumps({
                                "type": "full-text",
                                "text": error_msg
                            }))
                    elif data.get("type") == "random-vision-request":
                        # Get list of all jpg files in the images directory, excluding image.jpg
                        image_files = []
                        for ext in ['*.jpg', '*.jpeg', '*.png']:
                            image_files.extend(
                                [f for f in glob.glob(os.path.join('static', 'images', ext)) 
                                if not f.endswith('image.jpg')]
                            )

                        print(f"Available images: {image_files}")

                        if image_files:
                            # Filter out recently used images if we have enough options
                            available_images = [f for f in image_files if f not in self.recently_used_images]
                            
                            # If we've used all images, reset the recently used list
                            if not available_images:
                                print("All images have been shown recently, resetting history")
                                self.recently_used_images.clear()
                                available_images = image_files
                            
                            # Select a random image
                            chosen_image = random.choice(available_images)
                            print(f"Selected image: {chosen_image}")
                            
                            # Update tracking
                            self.last_shown_image = chosen_image
                            self.recently_used_images.append(chosen_image)
                            
                            # Copy the chosen image to image.jpg
                            shutil.copy(chosen_image, os.path.join('static', 'images', 'image.jpg'))
                            
                            # Process the image with vision model
                            try:
                                vision_response = ollama.chat(
                                    model='llama3.2-vision',
                                    messages=[{
                                        'role': 'user',
                                        'content': data.get("content", "What is in this image? No more than 3 sentences"),
                                        'images': [os.path.join('static', 'images', 'image.jpg')]
                                    }]
                                )
                                
                                if vision_response:
                                    await websocket.send_text(json.dumps({
                                        "type": "control",
                                        "text": "conversation-chain-start"
                                    }))
                                    
                                    # Clean the response text
                                    cleaned_response = self.clean_markdown(vision_response['message']['content'])
                                    
                                    vtuber_prompt = self.clean_markdown(
                                        f"Let me describe what I see in this image: "
                                        f"{cleaned_response}"
                                    )
                                    
                                    await asyncio.to_thread(
                                        open_llm_vtuber.conversation_chain,
                                        user_input=vtuber_prompt,
                                        skip_llm=True
                                    )
                                    
                                    await websocket.send_text(json.dumps({
                                        "type": "control",
                                        "text": "conversation-chain-end"
                                    }))
                                    
                                    # Signal vision completion
                                    await websocket.send_text(json.dumps({
                                        "type": "vision-complete"
                                    }))
                            except Exception as e:
                                print(f"Vision processing error: {str(e)}")
                                await websocket.send_text(json.dumps({
                                    "type": "full-text",
                                    "text": f"Error processing image: {str(e)}"
                                }))
                        else:
                            await websocket.send_text(json.dumps({
                                "type": "full-text",
                                "text": "No images found in the images directory"
                            }))
                    elif data.get("type") == "vision-url-request":
                        print("Processing vision URL request")
                        try:
                            image_url = data.get("url")
                            if not image_url:
                                raise ValueError("No image URL provided")

                            # Validate URL
                            parsed = urlparse(image_url)
                            if not all([parsed.scheme, parsed.netloc]):
                                raise ValueError("Invalid image URL")

                            # Download the image
                            response = requests.get(image_url, timeout=10)
                            response.raise_for_status()

                            # Save the downloaded image
                            image_path = os.path.join('static', 'images', 'image.jpg')
                            with open(image_path, 'wb') as f:
                                f.write(response.content)

                            # Process with vision model using the saved image
                            vision_response = ollama.chat(
                                model='llama3.2-vision',
                                messages=[{
                                    'role': 'user',
                                    'content': data.get("content", "What is in this image? No more than 3 sentences"),
                                    'images': [image_path]  # Use the saved image path
                                }]
                            )

                            if vision_response:
                                await websocket.send_text(json.dumps({
                                    "type": "control",
                                    "text": "conversation-chain-start"
                                }))

                                # Clean the response text
                                cleaned_response = self.clean_markdown(vision_response['message']['content'])
                                username = data.get("username", "Someone")
                                
                                vtuber_prompt = self.clean_markdown(
                                    f"{username} shared an image with me. Let me describe what I see: "
                                    f"{cleaned_response}"
                                )
                                
                                await asyncio.to_thread(
                                    open_llm_vtuber.conversation_chain,
                                    user_input=vtuber_prompt,
                                    skip_llm=True
                                )

                                await websocket.send_text(json.dumps({
                                    "type": "control",
                                    "text": "conversation-chain-end"
                                }))

                                # Signal vision completion
                                await websocket.send_text(json.dumps({
                                    "type": "vision-complete"
                                }))

                        except Exception as e:
                            error_msg = f"Vision URL request failed: {str(e)}"
                            print(error_msg)
                            await websocket.send_text(json.dumps({
                                "type": "full-text",
                                "text": error_msg
                            }))
                    else:
                        print("Unknown data type received.")

            except WebSocketDisconnect:
                self.connected_clients.remove(websocket)
                open_llm_vtuber = None

    def _mount_static_files(self):
        """Mounts static file directories."""
        self.app.mount(
            "/live2d-models",
            StaticFiles(directory="live2d-models"),
            name="live2d-models",
        )
        # This mount should handle the static directory including images
        self.app.mount("/", StaticFiles(directory="./static", html=True), name="static")

    def run(self, host: str = "127.0.0.1", port: int = 8000, log_level: str = "info"):
        """Runs the FastAPI application using Uvicorn."""
        import uvicorn

        uvicorn.run(self.app, host=host, port=port, log_level=log_level)

    def clean_cache():
        cache_dir = "./cache"
        if os.path.exists(cache_dir):
            shutil.rmtree(cache_dir)
            os.makedirs(cache_dir)

    def clean_markdown(self, text: str) -> str:
        """Remove markdown formatting from text."""
        # Remove **text** formatting
        text = re.sub(r'\*\*(.*?)\*\*', r'\1', text)
        # Remove *text* formatting
        text = re.sub(r'\*(.*?)\*', r'\1', text)
        return text


def load_config_with_env(path) -> dict:
    """
    Load the configuration file with environment variables.

    Parameters:
    - path (str): The path to the configuration file.

    Returns:
    - dict: The configuration dictionary.

    Raises:
    - FileNotFoundError if the configuration file is not found.
    - yaml.YAMLError if the configuration file is not a valid YAML file.
    """
    with open(path, "r", encoding="utf-8") as file:
        content = file.read()

    # Match ${VAR_NAME}
    pattern = re.compile(r"\$\{(\w+)\}")

    # replace ${VAR_NAME} with os.getenv('VAR_NAME')
    def replacer(match):
        env_var = match.group(1)
        return os.getenv(
            env_var, match.group(0)
        )  # return the original string if the env var is not found

    content = pattern.sub(replacer, content)

    # Load the yaml file
    return yaml.safe_load(content)


if __name__ == "__main__":

    atexit.register(WebSocketServer.clean_cache)

    # Load configurations from yaml file
    config = load_config_with_env("conf.yaml")

    config["LIVE2D"] = True  # make sure the live2d is enabled

    # Initialize and run the WebSocket server
    server = WebSocketServer(open_llm_vtuber_config=config)
    server.run(host=config["HOST"], port=config["PORT"])
