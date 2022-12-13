import React from "react";

const FooterComponent = (props) => {
  const {
    className,
    subject
  } = props;
  return (
    <li className={ className }>
      <a href="#" title={subject}>
        {subject}
      </a>
    </li>
  );
};

export default FooterComponent;