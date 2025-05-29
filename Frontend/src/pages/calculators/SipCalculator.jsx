import React, { useState } from "react";
import { motion } from "framer-motion";

const SipCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const [years, setYears] = useState("");
  const [results, setResults] = useState(null);

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(annualReturn) / 100 / 12;
    const n = parseFloat(years) * 12;

    if (!P || !r || !n) return;

    const maturityAmount = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const totalInvested = P * n;
    const totalReturns = maturityAmount - totalInvested;

    setResults({
      totalInvested: totalInvested.toFixed(2),
      maturityAmount: maturityAmount.toFixed(2),
      totalReturns: totalReturns.toFixed(2),
    });
  };

  return (
    <div className="px-4 py-10 max-w-5xl mx-auto text-gray-800">
      <motion.h1
        className="text-3xl font-extrabold text-center mb-10 text-blue-900"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        SIP Returns Calculator
      </motion.h1>

      {/* Calculator Form */}
      <motion.div
        className="bg-white border shadow-xl p-8 rounded-2xl mb-14"
        data-aos="fade-up"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="font-medium">Monthly Investment (₹):</label>
            <input
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(e.target.value)}
              className="w-full mt-2 border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Eg: 5000"
            />
          </div>
          <div>
            <label className="font-medium">Expected Annual Return (%):</label>
            <input
              type="number"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(e.target.value)}
              className="w-full mt-2 border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Eg: 12"
            />
          </div>
          <div>
            <label className="font-medium">Investment Duration (Years):</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full mt-2 border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Eg: 10"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={calculateSIP}
            className="bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition"
          >
            Calculate SIP Returns
          </button>
        </div>

        {results && (
          <motion.div
            className="mt-10 border-t pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-lg font-bold mb-4 text-blue-700">Your SIP Summary</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center text-base font-medium">
              <div className="bg-blue-50 border p-4 rounded shadow">
                <p className="text-gray-600">Total Invested</p>
                <p className="text-lg text-blue-800 font-bold">₹{results.totalInvested}</p>
              </div>
              <div className="bg-blue-50 border p-4 rounded shadow">
                <p className="text-gray-600">Maturity Amount</p>
                <p className="text-lg text-green-700 font-bold">₹{results.maturityAmount}</p>
              </div>
              <div className="bg-blue-50 border p-4 rounded shadow">
                <p className="text-gray-600">Total Returns</p>
                <p className="text-lg text-indigo-700 font-bold">₹{results.totalReturns}</p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center my-14"
        data-aos="zoom-in"
      >
        <p className="text-xl font-semibold text-gray-800">
          Want to start your investment journey?
        </p>
        <p className="text-gray-600 mb-5">Opening a Demat Account is your first step.</p>
        <a
          href="/demat-account"
          className="bg-blue-700 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition shadow"
        >
          Get Started
        </a>
      </motion.div>

      {/* Content Sections */}
      <motion.section
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.div data-aos="fade-right">
          <h2 className="text-xl font-bold text-blue-900">What is a Systematic Investment Plan (SIP)?</h2>
          <p className="text-gray-700 mt-2">
            A <strong>SIP</strong> is a method of investing a fixed amount of money regularly in mutual funds.
            It helps you invest in a disciplined manner without timing the market.
          </p>
        </motion.div>

        <motion.div data-aos="fade-left">
          <h3 className="text-lg font-semibold">Benefits of SIP</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li><strong>Disciplined Approach:</strong> Encourages regular investing.</li>
            <li><strong>Power of Compounding:</strong> Returns grow faster over time.</li>
            <li><strong>Cost Averaging:</strong> Buy more when prices are low.</li>
            <li><strong>Flexible:</strong> Start with ₹500/month.</li>
            <li><strong>Tax Benefits:</strong> ELSS funds offer deductions.</li>
          </ul>
        </motion.div>

        <motion.div data-aos="fade-right">
          <h3 className="text-lg font-semibold">How SIP Helps in Wealth Creation</h3>
          <ol className="list-decimal pl-6 space-y-1 text-gray-700">
            <li><strong>Consistent Growth:</strong> Long-term SIP builds wealth.</li>
            <li><strong>Risk Management:</strong> Avoid market timing risks.</li>
            <li><strong>Goal-Oriented:</strong> Use SIPs to achieve goals.</li>
          </ol>
        </motion.div>

        <motion.div data-aos="fade-up">
          <h3 className="text-lg font-semibold">Example of SIP Wealth Creation</h3>
          <p className="text-gray-700 mt-2">
            ₹10,000/month for 20 years at 12% return gives you ₹1.92 Cr maturity.
          </p>
          <table className="w-full border mt-4 text-sm bg-white rounded shadow overflow-hidden">
            <thead className="bg-blue-100 text-blue-900">
              <tr>
                <th className="border px-3 py-2 text-left">SIP</th>
                <th className="border px-3 py-2 text-left">Duration</th>
                <th className="border px-3 py-2 text-left">Return</th>
                <th className="border px-3 py-2 text-left">Invested</th>
                <th className="border px-3 py-2 text-left">Maturity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-gray-700">
                <td className="border px-3 py-2">₹10,000/month</td>
                <td className="border px-3 py-2">20 years</td>
                <td className="border px-3 py-2">12% p.a</td>
                <td className="border px-3 py-2">₹24,00,000</td>
                <td className="border px-3 py-2">₹1,92,00,000</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.div data-aos="zoom-in-up">
          <h3 className="text-lg font-semibold mt-6">Conclusion</h3>
          <p className="text-gray-700">
            SIP is a powerful way to grow wealth. Whether you're saving for retirement or other goals,
            SIPs make investing simple and effective.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default SipCalculator;
