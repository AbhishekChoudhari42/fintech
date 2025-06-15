import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome } from "react-icons/fa";
import image1 from '../assets/hero1.webp';
import image2 from '../assets/hero2.webp';
import image3 from '../assets/hero3.webp';


const data = [
  {
    title: "Title 1",
    content:
      "We are a tech-native financial firm that believes in creating transformative wealth that uplifts communities, empowers people, and leaves a legacy. Founded by leaders from Amazon, Microsoft, HSBC, and IBM. At LiquiLogic, we see money as a natural by-product—like molasses from sugarcane. When the systems, people, and intent are right, wealth naturally follows.",
    image: image1,
  },
  {
    title: "Title 2",
    content:
      "Title 2 description goes here. Replace with real content. Shown only when selected.",
    image: image2,
  },
  {
    title: "Title 3",
    content:
      "This is Title 3 content. You can add real text or components as needed.",
    image: image3,
  },
];

export default function AccordionWithImage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-[300px] max-sm:h-fit w-full  mx-auto border-[1px] border-gray-100 my-4 max-sm:flex max-sm:flex-col-reverse">
      {/* Left: Accordion */}
      <div className="flex flex-col overflow-hidden">
        {data.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className="border-[1px] border-gray-100 overflow-hidden"
            >
              {/* Title (always fixed height) */}
              <button
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-3 px-4 h-[60px] w-full font-semibold text-left text-gray-600 ${index == activeIndex ? 'bg-white':''}`}
              >
                <FaHome className="text-blue-500" />
                {item.title}
              </button>

              {/* Subtext (animated, scrollable, fixed height) */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 140, opacity: 1 ,background:'white'}}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-4  text-sm text-gray-700 overflow-hidden"
                  >
                    <div className={`overflow-auto max-sm:text-xs text-sm pr-1 text-justify ${index == activeIndex ? 'bg-white':''}`}>
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Right: Image */}
      <div className="h-full overflow-hidden border-[1px] border-gray-100 p-2">
        <motion.img
          key={data[activeIndex].image}
          src={data[activeIndex].image}
          alt={data[activeIndex].title}
          initial={{ opacity: 0.5, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover rounded-lg shadow"
        />
      </div>
    </div>
  );
}
