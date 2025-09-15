"use client";
import React from "react";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialCard = ({ text, image, name, role }: Testimonial) => {
  return (
    <div className="p-8 rounded-3xl bg-white border border-gray-lighter shadow-lg shadow-gray-lighter max-w-xs w-full">
      <div>{text}</div>
      <div className="flex items-center gap-2 mt-5">
        <img
          width={40}
          height={40}
          src={image}
          alt={name}
          className="h-10 w-10 rounded-full"
        />
        <div className="flex flex-col">
          <div className="font-medium tracking-tight leading-5">{name}</div>
          <div className="leading-5 opacity-60 tracking-tight text-gray-dark">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
};
