import React from "react";
import NavigationBar from "../Components/NavigationBar/NavigationBar";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container mx-auto my-5">
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <div className="box">
              The Tailwind Customization Tool is a web application designed to
              empower users to customize various web elements, including
              buttons, divs as box, inputs and more. It provides an intuitive
              interface for adjusting design parameters such as border styles,
              border radius, background colors, margins, opacity levels,
              padding, and typography settings. After customizing their chosen
              elements, users can instantly generate the corresponding Tailwind
              CSS code, simplifying the process of integrating their customized
              designs into their web projects.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
