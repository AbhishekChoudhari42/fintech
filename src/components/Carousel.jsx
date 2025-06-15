import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import culture1 from '../assets/culture1.png'
import culture2 from '../assets/culture2.png'
import culture3 from '../assets/culture3.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
const slides = [
  {
    image: culture1,
    title: "Inclusive",
    subtitle: "Begin by filling out the brief form, giving the details we need to start crafting the project."
  },
  {
    image: culture2,
    title: "Creative",
    subtitle: "We bring unique perspectives to your vision, transforming ideas into impactful solutions."
  },
  {
    image: culture3,
    title: "Reliable",
    subtitle: "You can count on us to deliver quality results on time, every time."
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at first real slide
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);

  // Extended slides for infinite loop
  const extendedSlides = [
    slides[slides.length - 1],
    ...slides,
    slides[0],
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentSlide === 0) {
      setCurrentSlide(slides.length);
      carouselRef.current.style.transition = 'none';
      carouselRef.current.style.transform = `translateX(-${slides.length * 100}%)`;
      setTimeout(() => {
        carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
      }, 0);
    } else if (currentSlide === extendedSlides.length - 1) {
      setCurrentSlide(1);
      carouselRef.current.style.transition = 'none';
      carouselRef.current.style.transform = `translateX(-100%)`;
      setTimeout(() => {
        carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
      }, 0);
    }
  };

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const goToPrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index + 1);
    }
  };

  return (
    <div className="relative w-full h-[500px] max-sm:h-[400px] overflow-hidden rounded-md">
      {/* Slides */}
      <div
        ref={carouselRef}
        className="flex"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="min-w-full h-[500px] max-sm:h-[400px] relative rounded-md overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white">
              <div className="absolute bottom-0 left-0 max-sm:translate-y-[-50%] px-2 md:p-8 ">
                <h2 className="md:text-6xl max-sm:text-2xl font-bold">{slide.title}</h2>
                <p className="md:text-lg max-sm:text-md max-w-md text-left">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 bg-opacity-50 text-white p-2 rounded-md hover:bg-opacity-75"
      >
        <MdKeyboardArrowLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-md  hover:bg-opacity-75"
      >
        <MdKeyboardArrowRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index + 1 ||
              (currentSlide === 0 && index === slides.length - 1) ||
              (currentSlide === extendedSlides.length - 1 && index === 0)
              ? 'bg-white'
              : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
