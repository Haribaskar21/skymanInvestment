import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const LumpsumCalculator = () => {
  const [investment, setInvestment] = useState("");
  const [rate, setRate] = useState("");
  const [duration, setDuration] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const calculateReturns = () => {
    const P = parseFloat(investment);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(duration);
    if (isNaN(P) || isNaN(r) || isNaN(t)) {
      alert("Please enter valid numbers in all fields.");
      return;
    }
    const A = P * Math.pow(1 + r, t);
    setResult(A.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F3EC] to-[#D9E6F2] py-16 px-4">
      <div
        data-aos="fade-up"
        className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-[#cce5d6]"
      >
        <h1 className="text-3xl font-bold text-center text-[#1C3C6D] mb-8">
          Lumpsum Investment Calculator
        </h1>

        <div className="space-y-6">
          <input
            type="number"
            placeholder="Initial Investment (₹)"
            className="w-full p-4 border border-[#26BF64] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#26BF64]"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
          />
          <input
            type="number"
            placeholder="Expected Annual Return (%)"
            className="w-full p-4 border border-[#26BF64] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#26BF64]"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
          <input
            type="number"
            placeholder="Investment Duration (Years)"
            className="w-full p-4 border border-[#26BF64] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#26BF64]"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <button
            onClick={calculateReturns}
            className="w-full bg-[#26BF64] hover:bg-[#229958] text-white font-semibold py-3 rounded-lg transition-all shadow-md"
          >
            Calculate Returns
          </button>
        </div>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-center"
          >
            <p className="text-lg font-semibold text-[#1C3C6D]">Future Value:</p>
            <p className="text-4xl font-bold text-[#26BF64] mt-2">₹ {result}</p>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <div
        data-aos="fade-up"
        className="max-w-xl mx-auto mt-16 text-center bg-[#DDE9F6] border border-[#A7BEE8] p-10 rounded-2xl shadow-md"
      >
        <h3 className="text-2xl font-bold text-[#1C3C6D] mb-2">
          Ready to Start Investing?
        </h3>
        <p className="mb-5 text-[#355073]">
          Opening a Demat Account is your first step toward smart financial growth.
        </p>
        <a
          href="/demat-account"
          className="inline-block bg-[#1C3C6D] hover:bg-[#16305a] text-white px-6 py-3 rounded-full font-medium transition-all"
        >
          Get Started
        </a>
      </div>

      <footer className="text-center text-sm text-[#5D7290] mt-12">
        © 2024 Skyman Investments. All rights reserved.
      </footer>
    </div>
  );
};

export default LumpsumCalculator;
