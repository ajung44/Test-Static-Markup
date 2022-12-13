import React from "react";

const CategoryComponent = (props) => {
  const {
    href,
    src,
    category
  } = props;

  const title = `Shop OEM ${category} Parts`;

  return (
    <a className="qsCategoryLinkItem" href={href} title={title}>
      <div className="qsCategoryWrapper">
        <div className="qsImgWrapper">
          <img src={src} aria-hidden="true" alt={title} />
        </div>
        <div className="qsdisplayStringDiv">
          {category}
        </div>
      </div>
    </a>
  );
};

export default CategoryComponent;