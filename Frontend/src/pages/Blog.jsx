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
    AOS.init({ duration: 700, easing: 'ease-in-out' });
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">
        Latest Insights & Stories
      </h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-12">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="appearance-none border border-gray-300 rounded-lg px-5 py-3 text-gray-700 text-base w-full md:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="appearance-none border border-gray-300 rounded-lg px-5 py-3 text-gray-700 text-base w-full md:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          aria-label="Filter by tag"
        >
          <option value="">All Tags</option>
          {tagsOptions.map(tag => (
            <option key={tag._id} value={tag._id}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <Link
            to={`/blog/${blog._id}`}
            key={blog._id}
            aria-label={`Read more about ${blog.title}`}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 20px 25px rgba(59, 130, 246, 0.2)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-aos="fade-up"
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full group cursor-pointer"
            >
              <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
                <img
                  src={
                    blog.image?.startsWith('http')
                      ? blog.image
                      : blog.image
                      ? `http://localhost:5000/uploads/${blog.image}`
                      : placeholder
                  }
                  alt={blog.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col flex-grow p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {blog.title}
                </h2>

                <p className="text-sm text-indigo-600 font-medium mb-3">
                  {new Date(blog.date).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>

                <p
                  className="text-gray-600 text-sm flex-grow line-clamp-4"
                  dangerouslySetInnerHTML={{ __html: blog.content.slice(0, 130) + '...' }}
                />

                <div className="mt-5">
                  <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-3 py-1 rounded-full">
                    {categories.find(c => c._id === blog.category)?.name || 'Uncategorized'}
                  </span>
                  {blog.tags.map(tagId => {
                    const tagName = tagsOptions.find(t => t._id === tagId)?.name;
                    return tagName ? (
                      <span
                        key={tagId}
                        className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-3 py-1 rounded-full"
                      >
                        #{tagName}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
