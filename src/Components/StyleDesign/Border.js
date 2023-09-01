import React from "react";

const Border = () => {
  return (
    <div className="p-5">
      <h4 className="text-xl my-3">Border</h4>
      <button className="btn py-2 px-4 bg-gray-100 rounded text-black border mr-2">
        0
      </button>
      <button className="btn py-2 px-4 bg-gray-100 rounded text-black border mr-2">
        1
      </button>
      <button className="btn py-2 px-4 bg-gray-100 rounded text-black border mr-2">
        2
      </button>
    </div>
  );
};

export default Border;
