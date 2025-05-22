import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

export default function RefundPolicy() {
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
        Refund Policy
      </motion.h1>

      <div className="max-w-5xl mx-auto bg-gray-100 rounded-xl  p-8 space-y-10">
        {/* <img
          src="https://cdn.pixabay.com/photo/2017/09/22/19/30/online-2779500_1280.jpg"
          alt="Refund Policy"
          className="rounded-xl w-full mb-6"
          data-aos="zoom-in"
        /> */}

        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">At Skyman Investments</h2>
          <p>
            At Skyman Investments we strive to provide exceptional financial services to our clients. To ensure clarity and transparency regarding our refund process, we have established the following Refund Policy.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">Refund Eligibility</h2>
          <p>
            <strong>Refund Requests Before Service:</strong> You may request a refund for services that have not yet been provided. To be eligible for a refund, your request must be submitted in writing prior to the commencement of the service.
          </p>
          <p className="mt-4">
            <strong>No Refunds After Service Commencement:</strong> Once our services have been initiated or completed, no refunds will be issued under any circumstances. This policy applies to all services offered by Skyman Investments.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="200">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">How to Request a Refund</h2>
          <p>
            To request a refund before the service is provided, please follow these steps:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Contact our customer support team at [Contact Information].</li>
            <li>Provide your account details and a clear explanation of your refund request.</li>
            <li>We will review your request and respond within 7 working days.</li>
            <li>Refunds, if applicable and eligible, will be paid within 7 working days to your account.</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">Changes to This Policy</h2>
          <p>
            We reserve the right to update or modify this Refund Policy at any time. Any changes will be posted on this page, and we encourage you to review it periodically.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="400">
          <p>
            Thank you for choosing Skyman Investments. We appreciate your understanding of our refund policy. If you have any questions or need further assistance, please feel free to contact us.
          </p>
        </div>
      </div>
    </section>
  );
}