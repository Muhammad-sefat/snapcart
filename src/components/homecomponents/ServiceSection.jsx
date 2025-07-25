"use client";
import serviceData from "@/lib/ServiceData";
import React from "react";

const ServiceSection = () => {
  return (
    <div>
      <section className="w-full py-16 px-4 md:px-16">
        <div className="space-y-16">
          {serviceData.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col-reverse md:flex-row items-center justify-between gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Left Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-xl shadow-md"
                />
              </div>

              {/* Right Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.subtitle}</p>
                <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all cursor-pointer">
                  {item.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;
