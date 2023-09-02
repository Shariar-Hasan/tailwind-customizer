import { toast } from "react-hot-toast";

export const copy = (textToCopy) => {
  const tempInput = document.createElement("input");
  tempInput.value = textToCopy;

  // Append the input element to the DOM
  document.body.appendChild(tempInput);

  // Select and copy the text
  tempInput.select();
  document.execCommand("copy");
  // Remove the temporary input element
  document.body.removeChild(tempInput);

  toast.success("Code Successfully Copied!");
};
