import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // THAY ĐỔI ĐƯỜNG DẪN ẢNH Ở ĐÂY
  const images = [
    { src: "/love1.jpg", label: "Kỷ niệm 1" },
    { src: "/love2.jpg", label: "Kỷ niệm 2" },
    { src: "/love3.jpg", label: "Kỷ niệm 3" },
    { src: "/love4.jpg", label: "Kỷ niệm 4" },
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative h-96 bg-gradient-to-br from-pink-100 via-white to-red-100 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
        <div className="absolute inset-0 border-8 border-white/40 rounded-3xl pointer-events-none z-10" />
        
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].label}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.15, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.95, rotate: -5 }}
            transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
          />
        </AnimatePresence>

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 transition-all shadow-lg"
        >
          <ChevronLeft className="text-pink-500" size={24} />
        </button>
        
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 transition-all shadow-lg"
        >
          <ChevronRight className="text-pink-500" size={24} />
        </button>
      </div>
      
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentIndex 
                ? 'bg-pink-500 w-8' 
                : 'bg-pink-200 hover:bg-pink-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
