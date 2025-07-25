import { createSlice } from "@reduxjs/toolkit";

const initialProductState = {
  product:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("products") || "[]")
      : [],
  status: "idle",
  error: null,
};

const ProductSlice = createSlice({
  name: "products",
  initialState: initialProductState,
  reducers: {
    addProducts: (state, action) => {
      state.product.push(action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("products", JSON.stringify(state.product));
      }
    },
  },
});

export const { addProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
