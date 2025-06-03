import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../api/axios';

const placeholder = 'https://via.placeholder.com/400x300?text=No+Image';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      ease: 'easeOut',
      duration: 0.6,
    },
  }),
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tagsOptions, setTagsOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    fetchMeta();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [selectedCategory, selectedTag]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-16 tracking-tight">
        Latest Insights & Stories
      </h1>

      {/* Filters - sticky on top */}
      <motion.div
        className="sticky top-16 z-10 bg-white bg-opacity-90 backdrop-blur-md border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center justify-center shadow-lg max-w-4xl mx-auto mb-16"
        initial="hidden"
        animate="visible"
        variants={dropdownVariants}
      >
        <motion.select
          aria-label="Filter by category"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="appearance-none border border-gray-300 rounded-lg px-5 py-3 text-gray-700 text-base w-full md:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition cursor-pointer hover:border-indigo-500"
          whileFocus={{ scale: 1.03 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </motion.select>

        <motion.select
          aria-label="Filter by tag"
          value={selectedTag}
          onChange={e => setSelectedTag(e.target.value)}
          className="appearance-none border border-gray-300 rounded-lg px-5 py-3 text-gray-700 text-base w-full md:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition cursor-pointer hover:border-indigo-500"
          whileFocus={{ scale: 1.03 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <option value="">All Tags</option>
          {tagsOptions.map(tag => (
            <option key={tag._id} value={tag._id}>
              {tag.name}
            </option>
          ))}
        </motion.select>
      </motion.div>

      {/* Blog Grid */}
      {loading ? (
        <p className="text-center text-gray-500 text-lg mt-20">Loading posts...</p>
      ) : blogs.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-20">No blog posts found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence>
            {blogs.map((blog, index) => (
              <motion.article
                key={blog._id}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={fadeUp}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 25px rgba(59, 130, 246, 0.2)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col h-full cursor-pointer group border border-transparent hover:border-indigo-300 transition"
                aria-label={`Read more about ${blog.title}`}
              >
                <Link to={`/blog/${blog._id}`} className="flex flex-col flex-grow">
                  <div className="relative w-full h-60 overflow-hidden rounded-t-3xl bg-gray-100">
                    <img
                      src={
                        blog.image?.startsWith('http')
                          ? blog.image
                          : blog.image
                          ? `http://localhost:5000/uploads/${blog.image}`
                          : placeholder
                      }
                      alt={blog.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                      style={{ filter: 'brightness(0.95)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-transparent opacity-40" />
                  </div>

                  <div className="flex flex-col flex-grow p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 tracking-tight leading-tight group-hover:text-indigo-700 transition">
                      {blog.title}
                    </h2>

                    <time
                      dateTime={new Date(blog.date).toISOString()}
                      className="text-indigo-600 font-semibold text-sm mb-3"
                    >
                      {new Date(blog.date).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>

                    <p
                      className="text-gray-600 text-sm flex-grow line-clamp-4"
                      dangerouslySetInnerHTML={{
                        __html: blog.content.slice(0, 140) + (blog.content.length > 140 ? '...' : ''),
                      }}
                    />

                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full transition-transform transform hover:scale-110">
                        {categories.find(c => c._id === blog.category)?.name || 'Uncategorized'}
                      </span>
                      {blog.tags.map(tagId => {
                        const tagName = tagsOptions.find(t => t._id === tagId)?.name;
                        return tagName ? (
                          <span
                            key={tagId}
                            className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full cursor-default select-none transition-transform transform hover:scale-110"
                            aria-label={`Tag: ${tagName}`}
                          >
                            #{tagName}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Blog;
