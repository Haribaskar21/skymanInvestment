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
    <div className="relative bg-[#f9fafb] overflow-hidden py-4 px-6 sm:px-12 border-y border-gray-200 shadow-sm select-none">
      {/* Side gradient fades */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-16 sm:w-24 bg-gradient-to-r from-[#f9fafb] via-[#f9fafb] to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-16 sm:w-24 bg-gradient-to-l from-[#f9fafb] via-[#f9fafb] to-transparent z-10" />

      <div
        className="inline-block whitespace-nowrap animate-marquee text-gray-800 font-medium tracking-wide text-sm sm:text-base"
        style={{ paddingLeft: '100%' }}
        aria-label="Latest news headlines marquee"
      >
        {headlines.map((news) => (
          <a
            key={news._id}
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-6 sm:mx-10 text-[#1d8cf8] hover:text-blue-700 transition-colors duration-300"
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
          animation: marquee 25s linear infinite;
          will-change: transform;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default NewsTicker;
