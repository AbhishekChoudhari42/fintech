import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import logo from '../assets/Liquilogic.svg'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Logo and Tagline */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                {/* Placeholder for Logo */}
                <div className="text-2xl font-bold">
                  <img src={logo} className='w-[120px]' alt="" />
                </div>
              </div>
              <p className="text-sm text-gray-400">Future-ready Smart Trading Platform</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>

            {/* Contact Information */}
            <div className="mb-6">
              <p className="text-sm">
                <span className="font-semibold">ADDRESS</span> 123 Financial District, Mumbai, India 400001
              </p>
              <p className="text-sm mt-2">
                <span className="font-semibold">PHONE</span> +91 22 1234 5678
              </p>
              <p className="text-sm mt-2">
                <span className="font-semibold">EMAIL</span> info@liquilogic.com
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-lg font-semibold mb-2">COMPANY</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">SERVICES</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Proprietary Trading</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">HNI Broking (Institutional Trading)</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Individual Trading (Tech-enabled Advisory)</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
  )
}

export default Footer