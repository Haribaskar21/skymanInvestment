import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import api from '../api/axios';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    AOS.init(); // Initialize AOS animations
    api.get('/blogs').then(res => setBlogs(res.data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <Link to={`/blog/${blog._id}`} key={blog._id}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              data-aos="fade-up"
              className="border rounded shadow p-4 hover:shadow-lg cursor-pointer"
            >
              <img
                src={`http://localhost:5000/uploads/${blog.image}`}
                alt={blog.title}
                className="w-full h-48 object-cover mb-2 rounded"
              />
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-600">
                {new Date(blog.date).toLocaleDateString()}
              </p>
              <p className="mt-2">{blog.content.slice(0, 100)}...</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
