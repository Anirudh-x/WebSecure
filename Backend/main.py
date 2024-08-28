from flask import Flask
from flask_cors import CORS
from ipresolver_api import ipresolver_bp
from network_scanner_api import network_scanner_bp
from ipgeolocation_api import ipgeolocation_bp

app = Flask(__name__)
CORS(app)  # This will allow all cross-origin requests

# Register Blueprints
app.register_blueprint(ipresolver_bp)
app.register_blueprint(network_scanner_bp)
app.register_blueprint(ipgeolocation_bp)

if __name__ == "__main__":
    app.run(debug=True)
