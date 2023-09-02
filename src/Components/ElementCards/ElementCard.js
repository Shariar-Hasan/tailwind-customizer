import React, { useEffect, useState } from "react";
import { theme } from "../../Datalist/StyleConfigList.js/Theme";
import Swal from "sweetalert2";
import { useSiteData } from "../../Context/AllContext";
import { useParams } from "react-router-dom";
import { moreNavlinkData } from "../../Datalist/NavbarData";
import { toast } from "react-hot-toast";
import { copy } from "../../Datalist/Functions/copyToClipBoard";

const ElementCard = ({ child }) => {
  const [themeClassName, setThemeClassName] = useState(theme[0]);
  const { allClassNameInOne } = useSiteData();
  const { element = "" } = useParams();
  const [currentElement, setCurrentElement] = useState();
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    // checking and returning the url matched element
    const itemElement = moreNavlinkData.find(
      (item) => item.routelink === element
    );
    setCurrentElement(itemElement);
  }, [element]);

  return (
    <div className="box p-2 shadow-sm">
      <button
        onClick={() =>
          setThemeClassName((prev) =>
            prev.value === "Light Mode" ? theme[1] : theme[0]
          )
        }
        className="bg-gray-900 rounded-md text-gray-200 p-3"
      >
        Switch to{" "}
        {themeClassName.value === "Light Mode" ? "Dark Mode" : "Light Mode"}
      </button>
      <button
        className="ml-2 bg-gray-900 rounded-md text-gray-200 p-3"
        onClick={() => setShowCode((prev) => !prev)}
      >
        {showCode ? "Hide Code" : "Generate Code"}
      </button>
      <div
        className={`preview flex justify-center items-center min-h-40 border-2 my-1 p-2 ${themeClassName.style}`}
      >
        <div className="bg-gray-400 duration-500">{child}</div>
        
      </div>
      {
        <div
          className={`duration-300  bg-gray-900 p-10 text-gray-200 font-mono cursor-pointer origin-top  ${
            showCode
              ? "h-full scale-y-100 visible block"
              : "h-0 scale-y-0 invisible hidden"
          }`}
          title="Click to Copy"
          onClick={() =>
            copy(
              `<${currentElement?.code} class="${allClassNameInOne}">${currentElement?.codeText}</${currentElement?.code}>`
            )
          }
        >
          <span>{"<"}</span>
          <span className="text-red-600">{currentElement?.code + " "}</span>
          <span className="text-orange-500">class</span>="
          <span className="text-green-400">{allClassNameInOne}</span>"
          {">" + currentElement?.codeText + "</"}
          <span className="text-red-600">{currentElement?.code}</span>
          {">"}
          {}
        </div>
      }
    </div>
  );
};

export default ElementCard;
