from flask import Blueprint, request, jsonify
import requests

ipgeolocation_bp = Blueprint('ipgeolocation', __name__)

def get_ip_geolocation(ip_address, api_key):
    url = f"https://api.ip2location.io/?key={api_key}&ip={ip_address}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return {
            "ip": data.get("ip", "N/A"),
            "hostname": data.get("hostname", "N/A"),
            "city": data.get("city_name", "N/A"),
            "region": data.get("region_name", "N/A"),
            "country": data.get("country_name", "N/A"),
            "latitude": data.get("latitude", "N/A"),
            "longitude": data.get("longitude", "N/A")
        }
    return None

def get_exact_location(latitude, longitude):
    url = f"https://nominatim.openstreetmap.org/reverse?format=json&lat={latitude}&lon={longitude}&zoom=18"
    headers = {'User-Agent': 'WebSecure Tool'}
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        data = response.json()
        return data.get("display_name", "N/A")
    except requests.RequestException:
        return None

@ipgeolocation_bp.route('/get-geolocation', methods=['POST'])
def get_geolocation():
    data = request.json
    ip_address = data.get('ip')
    api_key = "61F2725F4340067AD7054F33292DC985"  # Replace with your IP2Location API key
    location_info = get_ip_geolocation(ip_address, api_key)
    if location_info:
        latitude = location_info.get("latitude")
        longitude = location_info.get("longitude")
        if latitude != "N/A" and longitude != "N/A":
            location_info["exact_location"] = get_exact_location(latitude, longitude)
        return jsonify(location_info)
    return jsonify({"error": "Unable to fetch data"}), 400
