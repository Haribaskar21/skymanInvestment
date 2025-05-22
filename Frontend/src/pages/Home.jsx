import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1695326464742-e2b49e68a8c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGludmVzdG1lbnR8ZW58MHx8MHx8fDI%3D)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Welcome to Skyman Investments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="text-lg text-gray-300"
        >
          Discover services built to elevate your business with cutting-edge financial solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
          className="mt-6"
        >
          <a
            href="/services"
            className="inline-block bg-cyan-500 text-white font-medium px-6 py-3 rounded-full hover:bg-cyan-600 transition"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
