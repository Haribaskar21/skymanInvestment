import { Link } from "react-router-dom";

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
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Priya Menon",
      role: "Senior Financial Advisor",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Rahul Kapoor",
      role: "Risk Management Lead",
      img: "https://via.placeholder.com/150",
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
      <section className="py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold text-[#26BF64]">{s.value}</h3>
              <p className="text-gray-600 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Meet Our Team ---
      <section className="py-16 bg-[#f9fafa]">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1C3C6D]">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((person, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-28 h-28 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#1C3C6D]">
                {person.name}
              </h3>
              <p className="text-gray-600">{person.role}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* --- Pricing Plans --- */}
      <section className="py-20">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-[#1C3C6D]">Our Pricing Plans</h2>
          <p className="text-gray-600 mt-4">
            Choose the plan that fits your financial journey best.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="border-2 border-[#26BF64] rounded-xl p-8 flex flex-col items-center"
            >
              <h3 className="text-2xl font-bold text-[#1C3C6D]">
                {plan.name}
              </h3>
              <div className="text-3xl font-bold text-[#26BF64] my-4">
                {plan.price}
              </div>
              <ul className="text-gray-600 mb-6 space-y-2 text-sm">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-auto bg-[#26BF64] text-white px-6 py-3 rounded-full hover:bg-[#1C3C6D]"
              >
                Select Plan
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- Newsletter Signup --- */}
      <section className="py-16 text-center">
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
      </section>
    </>
  );
}
