import React from 'react';
import { FaChartBar, FaGift, FaUsers, FaShieldAlt } from 'react-icons/fa';
import lock from '../assets/icons/Lock.png'
import hammer from '../assets/icons/Hammer.png'
import trophy from '../assets/icons/Trophy.png'
import flower from '../assets/icons/Flower.png'
const BuildAndEarn = () => {
  const cards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
      icon: <div className='bg-blue-500 p-2 rounded-md'><img src={lock} className='w-[20px]'/></div> ,
      title: "Privacy & Security First",
      description: "We never access raw source code or sensitive parameters. Our systems allow you to deploy confidently, without compromising your intellectual property. Under our legal framework, your code remains your property—unseen and uncompromised."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=250&fit=crop&crop=center",
      icon: <div className='bg-blue-500 p-2 rounded-md'><img src={lock} className='w-[20px]'/></div> ,
      title: "Zero Capital Risk, Profit Sharing",
      description: "You get to run your algorithm on our capital—meaning you invest nothing upfront. If your strategy delivers returns, you receive a share of the profits. It's a win-win model designed to maximize mutual success."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=250&fit=crop&crop=center",
      icon: <div className='bg-blue-500 p-2 rounded-md'><img src={lock} className='w-[20px]'/></div> ,
      title: "Technical & Ethical Commitments",
      description: "Our strict internal protocols and access controls guarantee that no one in the LiquiLogic team can tamper with, reverse-engineer, or replicate your deployed algorithms. Trust and transparency are foundational to our approach."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=250&fit=crop&crop=center",
      icon: <div className='bg-blue-500 p-2 rounded-md'><img src={lock} className='w-[20px]'/></div> ,
      title: "Clear Legal Guardrails",
      description: "Our agreements are clear, transparent, and built to protect the interests of both you and LiquiLogic — ensuring trust, fairness, and long-term partnership."
    }
  ];

  return (
    <div className="py-2 bg-white">

      {/* Cards Section */}
      <div className="relative">
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="bg-gray-50 border-[1px] border-gray-200 rounded-xl duration-300 overflow-hidden">
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {card.icon}
                  <h3 className="text-lg font-bold text-gray-900 ml-3">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scrollable */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 -mx-4 px-4">
            {cards.map((card) => (
              <div key={card.id} className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    {card.icon}
                    <h3 className="text-lg font-bold text-gray-900 ml-3">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {cards.map((_, index) => (
              <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default BuildAndEarn;