import React from "react";

const ButtonGroupElement = ({
  datalist,
  activeChecker,
  setupFunction,
  itemValue,
  toCheck,
  grid = 0,
  heading,
}) => {
  return (
    <>
      <h4 className="text-xl my-3 font-bold">{heading}</h4>
      <div
        className={`p-5 group-hover:bg-slate-600 text-center duration-300  cursor-pointer col-span-1 ${
          grid !== 0 ? "grid grid-cols-7" : ""
        }`}
      >
        {datalist.map((item, i) => (
          <button
            key={i}
            onClick={() => setupFunction(item[toCheck])}
            className={`btn p-2  bg-gray-100 col-span-1 duration-200 border  text-black  ${
              grid === 0 ? "btn-group-curvenes" : ""
            } ${
              item[toCheck] === activeChecker ? "bg-gray-800 text-white" : ""
            }`}
          >
            {item[itemValue]}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonGroupElement;
