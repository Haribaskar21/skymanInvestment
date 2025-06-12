import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

export default function RefundPolicy() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const bullet = (text) => (
    <li className="flex items-start gap-2">
      <FaCheckCircle className="text-[#26BF64] mt-1" />
      <span>{text}</span>
    </li>
  );

  return (
    <section className="min-h-screen bg-[#f0f7f4] py-16 px-4 md:px-24 text-[#1C3C6D]">
      <motion.h1
        className="text-5xl font-extrabold text-center mb-12 leading-tight"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Refund & Cancellation Policy
      </motion.h1>

      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 space-y-12 shadow-xl text-[#345a48] leading-relaxed">
        <div data-aos="fade-up">
          <p className="text-lg">
            At <strong>Skyman Investments</strong>, we strive to deliver exceptional financial services governed by integrity, regulatory compliance, and operational excellence. This Refund and Cancellation Policy ensures transparency in our dealings and protects the interests of both our clients and our firm.
          </p>
        </div>

        {/* Section 1 */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl font-bold mb-4">1. Strict No-Refund Policy</h2>

          <h3 className="text-xl font-semibold mb-2">1.1 Finality of Payments</h3>
          <p>All payments made to Skyman Investments are non-refundable, irrespective of service utilization, investment performance, or client satisfaction.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">1.2 Non-Cancellation Clause</h3>
          <p>Once a payment is successfully processed and confirmation is issued, the transaction is deemed final, irrevocable, and non-cancellable under all standard circumstances.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">1.3 Ineligibility for Refunds Includes (but is not limited to):</h3>
          <ul className="space-y-2 mt-2 pl-1">
            {bullet("Client’s change of mind")}
            {bullet("Market outcomes")}
          </ul>
        </div>

        {/* Section 2 */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl font-bold mb-4">2. Limited Exceptions (Subject to Sole Discretion)</h2>
          <p>Refunds may be considered only under the following exceptional circumstances and solely at the discretion of Skyman Investments:</p>
          <ul className="space-y-2 mt-3 pl-1">
            {bullet("Duplicate Payment: Proven multiple charges for the same service.")}
            {bullet("System or Technical Failure: Payment debited but transaction failed or not recorded.")}
            {bullet("Administrative Oversight: Demonstrable error on the part of Skyman Investments.")}
            {bullet("Regulatory Directive: SEBI mandated reversals or corrective action.")}
          </ul>
          <p className="mt-3">Approval of any such refund is at the sole and final discretion of Skyman Investments following an internal audit and assessment.</p>
        </div>

        {/* Section 3 */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-3xl font-bold mb-4">3. Pre-Execution Cancellations</h2>
          <p>Cancellation of a transaction may be entertained only if the request is received before execution (i.e., the transaction has not been locked by Skyman Investments).</p>
          <p className="mt-3">All such requests must be made within the specified operational cut-off time and will undergo system and compliance checks.</p>
        </div>

        {/* Section 4 */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-3xl font-bold mb-4">4. Refund Processing Timelines</h2>
          <p>If a refund is approved based on the above exceptions:</p>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border border-gray-300 text-sm md:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-3">Case</th>
                  <th className="border px-4 py-3">Processing Timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Duplicate/Failed Transactions</td>
                  <td className="border px-4 py-2">5–7 working days</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Valid Pre-Execution Cancellations</td>
                  <td className="border px-4 py-2">7–10 working days</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">System Errors</td>
                  <td className="border px-4 py-2">15 business days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">Refunds will be processed only to the original mode of payment unless otherwise mandated by regulatory requirements.</p>
        </div>

        {/* Section 5 */}
        <div data-aos="fade-up" data-aos-delay="500">
          <h2 className="text-3xl font-bold mb-4">5. Refund and Cancellation Request Procedure</h2>
          <p>To initiate a refund or cancellation request, the client must:</p>
          <ul className="space-y-2 mt-3 pl-1">
            {bullet("Send a formal written request to: Email […………………………………….]")}
            {bullet("Include the following:")}
            <ul className="pl-6 space-y-1 list-disc text-sm">
              <li>Full Name and Registered Client ID</li>
              <li>Transaction Reference Number</li>
              <li>Proof of Payment</li>
              <li>Reason for Request and Any Supporting Documentation</li>
            </ul>
          </ul>
          <p className="mt-3">Requests will be verified within 7 working days, and responses issued thereafter. Approved refunds are executed in accordance with Section 4 timelines.</p>
        </div>

        {/* Section 6 */}
        <div data-aos="fade-up" data-aos-delay="600">
          <h2 className="text-3xl font-bold mb-4">6. Grievance Redressal</h2>
          <p>For further assistance or in case of dispute, clients may contact:</p>
          <ul className="list-disc list-inside mt-3 space-y-1 ml-2 text-sm">
            <li>Email: [………………………………………]</li>
            <li>Helpline: [+91-…………………………………..]</li>
            <li>Postal Address: [………………………………………]</li>
          </ul>
        </div>

        {/* Section 7 */}
        <div data-aos="fade-up" data-aos-delay="700">
          <h2 className="text-3xl font-bold mb-4">7. Policy Revisions and Legal Supremacy</h2>
          <ul className="space-y-2 mt-2 pl-1">
            {bullet("This policy supersedes all verbal, written, or implied commitments made by any employee, representative, or agent.")}
            {bullet("Skyman Investments reserves the right to amend, modify, or revoke this policy at any time without prior notice.")}
            {bullet("The most current version published on the official website will be considered binding and enforceable.")}
          </ul>
        </div>

        {/* Section 8 */}
        <div data-aos="fade-up" data-aos-delay="800">
          <h2 className="text-3xl font-bold mb-4">8. Client Consent and Acceptance</h2>
          <p>By initiating a transaction and making a payment, the client irrevocably acknowledges, understands, and agrees to be bound by all the terms and conditions outlined in this Refund and Cancellation Policy.</p>
        </div>
      </div>
    </section>
  );
}
