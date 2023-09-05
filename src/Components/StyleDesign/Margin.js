import React, { useEffect } from "react";
import ButtonGroupElement from "../CommonComponents/ButtonGroupElement";
import {
  allMarginDatalist,
  bottomMarginDatalist,
  leftMarginDatalist,
  rightMarginDatalist,
  topMarginDatalist,
} from "../../Datalist/StyleConfigList.js/Margin";
import { useSiteData } from "../../Context/AllContext";
import { checker } from "../../Datalist/Functions/similarityChecker";

const Margin = () => {
  // getting context data
  const {
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
  }
  useEffect(() => {
    let classNameTemp = null;
    if (
      checker(allMargin, "m", topMargin, "mt", false) ||
      checker(allMargin, "m", rightMargin, "mr", false) ||
      checker(allMargin, "m", leftMargin, "ml", false) ||
      checker(allMargin, "m", bottomMargin, "mb", false)
    ) {
      classNameTemp = `${topMargin} ${bottomMargin} ${leftMargin} ${rightMargin}`;
    } else {
      classNameTemp = allMargin;
    }
    setMarginClassName(classNameTemp);

    // console.log(classNameTemp);
  }, [topMargin, leftMargin, rightMargin, bottomMargin]);

  // changing top, bottom, left, right margin along with the all margin
  useEffect(() => {
    const top = topMarginDatalist.find((data) =>
      checker(data.style, "mt", allMargin, "m", true)
    );
    setTopMargin(top?.style);
    const bottom = bottomMarginDatalist.find((data) =>
      checker(data.style, "mb", allMargin, "m", true)
    );
    setBottomMargin(bottom?.style);
    const left = leftMarginDatalist.find((data) =>
      checker(data.style, "ml", allMargin, "m", true)
    );
    setLeftMargin(left?.style);
    const right = rightMarginDatalist.find((data) =>
      checker(data.style, "mr", allMargin, "m", true)
    );
    setRightMargin(right?.style);
    console.log({ top, bottom, left, right });
  }, [allMargin]);
  return (
    <div className="text-center">
      <div className="grid grid-cols-3 gap-0 my-3">
        <div className="group col-span-1 col-start-2">
          <ButtonGroupElement
            datalist={topMarginDatalist}
            activeChecker={topMargin}
            setupFunction={setTopMargin}
            itemValue={"value"}
            toCheck={"style"}
            grid={7}
            heading={"Top"}
          />
        </div>
        <div className="group col-span-1 col-start-1">
          <ButtonGroupElement
            datalist={leftMarginDatalist}
            activeChecker={leftMargin}
            setupFunction={setLeftMargin}
            itemValue={"value"}
            toCheck={"style"}
            grid={7}
            heading={"Left"}
          />
        </div>
        <div className="group col-span-1">
          <ButtonGroupElement
            datalist={allMarginDatalist}
            activeChecker={allMargin}
            setupFunction={setAll}
            itemValue={"value"}
            toCheck={"style"}
            grid={7}
            heading={"All Side"}
          />
        </div>
        <div className="group col-span-1">
          <ButtonGroupElement
            datalist={rightMarginDatalist}
            activeChecker={rightMargin}
            setupFunction={setRightMargin}
            itemValue={"value"}
            toCheck={"style"}
            grid={7}
            heading={"Right"}
          />
        </div>
        <div className="group col-span-1 col-start-2">
          <ButtonGroupElement
            datalist={bottomMarginDatalist}
            activeChecker={bottomMargin}
            setupFunction={setBottomMargin}
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

export default Margin;
