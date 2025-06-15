import React from 'react'
import SectionHeading from './SectionHeading';
import lock from '../assets/icons/Lock2.png'
import people from '../assets/icons/Peoples.png'
import protected_tick from '../assets/icons/Protected_tick.png'
import heart from '../assets/icons/Heart.png'
const values = [
  {
    title: "Trust",
    description: "Our most valuable asset is trust earned through performance.",
    icon: lock
  },
  {
    title: "Joyful & Inclusive Culture",
    description: "Because work should also bring joy",
    icon: heart
  },
  {
    title: "Integrity",
    description: "We do the right thing always, not just when it’s noticed.",
    icon: protected_tick
  },
  {
    title: "Customer Obsession",
    description: "Our clients’ success drives every decision",
    icon: people
  }
];

const CoreValues = () => {
  return (
    <section className="py-8 px-4 md:px-8 bg-white">
      <div className="max-w-8xl mx-auto flex flex-col ">
        <SectionHeading text={"Our Core Values"} />
        <h1 className="text-3xl font-semibold mb-4 ">We strive to deliver value to our clients</h1>
        <p className="text-gray-600 mb-8 w-2/3 ">
          We put these values to work in our systems, strategy, and people practices. These are the filters through which every decision passes.
        </p>
        <div className="w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={index}
              className={`w-full flex flex-col items-start space-y-4 pr-2 ${index > 0 ? ' md:border-l-[1px] md:border-l-gray-200 pl-2' :''}`}
            >
              <div className=" w-full text-white flex items-start gap-4">
                <div className='bg-blue-500 w-[40px] h-[40px] p-2 flex items-center justify-center rounded-md'>
                  <img src={value.icon} className='w-[30px]' alt="" />
                </div>
                
                <div className='w-8/9'>
                  <h3 className="text-gray-800 text-lg font-semibold mt-[-6px]">{value.title}</h3>
                  <p className="text-gray-600 text-sm font-medium">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default CoreValues