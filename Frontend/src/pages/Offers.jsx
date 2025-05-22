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
    <section className="min-h-screen bg-gray-100 py-16 px-6 md:px-24 text-gray-800">
      <motion.h1
        className="text-4xl font-bold text-center text-blue-900 mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Insurance Offers
      </motion.h1>

      <div className="max-w-5xl mx-auto bg-gray-100 rounded-xl p-8 space-y-8">
        {/* <img
          src="https://cdn.pixabay.com/photo/2017/10/10/21/46/insurance-2836389_1280.jpg"
          alt="Insurance Offers"
          className="rounded-xl w-full mb-6"
          data-aos="zoom-in"
        /> */}

        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">Why buy insurance from us?</h2>
          <p className="text-gray-600">
            We offer personalized insurance plans with competitive rates, cashback offers, and complete assistance.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">Types of Insurance Available:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Vehicle Insurance</li>
            <li>Health Insurance</li>
            <li>Term Insurance</li>
            <li>Corporate Insurance - Health/Term/Accident</li>
            <li>Key Person Insurance</li>
            <li>Shopkeepers Policy</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <p className="mt-4 text-gray-700">
            Please send us the quote you received from other vendors. We will match that and offer you the cashback.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="space-y-2 text-gray-700">
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
            className="flex justify-center"
            >
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <Link
                to="/contact"
                className="inline-block bg-[#004d6e] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#00bcd4] transition duration-300 ease-in-out shadow-md"
                >
                Contact Us
                </Link>
            </motion.div>
     </motion.div>


      </div>
    </section>
  );
}
