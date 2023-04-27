import { createSlice } from "@reduxjs/toolkit";

//created a slice
const productSlice = createSlice({
  name: "product",
  initialState: {
    value: {}
  },
  reducers: {
    addProduct: (state, action) => {
      state.value = action.payload.products;
    },
    updateProduct: (state, action) => {
      state.value = [...state.value, action.payload];
    }
  }
});

//exported reducer
export const {
  addProduct,
  updateProduct,
  deleteProduct
} = productSlice.actions;

//default export the slice
export default productSlice.reducer;
