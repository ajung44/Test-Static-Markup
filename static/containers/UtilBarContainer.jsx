import React from "react";
import CartComponent from "../components/CartComponent";
import SearchBarComponent from "../components/SearchBarComponent";
import CartControlContainer from "./CartControlContainer";
import VehicleDropContainer from "./VehicleDropContainer";

const UtilBarContainer = () => {
  return (
    <div className="utility-bar cf" id="UtilityBar">
      <div className="utility-bar-top">
        <div className="container utility-bar-container">
          <SearchBarComponent />
          <VehicleDropContainer />
          <CartComponent />
        </div>
        <CartControlContainer />
      </div>
    </div>
  );
};

export default UtilBarContainer;