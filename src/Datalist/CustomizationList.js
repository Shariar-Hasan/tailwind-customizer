import Border from "../Components/StyleDesign/Border";
import Background from "./../Components/StyleDesign/Background";
import Opacity from "./../Components/StyleDesign/Opacity";
import Typography from "./../Components/StyleDesign/Typography";
import Padding from "./../Components/StyleDesign/Padding";
import Margin from "./../Components/StyleDesign/Margin";
import BorderRadius from "./../Components/StyleDesign/BorderRadius";

export const customizationList = [
  {
    name: "Border",
    element: <Border />,
  },
  {
    name: "Border Radius",
    element: <BorderRadius />,
  },
  {
    name: "Background",
    element: <Background />,
  },
  {
    name: "Opacity",
    element: <Opacity />,
  },
  {
    name: "Typography",
    element: <Typography />,
  },
  {
    name: "Padding",
    element: <Padding />,
  },
  {
    name: "Margin",
    element: <Margin />,
  },
];
