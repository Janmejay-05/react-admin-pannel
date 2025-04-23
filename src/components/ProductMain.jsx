import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { FaArrowDown } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";
import {
  catProduct,
  dataApi,
  decrease,
  deleteData,
  increase,
  originalData,
  search,
} from "../redux/features/productSlice";
// import axios from "axios";
import { openUmodel } from "../redux/features/updateModalSlice";

const ProductMain = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  // const product = useSelector((state) => state.data.value);
  // const original = useSelector((state) => console.log("original", state));
  // const cat = useSelector((state) =>
  //   console.log("category", state.data.category)
  // );
  // const searched = useSelector((state) =>
  //   console.log("searched", state.data.searched)
  // );
  const products = useSelector((state) => state.data.sorted);
  const proPerPage = 4;
  const start = (page - 1) * proPerPage;
  const end = start + proPerPage;

  const product = products.slice(start, end);
  console.log(product);

  useEffect(() => {
    dispatch(originalData());
  }, []);

  useEffect(() => {
    dispatch(dataApi(page));
  }, [page]);

  function handleDelete(id) {
    dispatch(deleteData(id));
    console.log(id);
  }
  return (
    <div>
      {/* product head */}
      <div className="flex items-center justify-between w-full h-[60px] px-6 bg-white mt-[20px] ">
        {/* Search Bar */}
        <div className="w-[40%]">
          <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => {
              dispatch(search(e.target.value));
            }}
            className="w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700"
          />
        </div>

        {/* Filter & Sort */}
        <div className="flex items-center gap-4 w-[50%] justify-end">
          <select
            onChange={(e) => {
              dispatch(catProduct(e.target.value));
            }}
            className="h-10 px-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
          </select>
          <button
            onClick={() => {
              dispatch(decrease());
            }}
            className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition"
          >
            Sort <FaArrowUp />
          </button>
          <button
            onClick={() => {
              dispatch(increase());
            }}
            className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition"
          >
            sort <FaArrowDown />
          </button>
        </div>
      </div>
      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {product.map((item, index) => (
          <div
            key={index}
            className="flex flex-col h-[400px] items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
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
            <div className="flex gap-3">
              <button
                onClick={() => {
                  dispatch(openUmodel(item.id));
                }}
                className="px-4 py-1 bg-emerald-600 text-white rounded-md text-sm hover:bg-emerald-700 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="px-4 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-[100%] bg-white rounded-2xl px-4 py-2 flex items-center justify-end space-x-3 mt-[50px]">
        <button
          disabled={page == 1}
          onClick={() => setPage(page - 1)}
          className="px-3 py-1 rounded bg-emerald-600 text-white hover:bg-emerald-700"
        >
          Prev
        </button>
        <span className="text-sm font-medium text-green-700">
          Page {page} of {Math.ceil(products.length / 4)}
        </span>
        <button
          disabled={page == Math.ceil(products.length / 4)}
          onClick={() => setPage(page + 1)}
          className="px-3 py-1 rounded bg-emerald-600 text-white hover:bg-emerald-700  mr-[30px]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductMain;
