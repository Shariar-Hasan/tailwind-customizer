import React from "react";
import { colorListSingle } from "../../Datalist/StyleConfigList.js/Color";

const ColorElement = ({ attributeName, setupFunction, checker }) => {
  
  return (
    <div className="box p-2 shadow-sm  grid grid-cols-11 gap-0">
      <span
        title={attributeName + "-transparent"}
        onClick={() => setupFunction(attributeName + "-transparent")}
        className={`col-span-1 h-8 cursor-pointer hover:scale-105 ring-1 ring-black bg-striped `}
      >
        {attributeName + "-transparent" === checker ? "😉" : ""}
      </span>
      <span
        title={attributeName + "-white"}
        onClick={() => setupFunction(attributeName + "-white")}
        className={`col-span-5 h-8 cursor-pointer hover:scale-105 ring-1 ring-black bg-white `}
      >
        {attributeName + "-white" === checker ? "😉" : ""}
      </span>
      <span
        title={attributeName + "-black"}
        onClick={() => setupFunction(attributeName + "-black")}
        className={`col-span-5 h-8 cursor-pointer hover:scale-105 ring-1 ring-black bg-black `}
      >
        {attributeName + "-black" === checker ? "😉" : ""}
      </span>
      {colorListSingle.map((item, i) => {
        const styledColor = item.replace("bg", attributeName);
        return (
          <span
            key={i}
            title={styledColor}
            onClick={() => setupFunction(styledColor)}
            className={`col-span-1 h-8 cursor-pointer hover:scale-105 ring-1 ring-black ${item} `}
          >
            {styledColor === checker ? "😉" : ""}
          </span>
        );
      })}
    </div>
  );
};

export default ColorElement;
