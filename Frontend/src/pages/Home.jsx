import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1695326464742-e2b49e68a8c3?w=1080&auto=format&fit=crop&q=60)',
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-2xl px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Empowering Your Financial Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-300"
          >
            Skyman Investments offers personalized strategies to help you build wealth, manage risk, and achieve your financial goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <Link
              to="/services"
              className="inline-block bg-cyan-500 text-white font-medium px-6 py-3 rounded-full hover:bg-cyan-600 transition"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-gray-800 space-y-12">

        {/* Our Mission */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-6 rounded-lg bg-blue-100 border border-blue-200"
        >
          <h3 className="text-2xl font-semibold text-cyan-600 mb-2">Our Mission</h3>
          <p>
            To empower our clients with tools and knowledge to build wealth, manage risk, and protect their financial well-being. We are committed to transparency, trust, and putting our clients' interests first.
          </p>
        </motion.div>

        {/* Our Services */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-6 rounded-lg bg-blue-100 border border-blue-200"
        >
          <h3 className="text-2xl font-semibold text-cyan-600 mb-2">Our Services</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Investment Management:</strong> Tailored portfolios, risk management, and growth-focused options.</li>
            <li><strong>Retirement Planning:</strong> Personalized retirement strategies.</li>
            <li><strong>Financial Planning:</strong> Smart money management and tax-efficient plans.</li>
            <li><strong>Insurance Solutions:</strong> From life to property coverage.</li>
            <li><strong>Corporate Financial Services:</strong> Strategic business guidance and succession planning.</li>
          </ul>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-6 rounded-lg bg-blue-100 border border-blue-200"
        >
          <h3 className="text-2xl font-semibold text-cyan-600 mb-2">Why Choose Us?</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Personalized Approach:</strong> We build relationships to understand your goals.</li>
            <li><strong>Experienced Professionals:</strong> Deep market knowledge and strategy.</li>
            <li><strong>Client-Centered Philosophy:</strong> Honesty, transparency, and integrity first.</li>
            <li><strong>Innovative Solutions:</strong> Technology-driven financial strategies.</li>
          </ul>
        </motion.div>

        {/* Our Values */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-6 rounded-lg bg-blue-100 border border-blue-200"
        >
          <h3 className="text-2xl font-semibold text-cyan-600 mb-2">Our Values</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Integrity:</strong> We value honesty and ethical service.</li>
            <li><strong>Commitment:</strong> Dedicated to helping clients succeed.</li>
            <li><strong>Excellence:</strong> We aim for superior results.</li>
            <li><strong>Trust:</strong> Relationships built on long-term respect.</li>
          </ul>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center p-6 rounded-lg bg-blue-100 border border-blue-200"
        >
          <h3 className="text-2xl font-bold text-cyan-600 mb-2">Get in Touch</h3>
          <p className="mb-6 text-lg">
            Ready to begin your financial journey? Reach out today and let’s build your future together.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
