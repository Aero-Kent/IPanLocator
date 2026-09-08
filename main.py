import os
import requests
from dotenv import load_dotenv

load_dotenv()

TOKEN = os.getenv("IPINFO_TOKEN")

if not TOKEN:
    raise RuntimeError("IPINFO_TOKEN is not configured")

url = "https://api.ipinfo.io/lite/me"

response = requests.get(
    url,
    params={"token": TOKEN},
    timeout=10
)

response.raise_for_status()

data = response.json()

print(data)