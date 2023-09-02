import React from "react";
import { siteCofig } from "../../Datalist/SiteData";

const FooterBottom = () => {
  return (
    <>
      <div className="h-24 "></div>
      <div className="py-5 mt-auto bg-gray-900 text-white bottom-0 w-full">
        <p className="text-center">
          ©️ Copyright {siteCofig?.copyRightYear} ||
          <strong> {siteCofig?.ownerName}</strong> || Made with Care😉
        </p>
      </div>
    </>
  );
};

export default FooterBottom;
