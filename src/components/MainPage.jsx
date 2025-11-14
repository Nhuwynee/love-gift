import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import AnimatedHearts from './AnimatedHearts';
import StickerCat from './StickerCat';
import TypingMessage from './TypingMessage';
import ImageCarousel from './ImageCarousel';

const MainPage = () => {
  const [letterOpen, setLetterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-red-100 relative overflow-hidden">
      <AnimatedHearts />
      
      {/* Bokeh background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Stickers */}
      <StickerCat type="white" position={{ top: '10%', left: '10%' }} />
      <StickerCat type="gray" position={{ top: '15%', right: '15%' }} />
      <StickerCat type="heart" position={{ bottom: '20%', left: '5%' }} />
      <StickerCat type="gift" position={{ bottom: '15%', right: '10%' }} />

      <div className="relative z-20 container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Happy Men's Day! 💙
          </motion.h1>
          <motion.p 
            className="text-2xl text-pink-600 font-medium"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            19 / 11 / 2024
          </motion.p>
        </motion.div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <ImageCarousel />
          </motion.div>

          {/* Letter button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setLetterOpen(true)}
              className="bg-white px-12 py-6 rounded-3xl shadow-2xl inline-flex items-center gap-4 border-4 border-pink-300 hover:border-pink-500 transition-all"
            >
              <Mail size={40} className="text-pink-500" />
              <span className="text-2xl font-bold text-pink-600">
                Mở Thư Tình 💌
              </span>
            </motion.button>
          </motion.div>

          {/* Decorative hearts */}
          <motion.div 
            className="flex justify-center gap-8 text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {['💖', '💝', '💗', '💓', '💕'].map((emoji, idx) => (
              <motion.span
                key={idx}
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: idx * 0.2
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      <TypingMessage isOpen={letterOpen} onClose={() => setLetterOpen(false)} />
    </div>
  );
};

export default MainPage;