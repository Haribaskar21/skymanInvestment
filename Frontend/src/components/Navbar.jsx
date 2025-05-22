import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle state
  const [isMoreMobileOpen, setIsMoreMobileOpen] = useState(false); // Mobile dropdown state

  return (
    <motion.header
      className=" top-0 w-full bg-gray-100 text-black z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
        {/* Logo */}
        <img
          src="/Logo.png"
          alt="Skyman Investments Logo"
          className="h-14 w-auto" // You can adjust the height as per your need
        />
        <div>
            <Link
              to="/"
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r bg-gray-600"
            >
              Skyman
            </Link>
            <p className='text-transparent bg-clip-text bg-gradient-to-r bg-gray-600'>
              Investments
            </p>
        </div>
      </div>


        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-black font-medium relative">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/" className="hover:text-gray-500 transition">Home</Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/investing" className="hover:text-gray-500 transition">Investing</Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/services" className="hover:text-gray-500 transition">Services</Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/blog" className="hover:text-gray-500 transition">Blog</Link>
          </motion.div>

          {/* More Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
          >
            <motion.span
              className="cursor-pointer hover:text-gray-500 transition"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              More ▾
            </motion.span>

            <AnimatePresence>
              {isMoreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-8 left-0 bg-white shadow-lg border rounded-md p-4 w-64 grid grid-cols-2 gap-3 text-sm z-50"
                >
                  <Link to="/more#book" className="text-black hover:text-gray-500 transition">Book Services</Link>
                  <Link to="/more#news" className="text-black hover:text-gray-500 transition">News & updates</Link>
                  <Link to="/more#calculator" className="text-black hover:text-gray-500 transition">Calculators</Link>
                  <Link to="/privacy-policy" className="text-black hover:text-gray-500 transition">Privacy Policy</Link>
                  <Link to="/terms" className="text-black hover:text-gray-500 transition">Terms & Conditions</Link>
                  <Link to="/refund-policy" className="text-black hover:text-gray-500 transition">Refund Policy</Link>
                  <Link to="/offers" className="text-black hover:text-gray-500 transition">Offers</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/contact" className="hover:text-gray-500 transition">Contact</Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link
              to="/contact"
              className="bg-[#004d6e] text-white px-4 py-2 rounded-full text-sm hover:bg-[#00bcd4] transition"
            >
              Get in Touch
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white text-black px-6 py-4 flex flex-col space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/" className="hover:text-gray-500 transition">Home</Link>
          <Link to="/investing" className="hover:text-gray-500 transition">Investing</Link>
          <Link to="/services" className="hover:text-gray-500 transition">Services</Link>
          <Link to="/blog" className="hover:text-gray-500 transition">Blog</Link>

          {/* Mobile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsMoreMobileOpen(!isMoreMobileOpen)}
              className="text-black hover:text-gray-500 transition focus:outline-none"
            >
              More ▾
            </button>

            <AnimatePresence>
              {isMoreMobileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white shadow-lg rounded-md p-4 w-full grid grid-cols-1 gap-3 text-sm"
                >
                  <Link to="/more#book" className="text-black hover:text-gray-500 transition">Book Services</Link>
                  <Link to="/more#news" className="text-black hover:text-gray-500 transition">News & updates</Link>
                  <Link to="/more#calculator" className="text-black hover:text-gray-500 transition">Calculators</Link>
                  <Link to="/privacy-policy" className="text-black hover:text-gray-500 transition">Privacy Policy</Link>
                  <Link to="/terms" className="text-black hover:text-gray-500 transition">Terms</Link>
                  <Link to="/refund-policy" className="text-black hover:text-gray-500 transition">Refund Policy</Link>
                  <Link to="/offers" className="text-black hover:text-gray-500 transition">Offers</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/contact" className="hover:text-gray-500 transition">Contact</Link>
          <Link
            to="/contact"
            className="bg-[#004d6e] text-white px-4 py-2 rounded-full text-sm hover:bg-[#00bcd4] transition"
          >
            Get in Touch
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
