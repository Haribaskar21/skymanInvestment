import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api/axios';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const NewsForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    link: '',
  });

  useEffect(() => {
    if (id) {
      api.get(`/news/${id}`)
        .then(res => {
          setFormData({ 
            title: res.data.title || '', 
            link: res.data.link || '' 
          });
        })
        .catch(() => toast.error('Failed to load news item'));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await api.put(`/news/${id}`, formData);
        toast.success('News updated!');
      } else {
        await api.post('/news', formData);
        toast.success('News created!');
      }
      navigate('/admin/news');
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Error saving news');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-white shadow-xl rounded-2xl max-w-2xl mx-auto mt-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        {id ? 'Edit News Post' : 'Create News Post'}
      </h2>

      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="url"
        name="link"
        value={formData.link}
        onChange={handleChange}
        placeholder="https://example.com"
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <motion.button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {id ? 'Update News' : 'Create News'}
      </motion.button>
    </motion.form>
  );
};

export default NewsForm;
