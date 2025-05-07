import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../redux/features/userProductSlice";

const UserSignup = () => {
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();

    if (details.username === "" || details.password === "") {
      alert("enter the empty fields");
      return;
    } else {
      dispatch(addUser(details));
      navigate("/userlogin");
    }
  }
  return (
    <div
      tabIndex={-1}
      aria-hidden="false"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000ba] px-4 sm:px-6"
    >
      <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-md dark:bg-gray-800">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600 rounded-t">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              Create your user Account
            </h3>
            <Link to={"/userlogin"}>
              <button
                type="button"
                className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center transition"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </Link>
          </div>

          {/* Modal body */}
          <div className="p-4 sm:p-5">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Username
                </label>
                <input
                  type="text"
                  name="email"
                  value={details.username}
                  id="email"
                  className="w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-500 dark:placeholder-gray-400"
                  placeholder="name@company.com"
                  onChange={(e) =>
                    setDetails({ ...details, username: e.target.value })
                  }
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={details.password}
                  className="w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-500 dark:placeholder-gray-400"
                  placeholder="••••••••"
                  onChange={(e) =>
                    setDetails({ ...details, password: e.target.value })
                  }
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2.5 px-5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
