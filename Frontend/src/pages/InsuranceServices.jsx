import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const InsuranceServices = () => {
  return (
    <section className="bg-[#F7FAFC]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#1C3C6D]">Insurance Services</h1>
        {/* General Insurance Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-20 bg-white rounded-3xl shadow-xl p-10"
        >
          <h2 className="text-4xl font-extrabold text-center mb-6 text-[#1C3C6D]">
            General Insurance
          </h2>
          <p className="text-center mb-8 text-gray-700 text-lg max-w-xl mx-auto">
            We have tie-ups with trusted companies. Submit your details for a custom quote.
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-10 max-w-xl mx-auto text-center sm:text-left space-y-2">
            <li>Name and Age of all Family members</li>
            <li>Coverage Required (₹ Lakhs)</li>
            <li>Pincode</li>
            <li>Any Pre-existing Illnesses?</li>
          </ul>

          <div className="text-center mb-14">
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSeI6RpaQrURKicxaAN2Y9t3hMf8qmWextq883ydrlfwk0qwng/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#26BF64] hover:bg-green-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition duration-300"
              >
                Enter Your Details
              </motion.button>
            </Link>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 place-items-center mb-8">
            {["oriental", "manipal", "niva", "starhealth", "icici", "hdfc", "reliance", "chola", "universal"].map((logo, i) => (
              <motion.img
                key={i}
                src={`/logos/${logo}.avif`}
                alt={logo}
                loading="lazy"
                className="h-20 cursor-pointer rounded-xl transition-transform duration-300 shadow hover:scale-110 hover:shadow-xl"
              />
            ))}
          </div>

          <div className="bg-[#E5F8E7] border border-[#26BF64] p-5 rounded-lg text-center text-sm text-[#1C3C6D] shadow-md max-w-md mx-auto">
            💸 We match your quotes and offer <strong>5% cashback</strong> on base premium,
            on the 31st day from policy issuance if you buy the policy from us.
          </div>
        </motion.div>

        {/* Term Insurance Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-10"
        >
          <h2 className="text-4xl font-extrabold text-center mb-6 text-[#1C3C6D]">
            Term Insurance
          </h2>
          <p className="text-center mb-8 text-gray-700 text-lg max-w-xl mx-auto">
            Get the best rates for term insurance from leading insurers.
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-10 max-w-xl mx-auto text-center sm:text-left space-y-2">
            <li>Sum Assured Required</li>
            <li>Name, Age, Gender</li>
            <li>Pincode</li>
            <li>Smoker / Non-Smoker</li>
            <li>Income</li>
          </ul>

          <div className="text-center mb-14">
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSeyUGM3xu5Co4DWsNLjw9mNYLzwzYCtIxF1svFclb4yeYjsSQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#26BF64] hover:bg-green-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition duration-300"
              >
                Enter Your Details
              </motion.button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
            {["tataaia", "hdfclife", "icicipru", "aditya"].map((logo, i) => (
              <motion.img
                key={i}
                src={`/logos/${logo}.avif`}
                alt={logo}
                loading="lazy"
                className="h-20 cursor-pointer rounded-xl transition-transform duration-300 shadow hover:scale-110 hover:shadow-xl"
              />
            ))}
          </div>

          <div className="bg-[#E5F8E7] mt-10 border border-[#26BF64] p-5 rounded-lg text-center text-sm text-[#1C3C6D] shadow-md max-w-md mx-auto">
            💸 We match your quotes and offer <strong>10% cashback</strong> on base premium,
            on the 31st day from policy issuance if you buy the policy from us.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InsuranceServices;
