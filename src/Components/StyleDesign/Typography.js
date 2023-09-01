import React from "react";
import { useSiteData } from "../../Context/AllContext";
import ButtonGroupElement from "../CommonComponents/ButtonGroupElement";
import ColorElement from "../CommonComponents/ColorElement";
import {
  fontFamilyDatalist,
  fontSizeDatalist,
  fontWeightDatalist,
} from "../../Datalist/StyleConfigList.js/Typography";

const Typography = () => {
  const {
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
    fontColor,
    setFontColor,
    fontWeight,
    setFontWeight,
  } = useSiteData();
  return (
    <div className="text-center">
      <div className="group">
        <h4 className="text-xl my-3">Font Weight</h4>
        <ButtonGroupElement
          datalist={fontWeightDatalist}
          activeChecker={fontWeight}
          setupFunction={setFontWeight}
          itemValue={"value"}
          toCheck={"style"}
        />
      </div>
      <div className="group col-span-1">
        <h4 className="text-xl my-3">Font Family</h4>
        <ButtonGroupElement
          datalist={fontFamilyDatalist}
          activeChecker={fontFamily}
          setupFunction={setFontFamily}
          itemValue={"value"}
          toCheck={"style"}
        />
      </div>
      <hr />
      <div className="grid gap-4 grid-cols-1">
        <div className="group col-span-1">
          <h4 className="text-xl my-3">Font Size</h4>
          <ButtonGroupElement
            datalist={fontSizeDatalist}
            activeChecker={fontSize}
            setupFunction={setFontSize}
            itemValue={"value"}
            toCheck={"style"}
          />
        </div>
      </div>
      <hr />
      <div className="grid gap-4 grid-cols-1">
        <div className="group col-span-1">
          <h4 className="text-xl my-3">Font Color</h4>
          <ColorElement
            checker={fontColor}
            attributeName={"text"}
            setupFunction={setFontColor}
          />
        </div>
      </div>
    </div>
  );
};

export default Typography;
