import React from "react";
import { RiAdminFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
// import { addshow } from "../redux/features/modalSlice";
import { logout } from "../redux/features/adminSlice";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full bg-white shadow-md px-4 sm:px-6 py-3">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left section */}
        <div className="flex items-center gap-3">
          <div className="text-emerald-600 text-3xl sm:text-4xl">
            <RiAdminFill />
          </div>
          <div className="text-xl sm:text-2xl font-semibold text-gray-800">
            Admin Panel
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-2 sm:gap-4">
          {/* Home + Logout in flex with equal width */}
          <div className="flex w-full sm:w-auto gap-2 sm:gap-4">
            <Link to={"/"} className="flex-1">
              <button className="w-full bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition">
                Home
              </button>
            </Link>

            <div className="flex-1">
              <button
                onClick={() => dispatch(logout())}
                className="w-full bg-emerald-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-600 transition"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Add Product button full width on mobile */}
          <Link to={"/adminaddmodal"} className="w-full sm:w-auto">
            <button className="w-full bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition">
              + Add Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
