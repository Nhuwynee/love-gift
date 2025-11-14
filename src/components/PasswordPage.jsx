import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedHearts from './AnimatedHearts';

const PasswordPage = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const correctPassword = '191124';

  const handleSubmit = () => {
    if (password === correctPassword) {
      onSuccess();
    } else {
      setError(true);
      setPassword('');
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-red-100 flex items-center justify-center p-4 relative overflow-hidden">
      <AnimatedHearts />
      
      {/* Bokeh background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: error ? [1, 1.1, 0.9, 1] : 1, rotate: error ? [0, -5, 5, 0] : 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl p-10 shadow-2xl max-w-md w-full relative z-20"
        style={{ border: '4px solid #ffb6c1' }}
      >
        <motion.div 
          className="text-center mb-8"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-8xl mb-4">🔐</div>
          <h1 className="text-3xl font-bold text-pink-600 mb-2">
            Nhập Mật Khẩu Nè! 💕
          </h1>
          <p className="text-pink-400">Anh nhớ ngày nào chứ? 😊</p>
        </motion.div>

        <input
          type="password"
          maxLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          className="w-full text-center text-2xl tracking-widest px-4 py-4 border-3 border-pink-300 rounded-2xl focus:outline-none focus:border-pink-500 transition-all mb-4"
          placeholder="••••••"
          style={{ letterSpacing: '0.5em' }}
        />

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-center mb-4 font-medium"
          >
            Anh ơi, sai rồi! 😤 Em giận đó! 💔
          </motion.p>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-pink-400 to-red-400 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
        >
          Xác Nhận 💖
        </motion.button>

        <p className="text-center text-sm text-pink-300 mt-4">
          Hint: DDMMYY 📅
        </p>
      </motion.div>
    </div>
  );
};

export default PasswordPage;