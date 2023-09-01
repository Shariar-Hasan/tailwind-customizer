import React from "react";
import { opacityDataList } from "../../Datalist/StyleConfigList.js/Opacity";
import { useSiteData } from "../../Context/AllContext";
import ButtonGroupElement from "../CommonComponents/ButtonGroupElement";

const Opacity = () => {
  const { opacityClassName, setOpacityClassName } = useSiteData();
  return (
    <div className="text-center">
      <div className="group">
        <h4 className="text-xl my-3">Opacity</h4>
        <ButtonGroupElement
          datalist={opacityDataList}
          activeChecker={opacityClassName}
          setupFunction={setOpacityClassName}
          itemValue={"value"}
          toCheck={"style"}
        />
      </div>
    </div>
  );
};

export default Opacity;
