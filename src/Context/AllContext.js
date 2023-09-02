import { createContext, useContext, useEffect, useState } from "react";

const SiteContext = createContext();

export const useSiteData = () => {
  return useContext(SiteContext);
};

export const SiteProvider = ({ children }) => {
  // state declaration
  // border radius
  const [borderRadiusClassName, setBorderRadiusClassName] =
    useState("rounded-none");
  const [allBorderRadius, setAllBorderRadius] = useState("");
  const [topBorderRadius, setTopBorderRadius] = useState("");
  const [bottomBorderRadius, setBottomBorderRadius] = useState("");
  const [leftBorderRadius, setLeftBorderRadius] = useState("");
  const [rightBorderRadius, setRightBorderRadius] = useState("");

  // border classes
  const [borderClassName, setBorderClassName] = useState("");
  const [borderSize, setBorderSize] = useState("");
  const [borderStyle, setBorderStyle] = useState("");
  const [borderColor, setBorderColor] = useState("");

  const [allBorder, setAllBorder] = useState("");
  const [topBorder, setTopBorder] = useState("");
  const [bottomBorder, setBottomBorder] = useState("");
  const [leftBorder, setLeftBorder] = useState("");
  const [rightBorder, setRightBorder] = useState("");

  // opacity class
  const [opacityClassName, setOpacityClassName] = useState("");

  // display class
  const [displayClassName, setDisplayClassName] = useState("");

  // font classes
  const [fontSize, setFontSize] = useState("");
  const [fontFamily, setFontFamily] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [fontWeight, setFontWeight] = useState("");

  // padding classes
  const [paddingClassName, setPaddingClassName] = useState("");
  const [allPadding, setAllPadding] = useState("p-5");
  const [topPadding, setTopPadding] = useState("");
  const [bottomPadding, setBottomPadding] = useState("");
  const [leftPadding, setLeftPadding] = useState("");
  const [rightPadding, setRightPadding] = useState("");

  // margin classes
  const [marginClassName, setMarginClassName] = useState("");
  const [allMargin, setAllMargin] = useState("m-5");
  const [topMargin, setTopMargin] = useState("");
  const [bottomMargin, setBottomMargin] = useState("");
  const [leftMargin, setLeftMargin] = useState("");
  const [rightMargin, setRightMargin] = useState("");

  // bg classes
  const [backgroundClassName, setBackgroundClassName] = useState("bg-gray-600");

  // all classes
  const [allClassNameInOne, setAllClassNameInOne] = useState("");
  useEffect(() => {
    const fullClassName = `${borderRadiusClassName} ${borderClassName} ${borderSize} ${borderStyle} ${borderColor} ${opacityClassName} ${fontColor} ${fontFamily} ${fontWeight} ${fontSize} ${paddingClassName} ${marginClassName} ${backgroundClassName} ${displayClassName}`;
    setAllClassNameInOne(fullClassName);
    console.log(fullClassName)
  }, [
    borderRadiusClassName,
    borderClassName,
    borderSize,
    borderStyle,
    borderColor,
    opacityClassName,
    paddingClassName,
    marginClassName,
    backgroundClassName,
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
    fontColor,
    setFontColor,
    fontWeight,
    setFontWeight,
    displayClassName,
    setDisplayClassName,
  ]);
  const value = {
    // radius
    borderRadiusClassName,
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

    // border
    borderSize,
    setBorderSize,
    borderStyle,
    setBorderStyle,
    borderColor,
    setBorderColor,
    borderClassName,
    setBorderClassName,
    allBorder,
    setAllBorder,
    topBorder,
    setTopBorder,
    bottomBorder,
    setBottomBorder,
    leftBorder,
    setLeftBorder,
    rightBorder,
    setRightBorder,

    //opacity
    opacityClassName,
    setOpacityClassName,

    // typography
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
    fontColor,
    setFontColor,
    fontWeight,
    setFontWeight,

    //padding
    paddingClassName,
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

    //margin
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

    // bg color
    backgroundClassName,
    setBackgroundClassName,

    // display
    displayClassName,
    setDisplayClassName,

    //all class name in one
    allClassNameInOne,
    setAllClassNameInOne,
  };
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};
