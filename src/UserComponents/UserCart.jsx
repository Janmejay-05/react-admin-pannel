import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCrossCircled } from "react-icons/rx";
import { decqt, deleteCart, incqt } from "../redux/features/cartSlice";
import { Link } from "react-router-dom";

const UserCart = () => {
  const product = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const [subtotal, setSubtotal] = useState(0);

  function total() {
    let t = 0;
    product.forEach((e) => {
      t += Number(e.price) * e.qt;
    });

    setSubtotal(t);
  }

  useEffect(() => {
    total();
    console.log("cart product useEffect", product);
  }, [product]);

  return (
    <>
      {/* Header */}
      <div className="text-center py-8 px-4 bg-gray-100 border-b border-gray-300">
        <h1 className="text-2xl font-semibold text-gray-800">
          Your Shopping Cart
        </h1>
      </div>

      {/* Product List */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6 p-4">
        {product.map((item, i) => (
          <div
            key={i}
            className="relative flex flex-col md:flex-row gap-4 bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            {/* Product Image */}
            <div className="w-full md:w-36 h-36 flex-shrink-0 mx-auto md:mx-0">
              <img
                src={item.url}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm text-gray-500 mb-1">{item.category}</p>
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
            </div>

            {/* Quantity and Price */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  disabled={item.qt === 1}
                  onClick={() => dispatch(decqt(i))}
                  className="px-3 py-1.5 text-lg bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
                >
                  -
                </button>
                <span className="text-lg font-medium">{item.qt}</span>
                <button
                  onClick={() => dispatch(incqt(i))}
                  className="px-3 py-1.5 text-lg bg-gray-200 hover:bg-gray-300 rounded"
                >
                  +
                </button>
              </div>

              {/* Price */}
              <p className="text-lg font-bold text-blue-600">${item.price}</p>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => dispatch(deleteCart(i))}
              className="absolute top-2 right-2 text-xl text-gray-400 hover:text-red-500"
              title="Remove item"
            >
              <RxCrossCircled />
            </button>
          </div>
        ))}
      </div>

      {/* Footer Actions */}
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-4 mt-6 p-4 text-lg font-semibold text-gray-800">
        <Link to={"/user"}>
          <button className="bg-black text-white px-6 py-3 min-w-[160px] rounded-[20px] transition-transform duration-200 hover:scale-105">
            Back to Products
          </button>
        </Link>
        <div className="flex items-center gap-2">
          <h3>Sub-Total:</h3>
          <span className="text-blue-600 min-w-[100px] text-center">
            ${subtotal}
          </span>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 min-w-[160px] rounded-[20px] transition-transform duration-200 hover:scale-105">
          Checkout
        </button>
      </div>
    </>
  );
};

export default UserCart;
