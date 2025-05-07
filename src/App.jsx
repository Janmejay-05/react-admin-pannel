import React from "react";

import UserProduct from "./UserComponents/UserProduct";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./UserComponents/UserLogin";
import UserSignup from "./UserComponents/UserSignup";
import UserCart from "./UserComponents/UserCart";
import PrivateRoute from "./UserComponents/PrivateRoute";
import MainPage from "./UserComponents/MainPage";
import Login from "./AdminComponents/Login";
import Signup from "./AdminComponents/Signup";
import Header from "./AdminComponents/Header";
import PrivateRouteAdmin from "./AdminComponents/PrivateRoutAdmin";
import ProductMain from "./AdminComponents/ProductMain";
import AddModal from "./AdminComponents/AddModal";
import UpdateModdal from "./AdminComponents/UpdateModdal";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/adminsignup" element={<Signup />} />
        <Route
          path="/admin"
          element={
            <PrivateRouteAdmin>
              <>
                <Header />
                <ProductMain />
              </>
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/adminaddmodal"
          element={
            <PrivateRouteAdmin>
              <AddModal />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/adminupdate"
          element={
            <PrivateRouteAdmin>
              <UpdateModdal />
            </PrivateRouteAdmin>
          }
        />
        <Route path="/" element={<MainPage />} />
        <Route path="/user" element={<UserProduct />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/usersignup" element={<UserSignup />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <UserCart />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
