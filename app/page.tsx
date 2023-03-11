"use client";

import { motion } from "framer-motion";

const transition = { duration: 1.2, ease: [0.6, 0.01, 0.02, 0.9] };

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col px-2">
      <div className="h-full w-full blur-md opacity-20 bg-white bg-gradient-radial absolute -z-10" />
      <div className="flex flex-col justify-center md:items-start items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex items-center justify-center md:justify-start"
        >
          <h1 className="font-bold text-sm md:text-md text-gray-400">
            Majed Al-Otaibi
          </h1>
          <span className="w-10 bg-gray-400 h-[2px] mx-2 rounded-lg" />
          <h1 className="font-bold text-sm md:text-md text-gray-400">
            Software Engineer
          </h1>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
          className="font-semibold text-lg md:text-2xl text-center"
        >
          Software engineering mainly focus on build magical things! ✨
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.4 }}
        >
          <motion.button className="bg-white hover:bg-black transition-all hover:text-white hover:scale-110 active:scale-95 p-1 px-2 rounded-lg border-black  font-bold border-[2px] hover:shadow-lg">
            Download Cv
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
}
