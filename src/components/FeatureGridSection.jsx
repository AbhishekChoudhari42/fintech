export default function FeatureGridSection() {
    const cards = [
      {
        title: "Privacy & Security First",
        content: `We never access raw source code or sensitive parameters. Our systems allow you to deploy confidently, without compromising your intellectual property.
                  Under our legal framework, your code remains your property—unseen and untouched by anyone on our team.`,
      },
      {
        title: "Clear Legal Guardrails",
        content: `Our agreements are clear, transparent, and built to protect the interests of both 
you and LiquiLogic — ensuring trust, fairness, and long-term partnership.`,
      },
      {
        title: "Zero Capital Risk, Profit Sharing",
        content: `You get to run your algorithm on our capital--meaning you invest nothing 
upfront. If your strategy delivers returns, you receive a share of the profits. It's a 
win-win model designed to reward your skill and incentivize success.`,
      },
      {
        title: "Technical & Ethical Commitments",
        content: `Our strict internal protocols and access controls guarantee that no one on the LiquiLogic team can tamper with, reverse-engineer, or replicate your deployed algorithms. Trust 
and confidentiality are embedded in our architecture.
We believe in empowering creators and honoring trust. If you’re looking to optimize your returns while protecting your privacy and ownership—Build&Earn`,
      },
    ];
  
    return (
      <section className="bg-[#1e293b]  text-white  px-4 py-12">
        <div className="max-w-5xl mx-auto grid gap-4">
          {/* Card 1 - Full Width */}
          <div className="bg-[#334155] p-6 rounded-lg hover:bg-white hover:text-[#1e293b] transition-colors duration-300 group">
            <h3 className="text-lg font-semibold mb-2">{cards[0].title}</h3>
            <p className="text-sm text-gray-300 group-hover:text-gray-600 transition-colors duration-300">{cards[0].content}</p>
          </div>
  
          {/* Row with Card 2 & Card 3 side-by-side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[cards[1], cards[2]].map((card, index) => (
              <div
                key={index}
                className="bg-[#334155] p-6 rounded-lg h-full hover:bg-white hover:text-[#1e293b] transition-colors duration-300 group"
              >
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-300 group-hover:text-gray-600 transition-colors duration-300">{card.content}</p>
              </div>
            ))}
          </div>
  
          {/* Card 4 - Full Width */}
          <div className="bg-[#334155] p-6 rounded-lg hover:bg-white hover:text-[#1e293b] transition-colors duration-300 group">
            <h3 className="text-lg font-semibold mb-2">{cards[3].title}</h3>
            <p className="text-sm text-gray-300 group-hover:text-gray-600 transition-colors duration-300">{cards[3].content}</p>
          </div>
        </div>
      </section>
    );
  }
  