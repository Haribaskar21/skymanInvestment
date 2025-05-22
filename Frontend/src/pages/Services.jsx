"use client";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const services = [
  { title: "Demat Account", image: "https://static.wixstatic.com/media/cbaed5_a65c6b5622134db1b0db0a6076f4cc77~mv2.jpg/v1/fill/w_247,h_111,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Demat%20Account%20Image.jpg", hueA: 200, hueB: 230 },
  { title: "Insurance", image: "/images/insurance.png", hueA: 200, hueB: 230 },
  { title: "Financial Planning", image: "/images/financial.png", hueA: 200, hueB: 230 },
  { title: "Portfolio Management", image: "/images/portfolio.png", hueA: 200, hueB: 230 },
  { title: "Bonds", image: "/images/bonds.png", hueA: 200, hueB: 230 },
  { title: "Tax Services", image: "/images/tax.png", hueA: 200, hueB: 230 },
  { title: "Mutual Funds", image: "/images/mutualfunds.png", hueA: 200, hueB: 230 },
];

const ServicesSection = () => {
  useEffect(() => {
    
    AOS.init({
      duration: 800,    
      once: false,      
      mirror: true,    
      offset: 100,    
    });

    
    AOS.refresh();
  }, []); 

  return (
    <div
      style={container}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 py-20"
    >
      <h2
        className="col-span-full text-5xl font-bold text-center mb-8"
        data-aos="fade-up"
      >
        We offer the below Services
      </h2>

      <p
        className="col-span-full text-lg text-center mb-10 max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Please click on the respective images to know more.
      </p>

      {services.map((service) => (
        <Card key={service.title} {...service} />
      ))}
    </div>
  );
};

const Card = ({ title, image, hueA, hueB }) => {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <div
      className="w-full h-[350px] relative overflow-hidden flex justify-center items-center"
      data-aos="zoom-in-up"
    >
      <div style={{ ...splash, background }} />
      <div className="z-10 bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center">
        <Link to={`/service/${title.toLowerCase().replace(/ /g, '-')}`}>
          <img
            src={image}
            alt={title}
            className="w-50 h-45 object-contain mb-4 cursor-pointer"
          />
        </Link>
        <h3 className="text-lg font-semibold text-center">{title}</h3>
      </div>
    </div>
  );
};


const hue = (h) => `hsl(${h}, 100%, 50%)`;

const container = {
  margin: "0 auto",
  maxWidth: "1200px",
};

const splash = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
  zIndex: 1,
};

export default ServicesSection;
