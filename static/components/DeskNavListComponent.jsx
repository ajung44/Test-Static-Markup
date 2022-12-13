import React from "react";

const DeskNavListComponent = () => {
  return (
    <ul className="nav navbar-nav navbar-right navigation-link-group" id="HeaderNavigationLinks">
      <li id="PartsDropdown" className="dropdown navigation-list-item">
        <a href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle navigation-link category-links-button">
          Parts
        </a> 
        <ul className="dropdown-menu navlink-dropdown-menu">
        </ul>
      </li>
      <li>
        <a href="#" className="about-us-link navigation-links heading-4">
          About Us
        </a>
      </li>
    </ul>
  )
};

export default DeskNavListComponent;