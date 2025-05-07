import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  id: "",
};
export const updateModalSlice = createSlice({
  name: "updateModal",
  initialState,
  reducers: {
    openUmodel: (state, action) => {
      state.id = action.payload;
    },
    closeUmodal: (state) => {
      state.value = false;
    },
  },
});

export const { openUmodel, closeUmodal } = updateModalSlice.actions;
export default updateModalSlice.reducer;
