import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  Logout,
  UcatProduct,
  Udecrease,
  Uincrease,
  Usearch,
  userData,
} from "../redux/features/userProductSlice";
import { Link } from "react-router-dom";
import { addcart } from "../redux/features/cartSlice";

const UserProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.user.sorted);
  const auth = useSelector((state) => state.user.Authentication);
  const [page, setPage] = useState(1);
  const proPerPage = 4;
  const start = (page - 1) * proPerPage;
  const end = start + proPerPage;
  const cartproduct = useSelector((state) => state.cart.value);
  console.log("cartproduct", cartproduct);

  const product = products.slice(start, end);
  console.log("product", product);

  function handleAddCart(item) {
    let bool = false;
    cartproduct.forEach((e) => {
      if (e.id === item.id) {
        bool = true;
      }
    });

    if (bool) {
      alert("item is added already");
      return;
    } else {
      dispatch(addcart({ ...item, qt: 1 }));
    }
  }

  useEffect(() => {
    dispatch(userData());
  }, []);
  return (
    <>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-emerald-600 to-green-700 text-white px-4 sm:px-6 py-4 shadow-lg gap-4 sm:gap-0">
        <div className="flex items-center space-x-3">
          <FaUserCircle className="text-3xl" />
          <p className="text-base sm:text-lg font-semibold">Welcome, XYZ</p>
        </div>

        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
          <Link to={"/"}>
            <button className="bg-white text-green-700 px-4 py-2 rounded-full shadow-md hover:shadow-xl transition duration-200 transform hover:-translate-y-0.5">
              Home
            </button>
          </Link>

          {auth ? (
            <button
              onClick={() => dispatch(Logout())}
              className="bg-white text-green-700 px-4 py-2 rounded-full shadow-md hover:shadow-xl transition duration-200 transform hover:-translate-y-0.5"
            >
              Logout
            </button>
          ) : (
            <Link to={"/userlogin"}>
              <button className="bg-white text-green-700 px-4 py-2 rounded-full shadow-md hover:shadow-xl transition duration-200 transform hover:-translate-y-0.5">
                Login
              </button>
            </Link>
          )}

          <Link to={"/cart"}>
            <button className="relative bg-white text-green-700 px-4 py-2 rounded-full shadow-md hover:shadow-xl transition duration-200 transform hover:-translate-y-0.5 flex items-center gap-1">
              <FaShoppingCart className="text-xl" />
              <span className="absolute -top-1.5 -right-1 bg-white text-green-700 text-[9px] font-bold px-1 py-[1px] rounded-full shadow-sm border border-green-700">
                {cartproduct.length}
              </span>
              <span className="font-medium">Cart</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between bg-white text-slate-800 px-4 sm:px-6 py-4 rounded-lg shadow-md gap-4 border border-slate-200 mt-4">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => dispatch(Usearch(e.target.value))}
          className="w-full md:w-1/2 px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 placeholder:text-slate-400"
        />

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => dispatch(Udecrease())}
            className="bg-emerald-600 text-white px-4 py-2 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-0.5 duration-200"
          >
            High-Low
          </button>
          <button
            onClick={() => dispatch(Uincrease())}
            className="bg-emerald-600 text-white px-4 py-2 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-0.5 duration-200"
          >
            Low-High
          </button>
          <select
            onChange={(e) => dispatch(UcatProduct(e.target.value))}
            className="px-4 py-2 border border-slate-300 rounded-md shadow-sm bg-white text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 py-6">
        {product.map((item, index) => (
          <div
            key={index}
            className="flex flex-col h-auto items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <p className="text-sm text-gray-500 mb-1">{item.category}</p>
            <img
              src={item.url}
              alt={item.name}
              className="w-full max-h-60 object-cover rounded-md mb-3"
            />
            <p className="text-lg font-semibold text-gray-800 mb-1">
              {item.name}
            </p>
            <p className="text-emerald-600 font-bold text-md mb-3">
              ₹{item.price}
            </p>
            <div className="mt-auto">
              <div className="relative w-[106px] h-[36px] border border-emerald-600 rounded-[20px]">
                <button
                  onClick={() => handleAddCart(item)}
                  className="absolute top-[-6px] left-[-4px] px-4 py-2 bg-emerald-600 text-white rounded-[20px] text-sm shadow-md hover:shadow-xl hover:top-[0] hover:left-[0] transition-all duration-500 transform"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="w-full bg-white rounded-2xl px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-3 py-1 rounded bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-sm font-medium text-green-700 text-center">
          Page {page} of {Math.ceil(products.length / 4)}
        </span>
        <button
          disabled={page === Math.ceil(products.length / 4)}
          onClick={() => setPage(page + 1)}
          className="px-3 py-1 rounded bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default UserProduct;
