import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const calculators = [
  {
    title: "SIP Calculator",
    description:
      "Calculate how much you need to save or how much you will accumulate with your SIP",
    path: "sip-calculator",
  },
  {
    title: "Loan Amortization Calc",
    description:
      "Input advance EMI or lump sums to see deductions in terms of EMI or loan tenure period",
    path: "loan-amortization",
  },
  {
    title: "Lumpsum Calculator",
    description:
      "Calculate returns for lumpsum investments to achieve your financial goals.",
    path: "lumpsum",
  },
  {
    title: "CAGR Calculator",
    description:
      "Input your investment value, mark-to-market and the number of years invested to calculate the CAGR",
    path: "cagr",
  },
  {
    title: "SWP Calculator",
    description:
      "Calculate your final amount with Systematic Withdrawal Plans (SWP)",
    path: "swp",
  },
  {
    title: "Loan EMI Calculator",
    description:
      "Calculate your EMI Outgo for any loans. Check this before you even apply for a loan.",
    path: "loan-emi",
  },
  {
    title: "Future Value Calculator",
    description:
      "Input your current annual expenses and number of years until retirement to calculate the Future value of Money",
    path: "future-value",
  },
];

const Calculators = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-8 lg:px-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-10">
        Financial Calculators
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {calculators.map((calc, index) => (
          <Link
            to={`/calculators/${calc.path}`}
            key={index}
            className="bg-blue-100 border border-blue-200 rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              {calc.title}
            </h2>
            <p className="text-gray-700">{calc.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Calculators;
