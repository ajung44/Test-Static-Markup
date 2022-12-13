import React from "react";

const GarageContainer = () => {
  return (
    <div className="garage__container" style={ { display: "none" } }>
        <div id="garageContainer" className="garage garage-vehicles">
          <div className="garage__header">
            My Garage
            <button type="button" aria-label="close" className="close my-garage__close">
              <span aria-hidden="true">
                ×
              </span>
            </button>
          </div>
          
          <div className="garage__content no-garage-content">
            <div className="garage__selection" style={ { display: "none" } }>
              <span aria-hidden="true" className="icon-partman"></span>
              <div className="garage__help">
                You can edit the name of your vehicle by clicking the pencil icon on the right.
              </div> 
              <div className="garage-vehicles"></div>
              <div className="garage__additions no-vehicles">
              <div className="vehicle-selection-addition">
              <button type="button" className="garage__select-vehicle">
                + Add New Vehicle
              </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default GarageContainer;