import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const MutualFundAdvisor = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="text-gray-800 py-10 px-4">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10"
                >
                <h1
                    className="text-4xl md:text-5xl font-extrabold text-indigo-800"
                    data-aos="fade-down"
                >
                    Your Trusted Mutual Fund Advisor
                </h1>
            </motion.div>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-6 md:p-10">
        <div className="grid md:grid-cols-3 gap-8 mb-10" data-aos="fade-up">
          <div className="md:col-span-1 flex justify-center items-center">
            <img
              src="assets/advisory.avif"
              alt="Rajesh Krishnamoorthy"
              className="rounded-xl shadow-md w-64 h-auto"
            />
          </div>
          <div className="md:col-span-2">
            <motion.h1
              className="text-3xl font-bold text-indigo-800 mb-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Meet Rajesh Krishnamoorthy
            </motion.h1>
            <p className="text-sm text-gray-600 mb-4">Advisor Code: <strong>ARN-177405</strong></p>
            <p className="text-lg">
              Welcome to my website! I’m <strong>Rajesh Krishnamoorthy</strong>, a dedicated mutual fund advisor with over <strong>25 years</strong> of experience helping individuals and families invest wisely. My mission is to empower you to achieve your financial goals through personalized mutual fund strategies.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <Section
            title="Why Choose Me as Your Mutual Fund Advisor?"
            items={[
              {
                title: "Personalized Investment Strategies",
                text: "I create customized mutual fund strategies tailored to your unique financial situation and long-term goals."
              },
              {
                title: "Expert Knowledge and Insight",
                text: "I stay current with market trends and opportunities to offer the best recommendations based on performance and data."
              },
              {
                title: "Transparency and Integrity",
                text: "Every decision is explained clearly—mutual fund selection, fees, performance expectations—building trust with transparency."
              },
              {
                title: "Long-Term Partnership",
                text: "More than an advisor—I aim to be a financial partner, adjusting strategies as your life evolves."
              }
            ]}
          />

          <Section
            title="My Approach to Mutual Fund Investing"
            items={[
              {
                title: "Goal Setting",
                text: "Understand what you're aiming for—retirement, education, or wealth building."
              },
              {
                title: "Risk Assessment",
                text: "Identify your risk tolerance and investment comfort zone."
              },
              {
                title: "Fund Selection",
                text: "Recommend mutual funds based on performance, cost, and alignment with your goals."
              },
              {
                title: "Ongoing Monitoring",
                text: "Adjust your portfolio based on market shifts and life changes."
              }
            ]}
          />

          <Section
            title="Services I Offer"
            items={[
              { title: "Mutual Fund Investment Advisory", text: "Tailored fund recommendations matching your financial goals." },
              { title: "Portfolio Management", text: "Ongoing optimization of your portfolio for best performance." },
              { title: "Retirement Planning", text: "Structured plans to build your retirement corpus via mutual funds." },
              { title: "Tax-efficient Investment Strategies", text: "Minimize taxes while maximizing returns." },
              { title: "Systematic Investment Plans (SIPs)", text: "Grow wealth through disciplined monthly investments." }
            ]}
          />

          <Section
            title="Why Mutual Funds?"
            items={[
              {
                text: "Mutual funds offer diversification, professional management, and access to a variety of assets. Whether you prefer equities, debt, or hybrids, I help you choose the best mix aligned with your financial journey."
              }
            ]}
            singleColumn
          />

          <motion.div
            className="text-center mt-10"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">
              Let’s Get Started
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Investing in mutual funds is a powerful way to grow wealth—but only with the right guidance. I'm here to help you make informed decisions and stay on track. Let’s build a strong, personalized portfolio for your future.
            </p>
            <a
              href="#"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
            >
              Open Rajesh's Calendar
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, items, singleColumn }) => (
  <div data-aos="fade-up">
    <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">{title}</h3>
    <div className={`grid ${singleColumn ? "grid-cols-1" : "md:grid-cols-2"} gap-6`}>
      {items.map((item, i) => (
        <div key={i} className="bg-indigo-50 p-4 rounded-xl border border-indigo-200 shadow-sm">
          {item.title && <h4 className="font-bold text-indigo-800 mb-1">{item.title}</h4>}
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default MutualFundAdvisor;
