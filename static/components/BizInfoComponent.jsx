import React from "react";

const BizInfoComponent = () => {
  return(
    <div className="navbar-text business-information">
      <div className="business-information__name heading-2" href="/">
        EnglishParts.com
      </div>
      <div className="business-contact-details">
        <div className="contact-detail business-contact-details__location">
          5850 Stadium Dr, Kalamazoo, MI 49009
        </div>
        <div className="contact-detail business-contact-details__phone">
          866.467.1776
        </div>
        <div className="contact-detail business-contact-details__email">
          <a tabIndex="0" className="small" href="#">
            sales@englishparts.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default BizInfoComponent