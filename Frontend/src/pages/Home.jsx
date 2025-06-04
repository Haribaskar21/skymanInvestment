import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import cursor from "/assets/icon1.png";
import lightning from "/assets/icon2.png";
import { useEffect, useState } from 'react';
import api from '../api/axios'; // adjust if needed
import NewsTicker from '../components/NewsTicker';

export default function Home() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const [latestBlogs, setLatestBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchLatestBlogs = async () => {
    try {
      const res = await api.get('/blogs?limit=3&sort=desc'); // oldest first, limit 3
      setLatestBlogs(res.data);
    } catch (err) {
      console.error('Failed to fetch latest blogs:', err);
    } finally {
      setLoading(false);
    }
  };
  fetchLatestBlogs();
}, []);


  return (
    <div>
      <NewsTicker />

      {/* Hero Section */}
      <section className="relative mt-16 bg-gray-100 flex flex-col w-full items-center justify-center gap-10">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-6xl md:text-5xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#26BF64] to-[#1C3C6D]"
          >
            Empowering Your Financial Future
          </motion.h1>

          <motion.div className="hidden md:block absolute left-[280px] top-[170px]" drag>
            <img
              src={cursor}
              height="170"
              width="170"
              alt="cursor"
              draggable="false"
            />
          </motion.div>

          <motion.div className="hidden md:block absolute right-[220px] top-[20px]" drag>
            <img
              src={lightning}
              height="120"
              width="120"
              alt="lightning"
              draggable="false"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 max-w-2xl"
          >
            Skyman Investments offers personalized strategies to help you build wealth,
            manage risk, and achieve your <span className="font-bold">financial goals.</span>
          </motion.p>
        </div>

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
            className="absolute h-15 w-l bottom-5 shadow-black hover:bg-[#1C3C6D] bg-[#26BF64] text-white text-center font-medium mb-10 px-6 py-3 rounded-full transition shadow-lg"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Our Mission */}
          <div className="text-black p-8 rounded-2xl bg-[#e3f4e8] shadow-md" data-aos="fade-right">
            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#26BF64] to-[#1C3C6D] mb-6" data-aos="fade-down">
              Our Mission
            </h2>
            <p className="text-xl leading-relaxed text-gray-700" data-aos="fade-up">
              At <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#26BF64] to-[#1C3C6D]">Skyman Investments</span>, our mission is to empower our clients by
              offering them the tools and knowledge necessary to build wealth, manage risk, and protect their financial well-being.
              We are committed to providing <span className="font-semibold">transparent, trustworthy, and reliable</span> services,
              always putting our clients' interests first.
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#b6e1b4] text-black p-6 rounded-2xl shadow-md" data-aos="fade-right">
                <Link to="/demat-account">
                  <div className="text-5xl mb-4">📂</div>
                  <h3 className="text-xl font-bold mb-2">Demat Account</h3>
                  <p className="text-sm">
                    Secure and convenient way to hold and manage your shares electronically.
                  </p>
                </Link>
              </div>

              <div className="bg-[#1C3C6D] text-white p-6 rounded-2xl shadow-md" data-aos="fade-left" data-aos-delay="50">
                <Link to="/insurance">
                  <div className="text-5xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold mb-2">Insurance</h3>
                  <p className="text-sm">
                    Protect your life, health, and property with comprehensive insurance plans.
                  </p>
                </Link>
              </div>

              <div className="bg-[#1C3C6D] text-white p-6 rounded-2xl shadow-md" data-aos="fade-right" data-aos-delay="100">
                <Link to="/tax-services">
                  <div className="text-5xl mb-4">💰</div>
                  <h3 className="text-xl font-bold mb-2">Tax Services</h3>
                  <p className="text-sm">
                    Efficient tax planning and filing services to save you time and money.
                  </p>
                </Link>
              </div>

              <div className="bg-[#b6e1b4] text-black p-6 rounded-2xl shadow-md" data-aos="fade-left" data-aos-delay="150">
                <Link to="financial-planning">
                  <div className="text-5xl mb-4">📅</div>
                  <h3 className="text-xl font-bold mb-2">Financial Planning</h3>
                  <p className="text-sm">
                    Smart budgeting, goal planning, and investment advice for your future.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 p-10 rounded-2xl" data-aos="fade-up" style={{ backgroundColor: '#e6f2f1' }}>
          <h2 className="text-4xl font-bold text-center text-[#26BF64] mb-10">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition" data-aos="fade-up">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Personalized Approach</h3>
              <p className="text-sm text-gray-600">
                We believe in strong relationships to understand your financial goals deeply.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="100">
              <div className="text-6xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold mb-2">Experienced Professionals</h3>
              <p className="text-sm text-gray-600">
                Our advisors bring years of experience and a deep understanding of markets.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="200">
              <div className="text-6xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">Innovative Solutions</h3>
              <p className="text-sm text-gray-600">
                We use modern tools and strategies tailored to your individual needs.
              </p>
            </div>
          </div>
        </div>

        {/* Latest Blog Posts */}
        <div className="mt-20 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-[#26BF64] via-[#1C3C6D] to-[#1C3C6D] bg-clip-text text-transparent mb-12 animate-gradient-x">
            Latest Blog Posts
          </h2>

          {loading ? (
            <p className="text-center text-gray-500">Loading latest blogs...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20" data-aos="fade-up">
              {latestBlogs.map(({ _id, title, category, image }) => (
                <div
                  key={_id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
                >
                  <Link to={`/blog/${_id}`}>
                    <img
                      className="w-full h-48 rounded-t-lg object-cover"
                      src={image}
                      alt={title}
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1 text-[#1C3C6D]">{title}</h3>
                      <p className="text-sm text-gray-500">{category}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
