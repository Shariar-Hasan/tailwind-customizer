import React from "react";

const ButtonGroupElement = ({
  datalist,
  activeChecker,
  setupFunction,
  itemValue,
  toCheck,
}) => {
  return (
    <div className="p-5 group-hover:bg-slate-600 duration-300 cursor-pointer col-span-1">
      {datalist.map((item, i) => (
        <button
          key={i}
          onClick={() => setupFunction(item[toCheck])}
          className={`btn py-2 px-4 bg-gray-100 duration-200  text-black  btn-group-curvenes ${
            item[toCheck] === activeChecker
              ? "bg-gray-800 text-white"
              : ""
          }`}
        >
          {item[itemValue]}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroupElement;
