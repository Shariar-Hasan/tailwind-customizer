import React, { useEffect } from "react";
import ButtonGroupElement from "../CommonComponents/ButtonGroupElement";
import {
  allPaddingDatalist,
  bottomPaddingDatalist,
  leftPaddingDatalist,
  rightPaddingDatalist,
  topPaddingDatalist,
} from "../../Datalist/StyleConfigList.js/Padding";
import { useSiteData } from "../../Context/AllContext";

const Padding = () => {
  // getting context data
  const {
    setPaddingClassName,
    allPadding,
    setAllPadding,
    topPadding,
    setTopPadding,
    bottomPadding,
    setBottomPadding,
    leftPadding,
    setLeftPadding,
    rightPadding,
    setRightPadding,
  } = useSiteData();

  //   load data
  function setAll(item) {
    setAllPadding(item);
    // set top border
    const top = topPaddingDatalist.find(
      (data) => data.style.replace("pt", "") === item.replace("p", "")
    );
    setTopPadding(top.style);
    // set bottom border
    const bottom = bottomPaddingDatalist.find(
      (data) => data.style.replace("pb", "") === item.replace("p", "")
    );
    setBottomPadding(bottom.style);
    // set left border
    const left = leftPaddingDatalist.find(
      (data) => data.style.replace("pl", "") === item.replace("p", "")
    );
    setLeftPadding(left.style);
    // set right border
    const right = rightPaddingDatalist.find(
      (data) => data.style.replace("pr", "") === item.replace("p", "")
    );
    setRightPadding(right.style);
    console.log({ item, top, bottom, left, right });
  }

  useEffect(() => {
    let classNameTemp = null;
    if (
      allPadding.replace("p", "") !== topPadding.replace("pt", "") ||
      allPadding.replace("p", "") !== rightPadding.replace("pr", "") ||
      allPadding.replace("p", "") !== leftPadding.replace("pl", "") ||
      allPadding.replace("p", "") !== bottomPadding.replace("pb", "")
    ) {
      classNameTemp = `${topPadding} ${bottomPadding} ${leftPadding} ${rightPadding}`;
    } else {
      classNameTemp = allPadding;
    }
    setPaddingClassName(classNameTemp);
    // console.log(classNameTemp);
  }, [allPadding, topPadding, leftPadding, rightPadding, bottomPadding]);
  return (
    <div className="text-center">
      <div className="grid grid-cols-3 gap-0 my-3">
        <div className="group col-span-1 col-start-2">
          <h4 className="text-xl my-3">Padding Top</h4>
          <ButtonGroupElement
            datalist={topPaddingDatalist}
            activeChecker={topPadding}
            setupFunction={setTopPadding}
            itemValue={"value"}
            toCheck={"style"}
            grid={7}
          />
        </div>
        <div className="group col-span-1 col-start-1">
          <h4 className="text-xl my-3">Padding Left</h4>
          <ButtonGroupElement
            datalist={leftPaddingDatalist}
            activeChecker={leftPadding}
            setupFunction={setLeftPadding}
            itemValue={"value"}
            toCheck={"style"}
            grid={7}
          />
        </div>
        <div className="group col-span-1">
          <h4 className="text-xl my-3">All Padding</h4>
          <ButtonGroupElement
            datalist={allPaddingDatalist}
            activeChecker={allPadding}
            setupFunction={setAll}
            itemValue={"value"}
            toCheck={"style"}
            grid={7}
          />
        </div>
        <div className="group col-span-1">
          <h4 className="text-xl my-3">Padding Right</h4>
          <ButtonGroupElement
            datalist={rightPaddingDatalist}
            activeChecker={rightPadding}
            setupFunction={setRightPadding}
            itemValue={"value"}
            toCheck={"style"}
            grid={7}
          />
        </div>
        <div className="group col-span-1 col-start-2">
          <h4 className="text-xl my-3">Padding Bottom</h4>
          <ButtonGroupElement
            datalist={bottomPaddingDatalist}
            activeChecker={bottomPadding}
            setupFunction={setBottomPadding}
            itemValue={"value"}
            toCheck={"style"}
            grid={7}
          />
        </div>
      </div>
    </div>
  );
};

export default Padding;
