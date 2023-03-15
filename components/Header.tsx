import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import Me from "../public/Image.png";

export const Header = () => {
  return (
    <div className="mt-14 flex flex-col items-center w-2/3">
      <div className="bg-[#BEBEBE] w-36 h-36 rounded-full flex justify-center items-center">
        <Image src={Me} alt="Me!" className="w-full h-full mr-2 mt-4" />
      </div>
      <h4 className="mt-4 ml-2 text-[#7A7A7A]">
        {"Hi, i'm Majed"} <span className="wave">👋</span>
      </h4>
      <h1 className="text-6xl text-center mt-2 bg-gradient-to-r bg-clip-text text-transparent from-white to-secondary">
        Building digital products, brands, and experience.
      </h1>
      <button className="bg-primary px-6 py-4 flex items-center hover:scale-105 active:scale-95 transition-all font-bold cursor-pointer rounded-md mt-4 hover:text-activeColor text-secondary">
        <p className="mr-2">Download Resume</p>
        <HiOutlineDownload />
      </button>
    </div>
  );
};
