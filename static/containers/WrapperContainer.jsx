import React from "react";
import BannerContainer from "./BannerContainer";
import CategoryContainer from "./CategoryContainer";
import MakeContainer from "./MakeContainer";

const WrapperContainer = () => {
  return (
    <div id="contentWrapper">
      <div className="" id="contentDiv" role="main">
        <BannerContainer />
        <MakeContainer />
        <CategoryContainer />
      </div>
    </div>
  );
};

export default WrapperContainer;