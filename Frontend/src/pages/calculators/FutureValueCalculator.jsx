import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const FutureValueCalculator = () => {
  const [currentExpense, setCurrentExpense] = useState("");
  const [inflationRate, setInflationRate] = useState("");
  const [years, setYears] = useState("");
  const [futureValue, setFutureValue] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const calculateFutureValue = () => {
    const P = parseFloat(currentExpense);
    const r = parseFloat(inflationRate) / 100;
    const n = parseFloat(years);

    if (!P || !r || !n || P <= 0 || r < 0 || n <= 0) {
      alert("Please enter valid positive values.");
      return;
    }

    const FV = P * Math.pow(1 + r, n);
    setFutureValue(FV.toFixed(2));
  };

  return (
    <div className="min-h-screen py-10 px-4 bg-[#F0F5FA]"> {/* subtle light bg */}
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-[#1C3C6D]">
        <motion.h1
          className="text-2xl font-bold text-center text-[#1C3C6D] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Future Value Calculator (INR)
        </motion.h1>

        <div className="space-y-4" data-aos="fade-up">
          <div>
            <label className="block text-sm font-medium text-[#1C3C6D] mb-1">
              Current Annual Expenses (₹):
            </label>
            <input
              type="number"
              value={currentExpense}
              onChange={(e) => setCurrentExpense(e.target.value)}
              placeholder="Enter your current annual expense"
              className="w-full p-3 border border-[#26BF64] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26BF64]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1C3C6D] mb-1">
              Annual Inflation Rate (%):
            </label>
            <input
              type="number"
              value={inflationRate}
              onChange={(e) => setInflationRate(e.target.value)}
              placeholder="Enter expected inflation rate"
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

        <div className="text-center mt-6" data-aos="fade-up">
          <button
            onClick={calculateFutureValue}
            className="bg-[#26BF64] hover:bg-[#1C3C6D] text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
          >
            Calculate Future Value
          </button>
        </div>

        {futureValue !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8"
          >
            <p className="text-lg font-medium text-[#1C3C6D]">
              Estimated Future Annual Expenses:
            </p>
            <p className="text-3xl font-bold text-[#26BF64]">₹ {futureValue}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FutureValueCalculator;
