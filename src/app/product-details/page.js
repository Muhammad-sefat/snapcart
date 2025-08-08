/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const [product, setProduct] = useState(null);
  console.log(product);

  useEffect(() => {
    if (productId) {
      const stored = localStorage.getItem("products");
      if (stored) {
        const parsed = JSON.parse(stored);
        const filtered = parsed.find(
          (product) => product.id === Number(productId)
        );
        setProduct(filtered);
      }
    }
  }, [productId]);
  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">Loading or product not found...</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">
        {/* Product Image Section */}
        <div className="md:w-1/2 p-8 flex items-center justify-center bg-gray-50">
          <div className="relative w-full h-96">
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="contain"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="md:w-1/2 p-8 md:p-12 space-y-6">
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-medium px-4 py-1.5 rounded-full mb-2">
            {product.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            {product.title}
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            {product.subtitle}
          </p>
          <div className="border-t border-gray-200 pt-6">
            <p className="text-3xl font-bold text-orange-600">
              ${product.price}
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed text-base">
            {product.description}
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>
              **Stock:
              <span className="font-semibold text-gray-900 ml-1">
                {product.stock}
              </span>
            </span>
            <span>
              **Brand:
              <span className="font-semibold text-gray-900 ml-1">
                {product.brand}
              </span>
            </span>
          </div>

          <Link
            href="/add-product"
            className="w-full bg-orange-500 text-white  cursor-pointer font-bold py-3 px-6 rounded-xl hover:bg-orange-600 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
