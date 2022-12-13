import React from "react";
import BizInfoComponent from "../components/BizInfoComponent";
import logo from "../../files/logo.png"
import MobileButtonComponent from "../components/MobileButtonComponent";
import DeskNavListComponent from "../components/DeskNavListComponent";

const NavigationContainer = () => {
  return (
    <div className="header-navigation sp-nav dealer" id="HeaderNavigationContainer">
      <div className="navbar navbar-default header-nav-default">
        <nav className="navbar navbar-default headerNav">
          <div className="container"> 
            <div className="collapse navbar-collapse" id="nav-links"></div>
              <div className="navbar-header header-logo">

                <a className="navbar-brand business-logo" href="#">
                  <img alt="" src="./files/logo.png" />
                </a>
              </div>

              <BizInfoComponent />
              <MobileButtonComponent />
              <DeskNavListComponent />

          </div> 
        </nav>
      </div>
    </div>
  );
};

export default NavigationContainer;