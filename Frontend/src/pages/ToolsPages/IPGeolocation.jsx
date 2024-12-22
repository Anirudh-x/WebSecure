import React, { useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import loadingAnimation from "../../assets/loading.webm";

const IPGeolocation = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [locationInfo, setLocationInfo] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLocationInfo(null);
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/get-geolocation",
        { ip: ipAddress }
      );
      setLocationInfo(response.data);
    } catch (err) {
      setError("Error fetching geolocation information.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white p-[10rem] rounded-[3rem] flex flex-col gap-5 backdrop-blur-lg bg-opacity-20 bg-orange-400 absolute left-[32rem] top-[7rem] z-[99]">
      <Link to="/tools" className="fixed top-[3rem] right-[4rem] text-2xl">
        x
      </Link>
      <h1 className="text-3xl font-bold mb-6">IP Geolocation Tool</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-opacity-10 bg-orange-300 p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <input
            type="text"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            placeholder="Enter IP address"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 border font-semibold rounded-lg hover:bg-orange-400"
        >
          Get Geolocation
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {loading && (
        <div className="flex justify-center items-center my-4">
          <video className="w-32 h-32" autoPlay loop muted playsInline>
            <source src={loadingAnimation} type="video/webm" />
            Your browser does not support the WebM video format.
          </video>
        </div>
      )}
      {locationInfo && (
        <div className="mt-6 bg-opacity-10 bg-orange-300 p-4 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">
            IP Geolocation Information:
          </h2>
          <p>
            <strong>IP Address:</strong> {locationInfo.ip}
          </p>
          <p>
            <strong>Hostname:</strong> {locationInfo.hostname}
          </p>
          <p>
            <strong>City:</strong> {locationInfo.city}
          </p>
          <p>
            <strong>Region:</strong> {locationInfo.region}
          </p>
          <p>
            <strong>Country:</strong> {locationInfo.country}
          </p>
          <p>
            <strong>Latitude:</strong> {locationInfo.latitude}
          </p>
          <p>
            <strong>Longitude:</strong> {locationInfo.longitude}
          </p>
          {locationInfo.exact_location && (
            <p>
              <strong>Exact Location:</strong> {locationInfo.exact_location}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default IPGeolocation;
