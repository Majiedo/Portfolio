"use client";

import React, { useRef } from "react";

interface CardProps {
  Icon: JSX.Element;
  title: string;
  description: string;
}

export const Card = ({ Icon, title, description }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: any) => {
    const { currentTarget: target } = event;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    ref.current?.style.setProperty("--mouse-x", `${x}px`);
    ref.current?.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="bg-primary w-60 h-80 border-[0.1px] flex-col justify-end border-white border-opacity-10 rounded-md flex p-4 overflow-hidden relative group "
    >
      <div
        ref={ref}
        className="absolute h-full w-full card transition-opacity duration-500 opacity-0 group-hover:opacity-100 left-0 top-0"
      />
      <div className="mb-2">{Icon}</div>

      <h1 className="text-secondary text-lg mb-2">{title}</h1>
      <h2 className="text-secondary text-sm">{description}</h2>
    </div>
  );
};
