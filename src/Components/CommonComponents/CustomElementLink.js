import React from "react";

const CustomElementLink = ({ item = {} }) => {
  return (
    <div className="ml-3 hover:bg-gray-500 p-2 rounded-lg">
      <p className="font-semibold">{item.name}</p>
      <p className="text-sm">{item.desc}</p>
    </div>
  );
};

export default CustomElementLink;
