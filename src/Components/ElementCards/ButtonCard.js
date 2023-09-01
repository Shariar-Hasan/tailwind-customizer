import React from "react";

const ButtonCard = () => {
  return (
    <div className="box p-2">
      <div className="preview flex justify-center items-center h-40 border-2 mb-4">
        <button className={`btn bg-gray-900 p-3 text-white`}>Click Me</button>
      </div>
    </div>
  );
};

export default ButtonCard;
