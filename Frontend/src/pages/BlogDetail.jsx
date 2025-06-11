import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import api from '../api/axios';

const API_URL = 'http://localhost:5000';
const placeholder = 'https://via.placeholder.com/1200x600?text=No+Image';

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/blogs/${id}`)
      .then(res => setBlog(res.data))
      .catch(() => setBlog(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin h-12 w-12 border-4 border-indigo-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-gray-600 mb-4">Oops! Blog post not found.</p>
        <Link to="/blog" className="inline-flex items-center px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 max-w-5xl mx-auto my-12"
    >
      {/* Hero Image + Title */}
      <div className="relative h-[320px] sm:h-[480px] overflow-hidden">
        <img
          src={
            blog.image?.startsWith('http')
              ? blog.image
              : blog.image
              ? `${API_URL}/uploads/${blog.image}`
              : placeholder
          }
          alt={blog.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <h1 className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white text-3xl sm:text-5xl font-extrabold leading-tight max-w-4xl drop-shadow-xl">
          {blog.title}
        </h1>
      </div>

      {/* Meta Info */}
      <div className="px-8 pt-8 text-sm text-gray-600 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b pb-6">
        <div className="flex items-center gap-2 text-indigo-600 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z" />
          </svg>
          {new Date(blog.date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>

        {/* Category + Tags */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Category */}
          <span className="inline-block bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 px-4 py-1.5 rounded-full font-semibold text-sm uppercase tracking-wide shadow-sm">
            {blog.categoryName && blog.categoryName !== 'Uncategorized' ? blog.categoryName : 'General'}
          </span>

          {/* Tags */}
          {blog.tags?.length > 0 && blog.tags.map(tag => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-700 border border-gray-300 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm hover:bg-gray-200 transition"
            >
              #{typeof tag === 'string' && tag.length < 20 ? tag : 'Tag'}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-10 max-w-none leading-relaxed space-y-4 text-gray-800 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-2">
  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
</div>


      {/* Back Button */}
      <div className="px-8 pb-10">
        <Link
          to="/blog"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition group"
        >
          <svg
            className="w-5 h-5 mr-2 transition-transform transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
      </div>
    </motion.div>
  );
}
