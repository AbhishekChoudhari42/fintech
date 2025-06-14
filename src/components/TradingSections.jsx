import { FaCheckCircle } from "react-icons/fa";
import image1 from '../assets/hero1.png';
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
      "We use our own capital to run high-conviction trading strategies in:",
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
      {
        img:bank,
        text:"Premium insights and tools."
      },
      {
        img:goal,
        text:"Tailored Strategies, Precision Results."
      },
      {
        img:bulb,
        text:"Insights Beyond the Market."
      }
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
      {
        img:database,
        text:"Data-driven, emotion-free trading"
      },
      {
        img:automated,
        text:"Automated systems for better decisions"
      },
      {
        img:bulb,
        text:"Our business model blends institutional-grade intelligence with inclusive access."
      }
    ],
    paragraph:
      "For too long, retail investors have been excluded either by design, complexity, or sheer inaccessibility. We’re changing that. Our mission is to democratize access to institutional-quality tools. We offer professionally designed, algorithm-driven strategies that retail investors can use, without needing to sit in front of a screen all day. In our view, everyone should have a fair shot at the capital markets.",
    image: image3,
    imageLeft: true,
  },
];

export default function TradingSections() {
  return (
    <section className="bg-white px-4 py-12 space-y-24">
      {sections.map((section, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row ${
            section.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
          } items-start gap-8 max-w-6xl mx-auto`}
        >
          {/* Image */}
          <img
            src={section.image}
            alt={section.title}
            className="h-full mt-1 md:w-1/2 rounded-xl shadow-lg object-cover"
          />

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold">
              {section.title}
            </h3>
            {section.text.map((t, i) => (
              <p key={i} className="text-gray-600 text-sm md:text-base">
                {t}
              </p>
            ))}

            {/* Tags */}
            {section.tags && (
              <div className="flex flex-wrap gap-2 mt-2">
                {section.tags.map((tag, i) => (
                  <div
                    key={i}
                    className="  px-3 py-1 rounded-full text-sm font-medium flex items-center"
                  >
                    <img src={tick} className="w-4 mr-2" alt="" />
                    <p>
                    {tag}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Bullet Points */}
            {section.bullets && (
              <ul className=" space-y-4 mt-4">
                {section.bullets.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <img src={point.img} className="w-5" alt="" />
                    <p className="text-gray-700">{point.text}</p>
                  </li>
                ))}
              </ul>
            )}

            {/* Additional paragraph */}
            {section.paragraph && (
              <p className="text-gray-600 text-sm md:text-base mt-2">
                {section.paragraph}
              </p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
