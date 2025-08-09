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
      {/* News Ticker */}
      {news.length > 0 && <NewsTicker news={news} />}

      {/* Hero Section */}
      <section className="relative bg-gray-100 flex flex-col w-full items-center justify-center gap-10 overflow-hidden">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-6xl md:text-5xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#26BF64] to-[#1C3C6D]"
          >
            Empowering Your Financial Future with Insight, Integrity & Innovation 
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
            src="assets/cards- (1).png"
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

{/* MISSION & SERVICES */}
<section className="py-20 px-6 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    {/* Left Column: Mission & Trusted Partner */}
    <div className="flex flex-col gap-10">
      {/* Mission Statement */}
      <div className="bg-[#e3f4e8] p-10 rounded-3xl shadow-lg" data-aos="fade-right">
        <h2 className="text-6xl font-extrabold bg-gradient-to-r from-[#26BF64] to-[#1C3C6D] text-transparent bg-clip-text mb-6 drop-shadow-md">
          Our Mission
        </h2>
        <p className="text-xl leading-relaxed text-gray-800 max-w-lg">
          To empower every client with the tools, knowledge, and confidence needed to make sound financial decisions.
          We are committed to delivering <span className="font-semibold">transparent, reliable, and personalized</span> financial
          solutions that align with your unique goals.
        </p>
      </div>
      {/* Trusted Partner Description */}
      <div className="bg-white p-8 rounded-3xl shadow-md border border-green-200 max-w-lg" data-aos="fade-right" data-aos-delay="100">
        <h3 className="text-3xl font-semibold text-[#1C3C6D] mb-4">
          Your Trusted Partner in Financial Growth
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="font-semibold text-[#26BF64]">Skyman Investments</span>, we believe that financial success starts with clarity, strategy,
          and personalized guidance.
          As a trusted name in comprehensive financial services, we are dedicated to helping individuals, families, and businesses build wealth, manage risk,
          and secure their financial future.
          Whether you’re planning for retirement, expanding your investment portfolio, or navigating complex business finances,
          our experts are here to guide you every step of the way.
        </p>
      </div>
    </div>
    {/* Right Column: Core Services */}
    <div>
      <h2 className="text-4xl font-bold text-gray-900 mb-12 tracking-tight drop-shadow-sm">
        Our Core Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {[
          { icon: "📂", title: "Investment Management", text: "Custom-tailored portfolio strategies, growth-oriented and risk-adjusted investment options, ongoing monitoring and performance analysis.", color: "#b6e1b4", textColor: "#171717" },
          { icon: "🛡️", title: "Retirement Planning", text: "Retirement readiness assessments, tax-efficient savings strategies, income distribution and legacy planning.", color: "#1C3C6D", textColor: "#FFFFFF" },
          { icon: "💰", title: "Financial Planning", text: "Holistic financial plans tailored to life goals, tax-saving strategies and expense management, estate and education planning.", color: "#1C3C6D", textColor: "#FFFFFF" },
          { icon: "📅", title: "Insurance Solutions", text: "Life, health, and general insurance products, asset protection and liability coverage, custom insurance reviews for every life stage.", color: "#b6e1b4", textColor: "#171717" },
          { icon: "🏢", title: "Corporate Financial Services", text: "Strategic business financial planning, cash flow optimization and capital structuring, succession planning and risk management for businesses.", color: "#b6e1b4", textColor: "#171717" },
        ].map((service, i) => (
          <div
            key={service.title}
            style={{ backgroundColor: service.color, color: service.textColor }}
            className="p-7 rounded-3xl shadow-lg border-l-4 border-[#26BF64] transform hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={i * 60}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{service.icon}</span>
              <h3 className="text-xl font-extrabold tracking-tight">{service.title}</h3>
            </div>
            <p className="text-sm leading-relaxed">{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>



        {/* WHY CHOOSE US */}
        <div className="mt-20 p-10 rounded-2xl" data-aos="fade-up" style={{ backgroundColor: '#e6f2f1' }}>
          <h2 className="text-4xl font-bold text-center text-[#26BF64] mb-10">Why Choose Skyman Investments?</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "🤝", title: "Personalized Approach", text: "We build long-term relationships by understanding your goals deeply and creating strategies that reflect your financial priorities." },
              { icon: "👨‍💼", title: "Experienced Professionals", text: "Our team includes certified financial advisors, investment analysts, and insurance experts with decades of combined expertise." },
              { icon: "💡", title: "Innovative Solutions", text: "We use cutting-edge tools and real-time market data to deliver efficient, forward-thinking strategies." },
              { icon: "👥", title: "Client-First Philosophy", text: "Transparency, honesty, and integrity are at the heart of every solution we offer." },
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
                        <p className="text-sm text-gray-500 line-clamp-3 overflow-hidden">
                          {shortContent}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ABOUT US */}
        <div className="relative mt-24 max-w-6xl mx-auto px-4" data-aos="fade-up">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e6f4ec] to-[#f0f6fc] rounded-3xl -z-10 shadow-inner"></div>
          <div className="p-10 rounded-3xl shadow-xl bg-white/90 backdrop-blur-md border border-gray-200">
            <h2 className="text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#26BF64] to-[#1C3C6D]">
              About Us
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
              <div className="flex-shrink-0">
                <motion.img
                  src="logos/Logo.png"
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

        {/* OUR GUIDING VALUES */}
<div className="mt-24 py-20 px-6 max-w-7xl mx-auto rounded-3xl shadow-2xl bg-gradient-to-br from-[#f6fff8] to-[#e0f4fd] relative overflow-hidden" data-aos="fade-up">
  {/* Animated background blur circles */}
  <div className="absolute -top-24 -left-16 w-64 h-64 rounded-full bg-green-200 opacity-30 blur-3xl z-0"></div>
  <div className="absolute -bottom-32 right-0 w-80 h-80 bg-gradient-to-br from-[#26BF64] to-[#1C3C6D] opacity-10 rounded-full blur-[125px] z-0"></div>

  <h2 className="text-5xl sm:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#1C3C6D] via-[#26BF64] to-[#14532d] drop-shadow-lg z-10 relative">Our Guiding Values</h2>
  <div className="grid md:grid-cols-4 gap-8 text-center relative z-10">
    {[
      { icon: "🔍", title: "Integrity", desc: "We hold ourselves to the highest standards of honesty and ethical conduct." },
      { icon: "🎯", title: "Commitment", desc: "We are devoted to our clients’ long-term financial well-being." },
      { icon: "🏆", title: "Excellence", desc: "Every service we offer is executed with precision and professionalism." },
      { icon: "🤝", title: "Trust", desc: "Built through transparency, consistency, and results." },
    ].map((v, i) => (
      <div key={i} className="relative group bg-white/90 p-8 rounded-3xl shadow-xl border border-gray-100 hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer overflow-hidden">
        {/* Glowing animated ring */}
        <span className="absolute -top-2 -right-2 h-12 w-12 rounded-full bg-gradient-to-tr from-green-200 to-green-600 opacity-30 blur-2xl group-hover:opacity-60 transition"></span>
        <div className="text-6xl mb-4 animate-bounce">{v.icon}</div>
        <h3 className="text-2xl font-bold mb-2 text-[#26BF64] tracking-wide">{v.title}</h3>
        <p className="text-md text-gray-600">{v.desc}</p>
      </div>
    ))}
  </div>
</div>

        {/* TESTIMONIALS */}
<div className="mt-24 py-20 px-6 rounded-3xl max-w-7xl mx-auto bg-gradient-to-r from-[#f0f4fd] via-[#e0f7ec] to-[#eafcf9] shadow-2xl relative overflow-hidden" data-aos="fade-up">
  {/* Animated floating shapes background */}
  <div className="absolute -top-16 left-10 w-44 h-44 bg-green-400 opacity-20 blur-3xl rounded-full"></div>
  <div className="absolute -bottom-20 right-16 w-64 h-64 bg-[#26BF64] opacity-15 blur-2xl rounded-full"></div>

  <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#1C3C6D] to-[#26BF64] drop-shadow-lg">What Our Clients Say</h2>
  <div className="grid md:grid-cols-3 gap-10 text-center">
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
    ].map((t, i) => (
      <div key={i} className="bg-white/80 backdrop-blur-2xl p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition group">
        <svg className="mx-auto mb-4 h-9 w-9 text-[#26BF64]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M7 8h10M7 12h5m-1 8a9 9 0 100-18 9 9 0 000 18z" />
        </svg>
        <p className="italic text-lg text-[#14532d] mb-6 leading-relaxed">“{t.quote}”</p>
        <div className="text-[#26BF64] font-bold mb-1">{t.name}</div>
        <div className="text-sm text-gray-500">{t.title}</div>
      </div>
    ))}
  </div>
