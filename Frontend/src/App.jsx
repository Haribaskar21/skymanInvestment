import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ServicesSection from './pages/Services';
import ScrollToTopButton from './components/ScrollToTopButton';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';
// import BookServices from './pages/BookServices';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Calculators from './pages/Calculators';
import Blog from './pages/Blog';
import Offers from './pages/Offers';
import PageTitleSetter from './components/PageTitleSetter';
import BlogDetail from './pages/BlogDetail';
import DematAccount from './pages/DematAccount';
import InsuranceServices from './pages/InsuranceServices';
import FinancialPlanning from './pages/FinancialPlanning';
import MutualFundAdvisor from './pages/MutualFundAdvisor';
import BondsPage from './pages/BondsPage';
import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/admin/AdminDashboard';
import AdminBlogList from './pages/admin/AdminBlogList';
import AdminNewsList from './pages/admin/AdminNewsList';

import BlogForm from './pages/admin/BlogForm';
import NewsForm from './pages/admin/NewsForm';
import AdminRoute from './components/AdminRoute';
import AdminLayout from './layouts/AdminLayout';
import SipCalculator from './pages/calculators/SipCalculator';
import LumpsumCalculator from './pages/calculators/LumpsumCalculator';
import LoanAmortizationPage from './pages/calculators/LoanAmortizationPage';
import InvestmentCagrCalculator from './pages/calculators/InvestmentCagrCalculator';
import SwpCalculator from './pages/calculators/SwpCalculator';
import FutureValueCalculator from './pages/calculators/FutureValueCalculator';
import LoanEMICalculator from './pages/calculators/LoanEMICalculator';

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
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
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
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/demat-account" element={<DematAccount />} />
          <Route path="/insurance" element={<InsuranceServices />} />
          <Route path="/financial-planning" element={<FinancialPlanning />} />
          <Route path="/mutual-funds" element={<MutualFundAdvisor />} />
          <Route path="/bonds" element={<BondsPage />} />
          <Route path="/calculators/sip-calculator" element={<SipCalculator />} />
          <Route path="/calculators/lumpsum" element={<LumpsumCalculator />} />
          <Route path="/calculators/loan-amortization" element={<LoanAmortizationPage />} />
          <Route path="/calculators/cagr" element={<InvestmentCagrCalculator />} />
          <Route path="/calculators/swp" element={<SwpCalculator />} />
          <Route path="/calculators/future-value" element={<FutureValueCalculator />} />
          <Route path="/calculators/loan-emi" element={<LoanEMICalculator />} />
        {/* Public admin login */}
        <Route path="/secret-admin-login" element={<AdminLogin />} />
        <Route path="/admin/blogs/create" element={<BlogForm />} />
<Route path="/admin/blogs/edit/:id" element={<BlogForm isEdit />} />
<Route path="/admin/news/create" element={<NewsForm />} />
<Route path="/admin/news/edit/:id" element={<NewsForm isEdit />} />



        {/* Admin protected layout and nested pages */}
        <Route element={<AdminRoute><AdminLayout /></AdminRoute>}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route
    path="/admin/blogs"
    element={
      <AdminRoute>
        <AdminBlogList />
      </AdminRoute>
    }
  />
  <Route
    path="/admin/news"
    element={
      <AdminRoute>
        <AdminNewsList />
      </AdminRoute>
    }
  />
          {/* <Route path="/admin/blogs" element={<BlogList />} />
          <Route path="/admin/news" element={<NewsList />} /> */}
        </Route>
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

