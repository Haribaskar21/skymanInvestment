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

  // Fetch meta (categories, tags)
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

  // Fetch and filter blogs
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await api.get('/blogs');
        let filtered = res.data;
        if (selectedCategory)
          filtered = filtered.filter(blog => blog.category === selectedCategory);
        if (selectedTag)
          filtered = filtered.filter(blog => blog.tags.includes(selectedTag));
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
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section
        className="bg-gradient-to-r from-[#26BF64] to-[#1C3C6D] py-20 px-4 text-white text-center relative overflow-hidden"
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-tr from-white via-white to-[#b8f7d2]">
            Our Latest Blog Insights
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Explore fresh perspectives, financial tips, and expert opinions
          </p>
        </div>
        <div className="absolute text-[140px] md:text-[200px] font-extrabold opacity-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
          BLOG
        </div>
      </section>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 mt-16 mb-12 flex flex-col md:flex-row gap-6 items-center justify-center">
        {/* Category Filter */}
        <div className="w-full md:w-1/2 relative">
          <BookOpenIcon className="w-5 h-5 absolute left-3 top-3 text-[#1C3C6D] opacity-70" />
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="
              pl-10 pr-4 py-3
              border border-gray-200
              rounded-xl w-full shadow-sm
              bg-gradient-to-tr from-[#e4f8ee] to-white
              focus:ring-2 focus:ring-[#1C3C6D] focus:border-[#26BF64]
              text-gray-900 text-base font-medium
              transition
            "
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        {/* Tag Filter */}
        <div className="w-full md:w-1/2 relative">
          <TagIcon className="w-5 h-5 absolute left-3 top-3 text-[#26BF64] opacity-70" />
          <select
            value={selectedTag}
            onChange={e => setSelectedTag(e.target.value)}
            className="
              pl-10 pr-4 py-3
              border border-gray-200
              rounded-xl w-full shadow-sm
              bg-gradient-to-tr from-[#f1f7fd] to-white
              focus:ring-2 focus:ring-[#26BF64] focus:border-[#1C3C6D]
              text-gray-900 text-base font-medium
              transition
            "
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
          <p className="text-center text-[#1C3C6D] text-lg mt-20 animate-pulse">
            Loading posts...
          </p>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-20">
            No blog posts found.
          </p>
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
                  className="
                    bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-transparent
                    hover:border-[#1C3C6D] focus-within:border-[#26BF64]
                    transition-all group
                  "
                >
                  <Link to={`/blog/${blog._id}`} className="flex flex-col h-full group">
                    <div className="overflow-hidden relative h-56 bg-[#f2f8fa]">
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
                        loading="lazy"
                      />
                      {/* Overlay accent on hover */}
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#1C3C6D]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h2 className="text-xl font-semibold text-[#1C3C6D] group-hover:text-[#26BF64] transition mb-2 line-clamp-2">
                        {blog.title}
                      </h2>
                      <p
                        className="text-sm text-gray-600 flex-grow line-clamp-4"
                        dangerouslySetInnerHTML={{
                          __html:
                            blog.content.slice(0, 140) +
                            (blog.content.length > 140 ? '...' : ''),
                        }}
                      />
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="bg-[#1C3C6D] text-white text-xs px-3 py-1 rounded-full font-semibold">
                          {categories.find(c => c._id === blog.category)?.name || 'Uncategorized'}
                        </span>
                        {blog.tags.map(tagId => {
                          const tagName = tagsOptions.find(t => t._id === tagId)?.name;
                          return tagName ? (
                            <span
                              key={tagId}
                              className="bg-[#e0f6e7] text-[#26BF64] text-xs px-3 py-1 rounded-full font-semibold"
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
