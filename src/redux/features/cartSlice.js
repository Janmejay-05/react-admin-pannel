import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addcart: (state, action) => {
      console.log(action.payload);
      state.value = [action.payload, ...state.value];
    },
    deleteCart: (state, action) => {
      console.log(action.payload);
      state.value = state.value.filter(
        (item, index) => index != action.payload
      );
    },
    incqt: (state, action) => {
      console.log("add id", action.payload);
      state.value = state.value.map((e, index) =>
        index === action.payload ? { ...e, qt: e.qt + 1 } : e
      );

      console.log("tempinc", state.value);
    },
    decqt: (state, action) => {
      console.log("del id", action.payload);
      state.value = state.value.map((e, index) =>
        index === action.payload ? { ...e, qt: e.qt - 1 } : e
      );

      console.log("tempdec", state.value);
    },
  },
});

export default cartSlice.reducer;
export const { addcart, deleteCart, incqt, decqt } = cartSlice.actions;
