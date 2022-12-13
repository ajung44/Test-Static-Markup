import React from "react";

const MobileButtonComponent = () => {
  return (
    <button type="button" className="navbar-toggle collapsed header-mobile-toggle" data-toggle="collapse" aria-expanded="false" id="MobileNavToggle">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
  );
};

export default MobileButtonComponent;