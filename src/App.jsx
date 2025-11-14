import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PasswordPage from './components/PasswordPage';
import MainPage from './components/MainPage';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!authenticated ? (
        <motion.div
          key="password"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <PasswordPage onSuccess={() => setAuthenticated(true)} />
        </motion.div>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <MainPage />
        </motion.div>
      )}
    </AnimatePresence>
  );
}