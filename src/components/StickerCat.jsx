import React from 'react';
import { motion } from 'framer-motion';

const StickerCat = ({ type, position }) => {
  const catEmojis = {
    white: '🐱',
    gray: '😺',
    heart: '😻',
    gift: '🎁'
  };

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ 
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3
      }}
      className="absolute text-5xl"
      style={position}
    >
      {catEmojis[type]}
    </motion.div>
  );
};

export default StickerCat;