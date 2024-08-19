import React, { useState } from "react";
import { Link } from "react-router-dom";

const IPResolver = () => {
  const [domain, setDomain] = useState("");
  const [ips, setIps] = useState(null);

  const handleResolve = async () => {
    try {
      const response = await fetch("http://localhost:5000/resolve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ domain }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Received data:", data); // Log response data
        setIps({ ipv4: data.ipv4, ipv6: data.ipv6 });
      } else {
        console.error("Error resolving domain:", data.error);
        setIps({ ipv4: null, ipv6: null });
      }
    } catch (error) {
      console.error("Error resolving domain:", error);
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="w-[60%] pb-10 mb-16 flex flex-col items-center absolute bg-orange-400 bg-opacity-20 rounded-[5rem] backdrop-blur-md z-[8] box-border">
        <Link
          to="/tools"
          className="w-[100%] flex justify-end cursor-pointer font-semibold text-[18px] text-orange-300 ml-[-8rem]"
        >
          x
        </Link>

        <div className="flex flex-col gap-10 ">
          <h1 className="text-4xl">IP Resolver</h1>

          <div>
            <div className="flex flex-col gap-28">
              <ul className="flex gap-4">
                <p>Domain Name: </p>
                <input
                  type="text"
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="E.g. google.com"
                  className="rounded-md bg-orange-300 bg-opacity-20 text-center"
                />
              </ul>
              <button
                className="border h-16 rounded-3xl text-xl font-semibold hover:text-slate-900 hover:bg-white"
                onClick={handleResolve}
              >
                Run
              </button>
            </div>
            <hr className="mt-10" />

            {ips && (
              <div className="mt-4 flex flex-col items-center border-orange-300 rounded-3xl p-10 bg-orange-200 bg-opacity-20 border-2">
                <h2 className="text-2xl mb-4">Resolved IPs:</h2>
                <div className="flex gap-8">
                  <div>
                    <h3 className="mb-2">IPv4:</h3>
                    <ul>
                      {ips.ipv4 ? (
                        ips.ipv4.length > 0 ? (
                          ips.ipv4.map((ip, index) => <li key={index}>{ip}</li>)
                        ) : (
                          <li>No IPv4 addresses found.</li>
                        )
                      ) : (
                        <li>Loading...</li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2">IPv6:</h3>
                    <ul>
                      {ips.ipv6 ? (
                        ips.ipv6.length > 0 ? (
                          ips.ipv6.map((ip, index) => <li key={index}>{ip}</li>)
                        ) : (
                          <li>No IPv6 addresses found.</li>
                        )
                      ) : (
                        <li>Loading...</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPResolver;
