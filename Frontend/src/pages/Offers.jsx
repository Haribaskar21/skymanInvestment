import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function OffersPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="min-h-screen bg-[#f0f6f4] py-16 px-6 md:px-24 text-[#1C3C6D]">
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        OFFER
      </motion.h1>

      <div className="max-w-5xl mx-auto bg-[#e6f0e9] rounded-xl p-8 space-y-8 shadow-lg">
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-3 text-[#1C3C6D]">Why Buy Insurance from Us?</h2>
          <p className="font-medium text-[#26BF64] mb-1">
            Secure Your Future with Confidence — We’ve Got You Covered!
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="50">
          <h2 className="text-2xl font-semibold mb-3 text-[#1C3C6D]">Types of Insurance We Offer:</h2>
          <ul className="list-disc list-inside space-y-1 text-[#3a5555]">
            <li>Vehicle Insurance</li>
            <li>Health Insurance</li>
            <li>Term Insurance</li>
            <li>Corporate Insurance (Health / Term / Accident)</li>
            <li>Key Person Insurance</li>
            <li>Shopkeepers Policy</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="rounded-xl bg-[#d9f6df] p-4 shadow">
          <h3 className="text-xl font-semibold text-[#1C3C6D] mb-2">Exclusive Cashback Offers Just for You!</h3>
          <ul className="list-disc list-inside space-y-1 text-[#274157]">
            <li><strong>Get 10% Cashback on Term Insurance</strong></li>
            <li><strong>Get 5% Cashback on Health &amp; Vehicle Insurance</strong></li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-semibold mb-3 text-[#1C3C6D]">Why Choose Us?</h3>
          <ul className="list-none space-y-2 text-[#274157]">
            <li>✔ <strong>We Match Any Quote</strong> – Share your vendor quote &amp; we’ll match it!</li>
            <li>✔ <strong>Cashback Guarantee</strong> – Get cashback straight to your account</li>
            <li>✔ <strong>Customized Quotes</strong> – Tailored insurance plans as per your budget</li>
            <li>✔ <strong>End-to-End Support</strong> – From quote to policy issuance, we’re with you</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="250" className="py-4">
          <div className="rounded-xl bg-[#eafaf4] py-4 px-3 text-center text-[#345a48] font-semibold text-lg">
            Send Us Your Quote Now &amp; Get the Best Deal Instantly!
            <br />
            <span className="text-[#1C3C6D] font-normal">Let us beat the market for you — savings &amp; support, all in one place!</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-[#1C3C6D] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#26BF64] transition duration-300 ease-in-out shadow-md"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
