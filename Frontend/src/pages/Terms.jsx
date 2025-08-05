import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TermsAndConditions = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-[#e6f4ed] text-[#1C3C6D] px-6 py-12 max-w-6xl mx-auto"
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        style={{ color: '#1C3C6D' }}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Terms and Conditions
      </motion.h1>

      <div className="space-y-8 text-justify leading-relaxed" data-aos="fade-up" style={{ color: '#274157' }}>
        <div>
          <p className="font-semibold">
            Skyman Investments<br/>
            Website: www.skymaninvestments.com<br/>
            Registered Office: F2, Ashok Manor, 4, Annai Nagar, Selaiyur, Chennai – 600073
          </p>
        </div>
        
        {/* 1. Legal Identity and Applicability */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>1. Legal Identity and Applicability</h2>
          <p>
            Skyman Investments (“Platform Owner”, “we”, “us”, “our”) is a company incorporated under the Companies Act, 1956. These Terms and Conditions (“Terms of Use”) constitute a legally binding agreement between the user (“you”, “your”, “user”) and Skyman Investments and apply to your access and use of the website, mobile site, and application of skymaninvestments.com (“Platform”).
          </p>
        </section>
  
        {/* 2. Electronic Record & IT Act Compliance */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>2. Electronic Record &amp; IT Act Compliance</h2>
          <p>
            This document is an electronic record under the Information Technology Act, 2000, and the rules thereunder. It does not require a physical or digital signature and is published under Rule 3(1) of the Information Technology (Intermediaries Guidelines) Rules, 2011.
          </p>
        </section>
  
        {/* 3. User Eligibility and Compliance */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>3. User Eligibility and Compliance</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>You must be at least 18 years old, of sound mind, and legally competent to contract under the Indian Contract Act 1872.</li>
            <li>You must complete mandatory KYC and provide consent for collection and processing of personal and financial data (PAN, Aadhaar, bank details, etc.).</li>
            <li>Re-KYC may be requested periodically.</li>
          </ul>
        </section>
  
        {/* 4. Binding Nature of Terms */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>4. Binding Nature of Terms</h2>
          <p>
            By using the Platform, you agree to abide by these Terms of Use and all referenced policies including the Privacy Policy. We reserve the right to update these Terms at any time without prior notice. Continued use of the Platform implies acceptance of the updated Terms.
          </p>
        </section>
  
        {/* 5. User Registration and Responsibilities */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>5. User Registration and Responsibilities</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>You must provide true, accurate, and complete information during registration.</li>
            <li>You are fully responsible for all activities under your registered account.</li>
            <li>Unauthorized or fraudulent usage of the Platform is strictly prohibited.</li>
          </ul>
        </section>
  
        {/* 6. Service Disclaimer */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>6. Service Disclaimer</h2>
          <p>
            All information and services provided are on an “as is” basis. We do not guarantee the completeness, accuracy, or suitability of content and disclaim all liability arising from reliance on Platform information. You use the Platform at your own discretion and risk.
          </p>
        </section>
      
        {/* 7. Intellectual Property Rights */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>7. Intellectual Property Rights</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>All content including design, layout, software, and graphics is the intellectual property of Skyman Investments or its licensors.</li>
            <li>Unauthorized use, copying, reproduction, or modification is prohibited.</li>
            <li>You shall not use the Platform’s IP for commercial purposes without our written consent.</li>
          </ul>
        </section>
      
        {/* 8. Platform Access and Usage */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>8. Platform Access and Usage</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Access is personal, non-transferable, and revocable.</li>
            <li>Prohibited activities include: data scraping, resale, unauthorized distribution, or commercial exploitation of Platform features or data.</li>
            <li>Violations may result in suspension or termination of access.</li>
          </ul>
        </section>
      
        {/* 9. Prohibited Activities */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>9. Prohibited Activities</h2>
          <p>You must not:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Violate any law,</li>
            <li>Infringe IP rights,</li>
            <li>Impersonate others,</li>
            <li>Transmit harmful content (malware, spam, etc.),</li>
            <li>Collect personal data of other users,</li>
            <li>Engage in deceptive or harmful conduct on the Platform.</li>
          </ul>
        </section>
      
        {/* 10. Third-Party Links */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>10. Third-Party Links</h2>
          <p>
            The Platform may contain links to third-party websites for convenience. These are not under our control, and we are not responsible for their content, terms, or privacy practices.
          </p>
        </section>
      
        {/* 11. Contractual Relationship */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>11. Contractual Relationship</h2>
          <p>
            By initiating a transaction, you enter into a binding contract with Skyman Investments. You agree to pay applicable charges for services availed. Transaction records maintained by the Platform are final and binding.
          </p>
        </section>
      
        {/* 12. Account Management and Security */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>12. Account Management and Security</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>You are responsible for safeguarding your login credentials.</li>
            <li>You must report any suspected unauthorized access immediately.</li>
            <li>We may suspend accounts in case of suspicious activity or breach of terms.</li>
          </ul>
        </section>
      
        {/* 13. Risk Disclosure and Investment Responsibility */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>13. Risk Disclosure and Investment Responsibility</h2>
          <p>Investments offered carry financial risks including:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Market volatility,</li>
            <li>Credit risk,</li>
            <li>Liquidity issues,</li>
            <li>Interest rate fluctuations.</li>
          </ul>
          <p>
            Skyman Investments does not provide financial, investment, or tax advice. You are solely responsible for evaluating investment options and reading all relevant documents (offer terms, credit ratings, risk factors, etc.).
          </p>
        </section>
      
        {/* 14. Transaction Processing and Refunds */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>14. Transaction Processing and Refunds</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>All payments must be made through authorized payment channels.</li>
            <li>The Platform does not handle funds directly.</li>
            <li>Refunds, if any, will be subject to product-specific terms and clearing systems. No interest is payable on such refunds.</li>
          </ul>
        </section>
      
        {/* 15. Technical Downtime */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>15. Technical Downtime</h2>
          <p>
            We follow robust cybersecurity practices, we do not guarantee uninterrupted access. Technical issues or force majeure events may affect availability.
          </p>
        </section>
      
        {/* 16. User Submissions and Content */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>16. User Submissions and Content</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Content submitted by users (feedback, documents, etc.) must be lawful and non-infringing.</li>
            <li>By submitting content, you grant us a royalty-free, perpetual right to use and modify it.</li>
            <li>We may remove any content that violates laws or our policies.</li>
          </ul>
        </section>
      
        {/* 17. Indemnification */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>17. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Skyman Investments, its officers, employees, and affiliates from any loss, damage, or legal claim arising due to:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Breach of these Terms,</li>
            <li>Violation of any law or third-party rights,</li>
            <li>Misuse of the Platform.</li>
          </ul>
        </section>
      
        {/* 18. Limitation of Liability */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>18. Limitation of Liability</h2>
          <p>
            Our total liability is limited to ₹100 or the amount paid by you for the specific service, whichever is lower. We are not liable for indirect, incidental, or consequential damages including loss of profit, data, or goodwill.
          </p>
        </section>
      
        {/* 19. Force Majeure */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>19. Force Majeure</h2>
          <p>
            We are not liable for delays or failures caused by factors beyond our control, including natural calamities, war, internet outage, cyberattacks, government restrictions, and similar events.
          </p>
        </section>
      
        {/* 20. Governing Law and Jurisdiction */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>20. Governing Law and Jurisdiction</h2>
          <p>
            These Terms are governed by the laws of India. All disputes shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu.
          </p>
        </section>
      
        {/* 21. Language and Interpretation */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>21. Language and Interpretation</h2>
          <p>
            These Terms are published in English. You confirm understanding of the contents and legal implications. Headings are for convenience and do not affect interpretation.
          </p>
        </section>
      
        {/* 22. General Provisions */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>22. General Provisions</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>These Terms do not create any partnership, joint venture, or agency relationship.</li>
            <li>Failure to enforce any part of the Terms does not waive future enforcement rights.</li>
            <li>If any clause is found invalid, the remaining clauses shall continue to apply.</li>
          </ul>
        </section>
      
        {/* Contact Information */}
        <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: '#1C3C6D' }}>Contact Information</h2>
          <p>
            For any queries, concerns, or legal communications, please use the contact details provided on the official website of Skyman Investments: www.skymaninvestments.com.
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default TermsAndConditions;
