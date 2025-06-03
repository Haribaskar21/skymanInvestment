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
    <section
      aria-label="Latest news headlines marquee"
      className="relative overflow-hidden select-none rounded-md border-t border-b border-[#26BF64]"
      style={{
        backgroundColor: '#0a1f3d', // super dark navy for max contrast
        boxShadow: '0 0 30px 8px rgba(38,191,100,0.9)',
        padding: '1.25rem 0', // ~20px vertical padding
      }}
    >
      {/* Left & right fade overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-full w-28 sm:w-40"
        style={{
          background: 'linear-gradient(to right, #0a1f3d, transparent)',
          zIndex: 20,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-full w-28 sm:w-40"
        style={{
          background: 'linear-gradient(to left, #0a1f3d, transparent)',
          zIndex: 20,
        }}
      />

      <div
        className="inline-block whitespace-nowrap animate-marquee relative z-30"
        style={{ paddingLeft: '100%' }}
      >
        {headlines.map((news, idx) => (
          <a
            key={news._id}
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            className={`mx-10 sm:mx-14 relative font-extrabold text-2xl sm:text-3xl tracking-wide
                        text-[#26BF64] transition-transform duration-300 ease-in-out
                        hover:scale-110 hover:text-white focus:outline-none focus:ring-4 focus:ring-[#26BF64] rounded-lg
                        flicker-neon`}
            style={{
              textShadow: `
                0 0 6px #26BF64,
                0 0 12px #1C3C6D,
                0 0 20px #26BF64,
                0 0 30px #26BF64,
                0 0 40px #26BF64
              `,
              animationDelay: `${idx * 1.7}s`,
            }}
          >
            {news.title}
            {idx < headlines.length - 1 && (
              <span
                aria-hidden="true"
                className="inline-block ml-10 w-3 h-3 rounded-full bg-[#26BF64] shadow-[0_0_12px_4px_rgba(38,191,100,0.85)]"
                style={{ verticalAlign: 'middle' }}
              />
            )}
          </a>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            opacity: 1;
            text-shadow:
              0 0 6px #26BF64,
              0 0 12px #1C3C6D,
              0 0 20px #26BF64,
              0 0 30px #26BF64,
              0 0 40px #26BF64;
          }
          20%, 22%, 24%, 55% {
            opacity: 0.85;
            text-shadow:
              0 0 4px #26BF64,
              0 0 8px #1C3C6D,
              0 0 15px #26BF64,
              0 0 20px #26BF64,
              0 0 30px #26BF64;
          }
        }
        .animate-marquee {
          animation: marquee 45s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: transform;
        }
        .animate-marquee:hover,
        .animate-marquee:focus-within {
          animation-play-state: paused;
        }
        .flicker-neon {
          animation: flicker 3.5s infinite;
        }
        .flicker-neon:hover, .flicker-neon:focus {
          animation-play-state: paused;
          color: #ffffff;
          text-shadow:
            0 0 10px #26BF64,
            0 0 20px #26BF64,
            0 0 30px #26BF64,
            0 0 40px #26BF64,
            0 0 50px #26BF64;
          transform: scale(1.15);
        }
      `}</style>
    </section>
  );
};

export default NewsTicker;
