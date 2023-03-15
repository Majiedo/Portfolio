import Image from "next/image";
import LogoNextJs from "../public/nextJsLogo.svg";
import NodeJs from "../public/nodejs.svg";
import Postgresql from "../public/postgresql.svg";
import Prisma from "../public/prisma.svg";
import React from "../public/react.svg";

export const Slider = () => {
  return (
    <div className="w-screen border-gray-500 border-opacity-10 border-y-[1px] bg-primary h-44 mt-20 p-8 flex justify-center px-2">
      <Image
        src={LogoNextJs}
        alt="Logo's"
        className="grayscale mr-10"
        height={200}
        width={200}
      />
      <Image
        src={NodeJs}
        alt="Logo's"
        className="grayscale mr-10"
        height={200}
        width={200}
      />
      <Image
        src={Postgresql}
        alt="Logo's"
        className="grayscale mr-10"
        height={200}
        width={200}
      />
      <Image
        src={Prisma}
        alt="Logo's"
        className="grayscale mr-10"
        height={200}
        width={200}
      />
      <Image
        src={React}
        alt="Logo's"
        className="grayscale mr-10"
        height={200}
        width={200}
      />
    </div>
  );
};
