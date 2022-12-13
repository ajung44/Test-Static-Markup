import React from "react";

const CartComponent = () => {
  return (
    <div className="utility-bar__section" id="CartWidgetUtility" title="Cart">
      <button type="button" id="CartWidgetHeaderButton" className="utility-bar__section utility-bar__element utility-bar__cart cart-widget-button">
        <span className="cart-widget-button__icon icon-basket"></span>
        <span id="NumCartItems" aria-label="0 in Cart. Click to view Cart" className="cart-widget-button__number badge-normal">
          0
        </span>
      </button>
    </div>
  );
};

export default CartComponent;