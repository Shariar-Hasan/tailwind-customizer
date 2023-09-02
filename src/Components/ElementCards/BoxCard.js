import React from "react";
import { useSiteData } from "../../Context/AllContext";

const BoxCard = ({ currentAttribute }) => {
  const { allClassNameInOne } = useSiteData();
  return <div className={allClassNameInOne}>I Am Box</div>;
};

export default BoxCard;
