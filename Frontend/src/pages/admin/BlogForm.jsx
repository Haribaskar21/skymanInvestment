// src/pages/admin/BlogForm.jsx
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import api from '../../api/axios';
import toast from 'react-hot-toast';
import TiptapEditor from '../../components/TiptapEditor';



const BlogForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    tags: [],
    image: '',
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const [categories, setCategories] = useState([]);
  const [tagsOptions, setTagsOptions] = useState([]);

  useEffect(() => {
    const fetchCategories = api.get('/meta/categories');
    const fetchTags = api.get('/meta/tags');

    Promise.all([fetchCategories, fetchTags])
      .then(([catRes, tagRes]) => {
        setCategories(catRes.data);
        setTagsOptions(tagRes.data);
      })
      .catch(() => toast.error('Failed to load categories or tags'));
  }, []);

  useEffect(() => {
    if (id) {
      api.get(`/blogs/${id}`)
        .then(res => {
         const data = res.data;

        // Fix: Fallback to <p></p> if content is empty
        setFormData({
          ...data,
          content: data.content?.trim() || '<p></p>',
        });

        if (data.imageUrl) setImagePreview(data.imageUrl);
      })
      .catch(() => toast.error('Failed to load Blogs item'));
  }
}, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTagsChange = (e) => {
    const options = e.target.options;
    const selectedTags = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) selectedTags.push(options[i].value);
    }
    setFormData(prev => ({ ...prev, tags: selectedTags }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageFilename = formData.image || '';

      if (image) {
        const formDataImage = new FormData();
formDataImage.append('image', image);

const uploadRes = await api.post('/upload', formDataImage, {
  headers: { 'Content-Type': 'multipart/form-data' },
});

imageFilename = uploadRes.data.imageUrl;
      }

      const payload = {
        ...formData,
        image: imageFilename,
        content: formData.content?.trim() || '<p></p>',
      };

      delete payload.imageUrl;

      if (id) {
        await api.put(`/blogs/${id}`, payload);
        toast.success('blogs updated!');
      } else {
        await api.post('/blogs', payload);
        toast.success('blogs created!');
      }

      navigate('/admin/blogs');
    } catch (error) {

      console.error('Submission error:', error);
console.error('Error response:', error.response);

      toast.error('Error saving blogs');
    }
  };


  return (
    <motion.form 
      onSubmit={handleSubmit} 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      className="space-y-6 p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200"
    >
      <h2 className="text-2xl font-bold text-center">{id ? 'Edit Blog Post' : 'Create New Blog Post'}</h2>

      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Blog Title"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

<TiptapEditor
  content={formData.content}
  onChange={(val) => setFormData(prev => ({ ...prev, content: val }))}
/>



      <div>
        <label className="block mb-1 font-medium">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="" disabled>Select category</option>
          {categories.map(cat => (
            <option key={cat._id} value={cat._id}>{cat.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Tags</label>
        <select
          multiple
          name="tags"
          value={formData.tags}
          onChange={handleTagsChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          size={tagsOptions.length > 5 ? 5 : tagsOptions.length}
        >
          {tagsOptions.map(tag => (
            <option key={tag._id} value={tag._id}>{tag.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Featured Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="mt-3 max-h-48 w-full object-contain border rounded"
          />
        )}
      </div>

      <motion.button 
        whileHover={{ scale: 1.02 }} 
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
      >
        {id ? 'Update Blog' : 'Create Blog'}
      </motion.button>
    </motion.form>
  );
};

export default BlogForm;
