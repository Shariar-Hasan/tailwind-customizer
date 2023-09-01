import React, { useEffect, useState } from "react";
import {
  allBorderData,
  borderStyles,
  bottomBorderData,
  leftBorderData,
  rightBorderData,
  topBorderData,
} from "../../Datalist/StyleConfigList.js/Border";
import { useSiteData } from "../../Context/AllContext";
import ButtonGroupElement from "../CommonComponents/ButtonGroupElement";
import ColorElement from "../CommonComponents/ColorElement";

const Border = () => {
  const [allBorder, setAllBorder] = useState("border");
  const [topBorder, setTopBorder] = useState("border-t");
  const [bottomBorder, setBottomBorder] = useState("border-b");
  const [leftBorder, setLeftBorder] = useState("border-l");
  const [rightBorder, setRightBorder] = useState("border-r");

  const {
    borderSize,
    setBorderSize,
    borderStyle,
    setBorderStyle,
    borderColor,
    setBorderColor,
  } = useSiteData() || {};
  function setAll(item) {
    setAllBorder(item);
    // set top border
    const top = topBorderData.find(
      (data) =>
        data.style.replace("border-t", "") === item.replace("border", "")
    );
    setTopBorder(top.style);
    // set bottom border
    const bottom = bottomBorderData.find(
      (data) =>
        data.style.replace("border-b", "") === item.replace("border", "")
    );
    setBottomBorder(bottom.style);
    // set left border
    const left = leftBorderData.find(
      (data) =>
        data.style.replace("border-l", "") === item.replace("border", "")
    );
    setLeftBorder(left.style);
    // set right border
    const right = rightBorderData.find(
      (data) =>
        data.style.replace("border-r", "") === item.replace("border", "")
    );
    setRightBorder(right.style);
    console.log({ item, top, bottom, left, right });
  }

  useEffect(() => {
    let classNameTemp = null;
    if (
      allBorder.replace("border", "") !== topBorder.replace("border-t", "") ||
      allBorder.replace("border", "") !== rightBorder.replace("border-r", "") ||
      allBorder.replace("border", "") !== leftBorder.replace("border-l", "") ||
      allBorder.replace("border", "") !== bottomBorder.replace("border-b", "")
    ) {
      classNameTemp = `${topBorder} ${bottomBorder} ${leftBorder} ${rightBorder}`;
    } else {
      classNameTemp = allBorder;
    }
    setBorderSize(classNameTemp);
    console.log(classNameTemp);
  }, [
    allBorder,
    topBorder,
    leftBorder,
    rightBorder,
    bottomBorder,
    borderStyle,
    borderColor,
  ]);
  return (
    <div className="text-center">
      <div className="grid grid-cols-3 gap-0 my-3">
        <div className="group col-span-1 col-start-2">
          <h4 className="text-xl my-3">Border Top</h4>
          <ButtonGroupElement
            datalist={topBorderData}
            activeChecker={topBorder}
            setupFunction={setTopBorder}
            itemValue={"value"}
            toCheck={"style"}
          />
        </div>
        <div className="group col-span-1 col-start-1">
          <h4 className="text-xl my-3">Border Left</h4>
          <ButtonGroupElement
            datalist={leftBorderData}
            activeChecker={leftBorder}
            setupFunction={setLeftBorder}
            itemValue={"value"}
            toCheck={"style"}
          />
        </div>
        <div className="group col-span-1">
          <h4 className="text-xl my-3">All Border</h4>
          <ButtonGroupElement
            datalist={allBorderData}
            activeChecker={allBorder}
            setupFunction={setAll}
            itemValue={"value"}
            toCheck={"style"}
          />
        </div>
        <div className="group col-span-1">
          <h4 className="text-xl my-3">Border Right</h4>
          <ButtonGroupElement
            datalist={rightBorderData}
            activeChecker={rightBorder}
            setupFunction={setRightBorder}
            itemValue={"value"}
            toCheck={"style"}
          />
        </div>
        <div className="group col-span-1 col-start-2">
          <h4 className="text-xl my-3">Border Bottom</h4>
          <ButtonGroupElement
            datalist={bottomBorderData}
            activeChecker={bottomBorder}
            setupFunction={setBottomBorder}
            itemValue={"value"}
            toCheck={"style"}
          />
        </div>
      </div>
      <hr />
      <div className="grid gap-4 grid-cols-1">
        <div className="group col-span-1">
          <h4 className="text-xl my-3">Border Styles</h4>
          <ButtonGroupElement
            datalist={borderStyles}
            activeChecker={borderStyle}
            setupFunction={setBorderStyle}
            itemValue={"value"}
            toCheck={"style"}
          />
        </div>
      </div>
      <hr />
      <div className="grid gap-4 grid-cols-1">
        <div className="group col-span-1">
          <h4 className="text-xl my-3">Border Color</h4>
          <ColorElement
            checker={borderColor}
            attributeName={"border"}
            setupFunction={setBorderColor}
          />
        </div>
      </div>
    </div>
  );
};

export default Border;
