import React, { useState } from "react";
import "./EmiCalculator.css"; // Import the CSS file
import { Link } from "react-router-dom";

const EmiCalculator = () => {
  const [formData, setFormData] = useState({
    paymentMode: "",
    amount: "",
    tenure: "",
  });
  const [emiData, setEmiData] = useState({});
  const [errors, setErrors] = useState({
    paymentMode: "",
    amount: "",
    tenure: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [errorPanel, setShowErrorPanel] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error message when the user starts typing
  };

  const handleCalculate = async () => {
    const newErrors = {};

    if (!formData.paymentMode) {
      newErrors.paymentMode = "Please select a payment mode.";
    }
    if (!formData.amount) {
      newErrors.amount = "Please enter an amount.";
    } else if (parseInt(formData.amount, 10) < 2000) {
      newErrors.amount = "Minimum amount is 2000.";
    }
    if (!formData.tenure) {
      newErrors.tenure = "Please select a tenure.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        // Send the form data to the backend API
        const response = await fetch("http://localhost:3820/emicalculator", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const newData = await response.json();
        const details = newData.result;
        console.log(details);
        if (details) {
          setEmiData(details);
          setShowModal(true);
        } else {
          setShowErrorPanel(true);
        }
      } catch (error) {
        console.error("Error sending data:", error.message);
        // Handle errors here if needed
      }
    }
  };

  const handleReset = () => {
    setFormData({
      paymentMode: "",
      amount: "",
      tenure: "",
    });
    setErrors({});
    setShowModal(false); // Hide modal on reset
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowErrorPanel(false);
    setFormData({
      paymentMode: "",
      amount: "",
      tenure: "",
    });
  };

  return (
    <div className="container">
      <div className="header">
        <div className="close-icon">
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
        <h2 className="title">EMI Calculator</h2>
        <div className="expand-icon"></div>
      </div>

      <div className="form-group">
        <label className="label">
          Payment Mode
          <select
            name="paymentMode"
            value={formData.paymentMode}
            onChange={handleInputChange}
            className="input"
          >
            <option value="">choose a payment mode</option>
            <option value="IDBI">Industrial Development Bank of India</option>
            <option value="AXIO">Axio Bank</option>
            <option value="YES">YES Bank</option>
            {/* <option value="ZESTMON">ZestMoney</option> */}
            <option value="HMECDT">HDFC Bank</option>
            <option value="CANARA">Canara Bank</option>
            <option value="BOBD">Bank of Baroda (Domestic)</option>
            <option value="KOTAKD">Kotak Mahindra Bank (Domestic)</option>
            <option value="BOB">Bank of Baroda</option>
            <option value="DBS">DBS Bank</option>
            <option value="FDRL">Federal Bank Limited</option>
            <option value="ONEC">OneCard</option>
            <option value="AUSF">
              Australia and New Zealand Banking Group
            </option>
            <option value="SBI">State Bank of India</option>
            <option value="KOTAK">Kotak Mahindra Bank</option>
            <option value="RBL">RBL Bank</option>
            <option value="LIQUIL">LiquiLoans</option>
            <option value="ICICID">ICICI Bank (Domestic)</option>
            <option value="HSBC">HSBC Bank</option>
            <option value="SCB">Standard Chartered Bank</option>
            <option value="INDUS">IndusInd Bank</option>
            <option value="BAJFIN">Bajaj Finance</option>
            <option value="IDFC">IDFC FIRST Bank</option>
          </select>
        </label>
        {errors.paymentMode && (
          <p style={{ color: "red", marginTop: "0px", paddingTop: "0px" }}>
            {errors.paymentMode}
          </p>
        )}
      </div>

      <div className="form-group">
        <label className="label">
          Amount
          <input
            type="text"
            name="amount"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        {errors.amount && (
          <p style={{ color: "red", marginTop: "0px", paddingTop: "0px" }}>
            {errors.amount}
          </p>
        )}
      </div>

      <div className="form-group">
        <label className="label">
          Tenure (Months)
          <select
            name="tenure"
            value={formData.tenure}
            onChange={handleInputChange}
            className="input"
          >
            <option value="">Select tenure</option>
            <option value="03">3</option>
            <option value="06">6</option>
            <option value="09">9</option>
            <option value="12">12</option>
            <option value="18">18</option>
            <option value="24">24</option>
          </select>
        </label>
        {errors.tenure && (
          <p style={{ color: "red", marginTop: "0px", paddingTop: "0px" }}>
            {errors.tenure}
          </p>
        )}
      </div>

      <div className="button-group">
        <button className="calculate-btn" onClick={handleCalculate}>
          Calculate
        </button>
        <button className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2 style={{ color: "green" }}>EMI Details</h2>
            <p>
              <strong>EMI Amount:</strong> {emiData.emiAmount}
            </p>
            <p>
              <strong>EMI Interest paid per month:</strong>
              {emiData.emi_value}
            </p>
            <p>
              <strong>Transaction Amount:</strong> {emiData.transactionAmount}
            </p>
            <p>
              <strong>Card Type:</strong> {emiData.cardType}
            </p>
            <p>
              <strong>Tenure:</strong> {emiData.tenure}
            </p>
            <p>
              <strong>Bank Interest:</strong> {emiData.emiBankInterest}%
            </p>
            <p>
              <strong>Interest Paid:</strong> {emiData.emi_interest_paid}
            </p>
            <p>
              <strong>Total Payable Amount:</strong>
              {emiData.totalPayableAmount}
            </p>
          </div>
        </div>
      )}

      {errorPanel && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2 style={{ color: "red" }}>Error !</h2>
            <p className="error-message">
              The bank you have selected is not providing EMI. Please choose
              another one or Change the EMI months.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmiCalculator;
