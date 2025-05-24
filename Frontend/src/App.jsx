import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ServicesSection from './pages/Services';
import ScrollToTopButton from './components/ScrollToTopButton';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';
// import BookServices from './pages/BookServices';
// import News from './pages/News';
// import Calculators from './pages/Calculators';
import Blog from './pages/Blog';
import Offers from './pages/Offers';
import PageTitleSetter from './components/PageTitleSetter';
import BlogDetail from './pages/BlogDetail';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      startEvent: 'DOMContentLoaded',
      offset: 100,
      disableMutationObserver: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <PageTitleSetter /> {/* <- Dynamic titles here */}
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/Services" element={<ServicesSection />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          {/* <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} /> */}
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

