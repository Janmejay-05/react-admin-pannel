import React from "react";
import { RiAdminFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addshow } from "../redux/features/modalSlice";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between w-full h-[70px] px-6 bg-white shadow-md">
      {/* Left section */}
      <div className="flex items-center gap-4">
        <div className="text-emerald-600 text-4xl">
          <RiAdminFill />
        </div>
        <div className="text-2xl font-semibold text-gray-800">Admin Panel</div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        <button className="bg-emerald-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition">
          Logout
        </button>
        <button
          onClick={() => dispatch(addshow())}
          className="bg-emerald-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition"
        >
          + Add Product
        </button>
      </div>
    </div>
  );
};

export default Header;
