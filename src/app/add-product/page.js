"use client";

import { addProducts } from "@/lib/redux/features/ProductSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const AddProductForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // 🔄 Upload + Submit Combined Handler
  const onSubmit = async (data) => {
    setIsLoading(true);
    let imageUrl = "";

    try {
      // ✅ Upload image if exists
      if (data.imageFile && data.imageFile.length > 0) {
        const formData = new FormData();
        formData.append("image", data.imageFile[0]);

        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=27a5fca24da89d48f496cddd1dd05cc4`,
          {
            method: "POST",
            body: formData,
          }
        );

        const imgData = await res.json();
        if (imgData.success) {
          imageUrl = imgData.data.url;
        } else {
          toast.error("Image upload failed");
          setIsLoading(false);
          return;
        }
      }

      const { imageFile, ...rest } = data;

      const finalData = {
        id: Date.now(),
        ...rest,
        image: imageUrl,
        createdAt: new Date().toISOString(),
      };

      dispatch(addProducts(finalData));
      toast.success("Product added successfully!");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }

    setIsLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-[#2f3e57] via-[#223153] to-[#1e293b]">
      <div className="section-padding-x py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">
          Add New Product
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-white dark:bg-slate-800 p-8 rounded-xl shadow-lg grid gap-6"
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
              <label className="block text-sm font-medium mb-1">
                Sub Title
              </label>
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
              <label className="block text-sm font-medium mb-1">
                Product Image
              </label>
              <input
                type="file"
                accept="image/*"
                {...register("imageFile")}
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
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              placeholder="Write a short product description..."
              {...register("description")}
              className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500 min-h-[120px]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
                Adding...
              </>
            ) : (
              "Submit Product"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
