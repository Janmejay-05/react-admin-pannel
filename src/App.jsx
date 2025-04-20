import React from "react";
import Header from "./components/Header";
import ProductMain from "./components/ProductMain";
import AddModal from "./components/AddModal";
import { useSelector } from "react-redux";
import UpdateModdal from "./components/UpdateModdal";

const App = () => {
  const bool = useSelector((state) => state.addproduct.value);
  const Ubool = useSelector((state) => state.updateproduct.value);
  return (
    <div>
      <Header />
      <ProductMain />
      {bool && <AddModal />}
      {Ubool && <UpdateModdal />}
    </div>
  );
};

export default App;
