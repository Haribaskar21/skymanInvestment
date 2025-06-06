import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PrivacyPolicy() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-[#1C3C6D]">
      <h1
        className="text-4xl font-bold mb-4 text-center"
        data-aos="fade-down"
      >
        Our Data Privacy Policy
      </h1>

      <p
        className="text-sm italic text-center mb-12 text-[#26BF64]"
        data-aos="fade-up"
      >
        <strong>Effective Date:</strong> 01st September, 2020
      </p>

      {/* Sections */}
      <section className="space-y-12">
        {/* Section 1 */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-2 text-[#1C3C6D]">
            Information We Collect
          </h2>
          <p>
            When you interact with us, we may collect personal information including, but not limited to,
            your name, email address, phone number, and mailing address. This information is collected when you:
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-[#345a48]">
            <li>Open an account with us</li>
            <li>Contact us for support</li>
            <li>Engage in business transactions</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-2 text-[#1C3C6D]">
            Use of Your Contact Details
          </h2>
          <p>
            We want to assure you that your contact details will only be used for the following purposes:
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-[#345a48]">
            <li>To communicate with you regarding your business transactions</li>
            <li>To provide important updates about your account or services</li>
            <li>To respond to your inquiries and support requests</li>
          </ul>
          <p className="mt-4 font-semibold text-[#26BF64]">
            We will not use your contact details for any marketing or advertising purposes.
          </p>
          <p className="mt-2 text-[#345a48]">
            Your privacy is our priority, and we respect your preferences regarding the use of your information.
          </p>
        </div>

        {/* Section 3 */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-2 text-[#1C3C6D]">Data Protection</h2>
          <p className="text-[#345a48]">
            We implement a variety of security measures to maintain the safety of your personal information.
            Access is restricted to authorized personnel who are obligated to keep your data confidential.
          </p>
        </div>

        {/* Section 4 */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-2 text-[#1C3C6D]">Your Rights</h2>
          <p className="text-[#345a48]">
            You have the right to request access to the personal information we hold about you,
            as well as to request corrections if any information is inaccurate or incomplete.
            For questions regarding your rights or this policy, feel free to reach out to us.
          </p>
        </div>

        {/* Section 5 */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-2 text-[#1C3C6D]">Changes to This Policy</h2>
          <p className="text-[#345a48]">
            We may update this Data Privacy Policy from time to time. Changes will be posted on this page.
            We encourage you to review it periodically to stay informed.
          </p>
        </div>

        {/* Consent Note */}
        <div data-aos="fade-up" className="text-[#345a48]">
          <p>
            By using our services, you consent to the collection and use of your information as outlined in this policy.
            Thank you for trusting Skyman Investments with your financial services needs.
          </p>
        </div>
      </section>

      {/* Contact Box */}
      <div
        className="mt-16 bg-[#d6f0d6] border border-[#26BF64] p-6 rounded-lg shadow-md"
        data-aos="fade-up"
      >
        <h3 className="text-xl font-semibold mb-2 text-[#1C3C6D]">Contact Us</h3>
        <p className="mb-1">Skyman Investments</p>
        <p>Ashok Manor, Annai Nagar, Selaiyur</p>
        <p>Chennai 600073</p>
        <p className="mt-2">📞 <strong className="text-[#1C3C6D]">+91 9840885001</strong></p>
        <p>
          📧{' '}
          <a
            href="mailto:skymaninvestments@gmail.com"
            className="underline text-[#1C3C6D] hover:text-[#26BF64] transition"
          >
            skymaninvestments@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
