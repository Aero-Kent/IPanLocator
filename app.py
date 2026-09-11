import os

import requests
from dotenv import load_dotenv
from flask import Flask, jsonify, render_template

load_dotenv()

TOKEN = os.getenv("IPINFO_TOKEN")

app = Flask(__name__)

IPINFO_URL = "https://api.ipinfo.io/lite/me"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/lookup")
def lookup():
    if not TOKEN:
        return jsonify({"error": "IPINFO_TOKEN is not configured on the server."}), 500

    try:
        response = requests.get(IPINFO_URL, params={"token": TOKEN}, timeout=10)
        response.raise_for_status()
    except requests.exceptions.Timeout:
        return jsonify({"error": "The request to ipinfo.io timed out."}), 504
    except requests.exceptions.HTTPError:
        return jsonify({
            "error": f"ipinfo.io returned an error (status {response.status_code})."
        }), 502
    except requests.exceptions.RequestException:
        return jsonify({"error": "Could not reach ipinfo.io."}), 502

    return jsonify(response.json())


if __name__ == "__main__":
    app.run(debug=True, port=5000)
