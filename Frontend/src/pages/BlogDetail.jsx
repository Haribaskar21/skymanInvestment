import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import api from '../api/axios';

const API_URL = 'http://localhost:5000';
const placeholder = 'https://via.placeholder.com/800x450?text=No+Image';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/blogs/${id}`)
      .then(res => setBlog(res.data))
      .catch(() => setBlog(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <svg
          className="animate-spin h-12 w-12 text-indigo-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-label="Loading spinner"
          role="img"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <p className="text-gray-600 text-lg mb-4">Sorry, the blog post could not be found.</p>
        <Link
          to="/blog"
          className="inline-flex items-center justify-center mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-2xl border border-indigo-100"
    >
      <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-10 shadow-lg bg-gradient-to-tr from-indigo-50 via-white to-indigo-50 border border-indigo-200">
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
          loading="lazy"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-900 opacity-30"
        />
      </div>

      <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
        {blog.title}
      </h1>

      <div className="flex items-center space-x-3 text-indigo-600 mb-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z"
          />
        </svg>
        <time
          dateTime={new Date(blog.date).toISOString()}
          className="text-lg font-medium"
        >
          {new Date(blog.date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </div>

      <div className="prose prose-indigo max-w-none leading-relaxed text-gray-700 prose-headings:font-semibold prose-headings:text-gray-900 prose-p:mb-6 prose-a:text-indigo-600 prose-a:underline hover:prose-a:no-underline transition">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>

      <Link
        to="/blog"
        className="inline-flex items-center mt-16 text-indigo-700 hover:text-indigo-900 font-semibold text-lg transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </Link>
    </motion.article>
  );
};

export default BlogDetail;
