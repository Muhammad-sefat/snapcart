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
    <div className="section-padding-x py-12 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Add New Product</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <input
          type="text"
          placeholder="Product Title"
          className="border p-3 rounded"
          {...register("title", { required: true })}
        />
        <input
          type="text"
          placeholder="Subtitle"
          className="border p-3 rounded"
          {...register("subtitle")}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="border p-3 rounded"
          {...register("image")}
        />
        <input
          type="text"
          placeholder="Price"
          className="border p-3 rounded"
          {...register("price", { required: true })}
        />
        <input
          type="text"
          placeholder="Category"
          className="border p-3 rounded"
          {...register("category", { required: true })}
        />
        <textarea
          placeholder="Long Description"
          className="border p-3 rounded h-32"
          {...register("description")}
        />
        <input
          type="text"
          placeholder="Stock Count"
          className="border p-3 rounded"
          {...register("stock")}
        />
        <input
          type="text"
          placeholder="Brand Name"
          className="border p-3 rounded"
          {...register("brand")}
        />

        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded-md font-semibold"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
