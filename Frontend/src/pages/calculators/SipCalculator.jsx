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
        className="text-3xl font-extrabold text-center mb-10"
        style={{ color: "#1C3C6D" }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        SIP Returns Calculator
      </motion.h1>

      {/* Calculator Form */}
      <motion.div
        className="bg-white border shadow-xl p-8 rounded-2xl mb-14"
        style={{ borderColor: "#26BF64" }}
        data-aos="fade-up"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              label: "Monthly Investment (₹):",
              value: monthlyInvestment,
              setter: setMonthlyInvestment,
              placeholder: "Eg: 5000",
            },
            {
              label: "Expected Annual Return (%):",
              value: annualReturn,
              setter: setAnnualReturn,
              placeholder: "Eg: 12",
            },
            {
              label: "Investment Duration (Years):",
              value: years,
              setter: setYears,
              placeholder: "Eg: 10",
            },
          ].map(({ label, value, setter, placeholder }, i) => (
            <div key={i}>
              <label
                className="font-medium"
                style={{ color: "#1C3C6D" }}
              >
                {label}
              </label>
              <input
                type="number"
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="w-full mt-2 rounded px-4 py-2 border focus:outline-none focus:ring-2 transition"
                style={{
                  borderColor: "#26BF64",
                  color: "#1C3C6D",
                }}
                placeholder={placeholder}
                onFocus={(e) => (e.target.style.borderColor = "#1C3C6D")}
                onBlur={(e) => (e.target.style.borderColor = "#26BF64")}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={calculateSIP}
            className="px-6 py-2 rounded-full shadow-md transition"
            style={{
              backgroundColor: "#26BF64",
              color: "#fff",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1F9B53")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#26BF64")}
          >
            Calculate SIP Returns
          </button>
        </div>

        {results && (
          <motion.div
            className="mt-10 border-t pt-6"
            style={{ borderColor: "#26BF64" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "#1C3C6D" }}
            >
              Your SIP Summary
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center text-base font-medium">
              <div
                className="border p-4 rounded shadow"
                style={{ borderColor: "#26BF64", backgroundColor: "#E6F4EA" }}
              >
                <p className="text-gray-600">Total Invested</p>
                <p
                  className="text-lg font-bold"
                  style={{ color: "#1C3C6D" }}
                >
                  ₹{results.totalInvested}
                </p>
              </div>
              <div
                className="border p-4 rounded shadow"
                style={{ borderColor: "#26BF64", backgroundColor: "#E6F4EA" }}
              >
                <p className="text-gray-600">Maturity Amount</p>
                <p
                  className="text-lg font-bold"
                  style={{ color: "#26BF64" }}
                >
                  ₹{results.maturityAmount}
                </p>
              </div>
              <div
                className="border p-4 rounded shadow"
                style={{ borderColor: "#26BF64", backgroundColor: "#E6F4EA" }}
              >
                <p className="text-gray-600">Total Returns</p>
                <p
                  className="text-lg font-bold"
                  style={{ color: "#1C3C6D" }}
                >
                  ₹{results.totalReturns}
                </p>
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
        <p
          className="text-xl font-semibold mb-1"
          style={{ color: "#1C3C6D" }}
        >
          Want to start your investment journey?
        </p>
        <p className="text-gray-600 mb-5">
          Opening a Demat Account is your first step.
        </p>
        <a
          href="/demat-account"
          className="px-6 py-3 rounded-full font-medium shadow transition"
          style={{ backgroundColor: "#1C3C6D", color: "#fff" }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#163058")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#1C3C6D")}
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
          <h2 className="text-xl font-bold" style={{ color: "#1C3C6D" }}>
            What is a Systematic Investment Plan (SIP)?
          </h2>
          <p className="text-gray-700 mt-2">
            A <strong>SIP</strong> is a method of investing a fixed amount of money regularly in mutual funds.
            It helps you invest in a disciplined manner without timing the market.
          </p>
        </motion.div>

        <motion.div data-aos="fade-left">
          <h3 className="text-lg font-semibold" style={{ color: "#1C3C6D" }}>
            Benefits of SIP
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li><strong>Disciplined Approach:</strong> Encourages regular investing.</li>
            <li><strong>Power of Compounding:</strong> Returns grow faster over time.</li>
            <li><strong>Cost Averaging:</strong> Buy more when prices are low.</li>
            <li><strong>Flexible:</strong> Start with ₹500/month.</li>
            <li><strong>Tax Benefits:</strong> ELSS funds offer deductions.</li>
          </ul>
        </motion.div>

        <motion.div data-aos="fade-right">
          <h3 className="text-lg font-semibold" style={{ color: "#1C3C6D" }}>
            How SIP Helps in Wealth Creation
          </h3>
          <ol className="list-decimal pl-6 space-y-1 text-gray-700">
            <li><strong>Consistent Growth:</strong> Long-term SIP builds wealth.</li>
            <li><strong>Risk Management:</strong> Avoid market timing risks.</li>
            <li><strong>Goal-Oriented:</strong> Use SIPs to achieve goals.</li>
          </ol>
        </motion.div>

        <motion.div data-aos="fade-up">
          <h3 className="text-lg font-semibold" style={{ color: "#1C3C6D" }}>
            Example of SIP Wealth Creation
          </h3>
          <p className="text-gray-700 mt-2">
            ₹10,000/month for 20 years at 12% return gives you ₹1.92 Cr maturity.
          </p>
          <table className="w-full border mt-4 text-sm bg-white rounded shadow overflow-hidden" style={{ borderColor: "#26BF64" }}>
            <thead className="bg-blue-100 text-blue-900" style={{ backgroundColor: "#D7EAF2", color: "#1C3C6D" }}>
              <tr>
                <th className="border px-3 py-2 text-left" style={{ borderColor: "#26BF64" }}>SIP</th>
                <th className="border px-3 py-2 text-left" style={{ borderColor: "#26BF64" }}>Duration</th>
                <th className="border px-3 py-2 text-left" style={{ borderColor: "#26BF64" }}>Return</th>
                <th className="border px-3 py-2 text-left" style={{ borderColor: "#26BF64" }}>Maturity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-green-50 even:bg-white" style={{ color: "#1C3C6D" }}>
                <td className="border px-3 py-2" style={{ borderColor: "#26BF64" }}>₹10,000/month</td>
                <td className="border px-3 py-2" style={{ borderColor: "#26BF64" }}>20 years</td>
                <td className="border px-3 py-2" style={{ borderColor: "#26BF64" }}>12%</td>
                <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#26BF64" }}>₹1.92 Cr</td>
              </tr>
              <tr className="odd:bg-green-50 even:bg-white" style={{ color: "#1C3C6D" }}>
                <td className="border px-3 py-2" style={{ borderColor: "#26BF64" }}>₹5,000/month</td>
                <td className="border px-3 py-2" style={{ borderColor: "#26BF64" }}>15 years</td>
                <td className="border px-3 py-2" style={{ borderColor: "#26BF64" }}>10%</td>
                <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#26BF64" }}>₹1.10 Cr</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default SipCalculator;
