import React, { useEffect, useState } from "react";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import ButtonCard from "../Components/ElementCards/ButtonCard";
import SideBar from "../Components/SideBar/SideBar";
import { useParams } from "react-router-dom";
import { moreNavlinkData } from "../Datalist/NavbarData";
import BoxCard from "../Components/ElementCards/BoxCard";

const Customize = () => {
  const { element = "" } = useParams();

  const [currentElement, setCurrentElement] = useState("Button");
  const [currentAttribute, setCurrentAttribute] = useState("Border Radius");
  useEffect(() => {
    const item = moreNavlinkData.find((item) => item.routelink === element);
    console.log({ item, element, moreNavlinkData });
    setCurrentElement(item?.name || "");
  }, [element]);
  return (
    <div>
      <NavigationBar />
      <div className="container mx-auto my-4">
        <div className="grid grid-cols-12">
          <div className="md:col-span-9 col-span-12">
            {currentElement === "Button" ? (
              <ButtonCard />
            ) : currentElement === "Box" ? (
              <BoxCard />
            ) : (
              //   <h1 className="text-4xl">
              //     Please select an Element from the navbar
              //   </h1>
              <h1 className="text-4xl">Other Element will be added soon</h1>
            )}
          </div>

          <div className="md:col-span-3 col-span-12">
            <SideBar
              currentAttribute={currentAttribute}
              setCurrentAttribute={setCurrentAttribute}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
