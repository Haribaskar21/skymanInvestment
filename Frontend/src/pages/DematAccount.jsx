import React from 'react';
import { motion } from 'framer-motion';

const DematAccount = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3f9f4] to-[#e3f4e8] px-4 md:px-10 flex flex-col items-center">
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold text-center text-[#1C3C6D] mb-12 max-w-4xl leading-relaxed drop-shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Open a Demat Account <br />
        with Our Trusted Partners
      </motion.h1>

      {/* Partner Logos with glass-style cards */}
      <div className="flex flex-wrap justify-center gap-14 mb-6 max-w-5xl w-full">
        {[
          {
            href: "https://premium-partners.indiainfoline.com/common/openaccount?E1Code=JKOJ6mW8pP13ofvnxAkyGQ%3D%3D&SourceChannelID=KBWtK3WkgyXc2SanaseYhg%3D%3D",
            alt: "IIFL Securities",
            src: "assets/iifl.avif",
          },
          {
            href: "https://www.angelone.in/register/?rne_source=B2B_NXT&btype=SVRQUA&referrer=RJMO::rne_source=B2B_NXT::btype=SVRQUA&source_caller=api&pid=NXT&SbTag=UkpNTw==&deep_link_value=referrer%3DRJMO%3A%3Arne_source%3DB2B_NXT%3A%3Abtype%3DSVRQUA&c=nxt_campaign#/login",
            alt: "AngelOne",
            src: "assets/angelOne.avif",
          },
        ].map(({ href, alt, src }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl p-2 bg-white bg-opacity-70 backdrop-blur-lg shadow-lg border-2 border-green-300 hover:scale-110 transform transition-transform duration-300"
          >
            <img
              src={src}
              alt={alt}
              className="w-44 h-auto object-contain rounded-xl shadow-md"
              loading="lazy"
            />
            {/* Animated green ring on hover */}
            <span
              className="pointer-events-none absolute inset-0 rounded-2xl ring-4 ring-green-400 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
            />
          </a>
        ))}
      </div>

      <p className="text-center text-green-700 font-semibold mb-16 max-w-xl">
        Please click on the logos to open a Demat account with our trusted partners.
      </p>

      {/* Information Section */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10 space-y-12 text-[#1C3C6D]">
        <section>
          <h2 className="text-2xl font-semibold border-b border-green-400 pb-3 mb-5">
            📄 Documents Required to Open a Demat Account
          </h2>
          <ul className="list-decimal ml-6 space-y-3 text-base">
            <li>PAN Card</li>
            <li>Aadhaar Card – Front and Back</li>
            <li>
              Cancel Cheque (Signed & Account holder's name printed)
              <br />
              If unavailable, provide:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Scanned Bank Passbook</li>
                <li>Soft Copy of Last 6 Months Bank Statement</li>
              </ul>
            </li>
            <li>Photo-Clear Selfie Photo</li>
            <li>Signature Photo (Sign on white paper and scan via mobile)</li>
          </ul>
          <p className="mt-3 font-medium text-sm text-green-600">
            🔍 Ensure all scanned copies are clear and high quality.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold border-b border-green-400 pb-3 mb-5">
            📝 Additional Details Required
          </h2>
          <ul className="list-decimal ml-6 space-y-2 text-base">
            <li>Registered Email ID</li>
            <li>Mobile Number (Must be linked to Aadhaar)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DematAccount;
