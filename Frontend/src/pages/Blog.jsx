import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../api/axios';
import { BookOpenIcon, TagIcon } from '@heroicons/react/24/outline';

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

export default function Blog() {
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
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#26BF64] to-[#1C3C6D] py-20 px-4 text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-5xl font-extrabold mb-4">Our Latest Blog Insights</h1>
          <p className="text-lg text-white/80">Explore fresh perspectives, financial tips, and expert opinions</p>
        </div>
        <div className="absolute text-[150px] font-extrabold opacity-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          BLOG
        </div>
      </section>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 mt-16 mb-10 flex flex-col md:flex-row gap-6 items-center justify-center">
        <div className="w-full md:w-1/2 relative">
          <BookOpenIcon className="w-5 h-5 absolute left-3 top-3 text-gray-500" />
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-[#1C3C6D]"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-1/2 relative">
          <TagIcon className="w-5 h-5 absolute left-3 top-3 text-gray-500" />
          <select
            value={selectedTag}
            onChange={e => setSelectedTag(e.target.value)}
            className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-[#26BF64]"
          >
            <option value="">All Tags</option>
            {tagsOptions.map(tag => (
              <option key={tag._id} value={tag._id}>
                {tag.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        {loading ? (
          <p className="text-center text-gray-500 text-lg mt-20">Loading posts...</p>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-20">No blog posts found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog._id}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fadeUp}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border hover:border-[#26BF64] transition-all group"
                >
                  <Link to={`/blog/${blog._id}`} className="flex flex-col h-full">
                    <div className="overflow-hidden relative h-56">
                      <img
                        src={
                          blog.image?.startsWith('http')
                            ? blog.image
                            : blog.image
                            ? `http://localhost:5000/uploads/${blog.image}`
                            : placeholder
                        }
                        alt={blog.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h2 className="text-xl font-semibold text-gray-800 group-hover:text-[#1C3C6D] transition mb-2 line-clamp-2">
                        {blog.title}
                      </h2>
                      <p
                        className="text-sm text-gray-600 flex-grow line-clamp-4"
                        dangerouslySetInnerHTML={{
                          __html:
                            blog.content.slice(0, 140) + (blog.content.length > 140 ? '...' : ''),
                        }}
                      />
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="bg-[#26BF64] text-white text-xs px-3 py-1 rounded-full">
                          {categories.find(c => c._id === blog.category)?.name || 'Uncategorized'}
                        </span>
                        {blog.tags.map(tagId => {
                          const tagName = tagsOptions.find(t => t._id === tagId)?.name;
                          return tagName ? (
                            <span
                              key={tagId}
                              className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                            >
                              #{tagName}
                            </span>
                          ) : null;
                        })}
                      </div>
                      <time
                        className="mt-3 text-xs text-gray-400"
                        dateTime={new Date(blog.date).toISOString()}
                      >
                        {new Date(blog.date).toLocaleDateString(undefined, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
