import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar/SideBar";
import { useParams } from "react-router-dom";
import { moreNavlinkData } from "../Datalist/NavbarData";
import { customizationList } from "../Datalist/CustomizationList";
import NoPageFound from "./NoPageFound";

const Customize = () => {
  const { element = "" } = useParams();

  const [notFound, setNotFound] = useState(false);
  const [currentElement, setCurrentElement] = useState(
    moreNavlinkData[0]?.element
  );
  const [currentAttribute, setCurrentAttribute] = useState(
    customizationList[0]?.element
  );
  useEffect(() => {
    // checking and returning the url matched element
    const itemElement = moreNavlinkData.find(
      (item) => item.routelink === element
    );
    if (!itemElement) setNotFound(true);
    setCurrentElement(
      itemElement?.element || (
        <h2 className="text-3xl p-3">
          Please select items from the navigation bar
        </h2>
      )
    );
  }, [element]);
  return (
    <div className="container mx-auto my-5">
      {notFound ? (
        <NoPageFound />
      ) : (
        <div className="grid grid-cols-12">
          <div className="grid grid-cols-12 md:col-span-9 col-span-12">
            <div className="col-span-12 md:sticky z-10 top-0">
              {currentElement ? (
                currentElement
              ) : (
                <h1 className="text-4xl">Other Element will be added soon</h1>
              )}
            </div>
            <div className="col-span-12 my-5">
              <div className="box">
                <div className="border-2 mb-4">{currentAttribute}</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 col-span-12">
            <SideBar
              currentAttribute={currentAttribute}
              setCurrentAttribute={setCurrentAttribute}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Customize;
