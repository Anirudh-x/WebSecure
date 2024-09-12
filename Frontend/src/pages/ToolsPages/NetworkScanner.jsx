// src/NetworkScanner.js
import React, { useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

const NetworkScanner = () => {
  const [target, setTarget] = useState("");
  const [scanResult, setScanResult] = useState(null);
  const [error, setError] = useState("");

  const handleScan = async () => {
    setError("");
    setScanResult(null);
    try {
      const response = await axios.post("http://127.0.0.1:5000/scan", {
        target,
      });
      setScanResult(response.data);
    } catch (err) {
      setError("An error occurred during the scan.");
    }
  };

  const renderScanResults = () => {
    if (!scanResult || !scanResult.scan) {
      return null;
    }

    return Object.entries(scanResult.scan).map(([host, details]) => (
      <div key={host}>
        <h3>Scan Report for {host}</h3>
        {details.osmatch ? (
          <div>
            <h4>Operating System:</h4>
            <ul>
              {details.osmatch.map((os, index) => (
                <li key={index}>
                  {os.name} (Accuracy: {os.accuracy}%)
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Operating System: Not detected</p>
        )}

        {details.tcp ? (
          <div>
            <h4>Open Ports and Services:</h4>
            <ul>
              {Object.entries(details.tcp).map(([port, portData]) => (
                <li key={port}>
                  Port: {port}, State: {portData.state}, Service:{" "}
                  {portData.name}, Product: {portData.product || "N/A"},
                  Version: {portData.version || "N/A"}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No open TCP ports detected.</p>
        )}
      </div>
    ));
  };

  return (
    <div className="text-white p-[10rem] rounded-[3rem] flex flex-col gap-5 backdrop-blur-lg bg-opacity-20 bg-orange-400 fixed left-[32rem] top-[7rem] z-[99]">
      <Link to="/tools" className="fixed top-[3rem] right-[4rem] text-2xl">
        x
      </Link>
      <div className="flex flex-col items-center gap-5">
        <h1>Network Scanner</h1>
        <input
          type="text"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="Enter domain or IP address"
          className="text-black text-center py-2 px-2 w-[13rem] rounded-md "
        />
        <button onClick={handleScan} className="border px-3 py-1">
          Scan
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <div className="border rounded-lg flex flex-col gap-2 p-4 ">
        {scanResult && (
          <div className="flex flex-col gap-3">
            <h2>Scan Results</h2>
            {renderScanResults()}
          </div>
        )}
      </div>
    </div>
  );
};

export default NetworkScanner;
