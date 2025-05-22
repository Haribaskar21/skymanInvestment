import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const titles = {
  '/': 'Home | Skyman Investments',
  '/contact': 'Contact | Skyman Investments',
  '/privacy-policy': 'Privacy Policy | Skyman Investments',
  "/Services": 'Services | Skyman Investments',
  '/terms': 'Terms & Conditions | Skyman Investments',
  '/refund-policy': 'Refund Policy | Skyman Investments',
  '/offers': 'Insurance Offers | Skyman Investments',
};

export default function PageTitleSetter() {
  const location = useLocation();

  useEffect(() => {
    document.title = titles[location.pathname] || 'Skyman Investments';
  }, [location]);

  return null;
}
