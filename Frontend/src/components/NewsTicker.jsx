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
      className="relative overflow-hidden select-none border-y border-[#26BF64] shadow-[0_0_30px_8px_rgba(38,191,100,0.4)]"
      style={{
        backgroundColor: '#0a1f3d',
        padding: '1.5rem 0',
      }}
    >
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 h-full w-24 sm:w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #0a1f3d, transparent)' }} />
      <div className="absolute top-0 right-0 h-full w-24 sm:w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #0a1f3d, transparent)' }} />

      {/* Ticker content */}
      <div
        className="inline-block whitespace-nowrap animate-marquee relative z-20"
        style={{ paddingLeft: '100%' }}
      >
        {headlines.map((news, idx) => (
          <a
            key={news._id}
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            className="mx-8 sm:mx-12 inline-block font-bold text-2xl sm:text-3xl tracking-widest uppercase text-[#26BF64] neon-glow transition-transform duration-300 hover:scale-110 hover:text-white focus:outline-none focus:ring-4 focus:ring-[#26BF64] rounded-lg"
            style={{
              animationDelay: `${idx * 2}s`,
            }}
          >
            {news.title}
            {idx < headlines.length - 1 && (
              <span
                aria-hidden="true"
                className="inline-block mx-6 w-3 h-3 rounded-full bg-[#26BF64] animate-pulse glow-dot"
              />
            )}
          </a>
        ))}
      </div>

      {/* Custom CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
          will-change: transform;
        }

        .animate-marquee:hover,
        .animate-marquee:focus-within {
          animation-play-state: paused;
        }

        .neon-glow {
          text-shadow:
            0 0 5px #26BF64,
            0 0 10px #26BF64,
            0 0 15px #26BF64,
            0 0 20px #1C3C6D;
        }

        .neon-glow:hover, .neon-glow:focus {
          text-shadow:
            0 0 10px #ffffff,
            0 0 20px #26BF64,
            0 0 30px #26BF64,
            0 0 40px #1C3C6D,
            0 0 50px #26BF64;
        }

        .glow-dot {
          box-shadow: 0 0 8px 4px rgba(38,191,100,0.7);
        }
      `}</style>
    </section>
  );
};

export default NewsTicker;
