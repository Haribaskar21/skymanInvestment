// src/pages/admin/NewsForm.jsx
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api/axios';
import toast from 'react-hot-toast';

const NewsForm = () => {
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
      api.get(`/news/${id}`)
        .then(res => {
          setFormData(res.data);
          if (res.data.imageUrl) setImagePreview(res.data.imageUrl);
        })
        .catch(() => toast.error('Failed to load news item'));
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

      imageFilename = uploadRes.data.filename;
    }

    const payload = {
      ...formData,
      image: imageFilename,
    };

    delete payload.imageUrl;

    if (id) {
      await api.put(`/news/${id}`, payload);
      toast.success('News updated!');
    } else {
      await api.post('/news', payload);
      toast.success('News created!');
    }

    navigate('/admin/news');
  } catch (error) {
    console.error('Submission error:', error);
    toast.error('Error saving news');
  }
};


  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 max-w-xl mx-auto">

      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="input w-full"
        required
      />

      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Content"
        className="textarea w-full"
        rows={6}
        required
      />

      {/* Category dropdown */}
      <label className="block">
        <span className="text-sm font-medium text-gray-700">Category</span>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="select w-full mt-1"
          required
        >
          <option value="" disabled>Select category</option>
          {categories.map(cat => (
            <option key={cat._id} value={cat._id}>{cat.name}</option>
          ))}
        </select>
      </label>

      {/* Tags multi-select */}
      <label className="block">
        <span className="text-sm font-medium text-gray-700">Tags</span>
        <select
          multiple
          name="tags"
          value={formData.tags}
          onChange={handleTagsChange}
          className="select w-full mt-1"
          size={tagsOptions.length > 5 ? 5 : tagsOptions.length}
        >
          {tagsOptions.map(tag => (
            <option key={tag._id} value={tag._id}>{tag.name}</option>
          ))}
        </select>
      </label>

      {/* Image upload */}
      <label className="block">
        <span className="text-sm font-medium text-gray-700">Featured Image</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 block w-full"
        />
      </label>

      {/* Image preview */}
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          className="mt-2 max-h-48 object-contain border rounded"
        />
      )}

      <button type="submit" className="btn btn-primary w-full">
        {id ? 'Update News' : 'Create News'}
      </button>
    </form>
  );
};

export default NewsForm;
