import React from 'react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';

const DematAccount = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-10 text-center">
      <motion.h1
        className="text-2xl md:text-4xl font-bold mb-10 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Please click on any one of our Partner's Logo to open a <br /> Demat Account
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-10 mb-10">
        <a href="https://www.indiainfoline.com/" target="_blank" rel="noopener noreferrer">
          <img src="assets/iifl.avif" alt="IIFL Securities" className="w-40 hover:scale-110 transition-transform duration-300" />
        </a>
        <a href="https://www.angelone.in/" target="_blank" rel="noopener noreferrer">
          <img src="assets/angelOne.avif" alt="AngelOne" className="w-40 hover:scale-110 transition-transform duration-300" />
        </a>
        {/* <a href="https://www.fundsindia.com/" target="_blank" rel="noopener noreferrer">
          <img src="/images/fundsindia.png" alt="FundsIndia" className="w-40 hover:scale-110 transition-transform duration-300" />
        </a> */}
      </div>

      <div className="max-w-2xl mx-auto text-left text-gray-700 space-y-6">
        <div>
          <h2 className="text-lg font-semibold underline">Documents required to open a Demat Account are:-</h2>
          <ul className="list-decimal ml-5 mt-2 space-y-1">
            <li>PAN</li>
            <li>Aadhaar Card - Front and Back</li>
            <li>
              Cancel Cheque - This should be signed and the account holder's name must be printed. <br />
              If not available, a scanned copy of the Bank Passbook or Soft copy of the Bank statement (last 6 months)
            </li>
            <li>Photo - Clear Selfie would be ok</li>
            <li>Signature photo - Sign on a white paper and scan it with your mobile.</li>
          </ul>
          <p className="mt-2">Please ensure that all scanned copies are clear and crisp</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold underline">Need the following details also:</h2>
          <ul className="list-decimal ml-5 mt-2 space-y-1">
            <li>Mail ID</li>
            <li>Mobile Number (Must be mapped to your Aadhaar as well)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DematAccount;
