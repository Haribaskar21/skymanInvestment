import { useEffect, useState } from 'react';
import api from '../api/axios';

const NewsTicker = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    api.get('/news?limit=10&sort=desc')
      .then(res => setHeadlines(res.data))
      .catch(() => console.error('Failed to fetch news headlines'));
  }, []);

  return (
    <div className="relative bg-white shadow-lg text-gray-700 overflow-hidden py-3 px-6 border border-gray-200 select-none">
      {/* Gradient edge overlays */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white via-white to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white via-white to-transparent z-10" />

      <div
        className="inline-block whitespace-nowrap animate-marquee text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold text-lg"
        style={{ paddingLeft: '100%' }}
        aria-label="Latest news headlines marquee"
      >
        {headlines.map((news) => (
          <a
            key={news._id}
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-8 hover:underline hover:text-blue-600 transition-all duration-300 cursor-pointer"
          >
            {news.title}
          </a>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .animate-marquee {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default NewsTicker;
