import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
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

      {/* About Us */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-gray-800">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-cyan-600">About Us</h2>
          <p className="mt-4 text-lg">
            Skyman Investments is a trusted leader in comprehensive financial services, dedicated to helping individuals, families, and businesses achieve their financial goals with confidence.
          </p>
        </div>
        <p className="mb-6">
          We provide expert guidance, personalized strategies, and innovative solutions tailored to meet the unique needs of each client. Whether you're planning for retirement, seeking investment opportunities, or managing corporate finances, we offer the insights and expertise you need to make informed decisions.
        </p>

        {/* Mission */}
        <h3 className="text-2xl font-semibold text-cyan-600 mb-2">Our Mission</h3>
        <p className="mb-6">
          To empower our clients with tools and knowledge to build wealth, manage risk, and protect their financial well-being. We are committed to transparency, trust, and putting our clients' interests first.
        </p>

        {/* Services */}
        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">Our Services</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Investment Management:</strong> Tailored portfolios, risk management, and growth-focused investment options.</li>
          <li><strong>Retirement Planning:</strong> Expert guidance for a secure and comfortable retirement.</li>
          <li><strong>Financial Planning:</strong> Strategies to manage money, reduce taxes, and achieve financial goals.</li>
          <li><strong>Insurance Solutions:</strong> From life to property coverage to safeguard your future.</li>
          <li><strong>Corporate Financial Services:</strong> Business financial planning, cash flow, and succession strategies.</li>
        </ul>

        {/* Why Choose Us */}
        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">Why Choose Us?</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Personalized Approach:</strong> Deep understanding of your goals and financial needs.</li>
          <li><strong>Experienced Professionals:</strong> A skilled team with market insight and strategy.</li>
          <li><strong>Client-Centered:</strong> We put your financial success and transparency first.</li>
          <li><strong>Innovative Tools:</strong> We use the latest technologies for effective solutions.</li>
        </ul>

        {/* Values */}
        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">Our Values</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Integrity:</strong> Highest standards of honesty and transparency.</li>
          <li><strong>Commitment:</strong> We work tirelessly to help clients succeed.</li>
          <li><strong>Excellence:</strong> Superior service and sound financial advice.</li>
          <li><strong>Trust:</strong> Relationships built on trust and mutual respect.</li>
        </ul>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-cyan-600 mb-4">Get in Touch</h3>
          <p className="text-lg mb-6">
            Every financial journey is unique. Contact us today to start building your financial future with confidence.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
