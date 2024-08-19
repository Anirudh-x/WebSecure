import socket

def resolve_ip_addresses(domain):
    try:
        # Get all the address info for the domain
        results = socket.getaddrinfo(domain, None, proto=socket.IPPROTO_TCP)

        ipv4_addresses = set()
        ipv6_addresses = set()

        for result in results:
            ip_address = result[4][0]
            # Check if the IP is IPv4 or IPv6 and add to the corresponding set
            if ':' in ip_address:
                ipv6_addresses.add(ip_address)
            else:
                ipv4_addresses.add(ip_address)

    except socket.gaierror as e:
        print(f"Error resolving {domain}: {e}")
        return None, None

    return list(ipv4_addresses), list(ipv6_addresses)
