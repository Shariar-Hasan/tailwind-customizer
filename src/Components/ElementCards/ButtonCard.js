import React, { useState } from "react";
import { useSiteData } from "../../Context/AllContext";
import { theme } from "../../Datalist/StyleConfigList.js/Theme";

const ButtonCard = () => {
  const { allClassNameInOne } = useSiteData() || {};
  console.log(allClassNameInOne);
  return <button className={allClassNameInOne}>Click Me</button>;
};

export default ButtonCard;
