import { jwtDecode } from 'jwt-decode';
import { Link, useLocation } from 'react-router-dom';
import {
  FaRegChartBar,
  FaBlog,
  FaTags,
  FaFolder,
  FaNewspaper
} from 'react-icons/fa';

const navItems = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: <FaRegChartBar /> },
  { to: '/admin/blogs', label: 'Manage Blogs', icon: <FaBlog /> },
  { to: '/admin/news', label: 'Manage News', icon: <FaNewspaper /> },
  { to: '/admin/categories', label: 'Categories', icon: <FaFolder /> },
  { to: '/admin/tags', label: 'Tags', icon: <FaTags /> }
];

const AdminSidebar = () => {
  const location = useLocation();
  const token = localStorage.getItem('token');

  let isAdmin = false;
  try {
    const decoded = jwtDecode(token);
    isAdmin = decoded.role === 'admin';
  } catch {
    isAdmin = false;
  }

  if (!isAdmin) return null;

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-emerald-500 to-cyan-700 text-white shadow-2xl hidden md:flex flex-col justify-between">
      <div>
        {/* Logo & Branding */}
        <div className="p-6 border-b border-cyan-600">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="/logos/Logo.png"
              alt="Skyman Logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-white leading-tight">
                Skyman
              </h1>
              <p className="text-sm text-cyan-200 -mt-1">Investments</p>
            </div>
          </div>
          <h2 className="text-lg font-semibold text-cyan-100">
            Admin Panel
          </h2>
          <p className="text-sm text-cyan-200">Manage all content</p>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4 space-y-2">
          {navItems.map(({ to, label, icon }) => {
            const isActive = location.pathname.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all ${
                  isActive
                    ? 'bg-cyan-800 text-white shadow-inner'
                    : 'hover:bg-cyan-800 text-cyan-100'
                }`}
              >
                <span className="text-lg transition-transform duration-200 group-hover:scale-110">
                  {icon}
                </span>
                <span className="text-base font-medium">{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer (Optional) */}
      <div className="text-center text-xs text-cyan-200 py-4 opacity-70">
        © {new Date().getFullYear()} Skyman Admin
      </div>
    </aside>
  );
};

export default AdminSidebar;
