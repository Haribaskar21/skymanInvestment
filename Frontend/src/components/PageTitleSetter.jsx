import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles = {
  // Public Pages
  "/": "Home | Skyman Investments",
  "/contact": "Contact | Skyman Investments",
  "/privacy-policy": "Privacy Policy | Skyman Investments",
  "/Services": "Services | Skyman Investments",
  "/terms": "Terms & Conditions | Skyman Investments",
  "/refund-policy": "Refund Policy | Skyman Investments",
  "/offers": "Insurance Offers | Skyman Investments",
  "/blog": "Blog | Skyman Investments",
  "/news": "News | Skyman Investments",
  "/calculators": "Financial Calculators | Skyman Investments",
  "/demat-account": "Open Demat Account | Skyman Investments",
  "/insurance": "Insurance Services | Skyman Investments",
  "/financial-planning": "Financial Planning | Skyman Investments",
  "/mutual-funds": "Mutual Fund Advisory | Skyman Investments",
  "/bonds": "Bonds Investment | Skyman Investments",
  "/tax-services": "Tax Services | Skyman Investments",

  // Calculator Pages
  "/calculators/sip-calculator": "SIP Calculator | Skyman Investments",
  "/calculators/lumpsum": "Lumpsum Calculator | Skyman Investments",
  "/calculators/loan-amortization": "Loan Amortization Calculator | Skyman Investments",
  "/calculators/cagr": "Investment CAGR Calculator | Skyman Investments",
  "/calculators/swp": "SWP Calculator | Skyman Investments",
  "/calculators/future-value": "Future Value Calculator | Skyman Investments",
  "/calculators/loan-emi": "Loan EMI Calculator | Skyman Investments",

  // Admin Public Page
  "/secret-admin-login": "Admin Login | Skyman Investments",

  // Admin CRUD Pages
  "/admin/blogs/create": "Create Blog | Skyman Investments",
  "/admin/blogs/edit/:id": "Edit Blog | Skyman Investments",
  "/admin/news/create": "Create News | Skyman Investments",
  "/admin/news/edit/:id": "Edit News | Skyman Investments",
  "/admin/categories": "Blog Categories | Skyman Investments",
  "/admin/tags": "Blog Tags | Skyman Investments",
  "/admin/news-categories": "News Categories | Skyman Investments",
  "/admin/news-tags": "News Tags | Skyman Investments",

  // Admin Main Pages
  "/admin/dashboard": "Admin Dashboard | Skyman Investments",
  "/admin/meta": "Manage Meta Tags | Skyman Investments",
  "/admin/blogs": "Manage Blogs | Skyman Investments",
  "/admin/news": "Manage News | Skyman Investments",
};

export default function PageTitleSetter() {
  const location = useLocation();

  useEffect(() => {
    // Basic static title assignment
    if (titles[location.pathname]) {
      document.title = titles[location.pathname];
    } 
    // Handle dynamic blog and news detail routes
    else if (location.pathname.startsWith("/blog/")) {
      document.title = "Blog Details | Skyman Investments";
    } 
    else if (location.pathname.startsWith("/news/")) {
      document.title = "News Details | Skyman Investments";
    }
    else {
      document.title = "Skyman Investments";
    }
  }, [location.pathname]);

  return null;
}
