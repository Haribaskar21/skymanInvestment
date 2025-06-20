import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ExtraSections() {
  const stats = [
    { label: "Clients Served", value: "1,200+" },
    { label: "Assets Managed", value: "₹150 Cr+" },
    { label: "Years of Expertise", value: "15+" },
    { label: "Client Satisfaction", value: "98%" },
  ];

  const team = [
    {
      name: "Arjun Singh",
      role: "Chief Investment Officer",
      img: "assets/3.jpeg",
    },
    {
      name: "Priya Menon",
      role: "Senior Financial Advisor",
      img: "assets/2.jpeg",
    },
    {
      name: "Rahul Kapoor",
      role: "Risk Management Lead",
      img: "assets/project-1.jpg",
    },
  ];

  const plans = [
    {
      name: "Basic",
      price: "₹5,000",
      features: ["Portfolio review", "Monthly updates", "Email support"],
    },
    {
      name: "Pro",
      price: "₹15,000",
      features: [
        "Everything in Basic",
        "Quarterly review calls",
        "Tax planning",
      ],
    },
    {
      name: "Premium",
      price: "₹30,000",
      features: [
        "Everything in Pro",
        "Dedicated advisor",
        "24/7 financial support",
      ],
    },
  ];

  return (
    <>
      {/* --- Quick Stats --- */}
      <section className="py-16 bg-gradient-to-r from-[#F0FFF4] to-[#F0F8FF]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="transition transform hover:scale-105 duration-300"
            >
              <h3 className="text-4xl font-extrabold text-[#26BF64] drop-shadow-lg">
                {s.value}
              </h3>
              <p className="text-[#1C3C6D] mt-2 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Meet Our Team --- */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <motion.h2
            className="text-4xl font-extrabold text-[#1C3C6D]"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            className="text-gray-500 mt-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Experts committed to your financial growth
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#F9FAFB] p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-[#26BF64]"
              />
              <h3 className="text-xl font-semibold text-[#1C3C6D]">
                {person.name}
              </h3>
              <p className="text-gray-600">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Pricing Plans --- */}
      <section className="py-20 bg-[#F8F9FC]">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            className="text-4xl font-extrabold text-[#1C3C6D]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Pricing Plans
          </motion.h2>
          <motion.p
            className="text-gray-600 mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Choose a plan that aligns with your investment goals.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-[#26BF64] rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-[#1C3C6D] text-center">
                {plan.name}
              </h3>
              <div className="text-3xl font-bold text-[#26BF64] my-6 text-center">
                {plan.price}
              </div>
              <ul className="text-gray-700 space-y-3 mb-6">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#26BF64]" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-auto block bg-[#26BF64] text-white text-center px-6 py-3 rounded-full font-semibold hover:bg-[#1C3C6D]"
              >
                Select Plan
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Newsletter Signup --- */}
      <motion.section
        className="py-16 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[#1C3C6D]">Stay Updated</h2>
        <p className="text-gray-600 mt-2">
          Subscribe to receive the latest news, insights, and updates.
        </p>
        <form className="mt-6 max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#26BF64]"
          />
          <button
            type="submit"
            className="bg-[#26BF64] text-white px-6 py-3 rounded-full hover:bg-[#1C3C6D]"
          >
            Subscribe
          </button>
        </form>
      </motion.section>
    </>
  );
}
