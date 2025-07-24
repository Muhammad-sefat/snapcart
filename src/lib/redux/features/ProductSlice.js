import { createSlice } from "@reduxjs/toolkit";

const initialProductState = {
  product: [],
  status: "idle",
  error: null,
};

const ProductSlice = createSlice({
  name: "products",
  initialState: initialProductState,
  reducers: {
    addProducts: (state, action) => {
      state.product.push(action.payload);
    },
  },
});

export const { addProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
