import React, { useState, useEffect } from "react";
import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const InvestmentCagrCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [finalValue, setFinalValue] = useState("");
  const [years, setYears] = useState("");
  const [cagr, setCagr] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const calculateCAGR = () => {
    const P = parseFloat(initialInvestment);
    const FV = parseFloat(finalValue);
    const N = parseFloat(years);

    if (!P || !FV || !N || P <= 0 || FV <= 0 || N <= 0) {
      alert("Please enter valid positive numbers.");
      return;
    }

    const cagrValue = ((Math.pow(FV / P, 1 / N) - 1) * 100).toFixed(2);
    setCagr(cagrValue);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
        <motion.h1
          className="text-2xl font-bold text-center text-green-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Investment CAGR Calculator (INR)
        </motion.h1>

        <div className="space-y-4" data-aos="fade-up">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Initial Investment (₹):
            </label>
            <input
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
              placeholder="Enter initial amount"
              className="w-full p-3 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Final Value (₹):
            </label>
            <input
              type="number"
              value={finalValue}
              onChange={(e) => setFinalValue(e.target.value)}
              placeholder="Enter final value"
              className="w-full p-3 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Years:
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="Enter number of years"
              className="w-full p-3 border rounded-md"
            />
          </div>
        </div>

        <div className="text-center mt-6" data-aos="fade-up">
          <button
            onClick={calculateCAGR}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md"
          >
            Calculate CAGR
          </button>
        </div>

        {cagr && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8"
          >
            <p className="text-lg font-medium text-gray-700">Your CAGR is:</p>
            <p className="text-3xl font-bold text-green-700">{cagr}%</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default InvestmentCagrCalculator;
