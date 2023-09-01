import React, { useState } from "react";
import { theme } from "../../Datalist/StyleConfigList.js/Theme";

const ElementCard = ({ child }) => {
  const [themeClassName, setThemeClassName] = useState(theme[0]);
  return (
    <div className="box p-2 shadow-sm">
      <button
        onClick={() =>
          setThemeClassName((prev) =>
            prev.value == "Light Mode" ? theme[1] : theme[0]
          )
        }
        className="bg-gray-900 rounded-md text-gray-200 p-3"
      >
       Switch to {themeClassName.value == "Light Mode" ? "Dark Mode" : "Light Mode"}
      </button>
      <div
        className={`preview flex justify-center items-center min-h-40 border-2 my-1 ${themeClassName.style}`}
      >
        {child}
      </div>
    </div>
  );
};

export default ElementCard;
