import React from "react";
import body from "../../files/body.jpg";
import brake from "../../files/brake-system.jpg";
import cables from "../../files/cables.jpg";
import carCare from "../../files/car-care.jpg";
import compete from "../../files/competition-parts.jpg";
import convert from "../../files/tops-covers.jpg";
import cool from "../../files/cooling.jpg";
import electric from "../../files/electrical-components.jpg";
import engine from "../../files/engine-driveline.jpg";
import exhaust from "../../files/exhaust-emission.jpg";
import exterior from "../../files/exterior.jpg";
import fuel from "../../files/fuel-system.jpg";
import interior from "../../files/interior.jpg";
import maintenance from "../../files/maintenance.jpg";
import oil from "../../files/oil-system.jpg";
import perf from "../../files/performance-handling.jpg";
import suspension from "../../files/suspension.jpg";
import transmission from "../../files/transmission.jpg";

import CategoryComponent from "../components/CategoryComponent";

const CategoryContainer = () => {
  return (
    <div id="Content_PageBody_QuickStartControl_QuickStartUpdatePanel" className="quick-start-update-panel">
      <div id="Content_PageBody_QuickStartControl_categoriesSelector" className="QuickStartLinksControl">
        <div id="Content_PageBody_QuickStartControl_div_quickStartLinks" className="quickStart-Categories">
          <div id="Content_PageBody_QuickStartControl_QuickStartPlacementAlternative" className="quickStartContentWrap qsLinksContainer">
            <div className="quickStartAltTitle">
              <h2>
                Select a Category
              </h2>
            </div>
            <div className="quickStartAltText"></div>
          </div>
          <div className="qsLinksContainer">
            <div id="Content_PageBody_QuickStartControl_CategoryList" className="category-panel">
              <CategoryComponent href="#" src={body} category="Body" />
              <CategoryComponent href="#" src={brake} category="Brake System" />
              <CategoryComponent href="#" src={cables} category="Cables" />
              <CategoryComponent href="#" src={carCare} category="Car Care, Tools and Shop Supplies" />
              <CategoryComponent href="#" src={compete} category="Competition Parts" />
              <CategoryComponent href="#" src={convert} category="Convertible Tops, Hard Tops and Tonneau Covers" />
              <CategoryComponent href="#" src={cool} category="Cooling System" />
              <CategoryComponent href="#" src={electric} category="Electrical Components" />
              <CategoryComponent href="#" src={engine} category="Engine and Driveline" />
              <CategoryComponent href="#" src={exhaust} category="Exhaust and Emissions" />
              <CategoryComponent href="#" src={exterior} category="Exterior" />
              <CategoryComponent href="#" src={fuel} category="Fuel Systems" />
              <CategoryComponent href="#" src={interior} category="Interior" />
              <CategoryComponent href="#" src={maintenance} category="Maintenance" />
              <CategoryComponent href="#" src={oil} category="Oil System" />
              <CategoryComponent href="#" src={perf} category="Performance & Handling" />
              <CategoryComponent href="#" src={suspension} category="Suspension" />
              <CategoryComponent href="#" src={transmission} category="Transmission, Gearbox and Clutch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryContainer;