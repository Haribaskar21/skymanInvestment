import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PrivacyPolicy() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 text-[#1C3C6D]">
      <h1
        className="text-4xl font-bold mb-4 text-center"
        data-aos="fade-down"
      >
        Data Privacy Policy
      </h1>
      <p
        className="text-sm italic text-center mb-12 text-[#26BF64]"
        data-aos="fade-up"
      >
        <strong>Effective Date:</strong> 01st September, 2020 &nbsp; | &nbsp;
        <strong>Last Reviewed:</strong> 26/06/2025
      </p>

      <section className="space-y-12">
        {/* Section 1: Types of Personal Information We Collect */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-2 text-[#1C3C6D]">
            1. Types of Personal Information We Collect
          </h2>
          <p>
            At Skyman Investments, safeguarding your personal information is our top priority.
            We may collect both public and non-public personal information, including but not limited to:
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-[#345a48]">
            <li>Full name, residential/mailing address, email, and phone number</li>
            <li>Tax identification number (e.g., PAN), Aadhar number</li>
            <li>Bank account details and investment account numbers</li>
            <li>Income, net worth, employment history, and financial goals</li>
            <li>Marital status and information about dependents</li>
            <li>Website-based information such as login credentials, account activity, form submissions, and preferences</li>
          </ul>
        </div>

        {/* Section 2: Sources of Information */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-2 text-[#1C3C6D]">
            2. Sources of Information
          </h2>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-[#345a48]">
            <li>Directly from you (e.g., forms, emails, phone calls)</li>
            <li>Website and mobile app interactions</li>
          </ul>
        </div>

        {/* Section 3: Purpose of Collecting Your Information */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-2 text-[#1C3C6D]">
            3. Purpose of Collecting Your Information
          </h2>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-[#345a48]">
            <li>Provide and maintain investment and financial services</li>
            <li>Execute transactions and manage your accounts</li>
            <li>Verify your identity and prevent fraud</li>
            <li>Personalize investment advice and services</li>
            <li>Fulfill legal and regulatory obligations</li>
            <li>Conduct internal data analysis and improve offerings</li>
          </ul>
        </div>

        {/* Section 4: Internal Use and Data Analysis */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-2 text-[#1C3C6D]">
            4. Internal Use and Data Analysis
          </h2>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-[#345a48]">
            <li>Maintain and update your client records</li>
            <li>Evaluate aggregate client behavior for service improvements</li>
            <li>Analyze financial trends while ensuring client anonymity</li>
            <li>Limit access to data to authorized employees on a need-to-know basis</li>
          </ul>
        </div>

        {/* Section 5: Data Sharing and Disclosures */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-2 text-[#1C3C6D]">
            5. Data Sharing and Disclosures
          </h2>
          <h3 className="font-semibold text-[#345a48] mt-2">5.1 With Affiliates</h3>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-[#345a48]">
            <li>Investment management services</li>
            <li>Operational support and customer service</li>
          </ul>
          <h3 className="font-semibold text-[#345a48] mt-4">5.2 With Financial Professionals and Service Providers</h3>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-[#345a48]">
            <li>Completing authorized transactions</li>
            <li>Generating investment reports and processing payments</li>
            <li>Marketing our own services only, not for external advertising</li>
          </ul>
          <p className="mt-2 text-[#345a48]">
            All third-party providers are bound by confidentiality agreements, limited data usage clauses,
            and data protection and IT security requirements.
          </p>
          <h3 className="font-semibold text-[#345a48] mt-4">5.3 Legal Disclosures</h3>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-[#345a48]">
            <li>Required by a court order, legal investigation, or regulatory authority</li>
            <li>Necessary for fraud detection or account servicing</li>
            <li>Permitted under dispute resolution or compliance clauses</li>
          </ul>
        </div>

        {/* Section 6: Restrictions on Data Sales and Marketing Use */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-2 text-[#1C3C6D]">
            6. Restrictions on Data Sales and Marketing Use
          </h2>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-[#345a48]">
            <li>We do not sell, rent, or disclose your personal data to unaffiliated marketers.</li>
            <li>No third-party marketing is allowed without written contracts and compliance with our confidentiality standards.</li>
          </ul>
        </div>

        {/* Section 7: Your Rights and Control */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-2 text-[#1C3C6D]">
            7. Your Rights and Control
          </h2>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-[#345a48]">
            <li>Access the personal information we hold about you</li>
            <li>Request corrections or updates to inaccurate/incomplete data</li>
            <li>Withdraw consent where applicable</li>
          </ul>
          <p className="mt-2 text-[#345a48]">
            Contact us to exercise your rights at: +91 9840885001 or skymaninvestments@gmail.com
          </p>
        </div>

        {/* Section 8: Data Protection and Security Measures */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-2 text-[#1C3C6D]">
            8. Data Protection and Security Measures
          </h2>
          <p className="mb-2 text-[#345a48]">
            We implement a comprehensive Information Security Program including:
          </p>
          <ul className="list-disc ml-6 space-y-1 text-[#345a48]">
            <li>Administrative safeguards: Employee access controls, privacy training</li>
            <li>Technical safeguards: Encryption, firewall protection, intrusion detection</li>
            <li>Physical safeguards: Secure file storage, restricted access zones</li>
            <li>Breach response: Monitoring, containment, notification, and remedy procedures</li>
          </ul>
        </div>

        {/* Section 9: Data Retention & Disposal */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-2 text-[#1C3C6D]">
            9. Data Retention & Disposal
          </h2>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-[#345a48]">
            <li>
              We retain personal data as long as your relationship with us is active or as required by law.
            </li>
            <li>
              Once no longer needed, data is securely destroyed using industry-approved disposal protocols.
            </li>
          </ul>
        </div>

        {/* Section 10: Notification of Policy Changes */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-2 text-[#1C3C6D]">
            10. Notification of Policy Changes
          </h2>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-[#345a48]">
            <li>This policy is reviewed annually and updated as needed.</li>
            <li>Significant changes will be communicated via written notice or website alerts.</li>
            <li>
              Your continued use of services implies consent to the updated policy unless otherwise stated.
            </li>
          </ul>
        </div>

        {/* Section 11: How to Contact Us */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-2 text-[#1C3C6D]">
            11. How to Contact Us
          </h2>
          <p className="text-[#345a48]">
            For questions, complaints, or to exercise your data rights, please contact our Privacy Policy Specialist at:
          </p>
          <ul className="ml-6 mt-2 text-[#345a48]">
            <li>Skyman Investments</li>
            <li>Ashok Manor, Annai Nagar, Selaiyur, Chennai – 600073</li>
            <li>📞 +91 9840885001</li>
            <li>📧 skymaninvestments@gmail.com</li>
          </ul>
        </div>

        {/* Consent Note */}
        <div data-aos="fade-up" className="mt-8 text-[#345a48]">
          <p>
            By using our services, you consent to the collection and use of your information as outlined in this policy.<br />
            Thank you for trusting Skyman Investments with your financial services needs.
          </p>
        </div>
      </section>
    </div>
  );
}
