import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";

//crated a store
const store = configureStore({
  reducer: {
    product: productSlice
  }
});

export default store;
