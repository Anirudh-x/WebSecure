import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { MdOutlineDns } from "react-icons/md";

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

        <Outlet />
      </div>
    </div>
  );
};

export default Tools;
