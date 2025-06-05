import { useState, useEffect } from "react";
import { fetchAnnouncements } from "../api/announcements";
import { motion, AnimatePresence } from "framer-motion";
import { FiAlertCircle, FiLoader, FiCheckCircle, FiChevronDown, FiChevronUp } from "react-icons/fi";

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

const MAX_PREVIEW_LINES = 3;

const AnnouncementCard = ({ announcement }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      tabIndex={0}
      role="article"
      aria-label={`Announcement titled ${announcement.title}`}
      className="relative bg-gradient-to-br from-white to-cyan-50 border border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300 cursor-pointer transform hover:scale-[1.02] focus:scale-[1.02]"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      layout
      onClick={() => setExpanded((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setExpanded((prev) => !prev);
        }
      }}
      aria-expanded={expanded}
    >
      <h3 className="text-xl font-semibold text-cyan-900 mb-3 truncate">{announcement.title}</h3>

      <motion.div layout>
        <AnimatePresence initial={false}>
          {expanded ? (
            <motion.p
              key="content-full"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-700 leading-relaxed whitespace-pre-wrap"
            >
              {announcement.content}
            </motion.p>
          ) : (
            <motion.p
              key="content-truncated"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-700 leading-relaxed line-clamp-3 overflow-hidden relative"
              style={{ maxHeight: `${1.5 * MAX_PREVIEW_LINES}em`, position: "relative" }}
            >
              {announcement.content}

              {/* Gradient fade bottom */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-cyan-50"
                style={{ bottom: 0 }}
              />
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Read more / less button */}
      {announcement.content.split("\n").length > MAX_PREVIEW_LINES ||
      announcement.content.length > 150 ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded((prev) => !prev);
          }}
          aria-label={expanded ? "Read less" : "Read more"}
          className="mt-4 inline-flex items-center gap-1 text-cyan-700 font-semibold hover:text-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
        >
          {expanded ? "Read less" : "Read more"}
          {expanded ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      ) : null}

      <time
        dateTime={announcement.createdAt}
        className="block mt-5 text-sm text-cyan-600 font-mono tracking-wide select-none"
      >
        {formatDate(announcement.createdAt)}
      </time>
    </motion.article>
  );
};

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
      <div
        role="status"
        className="mt-8 flex items-center justify-center space-x-3 bg-white rounded-xl shadow border border-cyan-300 p-6 text-cyan-700"
      >
        <FiLoader className="animate-spin text-2xl" aria-hidden="true" />
        <span className="font-medium text-lg">Loading announcements...</span>
      </div>
    );

  if (error)
    return (
      <div
        role="alert"
        className="mt-8 flex items-center space-x-3 bg-red-50 border border-red-300 text-red-700 rounded-xl p-5"
      >
        <FiAlertCircle className="text-2xl" aria-hidden="true" />
        <span>{error}</span>
      </div>
    );

  return (
    <motion.section
      aria-labelledby="announcements-heading"
      className="mt-10 bg-white rounded-3xl shadow-lg border border-gray-100 p-8 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2
        id="announcements-heading"
        className="text-3xl font-extrabold text-cyan-800 mb-8 flex items-center gap-3 select-none"
      >
        <FiCheckCircle className="text-cyan-600" aria-hidden="true" />
        TechSlideITS Announcements
      </h2>

      {announcements.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">No announcements available.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {announcements.map((a) => (
            <AnnouncementCard key={a._id} announcement={a} />
          ))}
        </div>
      )}
    </motion.section>
  );
};

export default AdminAnnouncements;
