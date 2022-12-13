import React from "react";
import ServerComponent from "../components/ServerComponent";
import TextHeaderComponent from "../components/TextHeaderComponent";
import ContentContainer from "./ContentContainer";
import FooterContainer from "./FooterContainer";

const BodyContainer = () => {
  return (
    <form method="post" action="">
      <a href="#" tabIndex="0" className="skip" target="_self">
        Skip to Content
      </a>
      <TextHeaderComponent />
      <ContentContainer />
      <FooterContainer />
      <ServerComponent />
    </form>
  )
}

export default BodyContainer;