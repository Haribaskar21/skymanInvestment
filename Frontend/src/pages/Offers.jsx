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
        Insurance Offers
      </motion.h1>

      <div className="max-w-5xl mx-auto bg-[#e6f0e9] rounded-xl p-8 space-y-8 shadow-lg">
        {/* Uncomment and replace with your image if needed
        <img
          src="https://cdn.pixabay.com/photo/2017/10/10/21/46/insurance-2836389_1280.jpg"
          alt="Insurance Offers"
          className="rounded-xl w-full mb-6"
          data-aos="zoom-in"
        /> 
        */}

        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-3 text-[#1C3C6D]">Why buy insurance from us?</h2>
          <p className="text-[#3a5555]">
            We offer personalized insurance plans with competitive rates, cashback offers, and complete assistance.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-semibold mb-3 text-[#1C3C6D]">Types of Insurance Available:</h2>
          <ul className="list-disc list-inside space-y-2 text-[#3a5555]">
            <li>Vehicle Insurance</li>
            <li>Health Insurance</li>
            <li>Term Insurance</li>
            <li>Corporate Insurance - Health/Term/Accident</li>
            <li>Key Person Insurance</li>
            <li>Shopkeepers Policy</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <p className="mt-4 text-[#3a5555]">
            Please send us the quote you received from other vendors. We will match that and offer you the cashback.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="space-y-2 text-[#3a5555]">
          <p><strong>🎯 10% Cashback</strong> on Term insurance</p>
          <p><strong>🚗 5% Cashback</strong> on Health and Vehicle insurance</p>
          <p><strong>🎯 Customized quotes</strong> based on your budget</p>
          <p><strong>📋 End-to-end support</strong> until policy issuance</p>
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
