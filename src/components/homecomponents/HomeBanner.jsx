import React from "react";

const HomeBanner = () => {
  return (
    <div className="relative w-full h-[80vh]">
      <img
        className="w-full h-full object-cover"
        src="/assets/banner.jpg"
        alt="Banner Image"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover the Future of Tech
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6">
          Explore the latest smartwatches, earbuds, and gadgets at unbeatable
          prices.
        </p>
        <button className="bg-black/50 hover:bg-orange-500 border border-orange-500 transition px-6 py-3 rounded-xl font-semibold text-white cursor-pointer">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
