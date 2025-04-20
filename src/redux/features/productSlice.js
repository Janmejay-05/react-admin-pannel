import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:3005/product";
export const dataApi = createAsyncThunk("dataApi", async (page) => {
  const res = await axios.get(api + `?_page=${page}&_per_page=4`);
  // console.log(res.data.data);
  return res.data.data;
});

export const addData = createAsyncThunk("addData", async (obj) => {
  const res = await axios.post(api, obj);
  console.log("response", res.data);
  return res.data;
});

export const deleteData = createAsyncThunk("deleteData", async (id) => {
  const res = await axios.delete(api + `/${id}`);
  return res.data;
});
export const updateData = createAsyncThunk("updateData", async (obj) => {
  const res = await axios.put(api + `/${obj.id}`, obj);
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
    builder.addCase(deleteData.fulfilled, (state, action) => {
      console.log("delete", action.payload);
    });
    builder.addCase(updateData.fulfilled, (State, action) => {
      console.log("Update", action.payload);
    });
  },
});

// Action creators are generated for each case reducer function

export default productSlice.reducer;
