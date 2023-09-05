import React from "react";
import { copy } from "../../Datalist/Functions/copyToClipBoard";

const GeneratedCode = ({ allClassNameInOne, currentElement }) => {
  return (
    <div
      className={`duration-300  bg-gray-900 p-4 text-gray-200 font-mono cursor-pointer origin-top  ${
        true
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
    </div>
  );
};

export default GeneratedCode;
