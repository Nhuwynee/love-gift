import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const AnimatedHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
        size: 15 + Math.random() * 20
      };
      setHearts(prev => [...prev, newHeart]);
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, 4000);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          initial={{ y: '100vh', opacity: 1, scale: 0 }}
          animate={{ 
            y: '-20vh', 
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0.8],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 4, delay: heart.delay }}
          style={{ 
            position: 'absolute',
            left: `${heart.left}%`,
            bottom: 0
          }}
        >
          <Heart 
            fill="#ff69b4" 
            color="#ff1493" 
            size={heart.size}
            style={{ filter: 'drop-shadow(0 2px 4px rgba(255,105,180,0.3))' }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedHearts;