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

useEffect(() => {
  const fetchLatestBlogs = async () => {
    try {
      const res = await api.get('/blogs?limit=4&sort=desc'); // or your endpoint logic
      setLatestBlogs(res.data);
    } catch (err) {
      console.error('Failed to fetch latest blogs:', err);
    }
  };

  fetchLatestBlogs();
}, []);


  return (
    <div>
      <NewsTicker />
      {/* Hero Section */}
      <section className="relative mt-10 bg-gray-100 flex flex-col w-full items-center justify-center gap-10">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-6xl md:text-5xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            >
            Empowering Your Financial Future
          </motion.h1>
         <motion.div
  className="hidden md:block absolute left-[280px] top-[170px]"
  drag
>
  <img 
    src={cursor}
    height="170"
    width="170"
    alt="cursor"
    className=""
    draggable="false"
    />
</motion.div>

<motion.div
  className="hidden md:block absolute right-[220px] top-[20px]"
  drag
>
  <img 
    src={lightning}
    height="120"
    width="120"
    alt="lightning"
    className=""
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
            manage risk, and achieve your <span className='font-bold'>financial goals.</span>
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
            className="absolute h-15 w-l bottom-5 shadow-black hover:bg-[#004d6e] bg-cyan-500 text-white text-center font-medium mb-10 px-6 py-3 rounded-full transition shadow-lg"
            >
            Explore Our Services
          </Link>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Our Mission */}
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

          {/* Our Services */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-blue-200 text-black p-6 rounded-2xl shadow-md" data-aos="fade-right">
              <Link to="/demat-account">
                <div className="text-5xl mb-4">📂</div>
                <h3 className="text-xl font-bold mb-2">Demat Account</h3>
                <p className="text-sm">
                  Secure and convenient way to hold and manage your shares electronically.
                </p>
              </Link>
              </div>

              <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-md" data-aos="fade-left" data-aos-delay="50">
                <Link to="/insurance">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-2">Insurance</h3>
                <p className="text-sm">
                  Protect your life, health, and property with comprehensive insurance plans.
                </p>
                </Link>
              </div>

              <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-md" data-aos="fade-right" data-aos-delay="100">
                <Link to="/tax-services">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">Tax Services</h3>
                <p className="text-sm">
                  Efficient tax planning and filing services to save you time and money.
                </p>
                </Link>
              </div>

              <div className="bg-blue-200 text-black p-6 rounded-2xl shadow-md" data-aos="fade-left" data-aos-delay="150">
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
        <div className="mt-20  p-10 rounded-2xl" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center text-cyan-600 mb-10">Why Choose Us?</h2>
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
  <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent mb-12 animate-gradient-x">
    Latest Blog Posts
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {latestBlogs.length > 0 ? (
      // Sort descending by date and then take the first 3 blogs
      latestBlogs
        .slice() // create a shallow copy to avoid mutating original
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3)
        .map((blog) => (
          <div
            key={blog._id}
            data-aos="fade-up"
            data-aos-duration="800"
            className="relative bg-gradient-to-tr from-blue-600 via-cyan-500 to-blue-700 rounded-3xl shadow-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-10 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-40 rounded-3xl"></div>

            <div className="relative p-6 bg-white bg-opacity-90 rounded-3xl h-full flex flex-col">
              <div className="overflow-hidden rounded-xl mb-5 shadow-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 rounded-xl"
                />
              </div>
              <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-500 to-indigo-700 line-clamp-2 mb-3">
                {blog.title}
              </h3>
              <p className="text-gray-700 flex-grow text-sm line-clamp-3">
                {blog.content}
              </p>
              <Link
                to={`/blog/${blog._id}`}
                className="mt-5 inline-block text-cyan-700 font-semibold relative group"
              >
                <span className="relative z-10">Read More →</span>
                <span
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600
                scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                />
              </Link>
            </div>
          </div>
        ))
    ) : (
      <p className="text-center text-gray-500 col-span-full text-lg font-medium">
        No blog posts available.
      </p>
    )}
  </div>

  <div className="text-center mt-12">
    <Link
      to="/blogs"
      className="inline-block text-indigo-600 font-bold text-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent hover:underline transition"
    >
      View All Blogs →
    </Link>
  </div>

  <style>{`
    @keyframes gradient-x {
      0%, 100% {
        background-position: 0% center;
      }
      50% {
        background-position: 100% center;
      }
    }
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 6s ease infinite;
    }
  `}</style>
</div>

        {/* Get in Touch */}
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
