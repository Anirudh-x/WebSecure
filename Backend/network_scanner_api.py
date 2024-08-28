from flask import Blueprint, request, jsonify
import nmap
import socket

network_scanner_bp = Blueprint('network_scanner', __name__)

def resolve_domain_to_ip(domain):
    try:
        ip_address = socket.gethostbyname(domain)
        return ip_address
    except socket.gaierror as e:
        return None

def scan_network(target):
    nm = nmap.PortScanner()
    scan_result = nm.scan(target, arguments='-O -sV')
    return scan_result

@network_scanner_bp.route('/scan', methods=['POST'])
def scan():
    data = request.json
    target = data.get('target')
    if not target:
        return jsonify({"error": "No target provided"}), 400

    # Resolve domain to IP if necessary
    if not target.replace('.', '').isdigit():
        target_ip = resolve_domain_to_ip(target)
        if target_ip:
            target = target_ip
        else:
            return jsonify({"error": "Failed to resolve domain"}), 400

    # Perform the scan
    scan_result = scan_network(target)
    return jsonify(scan_result)
