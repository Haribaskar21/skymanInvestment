import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="mb-6 text-gray-600">Welcome back, Admin. Here's what's happening:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quick Access Cards */}
        <Link to="/admin/blogs" className="p-6 bg-white shadow rounded-lg hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Manage Blogs</h2>
          <p className="text-gray-500">Create, edit, or delete blog posts.</p>
        </Link>

        <Link to="/admin/news" className="p-6 bg-white shadow rounded-lg hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Manage News</h2>
          <p className="text-gray-500">Update or publish the latest news.</p>
        </Link>

        <Link to="/admin/categories" className="p-6 bg-white shadow rounded-lg hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Manage Categories</h2>
          <p className="text-gray-500">Organize your blog and news posts.</p>
        </Link>

        <Link to="/admin/tags" className="p-6 bg-white shadow rounded-lg hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Manage Tags</h2>
          <p className="text-gray-500">Edit and assign tags for better searchability.</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