</div>


        {/* FAQ SECTION */}
<section className="py-28 max-w-5xl mx-auto px-8" data-aos="fade-up">
  <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#1C3C6D] to-[#26BF64] drop-shadow-lg">Frequently Asked Questions</h2>
  <div className="space-y-6">
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
    ].map((faq, i) => (
      <details key={i} className="group border-2 border-[#26BF64]/20 rounded-xl p-6 bg-white/90 hover:shadow-xl transition-all duration-300">
        <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[#26BF64] transition group-open:text-[#1C3C6D]">
          <span className="">{faq.q}</span>
          <svg className="w-6 h-6 text-[#1C3C6D] group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <p className="mt-3 text-gray-700 leading-relaxed transition group-open:text-[#14532d]">{faq.a}</p>
      </details>
    ))}
  </div>
</section>


{/* CALL TO ACTION */}
<section
  className="relative mt-24 rounded-3xl max-w-5xl mx-auto py-20 px-8 text-center bg-gradient-to-br from-[#1C3C6D] to-[#26BF64] text-white shadow-2xl overflow-hidden"
  data-aos="fade-up"
>
  {/* Large floating colorful background shapes */}
  <div className="absolute -top-36 -left-24 w-96 h-80 bg-green-400/70 rounded-full opacity-20 animate-pulse-slow blur-3xl"></div>
  <div className="absolute bottom-[-60px] right-[-40px] w-[400px] h-[280px] bg-[#26BF64]/40 blur-2xl rounded-full opacity-30 animate-bounce"></div>
  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none"></div>

  <h2 className="relative text-4xl md:text-5xl font-extrabold mb-6 tracking-wide text-shadow-glow drop-shadow-[0_0_18px_#26BF64bb] animate-fadeIn">
    <span className="inline-flex items-center justify-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-300 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      Let’s Shape Your Financial Future – Together
    </span>
  </h2>

  <p className="text-lg max-w-3xl mx-auto leading-relaxed text-green-100 drop-shadow-md mb-8 font-light">
    Your financial journey deserves a partner who listens, plans, and acts in your best interest.
    <br />
    <span className="font-bold text-white">
      At Skyman Investments, we’re more than advisors—we’re your dedicated financial allies.
    </span>
  </p>

  <div className="mx-auto max-w-lg text-green-100 text-md space-y-3 border-t border-b border-green-400/60 py-7 italic glassmorphism">
    <p>
      <span className="font-bold">Visit Us:</span> F2, Ashok Manor, 4, Annai Nagar, Selaiyur, Chennai – 600073
    </p>
    <p>
      <span className="font-bold">Email:</span>{" "}
      <a href="mailto:info@skymaninvestments.com" className="underline hover:text-green-200 transition">
        info@skymaninvestments.com
      </a>
    </p>
    <p>
      <span className="font-bold">Call Us:</span>{" "}
      <a href="tel:+919840885001" className="underline hover:text-green-200 transition">
        +91-9840885001
      </a>
    </p>
  </div>

  <p className="mt-10 max-w-lg mx-auto text-lg font-bold text-white drop-shadow-md">
    Schedule a <span className="bg-green-500/40 rounded px-2 py-1">Free Consultation</span> today and take the first step toward financial success!
  </p>

  <Link
    to="/contact"
    aria-label="Contact Skyman Investments"
    className="mt-10 inline-block px-14 py-4 rounded-full text-lg uppercase font-bold tracking-wide bg-gradient-to-br from-[#26BF64] via-[#1C3C6D] to-green-600 shadow-xl relative group
      ring-4 ring-green-300/20 hover:scale-105 focus:outline-none focus:ring-4 transition">
    <span className="relative z-10">Contact Us</span>
    {/* Shine effect */}
    <span
      aria-hidden="true"
      className="absolute top-0 left-[-75%] h-full w-3/5 bg-white opacity-20 blur-lg skew-x-12 animate-shine group-hover:left-full transition-all duration-700"
    ></span>
  </Link>
</section>


      </section>
    </div>
  );
}
