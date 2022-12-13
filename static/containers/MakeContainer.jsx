import React from "react";
import MakeComponent from "../components/MakeComponent";
import austin from "../../files/austin-healey.png";
import jag from "../../files/jaguar.png";
import mg from "../../files/mg.png";
import triumph from "../../files/triumph.png";

const MakeContainer = () => {
  return (
    <div id="Content_PageBody_RefineVehicleLinksUpdatePanel">
      <div id="Content_PageBody_VehicleSelector" className="selectVehicle">
        <div id="Content_PageBody_div_seoLinks" className="container">
          <div id="Content_PageBody_seoContainerDiv" className="seoContainer">
            <div id="Content_PageBody_seoTitle" className="seoTitle lead text-center">
            <h2>
              Select a  Make
            </h2>
            </div>
            <div id="Content_PageBody_RefineResultsDefaultContainer" className="row refineResults">
              <MakeComponent href="#" src={austin} make="Austin Healey" alt="" />
              <MakeComponent href="#" src={jag} make="Jaguar" alt="" />
              <MakeComponent href="#" src={mg} make="MG" alt="" />
              <MakeComponent href="#" src={triumph} make="Triumph" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeContainer;