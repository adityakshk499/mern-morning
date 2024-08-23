import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" flex p-4 justify-between items-center">
      <h1 className="text-[20px] font-black cursor-pointer">
        logi<span className="text-blue-800">Tracker </span>
      </h1>
      <div className="flex text-[30px] gap-3">
        <FaWhatsapp color="green" />
        <FaFacebook color="blue" />
        <FaYoutube color="red" />
        <FaGithub color="black" />
      </div>
    </div>
  );
};

export default Footer;
