import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    title: "Smartwatch Series X",
    subtitle: "Stay connected on the go",
    price: "$129.99",
    image: "/assets/earbuds1.jpg",
    category: "Smartwatch",
  },
  {
    id: 2,
    title: "Noise Buds Pro",
    subtitle: "Crystal clear sound",
    price: "$79.99",
    image: "/assets/earbuds2.jpg",
    category: "Earbuds",
  },
  {
    id: 3,
    title: "SnapCam 4K",
    subtitle: "Capture every moment",
    price: "$199.99",
    image: "/assets/earbuds3.jpg",
    category: "Camera",
  },
];

const HomeCard = () => {
  return (
    <div className="section-padding-x py-6 lg:py-12">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Future Products
      </h1>
      <p className="text-lg md:text-xl text-center text-muted max-w-2xl mx-auto mb-10">
        Explore the latest smartwatches, earbuds, and gadgets at unbeatable
        prices.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <div className="w-full h-56 relative mb-4 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="contain"
                className="rounded-lg w-full hover:scale-105 transform transition-all duration-300 ease-in-out"
              />
            </div>

            <h2 className="text-xl font-semibold mb-1">{product.title}</h2>
            <p className="text-muted mb-2">{product.subtitle}</p>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-lg font-bold mb-4 text-primary">
                {product.price}
              </p>
              <span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>

            <button className="bg-black/80 text-white px-4 py-2 rounded-xl border border-orange-500 font-medium hover:bg-orange-500 transition cursor-pointer">
              See Details
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-black/80 text-white px-8 py-2 rounded-xl border border-orange-500 font-medium hover:bg-orange-500 transition cursor-pointer">
          See More
        </button>
      </div>
    </div>
  );
};

export default HomeCard;
