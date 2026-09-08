# IPv4-IPv6-Address-Application

Project Activity under DevOps (Developing Application and Automation)

## Overview

A Python application that retrieves and displays the public IP address and its associated network information (ASN, ISP, country, continent) using the [ipinfo.io](https://ipinfo.io) API.

## Features

- Fetches current public IP address details via the ipinfo.io Lite API
- Uses an `IPINFO_TOKEN` from a `.env` file for API authentication
- Outputs IP, ASN, ISP name/domain, country, and continent

## Requirements

- Python 3.12+
- An [ipinfo.io](https://ipinfo.io) API token

## Setup

1. Clone the repository and navigate to the project directory.

2. Create a virtual environment:

   ```powershell
   python -m venv venv
   ```

3. Activate the virtual environment:

   ```powershell
   .\venv\Scripts\Activate.ps1
   ```

4. Install the dependencies:

   ```powershell
   python -m pip install -r requirements.txt
   ```

5. Configure your API token. Create a `.env` file in the project root with:

   ```
   IPINFO_TOKEN=your_token_here
   ```

## Usage

Run the application:

```powershell
python main.py
```

Example output:

```json
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

## Project Structure

```
IPv4-IPv6-Address-Application/
├── main.py           # Main application entry point
├── requirements.txt  # Python dependencies
├── .env              # Environment variables (API token) - gitignored
├── .gitignore
├── LICENSE           # MIT License
└── README.md
```

## License

This project is licensed under the [MIT License](LICENSE).
