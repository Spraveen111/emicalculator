import React from "react";
import "./welcome.css";
import { Link, Outlet } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="app-container">
      <header className="header">
        <div className="header-left">
          <div className="icon">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="company-name">V-Electronics</h2>
        </div>
        <div className="header-right">
          <div className="header-buttons">
            <button className="header-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,98.34a8,8,0,0,1-11.32,11.32L200,91.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L188.69,80,170.34,61.66a8,8,0,0,1,11.32-11.32L200,68.69l18.34-18.35a8,8,0,0,1,11.32,11.32L211.31,80ZM128,192a12,12,0,1,0,12,12A12,12,0,0,0,128,192Zm44.71-33.47a76.05,76.05,0,0,0-89.42,0,8,8,0,0,0,9.42,12.94,60,60,0,0,1,70.58,0,8,8,0,1,0,9.42-12.94Zm-29.48-93.8a8,8,0,1,0,1.54-15.92C139.24,48.27,133.59,48,128,48A172.35,172.35,0,0,0,18.92,87,8,8,0,1,0,29.08,99.37A156.25,156.25,0,0,1,128,64C133.08,64,138.2,64.25,143.23,64.73ZM142.91,113a8,8,0,0,0,2.18-15.85A124.75,124.75,0,0,0,128,96a122.74,122.74,0,0,0-77,26.77A8,8,0,0,0,56,137a7.93,7.93,0,0,0,5-1.73A106.87,106.87,0,0,1,128,112,109,109,0,0,1,142.91,113Z"></path>
              </svg>
            </button>
            <button className="header-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M200,56H32A24,24,0,0,0,8,80v96a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56Zm8,120a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8ZM184,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm-40,0v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm-40,0v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM64,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm192,0v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z"></path>
              </svg>
            </button>
          </div>
          <div
            className="profile-picture"
            style={{
              backgroundImage:
                "url('https://cdn.usegalileo.ai/stability/5c2ca78a-72f0-43a8-a88a-479979b2b8c9.png')",
            }}
          ></div>
        </div>
      </header>

      <main className="main-content">
        <h1 className="main-heading">
          Welcome to <span style={{ color: "red" }}>V-Electronics</span>
        </h1>

        <div className="card-container">
          <Link to="/makePayment">
            <div className="card">
              <div
                className="card-image1"
                style={{
                  backgroundImage:
                    "url('https://res.cloudinary.com/dtt87dyj1/image/upload/v1723363385/_0ffc5ec5-82ae-4066-927a-1ebef5a26095_ctwwkp.jpg')",
                }}
              ></div>
              <div className="card-content">
                <p className="card-title">Make a Payment</p>
                <p className="card-description">
                  Have a product in mind? Tap to complete your payment.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/checkEligibility">
            <div className="card">
              <div
                className="card-image2"
                style={{
                  backgroundImage:
                    "url('https://res.cloudinary.com/dtt87dyj1/image/upload/v1723361728/_9a187dc7-13e8-43c1-bbb8-017aa14e296b_mvwny4.jpg')",
                }}
              ></div>
              <div className="card-content">
                <p className="card-title">Check EMI Eligibility</p>
                <p className="card-description">
                  Check eligibility for Debit Card EMIs, Cardless EMIs & Pay
                  Later options
                </p>
              </div>
            </div>
          </Link>
          <Link to="/emiCalculator">
            <div className="card">
              <div
                className="card-image3"
                style={{
                  backgroundImage:
                    "url('https://res.cloudinary.com/dtt87dyj1/image/upload/v1723363074/_6f43456a-c7b4-4aa4-970c-f480da69cd57_dqv2ky.jpg')",
                }}
              ></div>
              <div className="card-content">
                <p className="card-title">EMI Calculator</p>
                <p className="card-description">
                  Tap to check your monthly installment, interest rate, and more
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>

      <footer className="footer">
        <p>Copyright © 2024 V-Electronics</p>
      </footer>
      <Outlet />
    </div>
  );
};

export default Welcome;
