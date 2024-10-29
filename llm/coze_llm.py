"""
Coze LLM implementation.
"""

import json
import uuid
from typing import Iterator
import requests
from .llm_interface import LLMInterface


class LLM(LLMInterface):
    """
    Coze LLM implementation.
    """

    def __init__(
        self,
        bot_id: str,
        personal_access_token: str,
        base_url: str = "https://api.coze.com",
        user_id: str = None,
        verbose: bool = False,
    ):
        """
        Initializes an instance of the Coze LLM class.

        Parameters:
        - bot_id (str): The ID of the bot.
        - personal_access_token (str): The personal access token for authentication.
        - user_id (str): The ID of the user.
        - base_url (str): The base URL for the Coze API. Defaults to "https://api.coze.com", which is the default URL for the Coze (Global) API.
        - verbose (bool): Whether to enable verbose logging.
        """
        self.base_url = base_url.rstrip("/")
        self.bot_id = bot_id
        self.headers = {
            "Authorization": f"Bearer {personal_access_token}",
            "Content-Type": "application/json",
        }
        self.user_id = user_id or str(uuid.uuid4())
        self.verbose = verbose
        self.conversation_id = None

        # Create a new conversation
        self._create_conversation()

        print("Coze LLM initialized")

    def _create_conversation(self):
        """Create a new conversation and save the conversation ID in self.conversation_id"""
        try:
            url = f"{self.base_url}/v1/conversation/create"
            response = requests.post(url, headers=self.headers, json={}, timeout=30)
            response.raise_for_status()

            data = response.json()
            if data.get("code") == 0 and "data" in data:
                self.conversation_id = data["data"]["id"]
                if self.verbose:
                    print(f"Created new conversation with ID: {self.conversation_id}")
            else:
                raise Exception(
                    f"Failed to create conversation: {data.get('msg', 'Unknown error')}"
                )

        except Exception as e:
            print(f"Error creating conversation: {str(e)}")
            raise

    def chat_iter(self, prompt: str) -> Iterator[str]:
        """
        Send a chat request and return an iterator of streaming responses

        Args:
            prompt: The user's input prompt text

        Returns:
            Iterator[str]: An iterator of response text
        """

        url = f"{self.base_url}/v3/chat"
        if self.conversation_id:
            url += f"?conversation_id={self.conversation_id}"
        else:
            print("No active conversation. Not using conversation ID.")

        data = {
            "bot_id": self.bot_id,
            "user_id": self.user_id,
            "stream": True,
            "auto_save_history": True,
            "additional_messages": [
                {"role": "user", "content": prompt, "content_type": "text"}
            ],
        }

        if self.verbose:
            print(f"Request URL: {url}")
            print(f"Request data: {json.dumps(data, indent=2, ensure_ascii=False)}")
            print(f"Conversation ID: {self.conversation_id}")

        def _generate_response():
            try:
                response = requests.post(
                    url, headers=self.headers, json=data, stream=True, timeout=30
                )
                response.raise_for_status()
                response.encoding = "utf-8"

                current_message_id = None

                for line in response.iter_lines(decode_unicode=True):
                    if not line:
                        continue

                    line = line.strip()
                    if not line:
                        continue

                    if line.startswith("event:"):
                        event_type = line.split(":", 1)[1].strip()
                        if self.verbose:
                            print(f"Event: {event_type}")
                        continue

                    if line.startswith("data:"):
                        try:
                            data_json = line.split(":", 1)[1].strip()
                            if data_json == "[DONE]":
                                if self.verbose:
                                    print("Stream completed")
                                continue

                            event_data = json.loads(data_json)

                            # Only process assistant messages
                            if (
                                not isinstance(event_data, dict)
                                or event_data.get("role") != "assistant"
                            ):
                                continue

                            message_id = event_data.get("id")
                            message_type = event_data.get("type")
                            content = event_data.get("content")

                            # Skip non-answer type messages
                            if message_type != "answer" or not content:
                                continue

                            # If it's a new message, update current_message_id
                            if message_id != current_message_id:
                                current_message_id = message_id
                                if self.verbose:
                                    print(f"New message ID: {message_id}")

                            # Only output the content of delta events
                            if event_type == "conversation.message.delta":
                                if self.verbose:
                                    print(f"Content: {content}")
                                yield content

                        except json.JSONDecodeError:
                            if self.verbose:
                                print(f"Failed to parse line: {line}")
                            continue
                        except Exception as e:
                            if self.verbose:
                                print(f"Error processing line: {str(e)}")
                            continue

            except requests.RequestException as e:
                print(f"Request failed: {str(e)}")
                yield f"Error: {str(e)}"

        return _generate_response()

    def handle_interrupt(self, heard_response: str) -> None:
        """
        Handle interrupt requests. 
        Not implemented yet.

        Args:
            heard_response: The user's last heard response
        """
        pass
