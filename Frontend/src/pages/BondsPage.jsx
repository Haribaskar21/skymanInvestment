import React from "react";
import { motion } from "framer-motion";

const ncds = [
  {
    id: 1,
    name: "Project Vega",
    interest: "14.80%",
    security: "Secured",
    maturity: "Dec 2026",
  },
  {
    id: 2,
    name: "Progfin Private Placement",
    interest: "11.25%",
    security: "Secured",
    maturity: "Feb 2026",
  },
  {
    id: 3,
    name: "Secondary Market NCDs",
  },
];

// Animation variants for container and items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function BondsPage() {
  return (
    <motion.div
      className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700">
        List of NCDs on Offer
      </h1>

      <motion.ul className="space-y-6">
        {ncds.map((ncd) => (
          <motion.li
            key={ncd.id}
            className="border border-gray-300 rounded-xl p-6 hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{ncd.name}</h2>
            <p className="text-gray-700">
              <span className="font-semibold">Interest Rate:</span> {ncd.interest}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Security:</span> {ncd.security}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Maturity:</span> {ncd.maturity}
            </p>
          </motion.li>
        ))}
      </motion.ul>

    </motion.div>
  );
}
