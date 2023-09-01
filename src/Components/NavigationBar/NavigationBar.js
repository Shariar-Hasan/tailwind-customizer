import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { moreNavlinkData, navbarData } from "./../../Datalist/NavbarData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationBar = () => {
  const [isMoreButtonOpen, setIsMoreButtonOpen] = useState(false);
  useEffect(() => {
    console.log(isMoreButtonOpen);
  }, [isMoreButtonOpen]);
  return (
    <div className="antialiased bg-gray-100 dark:bg-gray-900">
      <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800">
        <div
          x-data="{ open: true }"
          className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
        >
          <div className="flex flex-row items-center justify-between p-4">
            <Link to="/">
              <span className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline">
                TW Cutomizer
              </span>
            </Link>

            <button className="rounded-lg focus:outline-none focus:shadow-outline">
              🥳
            </button>
          </div>
          <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            {navbarData.map((item, i) => (
              <Link key={i} to={item.routelink}>
                <span className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200">
                  {item.name}
                </span>
              </Link>
            ))}
            <div className="relative">
              <button
                className="px-4 py-2 -mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200  md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                onClick={() => setIsMoreButtonOpen((prev) => !prev)}
              >
                <span>Elements</span>
                <span>
                  <i
                    className={`fa-solid fa-chevron-down inline-block duration-200  ml-1 ${
                      isMoreButtonOpen ? "-rotate-180" : ""
                    }`}
                  ></i>
                </span>
              </button>
              <div
                className={`absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2  origin-top-right`}
              >
                <div
                  className={`px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark:bg-gray-700 duration-200 transform origin-top ${
                    isMoreButtonOpen ? "scale-y-100 h-full" : "scale-y-0 h-0"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    {moreNavlinkData.map((item, i) => (
                      <Link key={i} to={"/customize/" + item.routelink}>
                        <div
                          className="ml-3 hover:bg-gray-500 p-2 rounded-lg"
                          onClick={() => setIsMoreButtonOpen((prev) => !prev)}
                        >
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
