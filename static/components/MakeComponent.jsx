import React from "react";

const MakeComponent = (props) => {
  const {
    href,
    src,
    make,
    alt
  } = props;

  return (
    <a className="seoLinkItem Make" href={href} title={`Shop OEM ${make} Parts`}>
      <img src={src} alt={alt} />
      <div>{make}</div>
    </a>
  );
};

export default MakeComponent;