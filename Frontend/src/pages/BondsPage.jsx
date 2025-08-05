import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ncds = [
  {
    id: 1,
    name: "Project Vega",
    interest: "14.80%",
    security: "Secured",
    maturity: "Dec 2026",
    path: "/fixed-income-instruments",
  },
  {
    id: 2,
    name: "Progfin Private Placement",
    interest: "11.25%",
    security: "Secured",
    maturity: "Feb 2026",
    path: "/progfin-pp",
  },
  {
    id: 3,
    name: "Secondary Market NCDs",
    interest: null,
    security: null,
    maturity: null,
    path: "/fixed-income-instruments",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.25, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

export default function BondsPage() {
  return (
    <motion.div
      className="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-lg mt-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-12 text-center drop-shadow-md">
        List of NCDs on Offer
      </h1>

      <motion.ul className="space-y-8">
        {ncds.map(({ id, name, interest, security, maturity, path }) => (
          <motion.li
            key={id}
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(38, 191, 100, 0.25)" }}
            className="border border-gray-300 rounded-2xl p-6 cursor-pointer bg-gradient-to-tr from-green-50 to-white transition-shadow"
          >
            <Link to={path} className="block focus:outline-none focus:ring-4 focus:ring-green-300 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                {name}
              </h2>
              <div className="text-gray-700 text-base flex flex-col gap-1 max-w-md">
                <p>
                  <span className="font-semibold">Interest Rate:</span>{" "}
                  {interest ?? <span className="italic text-gray-400">Not available</span>}
                </p>
                <p>
                  <span className="font-semibold">Security:</span>{" "}
                  {security ?? <span className="italic text-gray-400">Not disclosed</span>}
                </p>
                <p>
                  <span className="font-semibold">Maturity:</span>{" "}
                  {maturity ?? <span className="italic text-gray-400">To be confirmed</span>}
                </p>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
