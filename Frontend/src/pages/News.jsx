import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import api from '../api/axios';

const placeholder = 'https://via.placeholder.com/400x300?text=No+Image';


const News = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tagsOptions, setTagsOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out' });
    fetchMeta();
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
      const res = await api.get('/news');
      let filtered = res.data;

      if (selectedCategory && selectedTag) {
        filtered = filtered.filter(
          (news) =>
            news.category === selectedCategory &&
            news.tags?.includes(selectedTag)
        );
      } else if (selectedCategory) {
        filtered = filtered.filter((news) => news.category === selectedCategory);
      } else if (selectedTag) {
        filtered = filtered.filter((news) => news.tags?.includes(selectedTag));
      }

      setNews(filtered);
    } catch (err) {
      console.error('Failed to fetch news:', err);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Latest News</h1>

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

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((news, index) => (
          <Link to={`/news/${news._id}`} key={news._id}>
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
                  news.image?.startsWith('http')
                    ? news.image
                    : news.image
                    ? `http://localhost:5000/uploads/${news.image}`
                    : placeholder
                }
                alt={news.title}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                {news.title}
              </h2>
              <p className="text-sm text-gray-500 mb-1">
                {new Date(news.date).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600 line-clamp-3">
                {news.content.slice(0, 100)}...
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default News;
