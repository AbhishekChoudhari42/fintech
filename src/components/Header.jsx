import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Liquilogic.svg'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <header className="fixed w-full h-[94px] top-0 left-[50%] translate-x-[-51%] z-50 flex justify-between items-center">
      <nav className="w-full px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between w-full items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              width="40"
              height="40"
              className="w-[180px]"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-blue-300 px-3 py-2 text-[14px] font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
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
              className="md:hidden absolute right-4 w-48 bg-white rounded-lg shadow-lg overflow-hidden"
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