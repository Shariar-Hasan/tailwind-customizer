import React from "react";
import { useSiteData } from "../../Context/AllContext";

const ButtonCard = () => {
  const { allClassNameInOne } = useSiteData() || {};
  // console.log(allClassNameInOne);
  return <button className={allClassNameInOne}>Click Me</button>;
};

export default ButtonCard;
