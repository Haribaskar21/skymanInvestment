import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axios';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    api.get(`/blogs/${id}`).then(res => setBlog(res.data));
  }, [id]);

  if (!blog) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={`http://localhost:5000/uploads/${blog.image}`}
        alt={blog.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-600 mb-4">{new Date(blog.date).toLocaleDateString()}</p>
      <div className="prose max-w-none">{blog.content}</div>
    </div>
  );
};

export default BlogDetail;
