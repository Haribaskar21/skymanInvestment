// src/pages/admin/BlogForm.jsx
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api/axios';
import toast from 'react-hot-toast';

const BlogForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Form state including imageUrl for existing image
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    tags: [],
    imageUrl: '',
  });

  // For file input and preview
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  // Category and tags options fetched from API
  const [categories, setCategories] = useState([]);
  const [tagsOptions, setTagsOptions] = useState([]);

  // Fetch categories & tags for selects
  useEffect(() => {
    const fetchCategories = api.get('/blogs-categories');
    const fetchTags = api.get('/blogs-tags');

    Promise.all([fetchCategories, fetchTags])
      .then(([catRes, tagRes]) => {
        setCategories(catRes.data);
        setTagsOptions(tagRes.data);
      })
      .catch(() => toast.error('Failed to load categories or tags'));
  }, []);

  // Fetch existing blog post if editing
  useEffect(() => {
    if (id) {
      api.get(`/blogs/${id}`)
        .then(res => {
          setFormData(res.data);
          if (res.data.imageUrl) setImagePreview(res.data.imageUrl);
        })
        .catch(() => toast.error('Failed to load blog'));
    }
  }, [id]);

  // Handle input changes (text/select)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle tags multi-select change
  const handleTagsChange = (e) => {
    const options = e.target.options;
    const selectedTags = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) selectedTags.push(options[i].value);
    }
    setFormData(prev => ({ ...prev, tags: selectedTags }));
  };

  // Handle image file select + preview
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

  // Submit form handler with image upload
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = formData.imageUrl || '';
      let filename = '';

      if (image) {
        const formDataImage = new FormData();
        formDataImage.append('image', image);

        const uploadRes = await api.post('/upload', formDataImage, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
         filename = uploadRes.data.filename; // <-- get filename here
        } else if (formData.imageUrl) {
          // Extract filename from existing imageUrl if no new image selected
          const parts = formData.imageUrl.split('/');
          filename = parts[parts.length - 1];
        }

      const payload = { ...formData, image: filename };  // save filename in `image` field
      
      console.log('Sending news payload:', payload);
      if (id) {
        await api.put(`/blogs/${id}`, payload);
        toast.success('Blog updated!');
      } else {
        await api.post('/blogs', payload);
        toast.success('Blog created!');
      }

      navigate('/admin/blogs');
    } catch (error) {
      toast.error('Error saving blog');
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
          name="image"
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
        {id ? 'Update Blog' : 'Create Blog'}
      </button>
    </form>
  );
};

export default BlogForm;
