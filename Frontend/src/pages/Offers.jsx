import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function OffersPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const insuranceTypes = [
    "Vehicle Insurance",
    "Health Insurance",
    "Term Insurance",
    "Corporate Insurance (Health / Term / Accident)",
    "Key Person Insurance",
    "Shopkeepers Policy"
  ];

  const whyChooseUsPoints = [
    { icon: "✅", text: "We Match Any Quote – Share your vendor quote & we’ll match it!" },
    { icon: "💸", text: "Cashback Guarantee – Get cashback straight to your account" },
    { icon: "🎯", text: "Customized Quotes – Tailored insurance plans as per your budget" },
    { icon: "🤝", text: "End-to-End Support – From quote to policy issuance, we’re with you" }
  ];

  return (
    <section className="relative min-h-screen px-6 md:px-24 text-[#1C3C6D] overflow-hidden">
      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold text-center mb-14 tracking-tight bg-gradient-to-r from-[#1C3C6D] via-[#26BF64] to-[#14532d] text-transparent bg-clip-text drop-shadow-md"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Exclusive Insurance Offers
      </motion.h1>

      <div className="max-w-5xl mx-auto space-y-14">

        {/* Why Buy Insurance */}
        <motion.div
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-lg border border-green-300"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#1C3C6D] drop-shadow-sm">Why Buy Insurance from Us?</h2>
          <p className="font-semibold text-[#26BF64] text-lg mb-3 max-w-xl mx-auto text-center drop-shadow">
            Secure Your Future with Confidence — We’ve Got You Covered!
          </p>
        </motion.div>

        {/* Types of Insurance */}
        <motion.div
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-lg border border-green-300"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <h2 className="text-3xl font-semibold mb-6 text-[#1C3C6D] drop-shadow-sm">Types of Insurance We Offer:</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto text-[#274157] text-lg list-disc list-inside">
            {insuranceTypes.map((type, i) => (
              <li key={i} className="hover:text-green-700 transition-colors cursor-default">{type}</li>
            ))}
          </ul>
        </motion.div>

        {/* Cashback Offers */}
        <motion.div
          className="bg-white/90 rounded-3xl p-8 shadow-lg max-w-xl mx-auto border border-green-600"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="text-2xl font-semibold mb-4 drop-shadow-md text-[#1C3C6D]">Exclusive Cashback Offers Just for You!</h3>
          <ul className="list-disc list-inside space-y-2 text-[#274157]">
            <li><strong>Get 10% Cashback on Term Insurance</strong></li>
            <li><strong>Get 5% Cashback on Health &amp; Vehicle Insurance</strong></li>
          </ul>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-3xl font-semibold mb-8 text-center text-[#1C3C6D] drop-shadow-sm">Why Choose Us?</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {whyChooseUsPoints.map(({ icon, text }, i) => (
              <div
                key={i}
                className="flex items-start gap-5 bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-green-300 cursor-pointer group hover:shadow-2xl hover:bg-green-50 transition-transform transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <div className="flex-shrink-0 text-3xl text-[#26BF64] group-hover:scale-110 transition-transform">{icon}</div>
                <p className="text-[#274157] font-semibold leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quote Callout */}
        <motion.div
          className="rounded-3xl bg-white/90 shadow-inner py-6 px-8 text-center font-semibold text-[#274157] max-w-2xl mx-auto backdrop-blur-md border border-green-300"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          Send Us Your Quote Now &amp; Get the Best Deal Instantly!
          <br />
          <span className="text-[#1C3C6D] font-normal text-sm mt-1 inline-block">
            Let us beat the market for you — savings &amp; support, all in one place!
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.12, boxShadow: "0 6px 15px rgba(38,191,100,0.7)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350 }}
          >
            <Link
              to="/contact"
              className="relative inline-block bg-gradient-to-r from-[#26BF64] via-[#1C3C6D] to-[#14532d] text-white px-8 py-3 rounded-full font-semibold shadow-lg ring-4 ring-green-400/40 hover:ring-green-500 duration-300 transition-all"
              aria-label="Contact Skyman Investments"
            >
              Contact Us Now
              {/* Glow effect */}
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-white opacity-10 blur-xl animate-pulse-slow pointer-events-none"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
