"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const services = [
  {
    title: "Smartwatches",
    desc: "Stay connected and track your fitness goals with our latest range of smartwatches.",
    img: "/assets/service1.jpg",
  },
  {
    title: "Wireless Earbuds",
    desc: "Experience crystal-clear sound and wireless freedom with our premium earbuds.",
    img: "/assets/earbuds1.jpg",
  },
  {
    title: "Smart Home Gadgets",
    desc: "Upgrade your home with intelligent devices that bring automation to your fingertips.",
    img: "/assets/service.jpg",
  },
];

const AllServices = () => {
  return (
    <section className="w-full py-20 bg-orange-100 px-4">
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Our Featured Services
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Discover the tech essentials designed to elevate your everyday.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-item bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* 👇 Relative wrapper with fixed height */}
            <div className="relative w-full h-56">
              <Image
                src={service.img}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transform transition-all duration-300 ease-in-out"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllServices;
