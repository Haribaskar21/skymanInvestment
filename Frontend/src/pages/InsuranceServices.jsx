import React from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const InsuranceServices = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* General Insurance Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-extrabold text-center mb-4 text-blue-800">
            General Insurance
          </h2>
          <p className="text-center mb-6 text-gray-700 text-lg">
            We have tie-ups with trusted companies. Submit your details for a custom quote.
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-8 max-w-lg mx-auto text-center sm:text-left">
            <li>Name and Age of all Family members</li>
            <li>Coverage Required (₹ Lakhs)</li>
            <li>Pincode</li>
            <li>Any Pre-existing Illnesses?</li>
          </ul>

          <div className="text-center mb-10">
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeI6RpaQrURKicxaAN2Y9t3hMf8qmWextq883ydrlfwk0qwng/viewform">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
              Enter Your Details
            </motion.button>
                </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center mb-8">
            {[
              "oriental", "manipal", "niva", "starhealth",
              "icici", "hdfc", "reliance", "chola", "universal"
            ].map((logo, i) => (
              <motion.img
                key={i}
                src={`/logos/${logo}.avif`}
                alt={logo}
                className="h-20 transition duration-300"
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>

          <div className="bg-yellow-100 border border-yellow-300 p-4 rounded text-center text-sm text-gray-800 shadow-sm">
            💸 We match your quotes and offer <strong>5% cashback</strong> on base premium,
            on the 31st day from policy issuance if you buy the policy from us.
          </div>
        </motion.div>

        {/* Term Insurance Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-center mb-4 text-blue-800">
            Term Insurance
          </h2>
          <p className="text-center mb-6 text-gray-700 text-lg">
            Get the best rates for term insurance from leading insurers.
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-8 max-w-lg mx-auto text-center sm:text-left">
            <li>Sum Assured Required</li>
            <li>Name, Age, Gender</li>
            <li>Pincode</li>
            <li>Smoker / Non-Smoker</li>
            <li>Income</li>
          </ul>

          <div className="text-center mb-10">
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeyUGM3xu5Co4DWsNLjw9mNYLzwzYCtIxF1svFclb4yeYjsSQ/viewform">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
              Enter Your Details
            </motion.button>
                </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
            {["tataaia", "hdfclife", "icicipru", "aditya"].map((logo, i) => (
              <motion.img
                key={i}
                src={`/logos/${logo}.avif`}
                alt={logo}
                className="h-20 transition duration-300"
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
                    <div className="bg-yellow-100 mt-10 border border-yellow-300 p-4 rounded text-center text-sm text-gray-800 shadow-sm">
            💸 We match your quotes and offer <strong>10% cashback</strong> on base premium,
            on the 31st day from policy issuance if you buy the policy from us.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InsuranceServices;
