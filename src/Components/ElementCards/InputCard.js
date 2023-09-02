import React from "react";
import { useSiteData } from "../../Context/AllContext";

const InputCard = ({ textToShow }) => {
  const { allClassNameInOne } = useSiteData();
  return (
    <input type="text" placeholder={textToShow} className={allClassNameInOne + " block"} />
  );
};

export default InputCard;
