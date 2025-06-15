import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import logo from '../assets/Liquilogic.svg'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto flex flex-col  px-8 md:flex-row md:justify-between gap-8">
        
        {/* Left Section: Logo + Social + Contact */}
        <div className="flex-1 space-y-6">
          {/* Logo + Tagline */}
          <div>
            <img src={logo} className="w-[120px]" alt="Liquilogic Logo" />
            <p className="text-sm text-gray-400 mt-2">
              Future-ready Smart Trading Platform
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaYoutube className="w-6 h-6" /></a>
          </div>

          {/* Contact Info */}
          <div className="text-sm text-gray-400 space-y-2">
            <p><span className="font-semibold text-white">ADDRESS</span> 123 Financial District, Mumbai, India 400001</p>
            <p><span className="font-semibold text-white">PHONE</span> +91 22 1234 5678</p>
            <p><span className="font-semibold text-white">EMAIL</span> info@liquilogic.com</p>
          </div>
        </div>

        {/* Middle Section: Company Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
          </ul>
        </div>

        {/* Right Section: Services Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3">SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-400 hover:text-white">Proprietary Trading</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">HNI Broking (Institutional Trading)</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Individual Trading (Tech-enabled Advisory)</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
