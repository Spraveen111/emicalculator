import React from "react";
import "./makePayment.css";
import { Link, Outlet } from "react-router-dom";
const MakePayment = () => {
 
    const handleClick = () => {
      window.location.href = 'https://test.payumoney.com/url/dIThWPLEWLm2';
    };
  return (
    <div className="design-root">
      <div>
        <div className="header">
          <Link to="/">
            <button className="back-button">Back</button>
          </Link>
          <h1 className="heading">V-Electronics</h1>
        </div>

        <div className="form-group">
          <label className="form-label">
            <p className="form-label-text">Enter amount to pay</p>
            <input placeholder="0.00" className="form-input" type="text" />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            <p className="form-label-text">Purpose of Payment (optional)</p>
            <input
              placeholder="Tell us the purpose behind this payment"
              className="form-input"
              type="text"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            <p className="form-label-text">Customer Phone</p>
            <input
              placeholder="Enter Customer Phone"
              className="form-input"
              type="text"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            <p className="form-label-text">Customer Email</p>
            <input
              placeholder="Enter Customer Email"
              className="form-input"
              type="email"
            />
          </label>
        </div>
      </div>
      <div>
        <div className="button-container">
          <button
            onClick={handleClick}
            
         className="paymentButton"
          >
            Buy Now
          </button>
        </div>
        <div className="spacer"></div>
      </div>
      <Outlet />
    </div>
  );
};

export default MakePayment;
