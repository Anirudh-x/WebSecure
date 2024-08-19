import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaClockRotateLeft } from "react-icons/fa6";
import {
  MdManageAccounts,
  MdLogout,
} from "react-icons/md";
import { PiDownloadSimpleBold } from "react-icons/pi";

const Navbar = ({ setSidebar, sidebar }) => {

  return (
    <>
      <div>
        <div className="flex items-center content-center justify-between h-20 w-full p-4 box-border backdrop-blur-md bg-opacity-5 fixed top-0 shadow-2xl z-[99]">

          {/* Profile Icon */}
          <CgProfile className="h-7 w-7 cursor-pointer hover:text-orange-200" onClick={() => setSidebar(!sidebar)} />


          {/* Navbar */}
          <nav className="flex gap-10 items-center pr-10">
            <ul className="hover:text-orange-200">
              <Link to="/">Home</Link>
            </ul>
            <ul className="hover:text-orange-200">
              <Link to="/tools">Tools</Link>
            </ul>
            <ul className="hover:text-orange-200">
              <Link to="/technology">Technologies Used</Link>
            </ul>
            <ul className="hover:text-orange-200">
              <Link to="/contact">Contact Us</Link>
            </ul>

          </nav>

        </div>
      </div>
    </>
  );
};

export default Navbar;
