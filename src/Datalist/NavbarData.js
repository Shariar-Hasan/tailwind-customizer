import ButtonCard from "../Components/ElementCards/ButtonCard";
import ElementCard from "../Components/ElementCards/ElementCard";
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
    element: <ElementCard child={<ButtonCard />} />,
    code: "button",
    codeText: "Custom Button",
    icon: <i className="fa-solid fa-toggle-on"></i>,
  },
  {
    name: "Box",
    desc: "Custom tailwind box",
    routelink: "box",
    element: <ElementCard child={<BoxCard />} />,
    code: "div",
    codeText: "Custom Box",
    icon: <i className="fa-solid fa-box"></i>,
  },
  {
    name: "Text Input",
    desc: "Custom tailwind text input",
    routelink: "text-input",
    element: (
      <ElementCard child={<h1 className="text-4xl">Not Build yet</h1>} />
    ),
    code: "input",
    codeText: "Custom Placeholder",
    icon: <i className="fa-solid fa-keyboard"></i>,
  },
  {
    name: "Input",
    desc: "Custom tailwind input",
    routelink: "input",
    element: (
      <ElementCard child={<h1 className="text-4xl">Not Build yet</h1>} />
    ),
    icon: <i className="fa-solid fa-keyboard"></i>,
  },
];
