import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      {/* Modal toggle */}

      {/* Main modal */}
      <div
        id="select-modal"
        tabIndex={-1}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000ba] overflow-y-auto px-4 py-6"
      >
        <div className="relative w-full max-w-md">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Welcome to My Website
              </h3>
            </div>

            {/* Modal body */}
            <div className="p-4 md:p-5">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Select your mean to visit:
              </p>
              <ul className="space-y-4 mb-4">
                <li>
                  <Link to={"/admin"}>
                    <input
                      type="radio"
                      id="job-2"
                      name="job"
                      defaultValue="job-2"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="job-2"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Admin
                        </div>
                        <div className="w-full text-gray-500 dark:text-gray-400">
                          Admin side
                        </div>
                      </div>
                      <svg
                        className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </label>
                  </Link>
                </li>
                <li>
                  <Link to={"/user"}>
                    <input
                      type="radio"
                      id="job-3"
                      name="job"
                      defaultValue="job-3"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="job-3"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">User</div>
                        <div className="w-full text-gray-500 dark:text-gray-400">
                          Client side
                        </div>
                      </div>
                      <svg
                        className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </label>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
