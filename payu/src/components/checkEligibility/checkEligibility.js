import React from "react";
import "./checkEligibility.css"; // Import the CSS file
import { Link, Outlet } from "react-router-dom";

const CheckEligibility = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="icon-back">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </Link>
        </div>
        <h2 className="title" style={{ textAlign: "center" }}>
          Check Eligibility
        </h2>
      </div>
      <div className="input-group">
        <label>
          <p>MOBILE NUMBER</p>
          <input
            type="text"
            placeholder="Enter mobile number registered with your bank"
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          <p>AMOUNT</p>
          <input type="text" placeholder="Enter amount" />
        </label>
      </div>
      <div className="button-group">
        <button>CHECK ELIGIBILITY</button>
      </div>
      <p className="note">
        NOTE: Eligibility will be checked only for the following payment
        instruments
      </p>
      <div className="payment-instruments">
        <div className="payment-instrument">
          <div className="icon-bank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M24,104H48v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16H208V104h24a8,8,0,0,0,4.19-14.81l-104-64a8,8,0,0,0-8.38,0l-104,64A8,8,0,0,0,24,104Zm40,0H96v64H64Zm80,0v64H112V104Zm48,64H160V104h32ZM128,41.39,203.74,88H52.26ZM248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,208Z"></path>
            </svg>
          </div>
          <div className="payment-details">
            <p className="payment-title">Kotak Mahindra Bank</p>
            <p className="payment-subtitle">Debit Card</p>
          </div>
        </div>
        <div className="payment-instrument">
          <div className="icon-bank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M24,104H48v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16H208V104h24a8,8,0,0,0,4.19-14.81l-104-64a8,8,0,0,0-8.38,0l-104,64A8,8,0,0,0,24,104Zm40,0H96v64H64Zm80,0v64H112V104Zm48,64H160V104h32ZM128,41.39,203.74,88H52.26ZM248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,208Z"></path>
            </svg>
          </div>
          <div className="payment-details">
            <p className="payment-title">ZestMoney</p>
            <p className="payment-subtitle">Cardless</p>
          </div>
        </div>
        <div className="payment-instrument">
          <div className="icon-bank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M24,104H48v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16H208V104h24a8,8,0,0,0,4.19-14.81l-104-64a8,8,0,0,0-8.38,0l-104,64A8,8,0,0,0,24,104Zm40,0H96v64H64Zm80,0v64H112V104Zm48,64H160V104h32ZM128,41.39,203.74,88H52.26ZM248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,208Z"></path>
            </svg>
          </div>
          <div className="payment-details">
            <p className="payment-title">ICICI Bank</p>
            <p className="payment-subtitle">Debit Card</p>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default CheckEligibility;
