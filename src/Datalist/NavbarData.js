import ButtonCard from "../Components/ElementCards/ButtonCard";
import BoxCard from "./../Components/ElementCards/BoxCard";

export const navbarData = [
  {
    name: "Home",
    routelink: "/",
  },
  {
    name: "Contact",
    routelink: "/contact",
  },
];
export const moreNavlinkData = [
  {
    name: "Button",
    desc: "Custom tailwind button",
    routelink: "button",
    element: <ButtonCard />,
    code: "button",
    codeText: "Custom Button",
  },
  {
    name: "Box",
    desc: "Custom tailwind box",
    routelink: "box",
    element: <BoxCard />,
    code: "div",
    codeText: "Custom Box",
  },
  {
    name: "Text Input",
    desc: "Custom tailwind text input",
    routelink: "text-input",
    element: <BoxCard />,
    code: "input",
    codeText: "Custom Placeholder",
  },
  {
    name: "Input",
    desc: "Custom tailwind input",
    routelink: "input",
    element: <BoxCard />,
  },
];
