import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    AOS.refresh();
  }, []);

  return (
    <>
      <footer className="relative py-20 mt-20 bg-gradient-to-r from-[#1C3C6D] to-[#1b416f] text-white">
        {/* subtle overlay to darken gradient if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C3C6D] to-[#0F3057] opacity-90 z-[-1]" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div data-aos="fade-up" data-aos-delay="100" className="space-y-4">
            <h4 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#26BF64] to-[#0757ce]">
              Skyman Investments
            </h4>
            <p className="text-sm leading-relaxed text-[#B0C4D4]">
              Empowering smarter investments through innovative strategies, trust, and vision. Join us on the journey to secure your future.
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h5 className="text-xl font-semibold mb-4 text-[#26BF64]">Quick Links</h5>
            <ul className="space-y-3 text-sm text-[#B0C4D4]">
              {['Home', 'Investing', 'Services', 'Contact'].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="transition-transform transform hover:scale-105 hover:text-[#26BF64]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h5 className="text-xl font-semibold mb-4 text-[#26BF64]">Contact</h5>
            <p className="text-sm mb-3">info@skymaninvestments.com</p>
            <p className="text-sm">+91 96295 96296</p>
          </div>

          {/* Social Media */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h5 className="text-xl font-semibold mb-4 text-[#26BF64]">Follow Us</h5>
            <ul className="flex flex-wrap gap-6 text-sm items-center">
              {[
                { href: "https://www.linkedin.com/in/iamrk/", label: "LinkedIn", icon: "assets/linkedin.png", hoverColor: "hover:text-[#0A66C2]" },
                { href: "https://x.com/rajeshkmoorthy", label: "X", icon: "assets/x.png", hoverColor: "hover:text-[#1DA1F2]" },
                { href: "https://www.facebook.com/skyman.rajesh", label: "Facebook", icon: "assets/facebook.png", hoverColor: "hover:text-[#1877F2]" },
                { href: "https://www.instagram.com/skymaninvestments/", label: "Instagram", icon: "assets/instagram.png", hoverColor: "hover:text-[#E1306C]" },
                { href: "https://www.threads.com/@skymaninvestments", label: "Threads", icon: "assets/threads.png", hoverColor: "hover:text-[#000000]" }
              ].map((item, idx) => (
                <li key={idx} className={`flex items-center space-x-2 transition-transform transform hover:scale-110 ${item.hoverColor}`}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} className="flex items-center space-x-2">
                    <img src={item.icon} alt={item.label} className="w-5 h-5" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      <div className="text-center text-xs text-[#1C3C6D] mb-12 mt-12 bg-[#E5F5E0] py-4">
        <p>© {new Date().getFullYear()} Skyman Investments. All rights reserved.</p>
      </div>
    </>
  );
}
