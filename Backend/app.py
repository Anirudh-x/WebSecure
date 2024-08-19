from flask import Flask, request, jsonify
from flask_cors import CORS
from ipresolver import resolve_ip_addresses

app = Flask(__name__)
CORS(app)  # Allow all origins for development

@app.route('/resolve', methods=['POST'])
def resolve():
    data = request.json
    domain = data.get('domain')

    if not domain:
        return jsonify({"error": "Domain is required"}), 400

    ipv4, ipv6 = resolve_ip_addresses(domain)

    if ipv4 is None and ipv6 is None:
        return jsonify({"error": f"Error resolving {domain}"}), 500

    return jsonify({"ipv4": ipv4, "ipv6": ipv6})

if __name__ == "__main__":
    app.run(debug=True)
