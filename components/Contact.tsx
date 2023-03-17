import React from "react";
import { HiOutlineMail } from "react-icons/hi";

export const Contact = () => {
  return (
    <div className="mt-20 flex flex-col items-center w-full">
      <span className="w-full bg-gray-400 opacity-10 h-[1px] mb-10" />
      <h1 className="text-4xl w-2/3 md:w-2/6 text-center mt-2 bg-gradient-to-r bg-clip-text text-transparent from-white to-secondary">
        Tell me about your next project
      </h1>

      <a
        href="mailto:82qill@gmail.com"
        className="bg-primary px-6 py-4 flex items-center hover:scale-105 active:scale-95 transition-all font-bold cursor-pointer rounded-md mt-4 hover:text-activeColor text-secondary"
      >
        <p className="mr-2">Get In Touch</p>
        <HiOutlineMail size={15} color="#737373" />
      </a>
    </div>
  );
};
