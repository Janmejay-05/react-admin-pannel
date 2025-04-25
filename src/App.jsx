import React from "react";
import Header from "./components/Header";
import ProductMain from "./components/ProductMain";
import AddModal from "./components/AddModal";
import { useSelector } from "react-redux";
import UpdateModdal from "./components/UpdateModdal";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  const bool = useSelector((state) => state.addproduct.value);
  const Ubool = useSelector((state) => state.updateproduct.value);
  const aut = useSelector((state) => state.auth.isAuth);
  const Bool = useSelector((state) => state.auth.boolean);
  return (
    <div>
      {aut ? (
        <>
          <Header />
          <ProductMain />
          {bool && <AddModal />}
          {Ubool && <UpdateModdal />}
        </>
      ) : (
        <>{Bool ? <Login /> : <Signup />}</>
      )}
    </div>
  );
};

export default App;
