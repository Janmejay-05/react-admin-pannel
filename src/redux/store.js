import { configureStore } from "@reduxjs/toolkit";
import product from "./features/productSlice";
import modal from "./features/modalSlice";

export const store = configureStore({
  reducer: {
    data: product,
    addproduct: modal,
  },
});
