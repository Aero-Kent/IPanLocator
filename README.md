# IPanLocator

Project Activity under DevOps (Developing Application and Automation)

## Overview

A Python application that retrieves and displays the public IP address and its associated network information (ASN, ISP, country, continent) using the [ipinfo.io](https://ipinfo.io/) API. Comes with both a command-line script and a browser-based UI.

## Features

* Fetches current public IP address details via the ipinfo.io Lite API
* Uses an `IPINFO_TOKEN` from a `.env` file for API authentication
* Outputs IP, ASN, ISP name/domain, country, and continent
* Optional web UI (Flask) that displays the same data with a live lookup

## Requirements

* Python 3.12+
* An [ipinfo.io](https://ipinfo.io/) API token

## Setup

1. Clone the repository and navigate to the project directory.
2. Create a virtual environment:

```
python -m venv venv
```

3. Activate the virtual environment:

```
.\venv\Scripts\Activate.ps1
```

4. Install the dependencies:

```
python -m pip install -r requirements.txt
```

5. Configure your API token. Create a `.env` file in the project root with:

```
IPINFO_TOKEN=your_token_here
```

## Usage

### Command line

Run the application:

```
python main.py
```

Example output:

```
{
  "ip": "136.158.10.254",
  "asn": "AS17639",
  "as_name": "Converge ICT Solutions Inc.",
  "as_domain": "convergeict.com",
  "country_code": "PH",
  "country": "Philippines",
  "continent_code": "AS",
  "continent": "Asia"
}
```

### Web UI

Run the Flask app:

```
python app.py
```

Then open `http://127.0.0.1:5000` in your browser. The page runs a lookup automatically on load and shows the IP address, ASN, ISP, provider domain, country, and continent, with a button to run the lookup again.

## Project Structure

```
IPanLocator/
├── main.py           # Command-line entry point
├── app.py            # Flask web UI entry point
├── templates/
│   └── index.html    # Web UI page
├── static/
│   ├── style.css      # Web UI styling
│   └── script.js       # Web UI client logic
├── requirements.txt  # Python dependencies
├── .env              # Environment variables (API token) - gitignored
├── .gitignore
├── LICENSE           # MIT License
└── README.md
```

## License

MIT
