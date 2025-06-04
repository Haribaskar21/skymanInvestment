import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';


export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => {
      AOS.refresh();
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header & Contact Info */}
      <section className="py-20 rounded-2xl bg-[#f0f6f3] px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-500 mb-4" data-aos="fade-right">
            <Link to="/">
              <span className="text-[#1C3C6D] font-semibold">HOME</span> &gt;
            </Link>{' '}
            CONTACT
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3C6D] mb-10" data-aos="fade-right" data-aos-delay="100">
            Crafting Excellence for Your Great Financial Project
          </h2>

          <div className="bg-[#e6f5ee] border border-[#26BF64] rounded-2xl p-8 grid sm:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center">
              <div className="text-[#1C3C6D] text-3xl mb-2">📍</div>
              <h3 className="text-[#1C3C6D] font-semibold text-lg mb-1">Physical Address</h3>
              <p className="text-sm text-black">Skyman Investments, Ashok Manor Apartments, First Floor, 4/15, Annai Nagar, Selaiyur,<br />Chennai 600073</p>
            </div>

            <div className="text-center">
              <div className="text-[#1C3C6D] text-3xl mb-2">✉️</div>
              <h3 className="text-[#1C3C6D] font-semibold text-lg mb-1">Email Address</h3>
              <p className="text-sm text-black">skymaninvestments@gmail.com</p>
            </div>

            <div className="text-center">
              <div className="text-[#1C3C6D] text-3xl mb-2">☎️</div>
              <h3 className="text-[#1C3C6D] font-semibold text-lg mb-1">Phone Numbers</h3>
              <p className="text-sm text-black flex items-center justify-center">
                <span className="mr-2">📞</span> +91 44 3504 3639
              </p>
              <p className="text-sm text-black flex items-center justify-center">
                <span className="mr-2">📱</span> +91 96295 96296
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <motion.section
        className="mb-12 py-16 bg-gray-100 mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-bold text-center text-[#1C3C6D] mb-8" data-aos="fade-up" data-aos-delay="100">
          Send Us Your Feedback
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="flex justify-center" data-aos="fade-right">
            <img src="assets/thums.jpg" alt="Thumbs Up" className="rounded-2xl w-4xl max-w-sm" />
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div data-aos="fade-left" data-aos-delay="100">
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter first name"
                  className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-[#26BF64]"
                />
              </div>

              <div data-aos="fade-left" data-aos-delay="200">
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter last name"
                  className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-[#26BF64]"
                />
              </div>
            </div>

            <div data-aos="fade-left" data-aos-delay="300">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="name@example.com"
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-[#26BF64]"
              />
            </div>

            <div data-aos="fade-left" data-aos-delay="400">
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Enter your subject"
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-[#26BF64]"
              />
            </div>

            <div data-aos="fade-left" data-aos-delay="500">
              <label className="block text-sm font-medium text-gray-700">Comment or Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message"
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full h-32 focus:ring-2 focus:ring-[#26BF64]"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="bg-[#1C3C6D] text-white font-bold py-3 px-6 rounded-full hover:scale-105 hover:bg-[#26BF64] transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.section>
    </div>
  );
}
