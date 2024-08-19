import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col justify-end backdrop-blur-md">
      <div className="flex justify-center items-center pt-10 gap-3 ">
        <hr className="w-96" />
        <FaGithub className="h-7 w-7" />
        <FaLinkedinIn className="h-7 w-7" />
        <FaXTwitter className="h-7 w-7" />
        <FaFacebookF className="h-7 w-7" />
        <FaInstagram className="h-7 w-7" />
        <FaYoutube className="h-7 w-7" />
        <hr className="w-96" />
      </div>

      <div className="flex flex-col items-center p-5 gap-3">
        <h2><strong>WebSecure</strong></h2>
        <p>Copyright &#169; WebSecure</p>
        <p>
          <strong>
            Legal Stuff | Privacy Policy | Security | Website Assessibility |
            Manage Cookies
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;
