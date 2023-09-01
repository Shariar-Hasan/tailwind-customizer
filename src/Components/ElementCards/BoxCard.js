import React from "react";
import Border from "../StyleDesign/Border";

const BoxCard = ({ currentAttribute }) => {
  return (
    <div className="box">
      <div className="p-2">
        <div className="preview flex justify-center items-center h-40 border-2 mb-4">
          <div>I Am Box</div>
        </div>
        <div className="code p-3 border-2 mb-4"></div>
        <div className="cutomizer border">
          <Border currentAttribute={currentAttribute} />
        </div>
      </div>
    </div>
  );
};

export default BoxCard;
