import lock from '../assets/icons/Lock.png'
import hammer from '../assets/icons/Hammer.png'
import trophy from '../assets/icons/Trophy.png'
import flower from '../assets/icons/Flower.png'
export default function FeatureGridSection() {
  const cards = [
    {
      icon: lock,
      title: "Privacy & Security First",
      content: `We never access raw source code or sensitive parameters. Our systems allow you to deploy confidently, without compromising your intellectual property.
                  Under our legal framework, your code remains your property—unseen and untouched by anyone on our team.`,
    },
    {
      icon: hammer,
      title: "Clear Legal Guardrails",
      content: `Our agreements are clear, transparent, and built to protect the interests of both 
                you and LiquiLogic — ensuring trust, fairness, and long-term partnership.`,
    },
    {
      icon: trophy,
      title: "Zero Capital Risk, Profit Sharing",
      content: `You get to run your algorithm on our capital--meaning you invest nothing 
                upfront. If your strategy delivers returns, you receive a share of the profits. It's a 
                win-win model designed to reward your skill and incentivize success.`,
    },
    {
      icon: flower,
      title: "Technical & Ethical Commitments",
      content: `Our strict internal protocols and access controls guarantee that no one on the LiquiLogic team can tamper with, reverse-engineer, or replicate your deployed algorithms. Trust 
                and confidentiality are embedded in our architecture.
                We believe in empowering creators and honoring trust. If you’re looking to optimize your returns while protecting your privacy and ownership—Build&Earn`,
    },
  ];

  return (
    <section className="bg-[#1e293b]  text-white  p-4">
      <div className=" mx-auto grid gap-4">
        {/* Card 1 - Full Width */}
        <div className="bg-[#334155] p-6 rounded-lg hover:bg-white hover:text-[#1e293b] transition-colors duration-300 group">
          <div className='w-full flex items-center gap-2 mb-2'>
                <img src={cards[0].icon} className='w-6 group-hover:invert-100' alt="" />
                <h3 className="text-lg font-semibold ">{cards[0].title}</h3>
              </div>
          <p className="text-sm text-gray-300 group-hover:text-gray-600 transition-colors duration-300">{cards[0].content}</p>
        </div>

        {/* Row with Card 2 & Card 3 side-by-side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[cards[1], cards[2]].map((card, index) => (
            <div
              key={index}
              className="bg-[#334155] p-6 rounded-lg h-full hover:bg-white hover:text-[#1e293b] transition-colors duration-300 group"
            >
              <div className='w-full flex items-center gap-2 mb-2'>
                <img src={card.icon} className='w-6 group-hover:invert-100' alt="" />
                <h3 className="text-lg font-semibold ">{card.title}</h3>
              </div>
                <p className="text-sm text-gray-300 group-hover:text-gray-600 transition-colors duration-300">{card.content}</p>
            </div>
          ))}
        </div>

        {/* Card 4 - Full Width */}
        <div className="bg-[#334155] p-6 rounded-lg hover:bg-white hover:text-[#1e293b] transition-colors duration-300 group">
          <div className='w-full flex items-center gap-2 mb-2'>
                <img src={cards[3].icon} className='w-6 group-hover:invert-100' alt="" />
                <h3 className="text-lg font-semibold ">{cards[3].title}</h3>
              </div>
          <p className="text-sm text-gray-300 group-hover:text-gray-600 transition-colors duration-300">{cards[3].content}</p>
        </div>
      </div>
    </section>
  );
}
