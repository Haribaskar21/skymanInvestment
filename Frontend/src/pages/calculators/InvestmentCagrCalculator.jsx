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
    <div className="min-h-screen bg-gradient-to-br from-[#E6F3EC] to-[#D9E6F2] py-10 px-4">
      <div
        className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-[#cce5d6]"
        data-aos="fade-up"
      >
        <motion.h1
          className="text-2xl font-bold text-center text-[#1C3C6D] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Investment CAGR Calculator (INR)
        </motion.h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#1C3C6D] mb-1">
              Initial Investment (₹):
            </label>
            <input
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
              placeholder="Enter initial amount"
              className="w-full p-3 border border-[#26BF64] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26BF64]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1C3C6D] mb-1">
              Final Value (₹):
            </label>
            <input
              type="number"
              value={finalValue}
              onChange={(e) => setFinalValue(e.target.value)}
              placeholder="Enter final value"
              className="w-full p-3 border border-[#26BF64] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26BF64]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1C3C6D] mb-1">
              Number of Years:
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="Enter number of years"
              className="w-full p-3 border border-[#26BF64] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26BF64]"
            />
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={calculateCAGR}
            className="bg-[#26BF64] hover:bg-[#229958] text-white font-semibold py-3 px-6 rounded-md transition-all shadow-md"
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
            <p className="text-lg font-medium text-[#1C3C6D]">Your CAGR is:</p>
            <p className="text-3xl font-bold text-[#26BF64]">{cagr}%</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default InvestmentCagrCalculator;
