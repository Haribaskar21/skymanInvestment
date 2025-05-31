import { useState, useEffect } from "react";
import api from "../../api/axios";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    blogs: 0,
    news: 0,
    categories: 0,
    tags: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [blogsRes, newsRes, categoriesRes, tagsRes] = await Promise.all([
          api.get("/blogs"),
          api.get("/news"),
          api.get("/meta/categories"),
          api.get("/meta/tags"),
        ]);

        setStats({
          blogs: blogsRes.data.length,
          news: newsRes.data.length,
          categories: categoriesRes.data.length,
          tags: tagsRes.data.length,
        });
      } catch (err) {
        console.error("Failed to fetch stats", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-cyan-700 mb-2">Welcome, Admin</h1>
      <p className="text-gray-600 mb-6">Here’s a snapshot of your platform:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Blogs" value={stats.blogs} />
        <StatCard title="News" value={stats.news} />
        <StatCard title="Categories" value={stats.categories} />
        <StatCard title="Tags" value={stats.tags} />
      </div>
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition text-center border border-gray-100">
    <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-1">
      {value}
    </p>
    <p className="text-gray-800 font-medium text-lg">{title}</p>
  </div>
);

export default AdminDashboard;
