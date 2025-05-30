import { useEffect, useState } from 'react';
import api from '../../api/axios'; // or wherever your axios instance file is
import toast from 'react-hot-toast';
import DeleteConfirmModal from "../../components/DeleteConfirmModal";

import { Link } from 'react-router-dom';

const AdminNewsList = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchNews = async () => {
    try {
      const res = await api.get('/news');
      console.log('API response data:', res.data);
      setNewsItems(res.data);
    } catch (err) {
      toast.error('Failed to fetch news');
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleDelete = async () => {
    try {
      await api.delete(`/news/${selectedId}`);
      toast.success('Deleted successfully');
      fetchNews();
      setShowModal(false);
    } catch {
      toast.error('Delete failed');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage News</h1>
      <Link to="/admin/news/create" className="bg-blue-600 text-white px-4 py-2 rounded mb-4 inline-block">
        + Create News Post
      </Link>
      <ul className="divide-y">
        {newsItems.map(news => (
          <li key={news._id} className="py-4 flex justify-between items-center">
            <div>
              <p className="font-semibold">{news.title}</p>
            </div>
            <div className="space-x-2">
              <Link to={`/admin/news/edit/${news._id}`} className="text-blue-600">Edit</Link>
              <button
                onClick={() => {
                  setSelectedId(news._id);
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

export default AdminNewsList;
