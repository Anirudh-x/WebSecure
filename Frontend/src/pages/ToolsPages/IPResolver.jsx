// src/IPResolver.js
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const IPResolver = () => {
  const [domain, setDomain] = useState("");
  const [ipv4Addresses, setIpv4Addresses] = useState([]);
  const [ipv6Addresses, setIpv6Addresses] = useState([]);
  const [error, setError] = useState("");

  const handleResolve = async () => {
    setError("");
    setIpv4Addresses([]);
    setIpv6Addresses([]);
    try {
      const response = await axios.post("http://127.0.0.1:5000/resolve", {
        domain,
      });
      const { ipv4, ipv6, error } = response.data;
      if (error) {
        setError(error);
      } else {
        setIpv4Addresses(ipv4 || []);
        setIpv6Addresses(ipv6 || []);
      }
    } catch (err) {
      setError("An error occurred while resolving the domain.");
    }
  };

  return (
    <div className=" text-white p-[10rem] rounded-[3rem] flex flex-col gap-5 backdrop-blur-lg bg-opacity-20 bg-orange-400">
      <div className="flex flex-col items-center gap-5">
        <h1>IP Resolver</h1>
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Enter domain name"
          className="text-black text-center py-2 rounded-md "
        />
        <button onClick={handleResolve} className="border px-3 py-1">
          Resolve IP
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <div className="border rounded-lg flex flex-col gap-2 p-4 ">
        <div>
          <h3>IPv4 Addresses:</h3>
          <ul>
            {ipv4Addresses.map((ip, index) => (
              <li key={index}>{ip}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>IPv6 Addresses:</h3>
          <ul>
            {ipv6Addresses.map((ip, index) => (
              <li key={index}>{ip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IPResolver;
