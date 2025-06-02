import { useState, useEffect } from "react";
import { fetchAnnouncements } from "../api/announcements";
import { motion } from "framer-motion";

const AdminAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAnnouncements()
      .then((data) => {
        setAnnouncements(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading announcements:", err);
        setError("Failed to load announcements.");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="mt-8 p-4 bg-white rounded-xl shadow border text-center">
        <p className="text-cyan-600 animate-pulse">Loading announcements...</p>
      </div>
    );

  if (error)
    return (
      <div className="mt-8 p-4 bg-red-100 text-red-600 border border-red-200 rounded-xl">
        {error}
      </div>
    );

  return (
    <motion.section
      className="mt-10 bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold text-cyan-700 mb-6">📢 Company Announcements</h2>

      {announcements.length === 0 ? (
        <p className="text-gray-500">No announcements available.</p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          {announcements.map((a, index) => (
            <motion.div
              key={a._id}
              className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-xl p-5 shadow-sm hover:shadow-lg transition"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-gray-800">{a.title}</h3>
              <p className="text-gray-600 mt-2">{a.content}</p>
              <p className="text-xs text-gray-400 mt-4">
                {new Date(a.createdAt).toLocaleString()}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
};

export default AdminAnnouncements;
