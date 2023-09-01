import { createContext, useContext, useState } from "react";

const SiteContext = createContext();

export const useSiteData = () => {
  return useContext(SiteContext);
};

export const SiteProvider = ({ children }) => {
  const [borderRadius, setBorderRadius] = useState("");
  const [border, setBorder] = useState("");
  const [opacity, setOpacity] = useState("");
  const [typography, setTypography] = useState("");
  const [padding, setPadding] = useState("");
  const [margin, setMargin] = useState("");
  const [background, setBackground] = useState("");
  const value = {
    borderRadius,
    setBorderRadius,
    border,
    setBorder,
    opacity,
    setOpacity,
    typography,
    setTypography,
    padding,
    setPadding,
    margin,
    setMargin,
    background,
    setBackground,
  };
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};
