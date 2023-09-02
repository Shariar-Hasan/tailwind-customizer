import React from "react";
import { useSiteData } from "../../Context/AllContext";

const ButtonCard = ({ textToShow }) => {
  const { allClassNameInOne } = useSiteData() || {};
  // console.log(allClassNameInOne);
  return <button className={allClassNameInOne}>{textToShow}</button>;
};

export default ButtonCard;
