import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const slugify = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[\s_-]+/g, "-");

const services = [
  {
    title: "Demat Account",
    image: "assets/demat.webp",
  },
  {
    title: "Insurance",
    image: "assets/insurance.png",
  },
  {
    title: "Financial Planning",
    image: "assets/financial.png",
  },
  {
    title: "Bonds",
    image: "https://cdn.iconscout.com/icon/free/png-512/bonds-1869658-1584964.png",
  },
  {
    title: "Tax Services",
    image: "https://cdn-icons-png.flaticon.com/512/5571/5571677.png",
  },
  {
    title: "Mutual Funds",
    image: "https://www.clipartmax.com/png/full/239-2392380_mutual-fund-icon-mutual-funds-icon-transparent.png",
  },
];

const bookServices = [
  { title: "🧾 Income Tax", price: "₹23,600", gst: "18%" },
  { title: "📊 Portfolio Management", price: "₹23,600", gst: "18%" },
  { title: "📈 Financial Planning", price: "₹2,360", gst: "18%" },
];

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#e6f0e9] to-[#f9faf9] px-6 sm:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <p
            className="text-sm text-[#1C3C6D] mb-4 font-semibold tracking-wider"
            data-aos="fade-right"
          >
            <Link to="/" className="hover:text-[#26BF64] transition">
              <span className="text-[#26BF64] font-semibold">HOME</span> &gt;
            </Link>{" "}
            <span className="font-semibold text-[#1C3C6D]">SERVICES</span>
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-[#1C3C6D] mb-6 leading-tight drop-shadow-sm"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Explore Our Tailored Financial Solutions
          </h2>
          <p
            className="text-[#4A5E6B] max-w-3xl mx-auto text-lg font-medium"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Unlock smarter investments, secure insurance, and long-term planning—all under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#f9faf9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <h3
            className="text-3xl sm:text-4xl font-bold text-center text-[#1C3C6D] mb-14 tracking-tight"
            data-aos="fade-up"
          >
            Our Core Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={`/${slugify(service.title)}`}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-white border border-[#e3e8e5] shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 rounded-2xl overflow-hidden flex flex-col items-center text-center p-8 group"
              >
                <div className="w-32 h-28 mb-5 flex items-center justify-center p-4 bg-[#e3f4e8] rounded-xl transition group-hover:scale-110">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-semibold text-[#1C3C6D] group-hover:text-[#26BF64] transition-colors">
                  {service.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Book Services */}
      <section className="bg-gradient-to-r from-[#f0fbf4] to-[#e6f0e9] py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <h3
            className="text-3xl sm:text-4xl font-bold text-center text-[#1C3C6D] mb-6 tracking-tight"
            data-aos="fade-up"
          >
            📚 Book Premium Services
          </h3>
          <p
            className="text-[#4A5E6B] text-lg text-center max-w-2xl mx-auto mb-12 font-medium"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Schedule expert-guided services for accurate filing, proactive planning, and portfolio growth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {bookServices.map((service, index) => (
              <Link
                key={service.title}
                to={`/${slugify(service.title)}`}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-8 text-center border-t-4 border-[#26BF64] group"
              >
                <div
                  className="text-6xl mb-3 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  {service.title.split(" ")[0]}
                </div>
                <h4 className="text-xl font-semibold text-[#1C3C6D] mb-2 group-hover:text-[#26BF64] transition-colors">
                  {service.title.split(" ").slice(1).join(" ")}
                </h4>
                <span className="bg-[#26BF64] text-white px-5 py-2 rounded-full text-sm font-medium inline-block mt-2">
                  {service.price} <span className="text-xs ml-1">+ {service.gst} GST</span>
                </span>
              </Link>
            ))}
          </div>
          <p
            className="mt-8 text-center text-sm text-[#4A5E6B] max-w-xl mx-auto font-semibold"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            💡 All prices are for 1 year (365 days) from the payment date.
          </p>
        </div>
      </section>
    </div>
  );
}
