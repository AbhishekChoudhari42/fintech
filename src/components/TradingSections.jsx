'use client'

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import image1 from '../assets/hero1.webp';
import image2 from '../assets/hero2.webp';
import image3 from '../assets/hero3.webp';
import tick from '../assets/icons/Tick.png'
import bank from '../assets/icons/Bank.png'
import goal from '../assets/icons/Goal.png'
import bulb from '../assets/icons/Bulb.png'
import database from '../assets/icons/Database.png'
import automated from '../assets/icons/Automated.png'

const sections = [
  {
    title: "Proprietary Trading",
    text: [
      "We combine cutting-edge algorithms with real-time market data and aim to consistently generate alpha and stay ahead of the curve.",
      "Every second matters. The edge is missing if your systems are slow or your models are rigid, that's why we invest heavily in research and in the underlying tech that allows our strategies to execute without friction.",
      "We deploy our own capital with conviction and discipline. Our strategies span equities, derivatives, forex, and crypto, and are powered by algorithms that are constantly learning, adapting, and responding.",
      "We use our own capital to run high-conviction trading strategies in -",
    ],
    tags: ["Stocks", "Derivatives", "Cryptocurrency", "Commodities", "Forex"],
    image: image1,
    imageLeft: true,
  },
  {
    title: "HNI Broking (Institutional Trading)",
    text: [
      "We partner with high-net-worth individuals (HNIs) and institutions to help them trade more intelligently using tailored trading strategies. We provide personalized service, access to premium tools and market intelligence.",
      "Our HNI partners come to us for precision and strategies that match their risk appetite and timing. We tailor each relationship. Our work is underpinned by mathematical research, custom strategy, and execution excellence.",
    ],
    bullets: [
      { img: bank, text: "Premium insights and tools." },
      { img: goal, text: "Tailored Strategies, Precision Results." },
      { img: bulb, text: "Insights Beyond the Market." }
    ],
    image: image2,
    imageLeft: false,
  },
  {
    title: "Individual Trading (Tech-enabled Advisory)",
    text: [
      "For individual investors, we offer professionally developed algorithmic trading systems designed by experts, accessible to all.",
    ],
    bullets: [
      { img: database, text: "Data-driven, emotion-free trading" },
      { img: automated, text: "Automated systems for better decisions" },
      { img: bulb, text: "Our business model blends institutional-grade intelligence with inclusive access." }
    ],
    paragraph:
      "For too long, retail investors have been excluded either by design, complexity, or sheer inaccessibility. We’re changing that. Our mission is to democratize access to institutional-quality tools. We offer professionally designed, algorithm-driven strategies that retail investors can use, without needing to sit in front of a screen all day. In our view, everyone should have a fair shot at the capital markets.",
    image: image3,
    imageLeft: true,
  },
];

export default function TradingSections() {
  return (
    <section className="bg-white space-y-16 w-full">
      {sections.map((section, idx) => (
        <div
          key={idx}
          className={`flex h-fit flex-col md:flex-row ${
            section.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
          } items-start gap-8 mx-auto`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[400px] min-h-full w-1/2 p-0 max-sm:w-full"
          >
            <img
              src={section.image}
              alt={section.title}
              className="h-full w-full rounded-xl object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-4"
          >
            <h3 className="text-2xl md:text-3xl font-semibold">
              {section.title}
            </h3>

            {section.text.map((t, i) => (
              <motion.p
                key={i}
                className="text-gray-600 text-sm md:text-base text-justify"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
              >
                {t}
              </motion.p>
            ))}

            {/* Tags */}
            {section.tags && (
              <motion.div
                className="flex flex-wrap gap-2 mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {section.tags.map((tag, i) => (
                  <div
                    key={i}
                    className="py-1 rounded-full text-sm font-medium flex items-center gap-2"
                  >
                    <img src={tick} className="w-4 mr-2" alt="" />
                    <p className="text-justify">{tag}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Bullet Points */}
            {section.bullets && (
              <motion.ul
                className="space-y-4 mt-4"
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.15, delayChildren: 0.6 }}
                viewport={{ once: true }}
              >
                {section.bullets.map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img src={point.img} className="w-5" alt="" />
                    <p className="text-gray-700 text-justify">{point.text}</p>
                  </motion.li>
                ))}
              </motion.ul>
            )}

            {/* Additional paragraph */}
            {section.paragraph && (
              <motion.p
                className="text-gray-600 text-sm md:text-base mt-2 text-justify"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {section.paragraph}
              </motion.p>
            )}
          </motion.div>
        </div>
      ))}
    </section>
  );
}
