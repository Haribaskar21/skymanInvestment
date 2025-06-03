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
    <div className="min-h-screen bg-white py-12 px-6 md:px-12 lg:px-20">
      <h1
        className="text-4xl font-extrabold text-center mb-12"
        style={{ color: "#1C3C6D" }}
      >
        Financial Calculators
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {calculators.map((calc, index) => (
          <Link
            to={`/calculators/${calc.path}`}
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className="rounded-3xl border-2 p-6 shadow-lg transform transition-transform duration-300 hover:scale-[1.04] cursor-pointer"
            style={{
              borderColor: "#26BF64",
              backgroundColor: "#E6F4EA",
              color: "#1C3C6D",
            }}
          >
            <h2 className="text-2xl font-semibold mb-3" style={{ color: "#1C3C6D" }}>
              {calc.title}
            </h2>
            <p className="text-md leading-relaxed" style={{ color: "#23523C" }}>
              {calc.description}
            </p>
            <div
              className="mt-4 inline-block font-semibold"
              style={{ color: "#26BF64" }}
            >
              ➔ Try it out
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Calculators;
