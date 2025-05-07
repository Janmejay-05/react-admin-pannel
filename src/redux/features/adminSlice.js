import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate } from "react-router-dom";

// import { data } from "react-router-dom";

const api = "https://data-server-hzpo.onrender.com/admin";

export const getdata = createAsyncThunk("getdata", async () => {
  const res = await axios.get(api);
  return res.data;
});

export const AddData = createAsyncThunk("addData", async (obj) => {
  let bool = true;
  const res = await axios.get(api);
  res.data.forEach((e) => {
    if (obj.username === e.username) {
      bool = false;
    }
  });

  if (bool === true) {
    const response = await axios.post(api, obj);
    return response.data;
  } else {
    alert("username already exist");
    return;
  }
});

const initialState = {
  isAuth: false,
  data: [],
  boolean: true,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    auth: (state, action) => {
      let bool = false;
      state.data.forEach((e) => {
        if (
          action.payload.user === e.username &&
          action.payload.password === e.password
        ) {
          bool = true;
        }

        // console.log(bool);
      });

      console.log(bool);

      if (bool == true) {
        state.isAuth = true;
        alert("successfully logd in");
        // return <Navigate to={"/admin"} />;
      } else {
        alert("invalid username or password");
        return;
      }
    },
    logout: (state) => {
      state.isAuth = false;
    },
    openpage: (state) => {
      state.boolean = false;
    },
    closepage: (state) => {
      state.boolean = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getdata.fulfilled, (state, action) => {
      console.log("data", action.payload);
      state.data = [...action.payload];
    });
    builder.addCase(AddData.fulfilled, (state, action) => {
      console.log("add", action.payload);
      state.data = [...state.data, action.payload];
      console.log("data updated", state.data);
    });
  },
});

export const { auth, logout, openpage, closepage } = adminSlice.actions;
export default adminSlice.reducer;
