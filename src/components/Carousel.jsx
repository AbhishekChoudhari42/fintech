import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Placeholder images (replace with your actual image imports)
import image1 from '../assets/hero1.webp';
import image2 from '../assets/hero2.webp';
import image3 from '../assets/hero3.webp';

const slides = [
  {
    image: image1,
    title: "Inclusive",
    subtitle: "Begin by filling out the brief form, giving the details we need to start crafting the project."
  },
  {
    image: image2,
    title: "Creative",
    subtitle: "We bring unique perspectives to your vision, transforming ideas into impactful solutions."
  },
  {
    image: image3,
    title: "Reliable",
    subtitle: "You can count on us to deliver quality results on time, every time."
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 === slides.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    initial: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    })
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden ">
      <div className="relative h-96">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute w-full h-full"
          >
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-3xl font-bold mb-2">{slides[currentIndex].title}</h2>
              <p className="text-lg">{slides[currentIndex].subtitle}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition"
      >
        <FaArrowLeft className="text-gray-800" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/80 p-3 rounded-full hover:bg-black transition"
      >
        <FaArrowRight className="text-white" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;