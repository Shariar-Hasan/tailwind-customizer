import React from "react";
import { siteCofig } from "../../Datalist/SiteData";

const FooterBottom = () => {
  return (
    <div className="py-5">
      <p className="text-center">
        &867; Copyright {siteCofig?.copyRightYear} {siteCofig?.ownerName} || Made with Care😉 
      </p>
    </div>
  );
};

export default FooterBottom;
