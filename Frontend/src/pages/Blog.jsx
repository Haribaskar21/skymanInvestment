import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import api from '../api/axios';

const placeholder = 'https://via.placeholder.com/400x300?text=No+Image';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tagsOptions, setTagsOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out' });
    fetchMeta();
    fetchPosts();
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [selectedCategory, selectedTag]);

  const fetchMeta = async () => {
    try {
      const [catRes, tagRes] = await Promise.all([
        api.get('/meta/categories'),
        api.get('/meta/tags'),
      ]);
      setCategories(catRes.data);
      setTagsOptions(tagRes.data);
    } catch (err) {
      console.error('Failed to load meta:', err);
    }
  };

  const fetchPosts = async () => {
    try {
      // Fetch all blogs from API (you can also pass filters to backend if it supports AND)
      const res = await api.get('/blogs');
      let filtered = res.data;

      if (selectedCategory) {
        filtered = filtered.filter(blog => blog.category === selectedCategory);
      }
      if (selectedTag) {
        filtered = filtered.filter(blog => blog.tags.includes(selectedTag));
      }

      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

      setBlogs(filtered);
    } catch (err) {
      console.error('Failed to fetch blogs:', err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Blog</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-10">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
        >
          <option value="">All Tags</option>
          {tagsOptions.map((tag) => (
            <option key={tag._id} value={tag._id}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <Link to={`/blog/${blog._id}`} key={blog._id}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              data-aos="fade-up"
              className="border rounded-xl shadow-sm p-4 hover:shadow-lg transition-all bg-white"
            >
              <img
                src={
                  blog.image?.startsWith('http')
                    ? blog.image
                    : blog.image
                    ? `http://localhost:5000/uploads/${blog.image}`
                    : placeholder
                }
                alt={blog.title}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-500 mb-1">
                {new Date(blog.date).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600 line-clamp-3">
                {blog.content.slice(0, 100)}...
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
