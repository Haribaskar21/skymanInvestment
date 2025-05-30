import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [isMoreOpen, setIsMoreOpen] = useState(false); // Desktop More dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle
  const [isMoreMobileOpen, setIsMoreMobileOpen] = useState(false); // Mobile More dropdown

  // Admin logged in if token exists
  const isAdminLoggedIn = !!localStorage.getItem('token');

  return (
    <motion.header
      className="top-0 w-full bg-gray-100 text-black z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="assets/Logo.png" alt="Skyman Investments Logo" className="h-14 w-auto" />
          <div>
            <Link
              to="/"
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r bg-gray-600"
            >
              Skyman
            </Link>
            <p className="text-transparent bg-clip-text bg-gradient-to-r bg-gray-600">Investments</p>
          </div>
        </div>

        {/* Desktop Menu - lg and above */}
        <nav className="hidden lg:flex space-x-8 text-black font-medium relative items-center">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/" className="hover:text-gray-500 transition">
              Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/investing" className="hover:text-gray-500 transition">
              Investing
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/services" className="hover:text-gray-500 transition">
              Services
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/blog" className="hover:text-gray-500 transition">
              Blog
            </Link>
          </motion.div>

          {/* More Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
          >
            <motion.span
              className="cursor-pointer hover:text-gray-500 transition select-none"
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
                  <Link to="/more#book" className="text-black hover:text-gray-500 transition">
                    Book Services
                  </Link>
                  <Link to="/news" className="text-black hover:text-gray-500 transition">
                    News & updates
                  </Link>
                  <Link to="/calculators" className="text-black hover:text-gray-500 transition">
                    Calculators
                  </Link>
                  <Link to="/privacy-policy" className="text-black hover:text-gray-500 transition">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="text-black hover:text-gray-500 transition">
                    Terms & Conditions
                  </Link>
                  <Link to="/refund-policy" className="text-black hover:text-gray-500 transition">
                    Refund Policy
                  </Link>
                  <Link to="/offers" className="text-black hover:text-gray-500 transition">
                    Offers
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/contact" className="hover:text-gray-500 transition">
              Contact
            </Link>
          </motion.div>

          {/* Admin Login / Dashboard / Logout */}
{isAdminLoggedIn && (
  <>
    <Link
      to="/admin/dashboard"
      className="text-sm bg-[#004d6e] text-white px-4 py-2 rounded-full hover:bg-[#00bcd4] transition"
    >
      Dashboard
    </Link>
    <button
      onClick={() => {
        localStorage.removeItem('token');
        window.location.href = '/';
      }}
      className="text-sm bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
    >
      Logout
    </button>
  </>
)}


          {/* Get in Touch Button */}
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link
              to="/contact"
              className="bg-[#004d6e] text-white px-4 py-2 rounded-full text-sm hover:bg-[#00bcd4] transition"
            >
              Get in Touch
            </Link>
          </motion.div>
        </nav>

        {/* Tablet Menu - md only */}
        <nav className="hidden md:flex lg:hidden space-x-6 font-medium items-center">
          <Link to="/" className="hover:text-gray-500 transition">
            Home
          </Link>
          <Link to="/investing" className="hover:text-gray-500 transition">
            Investing
          </Link>
          <Link to="/services" className="hover:text-gray-500 transition">
            Services
          </Link>

          {/* Simple dropdown for blog and more */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-gray-500 transition select-none">
              More ▾
            </span>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded p-3 mt-1 w-48 z-50">
              <Link to="/blog" className="block px-2 py-1 hover:bg-gray-100 rounded">
                Blog
              </Link>
              <Link to="/more#book" className="block px-2 py-1 hover:bg-gray-100 rounded">
                Book Services
              </Link>
              <Link to="/news" className="block px-2 py-1 hover:bg-gray-100 rounded">
                News & Updates
              </Link>
              <Link to="/calculators" className="block px-2 py-1 hover:bg-gray-100 rounded">
                Calculators
              </Link>
              <Link to="/privacy-policy" className="block px-2 py-1 hover:bg-gray-100 rounded">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block px-2 py-1 hover:bg-gray-100 rounded">
                Terms
              </Link>
              <Link to="/refund-policy" className="block px-2 py-1 hover:bg-gray-100 rounded">
                Refund Policy
              </Link>
              <Link to="/offers" className="block px-2 py-1 hover:bg-gray-100 rounded">
                Offers
              </Link>
            </div>
          </div>

          <Link to="/contact" className="hover:text-gray-500 transition">
            Contact
          </Link>

          {/* Admin login/logout */}
{isAdminLoggedIn && (
  <>
    <Link
      to="/admin/dashboard"
      className="text-sm bg-[#004d6e] text-white px-4 py-2 rounded-full hover:bg-[#00bcd4] transition"
    >
      Dashboard
    </Link>
    <button
      onClick={() => {
        localStorage.removeItem('token');
        window.location.href = '/';
      }}
      className="text-sm bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
    >
      Logout
    </button>
  </>
)}

        </nav>

        {/* Mobile Menu Button - below md */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-100 border-t border-gray-300"
          >
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-3 border-b border-gray-300"
            >
              Home
            </Link>
            <Link
              to="/investing"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-3 border-b border-gray-300"
            >
              Investing
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-3 border-b border-gray-300"
            >
              Services
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-3 border-b border-gray-300"
            >
              Blog
            </Link>

            {/* Mobile More dropdown */}
            <div className="border-b border-gray-300">
              <button
                onClick={() => setIsMoreMobileOpen(!isMoreMobileOpen)}
                className="w-full flex justify-between items-center px-6 py-3 text-left font-medium"
              >
                More
                <span className={`transition-transform duration-300 ${isMoreMobileOpen ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </button>
              <AnimatePresence>
                {isMoreMobileOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pl-6 pb-4 flex flex-col space-y-2"
                  >
                    <Link
                      to="/more#book"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMoreMobileOpen(false);
                      }}
                      className="block text-black hover:text-gray-600 transition"
                    >
                      Book Services
                    </Link>
                    <Link
                      to="/news"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMoreMobileOpen(false);
                      }}
                      className="block text-black hover:text-gray-600 transition"
                    >
                      News & updates
                    </Link>
                    <Link
                      to="/calculators"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMoreMobileOpen(false);
                      }}
                      className="block text-black hover:text-gray-600 transition"
                    >
                      Calculators
                    </Link>
                    <Link
                      to="/privacy-policy"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMoreMobileOpen(false);
                      }}
                      className="block text-black hover:text-gray-600 transition"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/terms"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMoreMobileOpen(false);
                      }}
                      className="block text-black hover:text-gray-600 transition"
                    >
                      Terms & Conditions
                    </Link>
                    <Link
                      to="/refund-policy"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMoreMobileOpen(false);
                      }}
                      className="block text-black hover:text-gray-600 transition"
                    >
                      Refund Policy
                    </Link>
                    <Link
                      to="/offers"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMoreMobileOpen(false);
                      }}
                      className="block text-black hover:text-gray-600 transition"
                    >
                      Offers
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-3 border-b border-gray-300"
            >
              Contact
            </Link>

           {isAdminLoggedIn && (
  <>
    <Link
      to="/admin/dashboard"
      className="text-sm bg-[#004d6e] text-white px-4 py-2 rounded-full hover:bg-[#00bcd4] transition"
    >
      Dashboard
    </Link>
    <button
      onClick={() => {
        localStorage.removeItem('token');
        window.location.href = '/';
      }}
      className="text-sm bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
    >
      Logout
    </button>
  </>
)}

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-3 mb-6 mx-6 px-4 py-3 rounded bg-[#004d6e] text-white text-center text-sm hover:bg-[#00bcd4] transition"
            >
              Get in Touch
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
