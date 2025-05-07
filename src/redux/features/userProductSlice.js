import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "https://data-server-hzpo.onrender.com/product";
const userapi = "https://data-server-hzpo.onrender.com/user";

export const userData = createAsyncThunk("userData", async () => {
  const res = await axios.get(api);
  return res.data;
});
export const userAuth = createAsyncThunk("userAuth", async () => {
  const res = await axios.get(userapi);
  return res.data;
});
export const addUser = createAsyncThunk("addUser", async (obj) => {
  let bool = true;
  const res = await axios.get(userapi);
  res.data.forEach((e) => {
    if (obj.username === e.username) {
      bool = false;
    }
  });

  console.log(bool);

  if (bool === true) {
    const response = await axios.post(userapi, obj);
    alert("account created");
    return response.data;
  } else {
    alert("username already exist");
    return;
  }
});

const initialState = {
  originalvalue: [],
  user: [],
  Authentication: false,
  searched: [],
  sorted: [],
  category: [],
};

const userProductSlice = createSlice({
  name: "userProduct",
  initialState,
  reducers: {
    authentication: (state, action) => {
      let bool = false;
      state.user.forEach((e) => {
        if (
          e.username === action.payload.user &&
          e.password === action.payload.password
        ) {
          bool = true;
        }
      });

      if (bool === true) {
        state.Authentication = true;
        alert("Successfully loged in");
      } else {
        state.Authentication = false;
        alert("Invalid Username or Password");
      }
    },
    Logout: (state) => {
      state.Authentication = false;
    },
    Usearch: (state, action) => {
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
    Uincrease: (state) => {
      state.sorted = state.searched.sort((a, b) => a.price - b.price);
    },
    Udecrease: (state) => {
      state.sorted = state.searched.sort((a, b) => b.price - a.price);
    },
    UcatProduct: (state, action) => {
      console.log(action.payload);
      if (action.payload == "All") {
        state.category = [...state.originalvalue];
        state.searched = [...state.category];
        state.sorted = [...state.searched];
      } else {
        state.category = state.originalvalue.filter(
          (e) => action.payload.toLowerCase() === e.category.toLowerCase()
        );
        state.searched = [...state.category];
        state.sorted = [...state.searched];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userData.fulfilled, (state, action) => {
      state.originalvalue = [...action.payload];
      state.category = [...state.originalvalue];
      state.searched = [...state.category];
      state.category = [...state.searched];
      state.sorted = [...state.searched];
      console.log("original", state.originalvalue);
      console.log("category", state.category);
      console.log("searched", state.searched);
      console.log("sorted", state.sorted);
    });

    builder.addCase(userAuth.fulfilled, (state, action) => {
      console.log("user", action.payload);
      state.user = [...action.payload];
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      console.log("add", action.payload);
      state.user = [action.payload, ...state.user];
    });
  },
});

export default userProductSlice.reducer;
export const {
  authentication,
  Logout,
  Usearch,
  Uincrease,
  Udecrease,
  UcatProduct,
} = userProductSlice.actions;
