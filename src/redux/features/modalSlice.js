import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};
export const modelSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    addshow: (state) => {
      state.value = true;
    },
    closemodal: (state) => {
      state.value = false;
    },
  },
});

export const { addshow, closemodal } = modelSlice.actions;
export default modelSlice.reducer;
