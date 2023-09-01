import React from "react";

const ButtonCard = ({currentAttribute}) => {
  return (
    <div className="box">
      <div className="p-2">
        <div className="preview flex justify-center items-center h-40 border-2 mb-4">
          <button className={`btn bg-gray-900 p-3 text-white`}>Click Me</button>
        </div>
        <div className="cutomizer flex justify-center items-center h-40 border">
          
        </div>
      </div>
    </div>
  );
};

export default ButtonCard;
