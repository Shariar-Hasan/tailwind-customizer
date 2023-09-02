import React from "react";
import ColorElement from "../CommonComponents/ColorElement";
import { useSiteData } from "../../Context/AllContext";

const Background = () => {
  const { backgroundClassName, setBackgroundClassName } = useSiteData() || {};
  return (
    <div className="text-center">
      <div className="grid gap-4 grid-cols-1">
        <div className="group col-span-1">
          <ColorElement
            checker={backgroundClassName}
            attributeName={"bg"}
            setupFunction={setBackgroundClassName}
            heading={"Background Color"}
          />
        </div>
      </div>
    </div>
  );
};

export default Background;
