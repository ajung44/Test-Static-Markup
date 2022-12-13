import React from "react";

const BreadContainer = () => {
  return (
    <div className="breadcrumb-container">
      <div className="container topBreadcrumbs">
        <ol className="breadcrumb" itemProp="breadcrumb">
          <li>
            <a id="breadcrumbItem-1" href="#" aria-label="" title="">
              Welcome to EnglishParts.com, your home for Jaguar, MG, Triumph and Austin Healey Parts!
            </a>
          </li>                  
        </ol>
        <div className="breadcrumb-links"></div>
      </div>
    </div>
  );
};

export default BreadContainer;