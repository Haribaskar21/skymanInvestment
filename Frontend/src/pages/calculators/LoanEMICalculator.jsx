import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const LoanEMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [emi, setEmi] = useState(0);
  const [principalTotal, setPrincipalTotal] = useState(0);
  const [interestTotal, setInterestTotal] = useState(0);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 12 / 100;
    const N = parseInt(loanDuration);

    if (!P || !r || !N || P <= 0 || r < 0 || N <= 0) {
      alert("Please enter valid positive values.");
      return;
    }

    const emiVal = (P * r * Math.pow(1 + r, N)) / (Math.pow(1 + r, N) - 1);
    let balance = P;
    const scheduleArray = [];

    let totalPrincipal = 0;
    let totalInterest = 0;

    for (let month = 1; month <= N; month++) {
      const interest = balance * r;
      const principal = emiVal - interest;
      balance -= principal;

      totalPrincipal += principal;
      totalInterest += interest;

      scheduleArray.push({
        month,
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : "0.00",
      });
    }

    setEmi(emiVal.toFixed(2));
    setPrincipalTotal(totalPrincipal.toFixed(2));
    setInterestTotal(totalInterest.toFixed(2));
    setSchedule(scheduleArray);
  };

  return (
    <div className="min-h-screen bg-[#E6F3EC] py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6 border border-[#cce5d6]">
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-center text-[#1C3C6D] mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Loan EMI Calculator
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-4 mb-6" data-aos="fade-up">
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Enter Loan Amount"
            className="p-3 border border-[#26BF64] rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#26BF64]"
          />
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter Interest Rate"
            className="p-3 border border-[#26BF64] rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#26BF64]"
          />
          <input
            type="number"
            value={loanDuration}
            onChange={(e) => setLoanDuration(e.target.value)}
            placeholder="Enter Loan Duration (Months)"
            className="p-3 border border-[#26BF64] rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#26BF64]"
          />
        </div>

        <div className="text-center mb-8" data-aos="fade-up">
          <button
            onClick={calculateEMI}
            className="bg-[#26BF64] text-white px-6 py-2 rounded hover:bg-[#219850] transition-shadow shadow-md"
          >
            Calculate EMI
          </button>
        </div>

        {emi > 0 && (
          <motion.div
            className="grid md:grid-cols-3 gap-6 text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-[#d9f0db] p-4 rounded shadow border border-[#a7d4a2]">
              <h3 className="text-lg font-semibold text-[#1C3C6D]">Monthly EMI</h3>
              <p className="text-xl font-bold mt-2 text-[#26BF64]">₹ {emi}</p>
            </div>
            <div className="bg-[#d9f0db] p-4 rounded shadow border border-[#a7d4a2]">
              <h3 className="text-lg font-semibold text-[#1C3C6D]">Principal Component</h3>
              <p className="text-xl font-bold mt-2 text-[#26BF64]">₹ {principalTotal}</p>
            </div>
            <div className="bg-[#d9f0db] p-4 rounded shadow border border-[#a7d4a2]">
              <h3 className="text-lg font-semibold text-[#1C3C6D]">Interest Component</h3>
              <p className="text-xl font-bold mt-2 text-[#26BF64]">₹ {interestTotal}</p>
            </div>
          </motion.div>
        )}

        {schedule.length > 0 && (
          <div className="overflow-x-auto" data-aos="fade-up">
            <h2 className="text-xl font-semibold text-[#1C3C6D] mb-4">
              EMI Payment Schedule
            </h2>
            <table className="w-full text-sm text-left border border-[#cce5d6] rounded-lg">
              <thead className="bg-[#a3d18f] text-[#1C3C6D]">
                <tr>
                  <th className="p-2 border border-[#cce5d6]">Month</th>
                  <th className="p-2 border border-[#cce5d6]">Principal Paid (₹)</th>
                  <th className="p-2 border border-[#cce5d6]">Interest Paid (₹)</th>
                  <th className="p-2 border border-[#cce5d6]">Remaining Balance (₹)</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.month} className="odd:bg-white even:bg-[#e9f7e9]">
                    <td className="p-2 border border-[#cce5d6]">{row.month}</td>
                    <td className="p-2 border border-[#cce5d6]">{row.principal}</td>
                    <td className="p-2 border border-[#cce5d6]">{row.interest}</td>
                    <td className="p-2 border border-[#cce5d6]">{row.balance}</td>
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

export default LoanEMICalculator;
