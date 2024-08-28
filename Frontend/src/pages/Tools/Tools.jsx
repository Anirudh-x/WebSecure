import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { MdOutlineDns } from "react-icons/md";
import { LuNetwork } from "react-icons/lu";
import { FaLocationCrosshairs } from "react-icons/fa6";

const Tools = () => {
  const [funPage, setFunPage] = useState(false);

  return (
    <div className="w-full h-full py-32 flex justify-center">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 px-20">
        
        <div className="border w-[17rem] rounded-xl shadow-2xl flex flex-col items-center text-center gap-5 p-10 backdrop-blur-sm justify-between">
          <p>
            <MdOutlineDns />
          </p>
          <h1 className="w-[12rem] text-[22px] font-semibold">
            DNS To IP Resolver
          </h1>
          <p className="w-[12rem]">Resolves IP address from Domain Name</p>
          <Link
            to="/tools/ip"
            className="border w-[7rem] h-[2.3rem] content-center rounded-[20px] bg-white text-black font-bold"
          >
            Use
          </Link>
        </div>

        <div className="border w-[17rem] rounded-xl shadow-2xl flex flex-col items-center text-center gap-5 p-10 backdrop-blur-sm justify-between">
          <p>
            <LuNetwork />
          </p>
          <h1 className="w-[12rem] text-[22px] font-semibold">
            Network Scanner
          </h1>
          <p className="w-[12rem]">Scans Network including ports, running services and OS</p>
          <Link
            to="/tools/netscan"
            className="border w-[7rem] h-[2.3rem] content-center rounded-[20px] bg-white text-black font-bold"
          >
            Use
          </Link>
        </div>
        
        <div className="border w-[17rem] rounded-xl shadow-2xl flex flex-col items-center text-center gap-5 p-10 backdrop-blur-sm justify-between">
          <p>
            <FaLocationCrosshairs />
          </p>
          <h1 className="w-[12rem] text-[22px] font-semibold">
            IP Geolocation
          </h1>
          <p className="w-[12rem]">Gives the exact location of that ip server</p>
          <Link
            to="/tools/location"
            className="border w-[7rem] h-[2.3rem] content-center rounded-[20px] bg-white text-black font-bold"
          >
            Use
          </Link>
        </div>

      </div>
      <div className="fixed flex justify-center items-center w-[70%] h-[50%] z-[99]">
        <Outlet />
      </div>
    </div>
  );
};

export default Tools;
