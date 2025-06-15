import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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
  const [currentSlide, setCurrentSlide] = useState(1); // Start at first real slide
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
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

  // Handle transition end for infinite loop
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    setDragOffset(0);
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
      carouselRef.current.style.transform = `translateX(-${100}%)`;
      setTimeout(() => {
        carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
      }, 0);
    }
  };

  // Drag start (mouse or touch)
  const handleDragStart = (clientX) => {
    setDragStartX(clientX);
    setIsTransitioning(false);
    carouselRef.current.style.transition = 'none';
  };

  // Drag move (mouse or touch)
  const handleDragMove = (clientX) => {
    if (dragStartX !== null) {
      const offset = ((clientX - dragStartX) / window.innerWidth) * 100;
      setDragOffset(offset);
    }
  };

  // Drag end (mouse or touch)
  const handleDragEnd = () => {
    if (dragStartX === null) return;
    setIsTransitioning(true);
    carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
    const threshold = 10; // Percentage of screen width to trigger slide change
    if (dragOffset < -threshold) {
      setCurrentSlide((prev) => prev + 1);
    } else if (dragOffset > threshold) {
      setCurrentSlide((prev) => prev - 1);
    }
    setDragStartX(null);
    setDragOffset(0);
  };

  // Mouse event handlers
  const onMouseDown = (e) => handleDragStart(e.clientX);
  const onMouseMove = (e) => handleDragMove(e.clientX);
  const onMouseUp = () => handleDragEnd();
  const onMouseLeave = () => handleDragEnd();

  // Touch event handlers
  const onTouchStart = (e) => handleDragStart(e.touches[0].clientX);
  const onTouchMove = (e) => handleDragMove(e.touches[0].clientX);
  const onTouchEnd = () => handleDragEnd();

  const goToNext = () => {
    if (!isTransitioning && dragStartX === null) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const goToPrev = () => {
    if (!isTransitioning && dragStartX === null) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && dragStartX === null) {
      setIsTransitioning(true);
      setCurrentSlide(index + 1);
    }
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slides */}
      <div
        ref={carouselRef}
        className="flex cursor-grab select-none gap-x-0.5"
        style={{
          transform: `translateX(calc(-${currentSlide * 100}% + ${dragOffset}%))`,
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="min-w-full h-[500px] relative rounded-md overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover pointer-events-none rounded-md"
            />
            <div className="absolute  inset-0 flex flex-col items-center justify-center bg-black/20 text-white ">
              <div className="absolute bottom-0 left-0 p-8">
                <h2 className="text-5xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg max-w-md text-left">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        <FaArrowLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        <FaArrowRight size={24} />
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