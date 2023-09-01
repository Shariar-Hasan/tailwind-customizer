import React from "react";
import NavigationBar from "../Components/NavigationBar/NavigationBar";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <div className="box">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
