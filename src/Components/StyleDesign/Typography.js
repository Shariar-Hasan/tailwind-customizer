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
        <ButtonGroupElement
          datalist={fontWeightDatalist}
          activeChecker={fontWeight}
          setupFunction={setFontWeight}
          itemValue={"value"}
          toCheck={"style"}
          heading={"Font Weight"}
        />
      </div>
      <div className="group col-span-1">
        <ButtonGroupElement
          datalist={fontFamilyDatalist}
          activeChecker={fontFamily}
          setupFunction={setFontFamily}
          itemValue={"value"}
          toCheck={"style"}
          heading={"Font Family"}
        />
      </div>
      <hr />
      <div className="grid gap-4 grid-cols-1">
        <div className="group col-span-1">
          <ButtonGroupElement
            datalist={fontSizeDatalist}
            activeChecker={fontSize}
            setupFunction={setFontSize}
            itemValue={"value"}
            toCheck={"style"}
            heading={"Font Size"}
          />
        </div>
      </div>
      <hr />
      <div className="grid gap-4 grid-cols-1">
        <div className="group col-span-1">
          <ColorElement
            checker={fontColor}
            attributeName={"text"}
            setupFunction={setFontColor}
            heading={"Font Color"}
          />
        </div>
      </div>
    </div>
  );
};

export default Typography;
