import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image2 from '../assets/hero2.webp';
import image1 from '../assets/hero1.png';
import image3 from '../assets/hero3.webp';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: image1,
      heroText: <p>Wealth Creation <br/> Becomes a Passion</p>,
      subText: 'We combine customer obsession with rigorous research blending deep research and innovation to build wealth with precision and purpose.',
    },
    {
      image: image2,
      heroText: <p>Giving back is a <br/> norm.</p>,
      subText: 'We’re building a more inclusive financial future. A future with greater access, awareness, and participation because capital should compound for all.',
    },
    {
      image: image3,
      heroText: <p>Where Talent Meets <br/> Technology</p>,
      subText: 'A next-generation proprietary trading and investment advisory firm. We are driven by quant research and deep-technology and bound by integrity and humility.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const textVariants = {
    enter: { opacity: 0, y: 10 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const subTextVariants = {
    enter: { opacity: 0, y: 15 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <section className="relative w-full h-screen max-h-[800px] flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={currentSlide}
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          className="absolute w-screen h-screen object-cover"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5,ease:'easeInOut' }}
          />
      </AnimatePresence>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text and Button Container */}
      <div className="relative z-10 flex flex-col items-start w-[90%]  justify-center mx-auto px-4  sm:px-6 lg:px-8 text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="mb-12  w-full lg:h-[220px] "
            >
            <h1 className="text-6xl max-sm:text-4xl max-md:text-5xl font-semibold text-white mb-6">
              {slides[currentSlide].heroText}
            </h1>
            <motion.p 
            transition={{ duration: 0.5,ease:'easeInOut',delay:0.2 }}
            variants={subTextVariants}
            initial="enter"
            animate="center"
            exit="exit"
            
            className="text-lg text-white max-w-[60%] max-sm:text-sm max-sm:max-w-[100%]">
              {slides[currentSlide].subText}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Static Button */}
        <a
          href="#services"
          className="flex justify-center items-center"
        >
         <p className='bg-blue-600 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-200'>Discover our services.</p> 
        </a>
      </div>
    </section>
  );
};

export default Hero;