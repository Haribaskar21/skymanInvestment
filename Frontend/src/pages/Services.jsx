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
    image:
      "https://static.wixstatic.com/media/cbaed5_a65c6b5622134db1b0db0a6076f4cc77~mv2.jpg/v1/fill/w_247,h_111,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Demat%20Account%20Image.jpg",
  },
  { title: "Insurance", image: "assets/insurance.avif" },
  { title: "Financial Planning", image: "assets/finance-plan.avif" },
  { title: "Bonds", image: "assets/bonds.avif" },
  { title: "Tax Services", image: "assets/income.avif" },
  { title: "Mutual Funds", image: "assets/mutual.avif" },
];

const bookServices = [
  { title: "🧾 Income Tax", price: "₹23,600 (incl 18% GST)" },
  { title: "📊 Portfolio Management Services", price: "₹23,600 (incl 18% GST)" },
  { title: "📈 Financial Planning", price: "₹2,360 (incl 18% GST)" },
];

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-[#f9faf9] overflow-hidden">
      {/* Header Section */}
      <section className="py-20 rounded-2xl bg-[#e6f0e9] px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#1C3C6D] mb-4" data-aos="fade-right">
            <Link to="/">
              <span className="text-[#26BF64] font-semibold">HOME</span> &gt;
            </Link>{" "}
            <span className="font-semibold text-[#1C3C6D]">SERVICES</span>
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1C3C6D] mb-10"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Empowering Your Growth with Tailored Financial Services
          </h2>
        </div>
      </section>

      {/* Services Section */}
      <div className="max-w-6xl mt-20 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-y-14 gap-x-12">
        <h2 className="col-span-full text-4xl sm:text-5xl font-extrabold text-center text-[#1C3C6D]">
          We Offer the Below Services
        </h2>
        <p className="col-span-full text-center max-w-xl mx-auto text-[#4A5E6B] mb-5 text-lg">
          Please click on the respective images to know more.
        </p>

        {services.map((service, index) => (
          <Link
            key={service.title}
            to={`/${slugify(service.title)}`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className="w-full h-[420px] relative overflow-hidden flex justify-center items-center"
          >
            <div
              className="bg-[#e6f0e9] w-full rounded-3xl shadow-lg p-6 flex flex-col items-center text-center cursor-pointer z-10
              hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-48 h-36 object-contain mb-5 mx-auto"
              />
              <h3 className="text-xl font-semibold text-[#1C3C6D]">{service.title}</h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Book Services Section */}
      <section className="max-w-6xl mx-auto mt-40 px-6">
        <h2
          className="text-4xl sm:text-5xl font-extrabold text-center text-[#1C3C6D] mb-6"
          data-aos="fade-up"
        >
          📚 Book Services
        </h2>
        <p
          className="text-center text-[#4A5E6B] max-w-2xl mx-auto mb-14 text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Choose from our personalized financial services designed to guide your financial journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {bookServices.map((service, index) => (
            <Link
              key={service.title}
              to={`/service/${slugify(service.title)}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-[#e6f0e9] rounded-3xl shadow-lg p-10 flex flex-col items-center text-center cursor-pointer
                         hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="text-6xl mb-4">{service.title.split(" ")[0]}</div>
              <h3 className="text-xl font-semibold text-[#1C3C6D] mb-2">
                {service.title.split(" ").slice(1).join(" ")}
              </h3>
              <p className="text-lg font-medium text-[#4A5E6B]">{service.price}</p>
            </Link>
          ))}
        </div>

        <p
          className="mt-8 text-center text-sm text-[#7A8C98] max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <strong>
            💡 All prices mentioned are for one year. Valid for 365 days from the payment date.
          </strong>
        </p>
      </section>
    </div>
  );
}
