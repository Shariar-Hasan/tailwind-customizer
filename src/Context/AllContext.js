import { createContext, useContext, useEffect, useState } from "react";

const SiteContext = createContext();

export const useSiteData = () => {
  return useContext(SiteContext);
};

export const SiteProvider = ({ children }) => {
  // state declaration
  const [borderRadiusClassName, setBorderRadiusClassName] = useState("");
  const [borderClassName, setBorderClassName] = useState("");
  const [borderSize, setBorderSize] = useState("border");
  const [borderStyle, setBorderStyle] = useState("border-solid");
  const [borderColor, setBorderColor] = useState("border-black");
  const [opacityClassName, setOpacityClassName] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [fontFamily, setFontFamily] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [fontWeight, setFontWeight] = useState("");
  const [paddingClassName, setPaddingClassName] = useState("p-5");
  const [marginClassName, setMarginClassName] = useState("");
  const [backgroundClassName, setBackgroundClassName] = useState("bg-gray-600");
  const [allClassNameInOne, setAllClassNameInOne] = useState("");
  useEffect(() => {
    const fullClassName = `${borderRadiusClassName} ${borderClassName} ${borderSize} ${borderStyle} ${borderColor} ${opacityClassName} ${fontColor} ${fontFamily} ${fontWeight} ${fontSize} ${paddingClassName} ${marginClassName} ${backgroundClassName} `;
    setAllClassNameInOne(fullClassName);
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
  ]);
  const value = {
    // radius
    borderRadiusClassName,
    setBorderRadiusClassName,

    // border
    borderSize,
    setBorderSize,
    borderStyle,
    setBorderStyle,
    borderColor,
    setBorderColor,
    borderClassName,
    setBorderClassName,

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

    //margin
    marginClassName,
    setMarginClassName,

    // bg color
    backgroundClassName,
    setBackgroundClassName,

    //all class name in one
    allClassNameInOne,
    setAllClassNameInOne,
  };
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};
