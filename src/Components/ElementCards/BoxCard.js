import React from "react";
import { useSiteData } from "../../Context/AllContext";

const BoxCard = ({ textToShow }) => {
  const { allClassNameInOne } = useSiteData();
  return <div className={allClassNameInOne}>{textToShow}</div>;
};

export default BoxCard;
