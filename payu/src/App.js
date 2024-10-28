import React from "react";
import Welcome from "./components/welcome/Welcome";
import MakePayment from "./components/makepayment/makePayment";
import CheckEligibility from "./components/checkEligibility/checkEligibility";
import EmiCalculator from "./components/emiCalculator/EmiCalculator";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/makePayment" element={<MakePayment />} />
        <Route path="/checkEligibility" element={<CheckEligibility />} />
        <Route path="/emiCalculator" element={<EmiCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}
