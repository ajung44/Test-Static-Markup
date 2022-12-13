import React from "react";
import FooterComponent from "../components/footerComponent";

const FootBoxContainer = (props) => { 
  const items = [];
  
  props.children.forEach(elem => {
    items.push(<FooterComponent className={elem.className} subject={elem.subject}/>)
  })

  return (
    <div className={props.className}>
      <h2 className="list-header">
        {props.subject}
      </h2>
      <ul class="list-unstyled links-list">
        {items}
      </ul>
    </div>
  );
};

export default FootBoxContainer;