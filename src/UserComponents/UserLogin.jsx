import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authentication, userAuth } from "../redux/features/userProductSlice";

const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userdetail, setuserDetail] = useState({
    user: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if ((userdetail.user === "") | (userdetail.password === "")) {
      alert("enter the empty fields");
      return;
    } else {
      dispatch(authentication(userdetail));
      navigate("/user");
    }
  }

  useEffect(() => {
    dispatch(userAuth());
  }, []);

  return (
    <div
      tabIndex={-1}
      aria-hidden="false"
      className="fixed inset-0 z-50 flex justify-center items-center bg-[#000000ba] px-4 sm:px-6"
    >
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              Sign in to your Account
            </h3>
            <Link to="/user">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
          <div className="p-4 md:p-5">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username */}
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
                  id="email"
                  value={userdetail.user}
                  onChange={(e) =>
                    setuserDetail({ ...userdetail, user: e.target.value })
                  }
                  placeholder="name@company.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={userdetail.password}
                  onChange={(e) =>
                    setuserDetail({ ...userdetail, password: e.target.value })
                  }
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>

              {/* Remember + Forgot Password */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-0">
                <label className="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600"
                  />
                  <span className="ml-2">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>

              {/* Sign Up Link */}
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                Not registered?{" "}
                <Link
                  to="/usersignup"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
