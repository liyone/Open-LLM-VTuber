import os
import threading
import subprocess
import platform
from .tts_interface import TTSInterface


class TTSEngine(TTSInterface):

    file_extension: str = "wav"
    new_audio_dir: str = "./cache"
    # process: subprocess.Popen = None

    # Voice path (the path of the .onnx file (the .onnx.json file needs to be present as well) for the voice model)
    voice_model_path: str = None

    def __init__(self, voice_path, verbose=False):
        """Initialize the Piper TTS client."""
        self.verbose = verbose
        print(f"Initializing PiperTTS with voice_path: {voice_path}")
        self.voice_model_path = voice_path

        if not self.voice_model_path or not os.path.exists(self.voice_model_path):
            print(
                f'Error: Piper TTS voice model not found at path "{self.voice_model_path}"'
            )
            print("Downloading the default voice model...")
            import scripts.install_piper_tts

            scripts.install_piper_tts.download_default_model()
            print("Using the default voice model for PiperTTS.")
            self.voice_model_path = os.path.join(
                "models", "piper_voice", "en_US-amy-medium.onnx"
            )

        print(f"Using voice model at: {self.voice_model_path}")

        self.piper_binary_path: str = (
            os.path.join("models", "piper_tts", "piper.exe")
            if platform.system() == "Windows"
            else os.path.join("models", "piper_tts", "piper")
        )

        print(f"Piper binary path: {self.piper_binary_path}")

        if not os.path.exists(self.piper_binary_path):
            print(f"Piper TTS binary not found at {self.piper_binary_path}")
            print("Installing Piper TTS...")
            import scripts.install_piper_tts

            scripts.install_piper_tts.setup_piper_tts()

    def initialize_piper_cli(self) -> subprocess.Popen:
        try:
            # Construct and execute the Piper TTS command
            command = [
                self.piper_binary_path,
                "-m",
                self.voice_model_path,
                "-d",
                self.new_audio_dir,
            ]
            print(f"Initializing Piper CLI with command: {' '.join(command)}")
            
            process = subprocess.Popen(
                command,
                stdin=subprocess.PIPE,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True,
            )
            print("Piper CLI process initialized successfully")
            return process
        except Exception as e:
            print(f"Error initializing Piper TTS: {e}")
            raise e

    def generate_audio(self, text: str, file_name_no_ext=None):
        print(f"\nGenerating audio for text: '{text}'")
        print(f"File name: {file_name_no_ext}")

        # Create a list to store the result from the thread
        result = []

        def run_piper_tts():
            print("Starting Piper TTS process...")
            with self.initialize_piper_cli() as process:
                try:
                    print(f"Sending text to Piper: '{text}'")
                    stdout, stderr = process.communicate(input=text)

                    if process.returncode != 0:
                        print(f"Process failed with return code: {process.returncode}")
                        print(f"stderr: {stderr}")
                        return None

                    output = stdout.strip()
                    print(f"Raw stdout: '{stdout}'")
                    print(f"Processed output: '{output}'")

                    if not output.endswith(".wav"):
                        print(f"Error: Output doesn't end with .wav")
                        print(f"Unexpected output format: {output}")
                        return None

                    # Verify the file exists and has content
                    if os.path.exists(output):
                        file_size = os.path.getsize(output)
                        print(f"Generated file size: {file_size} bytes")
                        if file_size == 0:
                            print("Warning: Generated file is empty")
                            return None
                        # Store the result
                        result.append(output)
                    else:
                        print(f"Error: Generated file not found at {output}")
                        return None

                    print(f'Successfully generated audio file: "{output}"')

                except subprocess.CalledProcessError as e:
                    print(f"Subprocess error: {str(e)}")
                    print(f"Command output: {e.output if hasattr(e, 'output') else 'No output'}")
                    return None
                except Exception as e:
                    print(f"Unexpected error in run_piper_tts: {str(e)}")
                    return None
                finally:
                    print("Cleaning up Piper process...")
                    process.kill()
                    process.wait()
                    print("Piper process cleaned up")

        print("Creating thread for Piper TTS...")
        thread = threading.Thread(target=run_piper_tts)
        thread.start()
        print("Waiting for Piper TTS thread to complete...")
        thread.join()
        print("Piper TTS thread completed")

        # Return the result if we got one
        if result:
            return result[0]
        return None
