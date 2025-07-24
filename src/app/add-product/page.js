"use client";

import React from "react";
import { useForm } from "react-hook-form";

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="section-padding-x py-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">
        Add New Product
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-white dark:bg-slate-800 p-6 rounded-xl shadow-lg grid gap-6"
      >
        {/* Title + Subtitle */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              placeholder="Product Title"
              {...register("title", { required: "Title is required" })}
              className={`w-full p-2 text-sm border rounded-lg outline-none focus:border-orange-500 ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.title && (
              <p className="text-sm text-red-500 mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Sub Title</label>
            <input
              type="text"
              placeholder="Product Sub Title"
              {...register("subtitle")}
              className="w-full p-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {/* Image, Price, Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="text"
              placeholder="https://..."
              {...register("image")}
              className="w-full p-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="text"
              placeholder="$199"
              {...register("price", { required: "Price is required" })}
              className={`w-full p-2 text-sm border rounded-lg outline-none focus:border-orange-500 ${
                errors.price ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.price && (
              <p className="text-sm text-red-500 mt-1">
                {errors.price.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <input
              type="text"
              placeholder="Smartphone"
              {...register("category", { required: "Category is required" })}
              className={`w-full p-2 text-sm border rounded-lg outline-none focus:border-orange-500 ${
                errors.category ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.category && (
              <p className="text-sm text-red-500 mt-1">
                {errors.category.message}
              </p>
            )}
          </div>
        </div>

        {/* Brand, Stock */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Stock Count
            </label>
            <input
              type="text"
              placeholder="e.g. 100"
              {...register("stock")}
              className="w-full p-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Brand</label>
            <input
              type="text"
              placeholder="Brand Name"
              {...register("brand")}
              className="w-full p-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            placeholder="Write a short product description..."
            {...register("description")}
            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500 min-h-[120px]"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all cursor-pointer"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
