import React from "react";
import { Card } from "./Card";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";
import { BsFillLightningChargeFill } from "react-icons/bs";

export const Cards = () => {
  const thingsIdo = [
    {
      Icon: <FiEdit2 color="#737373" size={20} />,
      title: "UI & UX",
      description:
        "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    },

    {
      Icon: <AiOutlineMobile color="#737373" size={20} />,
      title: "Web & Mobile App",
      description:
        "Transforming ideas into exceptional web and mobile app experiences.",
    },
    {
      Icon: <BsFillLightningChargeFill color="#737373" size={20} />,
      title: "Development",
      description:
        "Bringing your vision to life with latest technology and design trends.",
    },
  ];
  return (
    <div className="mt-20 flex flex-col items-center">
      <h1 className="text-4xl w-2/3 text-center mt-2 bg-gradient-to-r bg-clip-text text-transparent from-white to-secondary">
        Collaborate with brands and agencies to create impactful results.
      </h1>
      <div className="grid grid-flow-col grid-rows-3 md:grid-rows-1 mt-5 gap-4 w-fit">
        {thingsIdo.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
