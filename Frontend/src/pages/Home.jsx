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
      <section className="relative bg-gray-100 flex flex-col w-full items-center justify-center gap-10">
        {/* Top Text */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Empowering Your Financial Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 max-w-2xl"
          >
            Skyman Investments offers personalized strategies to help you build wealth,
            manage risk, and achieve your financial goals.
          </motion.p>
        </div>

        {/* Bottom Image & Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 w-full z-10 flex flex-col items-center justify-center relative"
        >
          <img
            src="assets/stretching-card.png"
            alt="Card Stretch"
            className="w-full max-w-screen object-contain"
          />
          <Link
            to="/services"
            className="absolute bottom-5 shadow-black hover:bg-[#004d6e] bg-cyan-500 text-white font-medium px-6 py-3 rounded-full transition shadow-lg"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </section>

      {/* Mission, Services, Values, etc. */}
      {/* <section className="py-24 px-6 max-w-7xl mx-auto space-y-24 bg-gray-100 text-gray-800">
        {[
          {
            title: 'Our Services',
            content: (
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Investment Management:</strong> Tailored portfolios, risk management, and growth-focused options.</li>
                <li><strong>Retirement Planning:</strong> Personalized retirement strategies.</li>
                <li><strong>Financial Planning:</strong> Smart money management and tax-efficient plans.</li>
                <li><strong>Insurance Solutions:</strong> From life to property coverage.</li>
                <li><strong>Corporate Financial Services:</strong> Strategic business guidance and succession planning.</li>
              </ul>
            ),
            animation: fadeLeft,
          },
          {
            title: 'Why Choose Us?',
            content: (
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Personalized Approach:</strong> We build relationships to understand your goals.</li>
                <li><strong>Experienced Professionals:</strong> Deep market knowledge and strategy.</li>
                <li><strong>Client-Centered Philosophy:</strong> Honesty, transparency, and integrity first.</li>
                <li><strong>Innovative Solutions:</strong> Technology-driven financial strategies.</li>
              </ul>
            ),
            animation: fadeRight,
          },
          {
            title: 'Our Values',
            content: (
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Integrity:</strong> We value honesty and ethical service.</li>
                <li><strong>Commitment:</strong> Dedicated to helping clients succeed.</li>
                <li><strong>Excellence:</strong> We aim for superior results.</li>
                <li><strong>Trust:</strong> Relationships built on long-term respect.</li>
              </ul>
            ),
            animation: fadeLeft,
          },
        ].map(({ title, content, animation }, index) => (
          <motion.div
            key={index}
            variants={animation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-blue-100 border border-blue-200 shadow-lg"
          >
            <h3 className="text-3xl font-semibold text-cyan-600 mb-4">{title}</h3>
            {content}
          </motion.div>
        ))}

        {/* CTA Section */}
      {/* </section> */}

      {/* Services Cards Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Left Side - Our Mission */}
  <div className="text-black p-8 rounded-2xl bg-blue-50 shadow-md" data-aos="fade-right">
    <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6" data-aos="fade-down">
      Our Mission
    </h2>
    <p className="text-xl leading-relaxed text-gray-700" data-aos="fade-up">
      At <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skyman Investments</span>, our mission is to empower our clients by 
      offering them the tools and knowledge necessary to build wealth, manage risk, and protect their financial well-being. 
      We are committed to providing <span className="font-semibold">transparent, trustworthy, and reliable</span> services, 
      always putting our clients' interests first.
    </p>
  </div>

  {/* Right Side - Our Services */}
  <div>
    <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="bg-blue-200 text-black p-6 rounded-2xl shadow-md" data-aos="fade-right">
        <div className="text-4xl mb-4">📂</div>
        <h3 className="text-xl font-bold mb-2">Demat Account</h3>
        <p className="text-sm">
          Secure and convenient way to hold and manage your shares electronically.
        </p>
      </div>

      <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-md" data-aos="fade-left" data-aos-delay="50">
        <div className="text-4xl mb-4">🛡️</div>
        <h3 className="text-xl font-bold mb-2">Insurance</h3>
        <p className="text-sm">
          Protect your life, health, and property with comprehensive insurance plans.
        </p>
      </div>

      <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-md" data-aos="fade-right" data-aos-delay="100">
        <div className="text-4xl mb-4">💰</div>
        <h3 className="text-xl font-bold mb-2">Tax Services</h3>
        <p className="text-sm">
          Efficient tax planning and filing services to save you time and money.
        </p>
      </div>

      <div className="bg-blue-200 text-black p-6 rounded-2xl shadow-md" data-aos="fade-left" data-aos-delay="150">
        <div className="text-4xl mb-4">📅</div>
        <h3 className="text-xl font-bold mb-2">Financial Planning</h3>
        <p className="text-sm">
          Smart budgeting, goal planning, and investment advice for your future.
        </p>
      </div>
    </div>
  </div>
</div>


        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-20 p-10 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-cyan-600 mb-4">Get in Touch</h3>
          <p className="mb-6 text-lg">
            Ready to begin your financial journey? Reach out today and let’s build your future together.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#004d6e] text-white font-medium px-8 py-4 rounded-full hover:bg-[#00bcd4] transition shadow-lg"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
