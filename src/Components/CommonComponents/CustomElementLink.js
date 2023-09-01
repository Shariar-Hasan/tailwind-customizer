import React from "react";

const CustomElementLink = ({ item = {} }) => {
  return (
    <div className="ml-3 hover:bg-gray-800 px-4 py-3 my-3 rounded-lg hover:text-gray-100 cursor-pointer duration-200 grid gap-x-2 grid-cols-12">
      <div className="col-span-2">
        <span className="text-2xl p-2">{item.icon}</span>
      </div>
      <div className="col-span-10">
        <p className="font-semibold">{item.name}</p>
        <p className="text-sm">{item.desc}</p>
      </div>
    </div>
  );
};

export default CustomElementLink;
