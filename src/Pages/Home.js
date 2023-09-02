import React from "react";
import { moreNavlinkData } from "../Datalist/NavbarData";
import CustomElementLink from "../Components/CommonComponents/CustomElementLink";
import { Link } from "react-router-dom";
import bannner from "./../Assets/web_banner.png";
const Home = () => {
  return (
    <div>
      <div className="container mx-auto my-5">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <div className="box my-3">
              <img src={bannner} alt={"Tailwind Customizer"} />
            </div>
            <div className="box my-3">
              <p>
                The Tailwind Customization Tool is a web application designed to
                empower users to customize various web elements, including
                buttons, divs as box, inputs and more. It provides an intuitive
                interface for adjusting design parameters such as border styles,
                border radius, background colors, margins, opacity levels,
                padding, and typography settings. After customizing their chosen
                elements, users can instantly generate the corresponding
                Tailwind CSS code, simplifying the process of integrating their
                customized designs into their web projects.{" "}
              </p>
              <p className="text-red-700">
                Note : This site is not responsive to any other devices than
                laptop view.
              </p>
            </div>
          </div>
          <div className="col-span-4">
            <div className="box mb-3">
              <h1 className="text-2xl font-bold mb-8">Try Customizing : </h1>
              {moreNavlinkData.map((item) => (
                <Link to={"customize/" + item.routelink}>
                  <CustomElementLink item={item} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
