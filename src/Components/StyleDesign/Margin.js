import React, { useEffect, useState } from "react";
import ButtonGroupElement from "../CommonComponents/ButtonGroupElement";
import {
  allMarginDatalist,
  bottomMarginDatalist,
  leftMarginDatalist,
  rightMarginDatalist,
  topMarginDatalist,
} from "../../Datalist/StyleConfigList.js/Margin";
import { useSiteData } from "../../Context/AllContext";

const Margin = () => {
  // getting context data
  const {
    marginClassName,
    setMarginClassName,
    allMargin,
    setAllMargin,
    topMargin,
    setTopMargin,
    bottomMargin,
    setBottomMargin,
    leftMargin,
    setLeftMargin,
    rightMargin,
    setRightMargin,
  } = useSiteData();

  //   load data
  function setAll(item) {
    setAllMargin(item);
    // set top border
    const top = topMarginDatalist.find(
      (data) => data.style.replace("mt", "") === item.replace("m", "")
    );
    setTopMargin(top.style);
    // set bottom border
    const bottom = bottomMarginDatalist.find(
      (data) => data.style.replace("mb", "") === item.replace("m", "")
    );
    setBottomMargin(bottom.style);
    // set left border
    const left = leftMarginDatalist.find(
      (data) => data.style.replace("ml", "") === item.replace("m", "")
    );
    setLeftMargin(left.style);
    // set right border
    const right = rightMarginDatalist.find(
      (data) => data.style.replace("mr", "") === item.replace("m", "")
    );
    setRightMargin(right.style);
    console.log({ item, top, bottom, left, right });
  }

  useEffect(() => {
    setAllMargin(marginClassName);
  }, []);
  useEffect(() => {
    let classNameTemp = null;
    if (
      allMargin.replace("m", "") !== topMargin.replace("mt", "") ||
      allMargin.replace("m", "") !== rightMargin.replace("mr", "") ||
      allMargin.replace("m", "") !== leftMargin.replace("ml", "") ||
      allMargin.replace("m", "") !== bottomMargin.replace("mb", "")
    ) {
      classNameTemp = `${topMargin} ${bottomMargin} ${leftMargin} ${rightMargin}`;
    } else {
      classNameTemp = allMargin;
    }
    if (marginClassName !== classNameTemp) setMarginClassName(classNameTemp);

    // console.log(classNameTemp);
  }, [allMargin, topMargin, leftMargin, rightMargin, bottomMargin]);
  return (
    <div className="text-center">
      <div className="grid grid-cols-3 gap-0 my-3">
        <div className="group col-span-1 col-start-2">
          <h4 className="text-xl my-3">Margin Top</h4>
          <ButtonGroupElement
            datalist={topMarginDatalist}
            activeChecker={topMargin}
            setupFunction={setTopMargin}
            itemValue={"value"}
            toCheck={"style"}
            grid={7}
          />
        </div>
        <div className="group col-span-1 col-start-1">
          <h4 className="text-xl my-3">Margin Left</h4>
          <ButtonGroupElement
            datalist={leftMarginDatalist}
            activeChecker={leftMargin}
            setupFunction={setLeftMargin}
            itemValue={"value"}
            toCheck={"style"}
            grid={7}
          />
        </div>
        <div className="group col-span-1">
          <h4 className="text-xl my-3">All Margin</h4>
          <ButtonGroupElement
            datalist={allMarginDatalist}
            activeChecker={allMargin}
            setupFunction={setAll}
            itemValue={"value"}
            toCheck={"style"}
            grid={7}
          />
        </div>
        <div className="group col-span-1">
          <h4 className="text-xl my-3">Margin Right</h4>
          <ButtonGroupElement
            datalist={rightMarginDatalist}
            activeChecker={rightMargin}
            setupFunction={setRightMargin}
            itemValue={"value"}
            toCheck={"style"}
            grid={7}
          />
        </div>
        <div className="group col-span-1 col-start-2">
          <h4 className="text-xl my-3">Margin Bottom</h4>
          <ButtonGroupElement
            datalist={bottomMarginDatalist}
            activeChecker={bottomMargin}
            setupFunction={setBottomMargin}
            itemValue={"value"}
            toCheck={"style"}
            grid={7}
          />
        </div>
      </div>
    </div>
  );
};

export default Margin;
