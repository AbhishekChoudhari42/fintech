import SectionHeading from "./SectionHeading";

export default function CultureSection() {
    const values = [
      {
        title: "Joyful",
        image: "/images/joyful.jpg",
        description:
          "Begin by filling out the brief form, giving the details we need to start crafting the project.",
      },
      {
        title: "Humble",
        image: "/images/humble.jpg",
        description:
          "Begin by filling out the brief form, giving the details we need to start crafting the project.",
      },
      {
        title: "Inclusive",
        image: "/images/inclusive.jpg",
        description:
          "Begin by filling out the brief form, giving the details we need to start crafting the project.",
      },
    ];
  
    return (
      <section className="bg-white px-4 py-16 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <div className="w-full flex flex-col items-center">
          <SectionHeading text={"Culture & Philosophy"}/>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-8">
            We value what you know and celebrate how you learn.
          </h2>
          </div>
          <p className="text-gray-600 text-base">
            We're a small team with big dreams. We're humble in the face of the market,
            but confident in our systems. Volatility doesn’t scare us—it sharpens us.
            We hunt for talent with focus, flexibility, and an eye for long-term
            potential much like the way we hunt for trades.
          </p>
        </div>
  
        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((value, idx) => (
            <div key={idx} className="text-left">
              <img
                src={value.image}
                alt={value.title}
                className="w-full h-64 object-cover rounded-lg mb-4 shadow-md"
              />
              <h4 className="text-lg font-semibold mb-1">{value.title}</h4>
              <p className="text-gray-500 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  