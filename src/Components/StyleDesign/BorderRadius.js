import React, { useEffect } from "react";
import ButtonGroupElement from "../CommonComponents/ButtonGroupElement";
import {
  rightBorderRadiusDatalist,
  bottomBorderRadiusDatalist,
  allBorderRadiusDatalist,
  leftBorderRadiusDatalist,
  topBorderRadiusDatalist,
} from "./../../Datalist/StyleConfigList.js/BorderRadius";
import { useSiteData } from "../../Context/AllContext";
import { checker } from "./../../Datalist/Functions/similarityChecker";

const BorderRadius = () => {
  // getting context data
  const {
    setBorderRadiusClassName,
    allBorderRadius,
    setAllBorderRadius,
    topBorderRadius,
    setTopBorderRadius,
    bottomBorderRadius,
    setBottomBorderRadius,
    leftBorderRadius,
    setLeftBorderRadius,
    rightBorderRadius,
    setRightBorderRadius,
  } = useSiteData();

  //   load data
  function setAll(item) {
    setAllBorderRadius(item);
    // set top border
    const top = topBorderRadiusDatalist.find(
      (data) =>
        //checker(allMargin, "m", topMargin, "mt", false)
        data.style.replace("rounded-tl", "") === item.replace("rounded", "")
    );
    setTopBorderRadius(top.style);
    // set bottom border
    const bottom = bottomBorderRadiusDatalist.find(
      (data) =>
        data.style.replace("rounded-br", "") === item.replace("rounded", "")
    );
    setBottomBorderRadius(bottom.style);
    // set left border
    const left = leftBorderRadiusDatalist.find(
      (data) =>
        data.style.replace("rounded-bl", "") === item.replace("rounded", "")
    );
    setLeftBorderRadius(left.style);
    // set right border
    const right = rightBorderRadiusDatalist.find(
      (data) =>
        data.style.replace("rounded-tr", "") === item.replace("rounded", "")
    );
    setRightBorderRadius(right.style);
    console.log({ item, top, bottom, left, right });
  }

  useEffect(() => {
    let classNameTemp = null;
    if (
      checker(
        allBorderRadius,
        "rounded",
        topBorderRadius,
        "rounded-tl",
        false
      ) ||
      checker(
        allBorderRadius,
        "rounded",
        rightBorderRadius,
        "rounded-tr",
        false
      ) ||
      checker(
        allBorderRadius,
        "rounded",
        leftBorderRadius,
        "rounded-bl",
        false
      ) ||
      checker(
        allBorderRadius,
        "rounded",
        bottomBorderRadius,
        "rounded-br",
        false
      )
    ) {
      classNameTemp = `${topBorderRadius} ${bottomBorderRadius} ${leftBorderRadius} ${rightBorderRadius}`;
    } else {
      classNameTemp = allBorderRadius;
    }
    setBorderRadiusClassName(classNameTemp);
    // console.log(classNameTemp);
  }, [
    allBorderRadius,
    topBorderRadius,
    leftBorderRadius,
    rightBorderRadius,
    bottomBorderRadius,
  ]);
  return (
    <div className="text-center">
      <div className="grid grid-cols-3 gap-0 my-3">
        <div className="group col-span-1 ">
          <ButtonGroupElement
            datalist={topBorderRadiusDatalist}
            activeChecker={topBorderRadius}
            setupFunction={setTopBorderRadius}
            itemValue={"value"}
            toCheck={"style"}
            heading={"Top left"}
          />
        </div>
        <div className="group col-span-1 col-start-3">
          <ButtonGroupElement
            datalist={rightBorderRadiusDatalist}
            activeChecker={rightBorderRadius}
            setupFunction={setRightBorderRadius}
            itemValue={"value"}
            toCheck={"style"}
            heading={"Top Right"}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-0 my-3">
        <div className="group col-span-1 col-start-2">
          <ButtonGroupElement
            datalist={allBorderRadiusDatalist}
            activeChecker={allBorderRadius}
            setupFunction={setAll}
            itemValue={"value"}
            toCheck={"style"}
            heading={"All Side"}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-0 my-3">
        <div className="group col-span-1 col-start-1">
          <ButtonGroupElement
            datalist={leftBorderRadiusDatalist}
            activeChecker={leftBorderRadius}
            setupFunction={setLeftBorderRadius}
            itemValue={"value"}
            toCheck={"style"}
            heading={"Bottom Left"}
          />
        </div>
        <div className="group col-span-1 col-start-3">
          <ButtonGroupElement
            datalist={bottomBorderRadiusDatalist}
            activeChecker={bottomBorderRadius}
            setupFunction={setBottomBorderRadius}
            itemValue={"value"}
            toCheck={"style"}
            heading={"Bottom Right"}
          />
        </div>
      </div>
    </div>
  );
};

export default BorderRadius;
