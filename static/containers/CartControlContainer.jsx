import React from "react";

const CartControlContainer = () => {
  return (
    <div className="cartControlContainer" style={ { maxHeight: 1894 + "px" } }>
      <div className="cartControlLightBox" style={ { maxHeight: 1894 + "px" } }></div>
      <div className="cartWidgetContainer">
        <div className="row">
          <div className="col-md-12 cartWidget">
            <div className="panel">         
              <div className="panel-heading">
              <div className="panel-title">
                  <div className="row">
                    <div className="col-xs-8">
                      <h2 id="LblCart" tabIndex="0" aria-labelledby="Your Cart">Your Cart</h2>
                    </div>
                    <button type="button" className="col-xs-4 closeWidget" title="" >
                      <span className="sr-only">Close Cart</span>
                    </button>
                  </div>
              </div>
              </div>
              <div className="panel-body mobileCheckoutTop">
                <input type="button" 
                  name="proceedtoCheckoutMbl" 
                  value="Checkout" 
                  id="proceedtoCheckoutMbl" 
                  title="Go to Secure Checkout" 
                  className="btn btn-primary btn-block text-uppercase" />
              </div>
              <div className="widgetItemsWrapper"></div>
              <div className="panel-body orderTotalWidget">
              <div className="row">
                <div className="col-xs-7 text-left"></div>
                <div className="col-xs-5 text-right"></div>
              </div>
            </div>
            <div className="panel-body cartWidgetTotal ">
              <div className="row">
                <div className="col-xs-6 text-left totalText">
                </div>
                <div className="col-xs-6 text-right money">
                </div>
              </div>
            </div>
            <div className="panel-footer">
              <div className="panel-body">
                <button type="button" className="btn btn-default btn-block btn-tertiary" title="">
                  Continue Shopping
                </button>
                <a href="#" className="btn btn-tertiary btn-block viewCartWidgetBtn" title="">
                  View Cart
                </a>
                <input type="button" 
                  name="proceedtoCheckout" 
                  value="Checkout" 
                  id="proceedtoCheckout" 
                  title="Go to Secure Checkout" 
                  className="btn btn-primary btn-block text-uppercase" />
                </div>
            </div>
              <div className="panel-body cartWidgetWarning">
                <a id="TabbingCartWidgetWarning" className="lastLink" tabIndex="0" aria-labelledby="Tabbing past or clicking of this link will close the Cart">
                  Tabbing past or clicking of this link will close the Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartControlContainer;