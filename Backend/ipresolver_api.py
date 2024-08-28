from flask import Blueprint, request, jsonify
import dns.resolver

ipresolver_bp = Blueprint('ipresolver', __name__)

def get_ip_addresses(domain):
    ipv4_addresses = []
    ipv6_addresses = []

    try:
        # Get IPv4 addresses (A records)
        answers = dns.resolver.resolve(domain, 'A')
        for answer in answers:
            ipv4_addresses.append(answer.to_text())
    except dns.resolver.NoAnswer:
        pass
    except Exception as e:
        return {"error": f"Error retrieving A records: {str(e)}"}

    try:
        # Get IPv6 addresses (AAAA records)
        answers = dns.resolver.resolve(domain, 'AAAA')
        for answer in answers:
            ipv6_addresses.append(answer.to_text())
    except dns.resolver.NoAnswer:
        pass
    except Exception as e:
        return {"error": f"Error retrieving AAAA records: {str(e)}"}

    return {"ipv4": ipv4_addresses, "ipv6": ipv6_addresses}

@ipresolver_bp.route('/resolve', methods=['POST'])
def resolve():
    data = request.json
    domain = data.get('domain')
    if not domain:
        return jsonify({"error": "No domain provided"}), 400

    result = get_ip_addresses(domain)
    return jsonify(result)
