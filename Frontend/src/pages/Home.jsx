import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import cursor from "/assets/icon1.png";
import lightning from "/assets/icon2.png";
import { useEffect, useState } from 'react';
import api from '../api/axios';
import NewsTicker from '../components/NewsTicker';

export default function Home() {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogsRes, newsRes] = await Promise.all([
          api.get('/blogs?limit=3&sort=desc'),
          api.get('/news')
        ]);
        setLatestBlogs(blogsRes.data);
        setNews(newsRes.data || []);
      } catch (err) {
        console.error('Failed to fetch data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {news.length > 0 && <NewsTicker news={news} />}

      {/* Hero Section */}
      <section className="relative mt-16 bg-gray-100 flex flex-col w-full items-center justify-center gap-10 overflow-hidden">
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
            <img src={cursor} height="170" width="170" alt="cursor" draggable="false" />
          </motion.div>

          <motion.div className="hidden md:block absolute right-[220px] top-[20px]" drag>
            <img src={lightning} height="120" width="120" alt="lightning" draggable="false" />
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

      {/* Mission & Services */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-black p-8 rounded-2xl bg-[#e3f4e8] shadow-md" data-aos="fade-right">
            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#26BF64] to-[#1C3C6D] mb-6">
              Our Mission
            </h2>
            <p className="text-xl leading-relaxed text-gray-700">
              At <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#26BF64] to-[#1C3C6D]">Skyman Investments</span>, our mission is to empower our clients by
              offering them the tools and knowledge necessary to build wealth, manage risk, and protect their financial well-being.
              We are committed to providing <span className="font-semibold">transparent, trustworthy, and reliable</span> services,
              always putting our clients' interests first.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: "📂", title: "Demat Account", text: "Hold and manage shares electronically.", link: "/demat-account", color: "#b6e1b4", textColor: "black" },
                { icon: "🛡️", title: "Insurance", text: "Comprehensive plans for life and assets.", link: "/insurance", color: "#1C3C6D", textColor: "white" },
                { icon: "💰", title: "Tax Services", text: "Efficient planning and filing services.", link: "/tax-services", color: "#1C3C6D", textColor: "white" },
                { icon: "📅", title: "Financial Planning", text: "Smart budgeting and investment advice.", link: "/financial-planning", color: "#b6e1b4", textColor: "black" },
              ].map((service, i) => (
                <div key={service.title} className={`bg-[${service.color}] text-${service.textColor} p-6 rounded-2xl shadow-md`} data-aos="fade-up" data-aos-delay={i * 50}>
                  <Link to={service.link}>
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm">{service.text}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 p-10 rounded-2xl" data-aos="fade-up" style={{ backgroundColor: '#e6f2f1' }}>
          <h2 className="text-4xl font-bold text-center text-[#26BF64] mb-10">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: "🤝", title: "Personalized Approach", text: "We build strong relationships to understand your goals." },
              { icon: "👨‍💼", title: "Experienced Professionals", text: "Years of industry experience backing your decisions." },
              { icon: "💡", title: "Innovative Solutions", text: "Modern strategies tailored to your financial journey." },
            ].map((item, i) => (
              <div key={item.title} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
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
              {latestBlogs.map(({ _id, title, content, image }) => {
                const stripHtml = (html) => {
                  const tmp = document.createElement("DIV");
                  tmp.innerHTML = html;
                  return tmp.textContent || tmp.innerText || "";
                };
                const shortContent = stripHtml(content).slice(0, 100) + "...";
                const imageSrc = image?.length > 0 ? image : "/assets/placeholder-image.png";

                return (
                  <div key={_id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
                    <Link to={`/blog/${_id}`}>
                      <img className="w-full h-48 rounded-t-lg object-cover" src={imageSrc} alt={title} loading="lazy" />
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1 text-[#1C3C6D]">{title}</h3>
                        <p className="text-sm text-gray-500">{shortContent}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>

{/* About Us */}
<div className="relative mt-24 max-w-6xl mx-auto px-4" data-aos="fade-up">
  <div className="absolute inset-0 bg-gradient-to-r from-[#e6f4ec] to-[#f0f6fc] rounded-3xl -z-10 shadow-inner"></div>

  <div className="p-10 rounded-3xl shadow-xl bg-white/90 backdrop-blur-md border border-gray-200">
    <h2 className="text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#26BF64] to-[#1C3C6D]">
      About Us
    </h2>

    <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
      <div className="flex-shrink-0">
        <motion.img
          src="logos/Logo.png" // replace with your brand icon or relevant image
          alt="Skyman Icon"
          className="w-32 h-32 border-4 border-[#26BF64] shadow-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
      </div>

      <div className="text-center md:text-left">
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          <span className="font-bold text-[#1C3C6D]">Skyman Investments</span> is a trusted leader in
          comprehensive financial services, dedicated to helping individuals, families, and businesses
          achieve their goals with confidence. We specialize in strategic planning, smart investing, and
          risk management tailored to your journey.
        </p>

        <div className="mt-6 bg-[#e8f8f0] text-[#1C3C6D] font-medium text-sm p-4 border-l-4 border-[#26BF64] rounded">
          “Empowering your financial future with integrity, innovation, and trust — that’s our promise.”
        </div>
      </div>
    </div>
  </div>
</div>


        {/* Our Values */}
        <div className="mt-20 bg-[#f0fdf4] py-16 px-6 rounded-2xl max-w-7xl mx-auto shadow-md" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center text-[#1C3C6D] mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2 text-[#26BF64]">Integrity</h3>
              <p className="text-sm text-gray-600">We uphold honesty and transparency in all our actions.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-[#26BF64]">Commitment</h3>
              <p className="text-sm text-gray-600">Your goals are our goals — we work relentlessly for you.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2 text-[#26BF64]">Excellence</h3>
              <p className="text-sm text-gray-600">We strive for exceptional quality in every interaction.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2 text-[#26BF64]">Trust</h3>
              <p className="text-sm text-gray-600">We build lasting relationships based on trust and care.</p>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
<div className="mt-20 bg-gradient-to-r from-[#e0f7ec] to-[#f0f4fd] py-16 px-6 rounded-2xl max-w-7xl mx-auto shadow-md" data-aos="fade-up">
  <h2 className="text-4xl font-bold text-center text-[#1C3C6D] mb-12">What Our Clients Say</h2>
  <div className="grid md:grid-cols-3 gap-6 text-center">
    {[
      {
        quote: "Skyman’s personalized financial advice changed my life. I feel secure about my future now.",
        name: "Ananya M.",
        title: "Entrepreneur"
      },
      {
        quote: "Their strategies helped me manage risk smartly. Transparent and very professional.",
        name: "Ravi K.",
        title: "Senior Engineer"
      },
      {
        quote: "From insurance to investments, Skyman is my trusted partner for all financial matters.",
        name: "Meera J.",
        title: "Freelancer"
      }
    ].map((testimonial, i) => (
      <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <p className="italic text-gray-700 mb-4">“{testimonial.quote}”</p>
        <div className="text-[#26BF64] font-semibold">{testimonial.name}</div>
        <div className="text-sm text-gray-500">{testimonial.title}</div>
      </div>
    ))}
  </div>
</div>

{/* FAQ Section */}
<section className="py-24 bg-[#f8fdfb]" data-aos="fade-up">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-[#1C3C6D] mb-12 text-center">Frequently Asked Questions</h2>
    <div className="space-y-4">
      {[
        {
          q: "How do I open a Demat account?",
          a: "You can open a Demat account by contacting our support team. We'll help you fill out the application, verify your KYC documents, and get started in no time.",
        },
        {
          q: "What is the minimum amount I need to invest?",
          a: "There is no minimum investment required. You can start with any amount you're comfortable with. Our advisors will guide you based on your financial goals.",
        },
        {
          q: "Do you offer customized investment plans?",
          a: "Absolutely. We tailor our investment strategies based on your age, income, risk appetite, and long-term objectives.",
        },
        {
          q: "Is my investment safe with Skyman Investments?",
          a: "Yes, we prioritize your security and only work with SEBI-registered financial institutions. Your investments are tracked and reported with complete transparency.",
        },
        {
          q: "What support do I get after investing?",
          a: "We offer ongoing support including portfolio reviews, tax planning help, insurance advice, and 24/7 support through our client portal.",
        },
        {
          q: "Can I track my investments online?",
          a: "Yes, once you’re onboarded, you’ll get access to our secure portal where you can monitor your portfolio performance in real-time.",
        },
      ].map((faq, i) => (
        <details
          key={i}
          className="group border border-gray-200 rounded-xl p-5 bg-white hover:shadow-lg transition duration-300"
        >
          <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-[#26BF64]">
            <span>{faq.q}</span>
            <svg
              className="w-5 h-5 text-[#1C3C6D] transition-transform duration-300 group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
        </details>
      ))}
    </div>
  </div>
</section>

        {/* Get in Touch */}
        <div className="mt-20 bg-[#1C3C6D] text-white py-16 px-6 rounded-2xl max-w-6xl mx-auto text-center shadow-lg" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Ready to take the next step in your financial journey? Whether you're just starting or seeking expert advice, we’re here to help.
            Schedule your consultation with our professionals today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#26BF64] hover:bg-white hover:text-[#1C3C6D] text-white border border-white px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
   