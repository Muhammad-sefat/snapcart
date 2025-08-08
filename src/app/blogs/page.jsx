"use client";
import React, { useState, useRef } from "react";

const Page = () => {
  const data = [
    {
      number: 1,
      title: "Kickoff Meeting",
      subtitle: "Project goals & plan",
      time: "09:15 AM",
    },
    {
      number: 2,
      title: "Design Phase",
      subtitle: "Wireframes & mockups",
      time: "11:00 AM",
    },
    {
      number: 3,
      title: "Development",
      subtitle: "Building core features",
      time: "02:00 PM",
    },
    {
      number: 4,
      title: "Testing",
      subtitle: "QA & bug fixes",
      time: "04:00 PM",
    },
    {
      number: 5,
      title: "Launch",
      subtitle: "Deploy to production",
      time: "06:00 PM",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef(null);
  const numberRef = useRef(null);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const height = e.target.clientHeight;
    const index = Math.round(scrollTop / height);
    setActiveIndex(index);

    // Sync number column scroll - show only 2-3 numbers at a time
    if (numberRef.current) {
      numberRef.current.scrollTo({
        top: index * 80, // 80px per item height
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="flex bg-gray-100"
      style={{
        height: "100vh",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Numbers Column */}
      <div
        ref={numberRef}
        className="flex flex-col items-center py-10 relative"
        style={{
          width: "25%",
          height: "100vh",
          overflowY: "auto",
          overflowX: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Hide scrollbar for webkit browsers */}
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {/* Add some top padding to center the first item */}
        <div style={{ height: "128px" }}></div>

        <div className="flex flex-col items-center transition-all duration-300">
          {data.map((item, index) => (
            <div
              key={index}
              className={`w-12 h-12 my-4 flex items-center justify-center rounded-full font-bold text-lg transition-all duration-300 ${
                activeIndex === index
                  ? "bg-orange-500 text-white shadow-lg scale-110"
                  : "bg-white text-orange-500 border-2 border-orange-500"
              }`}
            >
              {item.number}
            </div>
          ))}
        </div>

        {/* Add some bottom padding */}
        <div style={{ height: "128px" }}></div>
      </div>

      {/* Content Column */}
      <div
        ref={contentRef}
        className="scroll-snap-y scroll-snap-mandatory"
        style={{
          width: "75%",
          height: "100vh",
          overflowY: "auto",
          scrollSnapType: "y mandatory",
        }}
        onScroll={handleScroll}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-10"
            style={{
              height: "100vh",
              scrollSnapAlign: "center",
            }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center border-t-8 border-orange-500">
              <h2 className="text-3xl font-bold text-orange-500 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-4">{item.subtitle}</p>
              <span className="text-sm font-semibold text-gray-500">
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
