import React from "react";
import BreadContainer from "./BreadContainer";
import NavigationContainer from "./NavigationContainer";
import UtilBarContainer from "./UtilBarContainer";
import WrapperContainer from "./WrapperContainer";

const ContentContainer = () => {
  return (
    <div id="ContentPlaceHolderContainer" className="content en">
      <NavigationContainer />
      <UtilBarContainer />
      <BreadContainer />
      <WrapperContainer />
    </div>
  )
};

export default ContentContainer;