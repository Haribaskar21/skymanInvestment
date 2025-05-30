import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axios';

const API_URL = 'http://localhost:5000';
const placeholder = 'https://via.placeholder.com/400x300?text=No+Image';



const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    api.get(`/news/${id}`).then(res => setNews(res.data));
  }, [id]);

  if (!news) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={news.image.startsWith('http') ? news.image : `http://localhost:5000/uploads/${news.image}`}
        alt={news.title}
        className="w-full h-64 object-contain rounded mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
      <p className="text-sm text-gray-600 mb-4">{new Date(news.date).toLocaleDateString()}</p>
      <div className="prose max-w-none">{news.content}</div>
    </div>
  );
};

export default NewsDetail;
