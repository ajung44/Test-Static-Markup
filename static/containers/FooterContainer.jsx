import React from "react";
import CopyrightComponent from "../components/CopyrightComponent";
import DisclaimerComponent from "../components/DisclaimerComponent";
import FootBoxContainer from "./FootBoxContainer";

const footers = [
  {
    className: "col-md-3 contactLinksList",
    subject: "About",
    children: [
      {
        className: "acceptedPaymentsLink",
        subject: "Accepted Payment"
      },
      {
        className: "contactLink",
        subject: "Contact Us"
      },
      {
        className: "policyLink",
        subject: "Policies"
      },
      {
        className: "refundsLink",
        subject: "Refunds"
      },
      {
        className: "returnsLink",
        subject: "Returns"
      },
    ]
  },
  {
    className: "col-md-3 legalLinksList",
    subject: "Legal",
    children: [
      {
        className: "",
        subject: "Policies"
      },
    ]
  },
  {
    className: "col-md-3 miscLinksList",
    subject: "About",
    children: [
      {
        className: "",
        subject: "My Information"
      },
      {
        className: "",
        subject: "Testimonials"
      }
    ]
  }
]

const FooterContainer = () => {
  const items = [];
  footers.forEach(elem => {
    items.push(<FootBoxContainer className={elem.className} subject={elem.subject} children={elem.children}/>)
  })
  
  return (
    <div class="footer" role="contentinfo">
      <div class="panel">
        <div class="panel-body links-panel">
          <div class="container">
            <div class="row">
              {items}
            </div>
          </div>
		    </div>
        <DisclaimerComponent />
        <CopyrightComponent />
	    </div>
    </div>
  );
};

export default FooterContainer;