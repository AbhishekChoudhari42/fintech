import SectionHeading from "./SectionHeading";
import culture1 from '../assets/culture1.webp'
import culture2 from '../assets/culture2.webp'
import Carousel from "./Carousel";
export default function CultureSection() {
    const values = [
      {
        title: "Joyful",
        image: culture1,
        description:
          "Begin by filling out the brief form, giving the details we need to start crafting the project.",
      },
      {
        title: "Humble",
        image:culture1,
        description:
          "Begin by filling out the brief form, giving the details we need to start crafting the project.",
      },
      {
        title: "Inclusive",
        image: culture1,
        description:
          "Begin by filling out the brief form, giving the details we need to start crafting the project.",
      },
    ];
  
    return (
      <section className="bg-white px-8 py-4 text-left">
        {/* Section Header */}
        <div className="mx-auto mb-6  text-left">
          <div className="w-full flex flex-col items-left">
          <SectionHeading text={"Culture & Philosophy"}/>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
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
        <Carousel/>
      </section>
    );
  }
  