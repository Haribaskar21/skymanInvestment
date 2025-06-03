import React, { useState, useEffect } from "react";
import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const LoanEmiAmortization = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [lumpSum, setLumpSum] = useState("");
  const [emi, setEmi] = useState(0);
  const [newTenure, setNewTenure] = useState(0);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const calculateEmi = () => {
    const P = parseFloat(amount) - parseFloat(lumpSum || 0);
    const R = parseFloat(rate) / 12 / 100;
    const N = parseInt(tenure);

    if (isNaN(P) || isNaN(R) || isNaN(N) || P <= 0 || R <= 0 || N <= 0) {
      alert("Please enter valid positive inputs.");
      return;
    }

    const emiCalc = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(emiCalc.toFixed(2));

    // Generate amortization schedule
    let balance = P;
    const amortSchedule = [];
    let i = 0;
    while (balance > 0 && i < 1000) {
      const interest = balance * R;
      let principal = emiCalc - interest;
      if (principal > balance) principal = balance;
      balance = balance - principal;
      amortSchedule.push({
        month: i + 1,
        principal,
        interest,
        balance: balance > 0 ? balance : 0,
      });
      if (balance <= 0) break;
      i++;
    }

    setSchedule(amortSchedule);
    setNewTenure(amortSchedule.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#26BF64]/20 to-[#1C3C6D]/20 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-[#26BF64]/30">
        <h1 className="text-2xl font-bold text-center text-[#1C3C6D] mb-6">
          Loan EMI Calculator with Amortization
        </h1>

        <div className="grid gap-4 md:grid-cols-2 mb-6" data-aos="fade-up">
          <div>
            <label className="block font-medium text-gray-600">Loan Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter loan amount"
              className="w-full p-3 border rounded-md mt-1 border-[#1C3C6D]/50 focus:border-[#26BF64] focus:ring focus:ring-[#26BF64]/40 outline-none transition"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-600">Interest Rate (% per annum):</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="Enter interest rate"
              className="w-full p-3 border rounded-md mt-1 border-[#1C3C6D]/50 focus:border-[#26BF64] focus:ring focus:ring-[#26BF64]/40 outline-none transition"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-600">Loan Duration (Months):</label>
            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              placeholder="Enter tenure in months"
              className="w-full p-3 border rounded-md mt-1 border-[#1C3C6D]/50 focus:border-[#26BF64] focus:ring focus:ring-[#26BF64]/40 outline-none transition"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-600">Advance EMI / Lump Sum Payment:</label>
            <input
              type="number"
              value={lumpSum}
              onChange={(e) => setLumpSum(e.target.value)}
              placeholder="Enter lump sum payment"
              className="w-full p-3 border rounded-md mt-1 border-[#1C3C6D]/50 focus:border-[#26BF64] focus:ring focus:ring-[#26BF64]/40 outline-none transition"
            />
          </div>
        </div>

        <div className="text-center mb-6" data-aos="fade-up">
          <button
            onClick={calculateEmi}
            className="bg-[#26BF64] hover:bg-[#1C3C6D] text-white font-semibold py-3 px-8 rounded-md shadow transition"
          >
            Calculate EMI
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <p className="text-lg font-medium text-gray-700">Monthly EMI:</p>
          <p className="text-2xl font-bold text-[#1C3C6D] mb-4">₹ {emi}</p>
          <p className="text-lg font-medium text-gray-700">New Tenure:</p>
          <p className="text-xl font-bold text-[#26BF64]">{newTenure} months</p>
        </motion.div>

        {schedule.length > 0 && (
          <div data-aos="fade-up" className="overflow-x-auto">
            <h2 className="text-lg font-semibold text-[#26BF64] mb-4">Amortization Schedule</h2>
            <table className="min-w-full table-auto border border-[#1C3C6D]/30 text-sm">
              <thead>
                <tr className="bg-[#26BF64]/20 text-[#1C3C6D]">
                  <th className="px-4 py-2 border border-[#1C3C6D]/40">Month</th>
                  <th className="px-4 py-2 border border-[#1C3C6D]/40">Principal (₹)</th>
                  <th className="px-4 py-2 border border-[#1C3C6D]/40">Interest (₹)</th>
                  <th className="px-4 py-2 border border-[#1C3C6D]/40">Balance (₹)</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-[#1C3C6D]/30 px-4 py-2">{row.month}</td>
                    <td className="border border-[#1C3C6D]/30 px-4 py-2">{row.principal.toFixed(2)}</td>
                    <td className="border border-[#1C3C6D]/30 px-4 py-2">{row.interest.toFixed(2)}</td>
                    <td className="border border-[#1C3C6D]/30 px-4 py-2">{row.balance.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanEmiAmortization;
