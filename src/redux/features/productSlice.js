import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:3005/product";
export const dataApi = createAsyncThunk("dataApi", async (page) => {
  const res = await axios.get(api + `?_page=${page}&_per_page=5`);
  // console.log(res.data.data);
  return res.data.data;
});

export const addData = createAsyncThunk("addData", async (obj) => {
  const res = await axios.post(api, obj);
  console.log("response", res.data);
  return res.data;
});

const initialState = {
  value: [],
};

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(dataApi.fulfilled, (state, action) => {
      // console.log("action", action.payload);

      state.value = [...action.payload];
      // console.log("state", state.value);
    });

    builder.addCase(addData.fulfilled, (state, action) => {
      console.log("action", action.payload);
    });
  },
});

// Action creators are generated for each case reducer function

export default productSlice.reducer;
