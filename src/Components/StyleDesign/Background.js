import React from "react";
import ColorElement from "../CommonComponents/ColorElement";
import { useSiteData } from "../../Context/AllContext";

const Background = () => {
  const { backgroundClassName, setBackgroundClassName } = useSiteData() || {};
  return (
    <div className="text-center">
      <div className="grid gap-4 grid-cols-1">
        <div className="group col-span-1">
          <h4 className="text-xl my-3">Background Color</h4>
          <ColorElement
            checker={backgroundClassName}
            attributeName={"bg"}
            setupFunction={setBackgroundClassName}
          />
        </div>
      </div>
    </div>
  );
};

export default Background;
