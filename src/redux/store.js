import { configureStore } from "@reduxjs/toolkit";
import product from "./features/productSlice";
import modal from "./features/modalSlice";
import updateModal from "./features/updateModalSlice";
import isauth from "./features/adminSlice";

export const store = configureStore({
  reducer: {
    data: product,
    addproduct: modal,
    updateproduct: updateModal,
    auth: isauth,
  },
});
