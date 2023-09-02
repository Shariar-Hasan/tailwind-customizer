import React from "react";
import { displayDatalist } from "./../../Datalist/StyleConfigList.js/Display";
import { useSiteData } from "../../Context/AllContext";
import ButtonGroupElement from "../CommonComponents/ButtonGroupElement";

const Display = () => {
  const { displayClassName, setDisplayClassName } = useSiteData();
  return (
    <div className="text-center">
      <div className="group">
        <ButtonGroupElement
          datalist={displayDatalist}
          activeChecker={displayClassName}
          setupFunction={setDisplayClassName}
          itemValue={"value"}
          toCheck={"style"}
          heading={"Display"}
        />
      </div>
    </div>
  );
};

export default Display;
