import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const TypingMessage = ({ isOpen, onClose }) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = `Chúc mừng Ngày Quốc tế Nam giới 19/11! 💙

Em yêu anh nhiều lắm! ❤️

Cảm ơn anh vì đã luôn ở bên em, bảo vệ em, yêu thương em. Anh là người đàn ông tuyệt vời nhất trong trái tim em.

Chúc anh luôn mạnh khỏe, thành công và hạnh phúc! 

Yêu anh 3000 😘💕`;

  useEffect(() => {
    if (isOpen) {
      setDisplayedText('');
      let index = 0;
      const timer = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 10 }}
        className="bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl"
        onClick={e => e.stopPropagation()}
        style={{
          border: '3px solid #ffb6c1',
          boxShadow: '0 20px 60px rgba(255, 105, 180, 0.3)'
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-pink-400 hover:text-pink-600 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-6">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            className="inline-block text-6xl mb-4"
          >
            💌
          </motion.div>
        </div>
        
        <div 
          className="text-gray-700 whitespace-pre-wrap leading-relaxed font-medium"
          style={{ minHeight: '300px' }}
        >
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TypingMessage;