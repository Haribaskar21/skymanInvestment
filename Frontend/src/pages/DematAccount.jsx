import React from 'react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';

const DematAccount = () => {
  return (
    <div className="min-h-screen bg-[#F0F5FA] px-4 md:px-10 py-16"> {/* very light navy/gray bg */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center text-[#1C3C6D] mb-10 leading-relaxed"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Open a Demat Account <br />
        with Our Trusted Partners
      </motion.h1>

      {/* Partner Logos */}
      <div className="flex flex-wrap justify-center gap-12 mb-16">
        <a
          href="https://premium-partners.indiainfoline.com/common/openaccount?E1Code=JKOJ6mW8pP13ofvnxAkyGQ%3D%3D&SourceChannelID=KBWtK3WkgyXc2SanaseYhg%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <img
            src="assets/iifl.avif"
            alt="IIFL Securities"
            className="w-44 h-auto object-contain rounded-xl shadow-md border border-[#26BF64]"
          />
        </a>

        <a
          href="https://www.angelone.in/register/?rne_source=B2B_NXT&btype=SVRQUA&referrer=RJMO::rne_source=B2B_NXT::btype=SVRQUA&source_caller=api&pid=NXT&SbTag=UkpNTw==&deep_link_value=referrer%3DRJMO%3A%3Arne_source%3DB2B_NXT%3A%3Abtype%3DSVRQUA&c=nxt_campaign#/login"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <img
            src="assets/angelOne.avif"
            alt="AngelOne"
            className="w-44 h-auto object-contain rounded-xl shadow-md border border-[#26BF64]"
          />
        </a>
      </div>

      {/* Information Section */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-10 text-[#1C3C6D]">
        <div>
          <h2 className="text-xl font-semibold text-[#1C3C6D] border-b border-[#26BF64] pb-2 mb-4">
            📄 Documents Required to Open a Demat Account
          </h2>
          <ul className="list-decimal ml-6 space-y-2 text-base">
            <li>PAN Card</li>
            <li>Aadhaar Card – Front and Back</li>
            <li>
              Cancel Cheque (Signed & Account holder's name printed)
              <br />
              If unavailable, provide:
              <ul className="list-disc ml-6 mt-1">
                <li>Scanned Bank Passbook</li>
                <li>Soft Copy of Last 6 Months Bank Statement</li>
              </ul>
            </li>
            <li>Photo-Clear Selfie Photo would be okzx</li>
            <li>Signature Photo (Sign on white paper and scan via mobile)</li>
          </ul>
          <p className="mt-3 font-medium text-sm text-[#26BF64]">
            🔍 Ensure all scanned copies are clear and high quality.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#1C3C6D] border-b border-[#26BF64] pb-2 mb-4">
            📝 Additional Details Required
          </h2>
          <ul className="list-decimal ml-6 space-y-2 text-base">
            <li>Registered Email ID</li>
            <li>Mobile Number (Must be linked to Aadhaar)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DematAccount;
