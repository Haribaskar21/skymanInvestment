import { Link, useLocation } from 'react-router-dom';

export default function AdminSidebar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-4 py-2 rounded-lg font-medium ${
      pathname === path ? 'bg-blue-600 text-white' : 'hover:bg-blue-100 text-gray-800'
    }`;

  return (
    <aside className="w-full md:w-64 bg-gray-50 border-r p-4 min-h-screen">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-2">
        <Link to="/admin/dashboard" className={linkClass('/admin/dashboard')}>Dashboard</Link>
        <Link to="/admin/posts" className={linkClass('/admin/posts')}>All Posts</Link>
        <Link to="/admin/posts/new" className={linkClass('/admin/posts/new')}>New Post</Link>
        <Link to="/admin/categories" className={linkClass('/admin/categories')}>Categories</Link>
        <Link to="/admin/categories/new" className={linkClass('/admin/categories/new')}>New Category</Link>
        <Link to="/admin/tags" className={linkClass('/admin/tags')}>Tags</Link>
        <Link to="/admin/tags/new" className={linkClass('/admin/tags/new')}>New Tag</Link>
      </nav>
    </aside>
  );
}
