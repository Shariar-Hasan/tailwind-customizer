import React from "react";
import { customizationList } from "../../Datalist/CustomizationList";

const SideBar = ({ currentAttribute, setCurrentAttribute }) => {
  return (
    <div className="box border border-gray-300 sticky top-0">
      <div className="routes">
        <h2 className="text-3xl mb-3 font-mono">Select Styles</h2>
        <hr />
        <ul>
          {customizationList.map((item, i) => (
            <li
              key={i}
              onClick={() => setCurrentAttribute(item.element)}
              className={`my-1 p-2 rounded-md cursor-pointer duration-200 ${
                currentAttribute === item.element ? "bg-gray-900 text-white" : ""
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
