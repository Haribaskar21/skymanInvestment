import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Emoji or SVG icons for each calculator
const calculatorIcons = [
  { icon: "🧮", bg: "bg-green-400" },
  { icon: "🏦", bg: "bg-blue-400" },
  { icon: "💸", bg: "bg-yellow-400" },
  { icon: "📈", bg: "bg-violet-400" },
  { icon: "🔁", bg: "bg-teal-400" },
  { icon: "💳", bg: "bg-pink-400" },
  { icon: "⏳", bg: "bg-orange-400" },
];

const calculators = [
  {
    title: "SIP Calculator",
    description: "Calculate how much you need to save or how much you will accumulate with your SIP",
    path: "sip-calculator",
  },
  {
    title: "Loan Amortization Calc",
    description: "Input advance EMI or lump sums to see deductions in terms of EMI or loan tenure period",
    path: "loan-amortization",
  },
  {
    title: "Lumpsum Calculator",
    description: "Calculate returns for lumpsum investments to achieve your financial goals.",
    path: "lumpsum",
  },
  {
    title: "CAGR Calculator",
    description: "Input your investment value, mark-to-market and the number of years invested to calculate the CAGR",
    path: "cagr",
  },
  {
    title: "SWP Calculator",
    description: "Calculate your final amount with Systematic Withdrawal Plans (SWP)",
    path: "swp",
  },
  {
    title: "Loan EMI Calculator",
    description: "Calculate your EMI Outgo for any loans. Check this before you even apply for a loan.",
    path: "loan-emi",
  },
  {
    title: "Future Value Calculator",
    description: "Input your current annual expenses and number of years until retirement to calculate the Future value of Money",
    path: "future-value",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.93 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

const arrowPulse = {
  animate: {
    x: [0, 8, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 1.4,
      ease: "easeInOut",
    },
  },
};

const MotionLink = motion(Link);

export default function Calculators() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-50 via-green-100 to-white px-2 sm:px-4 md:px-10 lg:px-20 relative">
      {/* Soft grid dots */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#a7f3d0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#17436a] relative z-10 drop-shadow-[0_3px_16px_rgba(38, 191, 100,0.14)]">
        Financial Calculators
      </h1>
      <motion.div
        className="relative z-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {calculators.map((calc, i) => (
          <MotionLink
            to={`/calculators/${calc.path}`}
            key={calc.path}
            variants={cardVariants}
            whileHover={{
              scale: 1.052,
              y: -8,
              boxShadow: `0 8px 32px 0 ${calculatorIcons[i].bg.replace(
                "bg-",
                "rgba("
              )}, 0.13)`,
              borderColor: "#26BF64",
            }}
            whileFocus={{
              scale: 1.045,
              y: -2,
              borderColor: "#1C3C6D",
              outline: "none",
              boxShadow: "0 0 0 4px rgba(38,191,100,0.31)",
            }}
            className="group relative rounded-3xl border-2 border-green-200 bg-white/70 backdrop-blur-md shadow-xl transition-all duration-300 ring-1 ring-inset ring-green-200 hover:ring-green-400 focus:outline-none focus:ring-4 focus:ring-green-300"
            style={{
              minHeight: "300px",
              padding: "2.2rem 1.4rem 1.6rem 1.4rem",
              color: "#14532d"
            }}
          >
            {/* Icon bubble */}
            <div
              className={`absolute -top-7 left-0 right-0 mx-auto flex justify-center items-center ${calculatorIcons[i].bg} text-white text-4xl shadow-lg rounded-full w-14 h-14 border-4 border-white ring-8 ring-white/50 group-hover:scale-110 transition-transform duration-300`}
              style={{ zIndex: 2 }}
            >
              {calculatorIcons[i].icon}
            </div>
            <div className="pt-10" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#17436a] text-center">{calc.title}</h2>
            <p className="text-[1rem] leading-relaxed text-green-900/90 mb-7 text-center">{calc.description}</p>
            <div className="inline-flex items-center font-bold text-green-700 text-base mt-auto mx-auto group">
              <span className="relative">
                <span className="py-1 px-3 bg-gradient-to-r from-green-200/80 to-green-100/60 rounded-2xl transition group-hover:text-green-900">
                  Try it out
                </span>
                {/* Gradient animated underline on hover */}
                <span className="block h-[2px] mt-1 rounded group-hover:bg-gradient-to-r from-green-400 to-green-600 bg-green-200 w-full transition-all duration-400 scale-x-0 group-hover:scale-x-100 origin-left"></span>
              </span>
              <motion.svg
                className="ml-2 h-5 w-5 text-green-600 group-hover:text-green-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                variants={arrowPulse}
                animate="animate"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </motion.svg>
            </div>
          </MotionLink>
        ))}
      </motion.div>
    </div>
  );
}
