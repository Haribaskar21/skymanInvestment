import React from "react";
import { motion } from "framer-motion";

const feesData = [
  { type: "ITR - 4", fees: "₹6,000.00", gst: "₹1,080.00", total: "₹7,080.00" },
  { type: "ITR - 3", fees: "₹6,000.00", gst: "₹1,080.00", total: "₹7,080.00" },
  { type: "ITR - 2", fees: "₹5,000.00", gst: "₹900.00", total: "₹5,900.00" },
  { type: "ITR - 1", fees: "₹2,000.00", gst: "₹360.00", total: "₹2,360.00" },
];

const taxCards = [
  {
    img: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=600",
    label: "Advisory",
  },
  {
    img: "https://images.pexels.com/photos/4386368/pexels-photo-4386368.jpeg?auto=compress&cs=tinysrgb&w=600",
    label: "Preparation",
  },
  {
    img: "https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&w=600&h=350&fit=crop",
    label: "Filing",
  },
  {
    img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
    label: "Compliance",
  },
];


// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

export default function TaxServices() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Tax Services Cards */}
      <section className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-green-600"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Tax Services
          </motion.h2>
          <motion.p
            className="text-center mb-12 text-gray-700 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Explore our comprehensive tax filing services tailored for Indian and US customers. Our expert team ensures accurate and timely tax preparation, filing, and advisory services to meet your specific needs.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {taxCards.map((card, idx) => (
              <motion.div
                key={card.label}
                className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(34,197,94,0.3)" }}
              >
                <div className="relative group">
                  <img
                    src={card.img}
                    alt={card.label}
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
                </div>
                <div className="py-5 text-center font-semibold text-lg text-gray-900">
                  {card.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

            {/* Fees Table */}
      <div className="flex flex-col items-center pt-12 pb-8">
        <motion.div
          className="w-full max-w-3xl rounded-xl overflow-x-auto shadow-2xl bg-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-teal-600 text-white text-lg font-semibold">
                <th className="p-4 text-left rounded-tl-lg">Form Type</th>
                <th className="p-4 text-left">Fees</th>
                <th className="p-4 text-left">GST</th>
                <th className="p-4 text-left rounded-tr-lg">Total Fees</th>
              </tr>
            </thead>
            <tbody>
              {feesData.map((row, idx) => (
                <tr
                  key={row.type}
                  className={`border-b border-gray-200 ${
                    idx === feesData.length - 1 ? "rounded-b-lg" : ""
                  }`}
                >
                  <td className="p-4 text-gray-900 font-medium">{row.type}</td>
                  <td className="p-4 text-gray-700">{row.fees}</td>
                  <td className="p-4 text-gray-700">{row.gst}</td>
                  <td className="p-4 text-gray-900 font-bold">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
}
