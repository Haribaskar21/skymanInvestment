import { useEffect, useState } from 'react';
import api from '../../api/axios'; // or wherever your axios instance file is
import toast from 'react-hot-toast';
import DeleteConfirmModal from "../../components/DeleteConfirmModal";

import { Link } from 'react-router-dom';

const AdminBlogList = () => {
  const [blogItems, setBlogItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchBlog = async () => {
    try {
      const res = await api.get('/blogs');
      console.log('API response data:', res.data);
      setBlogItems(res.data);
    } catch (err) {
      toast.error('Failed to fetch Blogs');
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  const handleDelete = async () => {
    try {
      await api.delete(`/blogs/${selectedId}`);
      toast.success('Deleted successfully');
      fetchBlog();
      setShowModal(false);
    } catch {
      toast.error('Delete failed');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Blogs</h1>
      <Link to="/admin/blogs/create" className="bg-blue-600 text-white px-4 py-2 rounded mb-4 inline-block">
        + Create Blogs Post
      </Link>
      <ul className="divide-y">
        {blogItems.map(blog => (
          <li key={blog._id} className="py-4 flex justify-between items-center">
            <div>
              <p className="font-semibold">{blog.title}</p>
            </div>
            <div className="space-x-2">
              <Link to={`/admin/blogs/edit/${blog._id}`} className="text-blue-600">Edit</Link>
              <button
                onClick={() => {
                  setSelectedId(blog._id);
                  setShowModal(true);
                }}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <DeleteConfirmModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default AdminBlogList;
