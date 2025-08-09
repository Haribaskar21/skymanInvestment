import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Section Card for each financial planning section
const SectionCard = ({ section, idx }) => (
  <section
    className={`
      relative 
      bg-gradient-to-tr from-white via-[#f3f7fb] to-[#e7ecf7]
      rounded-3xl shadow-xl border border-blue-100
      p-7 md:p-10 mb-10
      transition-transform duration-300
      hover:scale-[1.02]
    `}
    data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
  >
    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C3C6D] mb-4 tracking-tight flex items-center gap-2">
      {section.title}
    </h2>
    {section.content && (
      <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
        {section.content}
      </p>
    )}

    {section.list && (
      <ul className="list-disc pl-6 space-y-3 text-gray-700 text-base md:text-lg marker:text-blue-400">
        {section.list.map((item, i) => (
          <li
            key={i}
            className="transition-colors duration-200 hover:text-[#1C3C6D]"
          >
            {item}
          </li>
        ))}
      </ul>
    )}

    {section.button && (
      <a
        href={section.button.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          inline-block mt-8 px-8 py-3
          rounded-full
          bg-gradient-to-br from-green-600 via-green-500 to-green-700
          text-white font-extrabold text-lg shadow-lg
          hover:scale-105 focus:scale-105 transition-all duration-200
          hover:from-green-700 hover:to-green-600
        `}
      >
        {section.button.label}
      </a>
    )}
  </section>
);

const FinancialPlanning = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  // ...same sections as before...

  const sections = [
    {
      title: "Comprehensive Financial Planning Services",
      content: `Managing finances effectively is crucial for achieving financial stability and long-term goals. As a trusted financial services provider in India, we offer a wide range of financial planning services to help individuals and businesses make informed decisions. Below is a detailed list of services we provide, followed by an informative blog on the importance of financial planning.`,
    },
    {
      title: "Personal Financial Planning",
      list: [
        "Goal-based financial planning (retirement, education, home purchase, etc.)",
        "Cash flow and budgeting analysis",
        "Emergency fund planning",
        "Tax-efficient investment strategies",
      ],
    },
    {
      title: "Investment Planning",
      list: [
        "Mutual fund advisory",
        "Stock market & portfolio management",
        "Fixed income investments (FDs, Bonds, Debt Funds)",
        "Alternative investments (REITs, Gold, PMS, AIFs)",
      ],
    },
    {
      title: "Retirement Planning",
      list: [
        "Pension schemes (NPS, Annuity Plans)",
        "Retirement corpus calculation",
        "Withdrawal strategy planning",
        "Post-retirement healthcare planning",
      ],
    },
    {
      title: "Tax Planning & Optimization",
      list: [
        "Income tax-saving investments (Section 80C, 80D, etc.)",
        "Capital gains tax planning",
        "Tax-efficient withdrawal strategies",
        "GST & business tax advisory",
      ],
    },
    {
      title: "Insurance Planning",
      list: [
        "Life insurance (Term, ULIP, Endowment)",
        "Health insurance (Individual & Family Floater)",
        "Critical illness & disability coverage",
        "General insurance (Motor, Home, Travel)",
      ],
    },
    {
      title: "Estate & Will Planning",
      list: [
        "Will drafting & execution",
        "Succession planning for businesses",
        "Trust creation & inheritance strategies",
        "Nomination & legal documentation guidance",
      ],
    },
    {
      title: "Business Financial Planning",
      list: [
        "Business expansion funding advisory",
        "Working capital management",
        "Employee benefits & ESOP planning",
        "Exit strategy & business valuation",
      ],
    },
    {
      title: "Debt & Loan Advisory",
      list: [
        "Home loan & mortgage planning",
        "Personal loan & credit card debt management",
        "Debt consolidation strategies",
        "Credit score improvement guidance",
      ],
    },
    {
      title: "NRI Financial Services",
      list: [
        "NRI investment options (NRE/NRO accounts, FCNR deposits)",
        "Repatriation & tax implications",
        "Retirement planning for NRIs",
        "Real estate & inheritance planning",
      ],
    },
    {
      title: "Financial Literacy & Workshops",
      list: [
        "Customized financial education programs",
        "Investment awareness sessions",
        "Retirement & tax planning workshops",
      ],
    },
    {
      title: "Why Financial Planning is Essential for Every Indian",
      content: `In a rapidly evolving economy like India, financial planning is no longer a luxury—it’s a necessity. Whether you're a salaried professional, a business owner, or a retiree, structured financial planning ensures you meet your life goals while safeguarding against uncertainties.`,
    },
    {
      title: "Key Benefits of Financial Planning",
      list: [
        "Goal Achievement: Financial planning helps you define and prioritize goals—buying a home, funding your child’s education, or retiring comfortably. A structured plan ensures disciplined savings and investments.",
        "Risk Mitigation: Unexpected events like medical emergencies or job loss can derail finances. Insurance and emergency funds act as a safety net, ensuring financial stability.",
        "Tax Efficiency: Smart tax planning under Sections 80C, 80D, and others can significantly reduce liabilities, allowing more savings and investments.",
        "Wealth Creation & Inflation Protection: Investing in equity, mutual funds, and real estate helps grow wealth while beating inflation, ensuring your money retains its value over time.",
        "Stress-Free Retirement: With rising life expectancy, retirement planning is critical. A well-structured pension plan ensures you maintain your lifestyle without financial worries.",
        "Debt Management: Proper financial planning helps manage loans efficiently, avoiding excessive interest burdens and improving credit health.",
      ],
    },
    {
      title: "How to Start Financial Planning?",
      list: [
        "Assess Your Finances – Track income, expenses, and liabilities.",
        "Set Clear Goals – Short-term (travel, car) and long-term (retirement, education).",
        "Create a Budget – Allocate funds for savings, investments, and expenses.",
        "Invest Wisely – Diversify across equity, debt, and other instruments.",
        "Review Regularly – Adjust plans based on life changes and market conditions.",
      ],
      content: `Financial planning is the cornerstone of a secure future. Whether you’re just starting your career or planning retirement, professional guidance can optimize your financial journey.`,
    },
    {
      title: "Contact Us",
      content: `Contact us today for a personalized financial plan tailored to your needs!`,
      button: {
        label: "Chat Now",
        url: "https://api.whatsapp.com/send/?phone=9629596296&text&type=phone_number&app_absent=0",
      },
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 lg:px-8">
      {/* Header */}
      <header className="mb-16 text-center" data-aos="fade-down">
        <h1
          className="
          text-4xl md:text-5xl font-black
          text-transparent bg-clip-text bg-gradient-to-r from-[#26BF64] to-[#1C3C6D]
          tracking-tight drop-shadow-sm
          "
        >
          Financial Planning Services
        </h1>
        <div className="w-20 mx-auto mt-4 h-1.5 rounded bg-gradient-to-r from-sky-400 to-[#1C3C6D] opacity-80 animate-pulse" />
      </header>

      {/* Section Cards */}
      <div>
        {sections.map((section, idx) => (
          <SectionCard section={section} idx={idx} key={idx} />
        ))}
      </div>
    </main>
  );
};

export default FinancialPlanning;
