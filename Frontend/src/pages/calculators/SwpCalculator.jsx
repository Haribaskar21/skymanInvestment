import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const SwpCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const [durationYears, setDurationYears] = useState("");
  const [finalAmount, setFinalAmount] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const calculateSWP = () => {
    const P = parseFloat(initialInvestment);
    const W = parseFloat(monthlyWithdrawal);
    const R = parseFloat(annualReturn) / 12 / 100; // Monthly interest rate
    const N = parseFloat(durationYears) * 12; // Total months

    if (!P || !W || !R || !N || P <= 0 || W <= 0 || R < 0 || N <= 0) {
      alert("Please enter valid positive values.");
      return;
    }

    let balance = P;

    for (let i = 0; i < N; i++) {
      balance = balance * (1 + R) - W;
      if (balance <= 0) {
        balance = 0;
        break;
      }
    }

    setFinalAmount(balance.toFixed(2));
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
          SWP Returns Calculator
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
              placeholder="Enter initial investment"
              className="w-full p-3 border border-[#26BF64] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26BF64]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1C3C6D] mb-1">
              Monthly Withdrawal Amount (₹):
            </label>
            <input
              type="number"
              value={monthlyWithdrawal}
              onChange={(e) => setMonthlyWithdrawal(e.target.value)}
              placeholder="Enter monthly withdrawal"
              className="w-full p-3 border border-[#26BF64] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26BF64]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1C3C6D] mb-1">
              Expected Annual Rate of Return (%):
            </label>
            <input
              type="number"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(e.target.value)}
              placeholder="Enter annual return"
              className="w-full p-3 border border-[#26BF64] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26BF64]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1C3C6D] mb-1">
              Investment Duration (Years):
            </label>
            <input
              type="number"
              value={durationYears}
              onChange={(e) => setDurationYears(e.target.value)}
              placeholder="Enter duration in years"
              className="w-full p-3 border border-[#26BF64] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26BF64]"
            />
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={calculateSWP}
            className="bg-[#26BF64] hover:bg-[#229958] text-white font-semibold py-3 px-6 rounded-md transition-all shadow-md"
          >
            Calculate SWP Returns
          </button>
        </div>

        {finalAmount !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8"
          >
            <p className="text-lg font-medium text-[#1C3C6D]">
              Estimated Balance After Withdrawals:
            </p>
            <p className="text-3xl font-bold text-[#26BF64]">₹ {finalAmount}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SwpCalculator;
