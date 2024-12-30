import os
from dotenv import load_dotenv
import pyaudio
from enum import Enum

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

if not OPENAI_API_KEY:
    raise ValueError("OPENAI_API_KEY environment variable not set")

if not GROQ_API_KEY:
    raise ValueError("GROQ_API_KEY environment variable not set")

OPENAI_TTS_MODEL = "tts-1"

FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 44100
CHUNK = 1024
SILENCE_THRESHOLD = 200  # Adjust this threshold as needed
SILENCE_DURATION = 2  # Duration of silence to stop recording in seconds
PRE_SPEECH_BUFFER_DURATION = 0.5  # 500ms of audio to keep before speech detection
