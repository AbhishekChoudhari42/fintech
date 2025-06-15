import SectionHeading from "./SectionHeading";

export default function FoundersSection() {
    const founders = [
      {
        name: "Madhu Matangi",
        role: "CEO & Co-Founder",
        previous: "Former Amazon, Microsoft",
        image: "/images/madhu.jpg",
      },
      {
        name: "Sarah Johnson",
        role: "CTO & Co-Founder",
        previous: "Former Amazon, Microsoft",
        image: "/images/sarah.jpg",
      },
    ];
  
    return (
      <section className="bg-white px-8  py-16 w-full">
        {/* Section Header */}
        <div className="w-full mx-auto mb-12">
         <SectionHeading text={'Our Team'}/>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet our Founders</h2>
          <p className="text-gray-600 text-base">
            With leadership experience at global giants like Amazon, Microsoft, and IBM, our
            founders bring a unique blend of customer-centricity, tech-led problem solving,
            and mission-driven clarity.
          </p>
        </div>
  
        {/* Founders */}
        <div className="flex flex-col md:flex-row justify-center gap-12 max-w-5xl mx-auto text-left">
          {founders.map((f, i) => (
            <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
              <img
                src={f.image}
                alt={f.name}
                className="w-60 h-60 rounded-xl object-cover mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold">{f.name}</h3>
              <p className="text-blue-600 font-medium text-sm">{f.role}</p>
              <p className="text-gray-500 text-xs mt-1">{f.previous}</p>
            </div>
          ))}
        </div>
  
        {/* Quote */}
        <div className="mt-10 max-w-3xl mx-auto text-center italic text-sm text-gray-700 px-4">
          “The purpose of wealth is not accumulation, but transformation. Whether it’s through markets or mentorship, the goal is the same—touch as many lives as possible.”
        </div>
      </section>
    );
  }
  