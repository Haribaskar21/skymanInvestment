import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
      mirror: true
    });

    AOS.refresh();
  }, []);

  return (
    <>
      <footer className="bg-gradient-to-r bg-white text-black py-20 mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3e6e] to-[#0e2e50] opacity-30 z-[-1]" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div data-aos="fade-up" data-aos-delay="100" className="space-y-4">
            <h4 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Skyman Investments
            </h4>
            <p className="text-sm leading-relaxed text-gray-500">
              Empowering smarter investments through innovative strategies, trust, and vision. Join us on the journey to secure your future.
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h5 className="text-xl font-semibold mb-4 text-black">Quick Links</h5>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="/" className="hover:text-black transition-transform transform hover:scale-105">Home</a></li>
              <li><a href="/investing" className="hover:text-black transition-transform transform hover:scale-105">Investing</a></li>
              <li><a href="/services" className="hover:text-black transition-transform transform hover:scale-105">Services</a></li>
              <li><a href="/contact" className="hover:text-black transition-transform transform hover:scale-105">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h5 className="text-xl font-semibold mb-4 text-black">Contact</h5>
            <p className="text-sm mb-3">info@skymaninvestments.com</p>
            <p className="text-sm">+91 96295 96296</p>
          </div>

          {/* Social Media */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h5 className="text-xl font-semibold mb-4 text-black">Follow Us</h5>
            <ul className="flex flex-wrap gap-6 text-sm items-center">
              {[
                { href: "https://www.linkedin.com/in/iamrk/", label: "assets/LinkedIn", icon: "assets/linkedin.png", color: "hover:text-blue-700" },
                { href: "https://x.com/rajeshkmoorthy", label: "X", icon: "assets/x.png", color: "assets/hover:text-blue-400" },
                { href: "https://www.facebook.com/skyman.rajesh", label: "assets/Facebook", icon: "assets/facebook.png", color: "hover:text-blue-600" },
                { href: "https://www.instagram.com/skymaninvestments/", label: "assets/Instagram", icon: "assets/instagram.png", color: "hover:text-pink-500" },
                { href: "https://www.threads.com/@skymaninvestments", label: "assets/Threads", icon: "assets/threads.png", color: "hover:text-black" }
              ].map((item, idx) => (
                <li key={idx} className={`flex items-center space-x-2 ${item.color} transition-transform transform hover:scale-110`}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                    <img src={item.icon} alt={item.label} className="w-5 h-5" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      <div className="text-center text-xs text-gray-800 mb-12 mt-12 bg-gray-100">
        <p>© {new Date().getFullYear()} Skyman Investments. All rights reserved.</p>
      </div>
    </>
  );
}
