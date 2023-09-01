import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { moreNavlinkData, navbarData } from "./../../Datalist/NavbarData";
import logo from "./../../Assets/logo.png";
import CustomElementLink from "../CommonComponents/CustomElementLink";

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
          <Link to="/">
            <div className="flex flex-row items-center justify-between p-4">
              <span className="mr-2">
                <img
                  src={logo}
                  alt="Tailwind Cutomizer Logo"
                  className="w-10 rounded-full"
                />
              </span>
              <span className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline ">
                TW Cutomizer
              </span>
            </div>
          </Link>
          <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            {navbarData.map((item, i) => (
              <Link key={i} to={item.routelink}>
                <span className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200">
                  {item.name}
                </span>
              </Link>
            ))}
            <div className="relative group">
              <button
                className="px-4 py-2 -mt-2 text-sm font-semibold bg-transparent  rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200  md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline group customize-btn"
                onClick={() => setIsMoreButtonOpen((prev) => !prev)}
              >
                <span>Customize</span>
                <span>
                  <i
                    className={`fa-solid fa-chevron-down inline-block duration-200  ml-1 ${
                      isMoreButtonOpen ? "-rotate-180" : ""
                    }`}
                  ></i>
                </span>
              </button>
              <div
                className={`absolute z-40 right-0 top-full w-full md:max-w-screen-sm md:w-screen mt-0  none invisible group-hover:visible group-hover:block  group-hover:scale-y-100 group-hover:h-full scale-y-0 h-0 duration-200 transform origin-top`}
              >
                <div
                  className={`px-2 pt-2 pb-4  bg-white rounded-md shadow-lg dark:bg-gray-700 `}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    {moreNavlinkData.map((item, i) => (
                      <Link
                        key={i}
                        to={"/customize/" + item.routelink}
                        onClick={() => setIsMoreButtonOpen((prev) => !prev)}
                      >
                        <CustomElementLink item={item} />
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
