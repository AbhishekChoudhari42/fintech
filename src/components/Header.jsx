import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Liquilogic.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      setIsScrollingUp(currentY < lastScrollY || currentY < 10); // visible when scrolling up or near top
      setScrollY(currentY);

      lastScrollY = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Who We Are', href: '#who_we_are' },
    { name: 'What We Do', href: '#what_we_do' },
    { name: 'Build & Earn', href: '#build_and_earn' },
    { name: 'Core Values', href: '#core_values' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
  };

  return (
    <header
      className={`
        fixed top-0 left-1/2 z-50 w-full max-w-[1440px] translate-x-[-50%] transition-all duration-300
        ${scrollY > 0 ? 'bg-white shadow-md' : 'bg-transparent'}
        ${isScrollingUp ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
      `}
    >
      <nav className="w-full px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[94px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              width="40"
              height="40"
              className="w-[180px] max-sm:w-[140px] mt-2"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                <p className="text-blue-500">{link.name}</p>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-blue-500 hover:text-blue-600 focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden absolute right-4 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="px-2 py-2 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
