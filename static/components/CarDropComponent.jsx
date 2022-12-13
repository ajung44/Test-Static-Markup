import React from "react";

const CarDropComponent = () => {
  return (
    <div id="selectVehicle" className="utility-bar__element">
        <div id="selectVehicleText" title="My Garage" className="utility-bar__select-vehicle-text">
          Select Your Vehicle
        </div>
        <button type="button" id="UtilityBarToggleButton" title="Select Vehicle Button" aria-label="Select Vehicle Button" className="utility-bar__select-vehicle-button">
          <span className="icon-arrow-down select-vehicle-icon"></span>
        </button>
      </div>
  );
};

export default CarDropComponent;