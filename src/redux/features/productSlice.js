import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "https://data-server-hzpo.onrender.com/product";
// export const dataApi = createAsyncThunk("dataApi", async (page) => {
//   const res = await axios.get(api + `?_page=${page}&_per_page=4`);
//   // console.log(res.data.data);
//   return res.data.data;
// });
export const originalData = createAsyncThunk("originalData", async () => {
  const res = await axios.get(api);
  return res.data;
});

export const addData = createAsyncThunk("addData", async (obj) => {
  const res = await axios.post(api, obj);
  // console.log("response", res.data);
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
  original: [],
  searched: [],
  sorted: [],
  category: [],
};

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    search: (state, action) => {
      state.searched = state.category.filter((e) => {
        if (
          e.name
            .toLowerCase()
            .trim()
            .includes(action.payload.toLowerCase().trim())
        ) {
          return e;
        }
      });
      state.sorted = [...state.searched];
    },
    increase: (state) => {
      state.sorted = state.searched.sort((a, b) => a.price - b.price);
    },
    decrease: (state) => {
      state.sorted = state.searched.sort((a, b) => b.price - a.price);
    },
    catProduct: (state, action) => {
      if (action.payload == "All") {
        state.category = [...state.original];
        state.searched = [...state.category];
        state.category = [...state.searched];
        state.sorted = [...state.searched];
      } else {
        state.category = state.original.filter(
          (e) => action.payload.toLowerCase() === e.category.toLowerCase()
        );
        state.searched = [...state.category];
        state.sorted = [...state.searched];
      }
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(dataApi.fulfilled, (state, action) => {
    //   // console.log("action", action.payload);

    //   state.value = [...action.payload];
    //   // console.log("state", state.value);
    // });

    builder.addCase(addData.fulfilled, (state, action) => {
      state.original.push(action.payload);
      state.category = [...state.original];
      state.searched = [...state.category];
      state.sorted = [...state.searched];
    });
    builder.addCase(deleteData.fulfilled, (state, action) => {
      // console.log("delete", action.meta.arg);
      state.original = state.original.filter((e) => e.id !== action.meta.arg);
      state.category = [...state.original];
      state.searched = [...state.category];
      state.sorted = [...state.searched];
    });
    builder.addCase(updateData.fulfilled, (state, action) => {
      // console.log("update",action.payload);
      state.original = state.original.map((e) =>
        e.id == action.payload.id ? action.payload : e
      );
      state.category = [...state.original];
      state.searched = [...state.category];
      state.sorted = [...state.searched];
    });
    builder.addCase(originalData.fulfilled, (state, action) => {
      console.log("original", action.payload);
      state.original = [...action.payload];
      state.category = [...state.original];
      state.searched = [...state.category];
      state.sorted = [...state.searched];
    });
  },
});

// Action creators are generated for each case reducer function

export const { search, increase, decrease, catProduct } = productSlice.actions;

export default productSlice.reducer;
