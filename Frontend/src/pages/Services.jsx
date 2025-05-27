import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";

// Services data
const services = [
  {
    title: "Demat Account",
    image:
      "https://static.wixstatic.com/media/cbaed5_a65c6b5622134db1b0db0a6076f4cc77~mv2.jpg/v1/fill/w_247,h_111,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Demat%20Account%20Image.jpg",
  },
  { title: "Insurance", image: "assets/insurance.avif"},
  { title: "Financial Planning", image: "assets/finance-plan.avif" },
  { title: "Portfolio Management", image: "assets/portfolio.avif" },
  { title: "Bonds", image: "assets/bonds.avif" },
  { title: "Tax Services", image: "assets/income.avif" },
  { title: "Mutual Funds", image: "assets/mutual.avif" },
];

// Utility to map scroll to movement
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Service card component with scroll animation
function ServiceCard({ title, image, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useParallax(scrollYProgress, 80);

  return (
    <motion.div
      ref={ref}
      className="w-full h-[420px] relative overflow-hidden flex justify-center items-center"
      style={{ y }}
    >
      <motion.div
        className="bg-blue-50 w-3xl rounded-3xl shadow-lg p-6 flex flex-col items-center text-center cursor-pointer z-10
                   hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <Link to={`/service/${title.toLowerCase().replace(/ /g, "-")}`}>
          <img
            src={image}
            alt={title}
            className="w-48 h-36 object-contain mb-5 mx-auto"
          />
        </Link>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const progressBar = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="relative  overflow-hidden bg-gray-50 py-20">
      {/* Scroll progress bar */}
            <section className="py-20 rounded-2xl bg-blue-50 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-500 mb-4" data-aos="fade-right">
            <Link to="/">
              <span className="text-blue-500">HOME</span> &gt;
            </Link>
            SERVICES
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10" data-aos="fade-right" data-aos-delay="100">
            Empowering Your Growth with Tailored Financial Services
          </h2>
        </div>
      </section>
      <motion.div
        className="fixed left-0 right-0 top-0 h-[5px] origin-left  shadow-lg"
        style={{ scaleX: progressBar }}
      />

      <div
        ref={containerRef}
        className="max-w-6xl mt-20 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-y-14 gap-x-12"
      >
        <h2 className="col-span-full text-4xl sm:text-5xl font-extrabold text-center text-gray-900">
          We Offer the Below Services
        </h2>
        <p className="col-span-full text-center max-w-xl mx-auto text-gray-600 mb-5 text-lg">
          Please click on the respective images to know more.
        </p>

        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>
    </div>
  );
}
