import Border from "../Components/StyleDesign/Border";
import Background from "./../Components/StyleDesign/Background";
import Opacity from "./../Components/StyleDesign/Opacity";
import Typography from "./../Components/StyleDesign/Typography";
import Padding from "./../Components/StyleDesign/Padding";
import Margin from "./../Components/StyleDesign/Margin";
import BorderRadius from "./../Components/StyleDesign/BorderRadius";
import Display from "./../Components/StyleDesign/Display";

export const customizationList = [
  {
    name: "Background",
    element: <Background />,
  },
  {
    name: "Border",
    element: <Border />,
  },
  {
    name: "Border Radius",
    element: <BorderRadius />,
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
  {
    name: "Display",
    element: <Display />,
  },
];
