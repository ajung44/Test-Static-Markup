import React from "react";
import CarDropComponent from "../components/CarDropComponent";
import GarageContainer from "./GarageContainer";

const VehicleDropContainer = () => {
  return (
    <div id="MyGarage" className="utility-bar__section utility-bar__select-vehicle">
      <CarDropComponent />

      <div className="boxTriangle" style={ { display: "none" } }>
        <span className="top-bot my-garage-top"></span>
      </div>

      <GarageContainer />
    </div>
  );
};

export default VehicleDropContainer;