import React from "react";
import { Link } from "react-router-dom";

const NoPageFound = () => {
  return (
    <div className="flex h-screen ">
      <div className="m-auto text-center">
        <h1 className="text-6xl font-extrabold text-gray-900">404</h1>
        <p className="text-2xl mt-4">Page Not Found</p>
        <p className="text-lg text-gray-600 mt-4">
          Sorry, the page you are looking for doesn't exist.
        </p>
        <Link to={"/"}>
          <span className="text-blue-500 hover:underline mt-8">
            Go back to the homepage
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NoPageFound;
