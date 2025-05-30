import { jwtDecode } from 'jwt-decode';

const AdminSidebar = () => {
  const token = localStorage.getItem('token');

  let isAdmin = false;
  try {
    const decoded = jwtDecode(token);
    isAdmin = decoded.role === 'admin';
  } catch (err) {
    isAdmin = false;
  }

  if (!isAdmin) return null; // Hide the sidebar

  return (
    <aside className="w-64 p-4 bg-gray-200 min-h-screen">
      <ul className="space-y-4">
        <li><a href="/admin/dashboard" className="block">Dashboard</a></li>
        <li><a href="/admin/blogs" className="block">Manage Blogs</a></li>
        <li><a href="/admin/news" className="block">Manage News</a></li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
