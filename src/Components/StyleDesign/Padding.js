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
import { checker } from "../../Datalist/Functions/similarityChecker";

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
  }

  useEffect(() => {
    let classNameTemp = null;
    if (
      checker(allPadding, "p", topPadding, "pt", false) ||
      checker(allPadding, "p", rightPadding, "pr", false) ||
      checker(allPadding, "p", leftPadding, "pl", false) ||
      checker(allPadding, "p", bottomPadding, "pb", false)
    ) {
      classNameTemp = `${topPadding} ${bottomPadding} ${leftPadding} ${rightPadding}`;
    } else {
      classNameTemp = allPadding;
    }
    setPaddingClassName(classNameTemp);
    // console.log(classNameTemp);
  }, [topPadding, leftPadding, rightPadding, bottomPadding]);
  useEffect(() => {
    // set top border
    const top = topPaddingDatalist.find((data) =>
      checker(data.style, "pt", allPadding, "p", true)
    );
    setTopPadding(top?.style);
    // set bottom border
    const bottom = bottomPaddingDatalist.find((data) =>
      checker(data.style, "pb", allPadding, "p", true)
    );
    setBottomPadding(bottom?.style);
    // set left border
    const left = leftPaddingDatalist.find((data) =>
      checker(data.style, "pl", allPadding, "p", true)
    );
    setLeftPadding(left?.style);
    // set right border
    const right = rightPaddingDatalist.find((data) =>
      checker(data.style, "pr", allPadding, "p", true)
    );
    setRightPadding(right?.style);
  }, [allPadding]);
  return (
    <div className="text-center">
      <div className="grid grid-cols-3 gap-0 my-3">
        <div className="group col-span-1 col-start-2">
          <ButtonGroupElement
            datalist={topPaddingDatalist}
            activeChecker={topPadding}
            setupFunction={setTopPadding}
            itemValue={"value"}
            toCheck={"style"}
            grid={7}
            heading={"Top"}
          />
        </div>
        <div className="group col-span-1 col-start-1">
          <ButtonGroupElement
            datalist={leftPaddingDatalist}
            activeChecker={leftPadding}
            setupFunction={setLeftPadding}
            itemValue={"value"}
            toCheck={"style"}
            grid={7}
            heading={"Left"}
          />
        </div>
        <div className="group col-span-1">
          <ButtonGroupElement
            datalist={allPaddingDatalist}
            activeChecker={allPadding}
            setupFunction={setAll}
            itemValue={"value"}
            toCheck={"style"}
            grid={7}
            heading={"All Side"}
          />
        </div>
        <div className="group col-span-1">
          <ButtonGroupElement
            datalist={rightPaddingDatalist}
            activeChecker={rightPadding}
            setupFunction={setRightPadding}
            itemValue={"value"}
            toCheck={"style"}
            grid={7}
            heading={"Right"}
          />
        </div>
        <div className="group col-span-1 col-start-2">
          <ButtonGroupElement
            datalist={bottomPaddingDatalist}
            activeChecker={bottomPadding}
            setupFunction={setBottomPadding}
            itemValue={"value"}
            toCheck={"style"}
            grid={7}
            heading={"Bottom"}
          />
        </div>
      </div>
    </div>
  );
};

export default Padding;
