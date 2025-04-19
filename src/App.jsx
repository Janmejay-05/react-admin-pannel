import React from "react";
import Header from "./components/Header";
import ProductMain from "./components/ProductMain";
import AddModal from "./components/AddModal";
import { useSelector } from "react-redux";

const App = () => {
  const bool = useSelector((state) => state.addproduct.value);
  return (
    <div>
      <Header />
      <ProductMain />
      {bool && <AddModal />}
    </div>
  );
};

export default App;
