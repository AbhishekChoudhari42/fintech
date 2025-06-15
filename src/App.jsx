import './App.css'
import AccordionWithImage from './components/AccordionWithImage'
import Carousel from './components/Carousel'
import CoreValues from './components/CoreValues'
import CultureSection from './components/CultureSection'
import FeatureGridSection from './components/FeatureGridSection'
import Footer from './components/Footer'
import FoundersSection from './components/FoundersSection'
import Header from './components/Header'
import Hero from './components/Hero'
import SectionHeading from './components/SectionHeading'
import TradingSections from './components/TradingSections'



function App() {

  return (
    <div className='w-full  flex justify-center p-0 m-0 overflow-hidden'>
      <div className='w-full m-0 max-w-[1440px]'>
        <Header />
        <Hero />
        <div id='who_we_are' className='flex flex-col gap-4 p-8  max-sm:px-4 bg-white'>
          <div className='w-full' >
            <SectionHeading text={'Who We Are'} />
            <h2 className='text-4xl font-semibold'>Our story started with a simple idea</h2>
          </div>
          <AccordionWithImage />
        </div>
        <div className='flex flex-col gap-4 items-center px-8 max-sm:px-4'>
          <div id='what_we_do' className='w-full  gap-8 max-sm:flex-col max-sm:w-full items-start max-sm:h-fit max-sm:gap-4 ' >
            <div className='h-200px flex-1'>
              <SectionHeading text={'What we do'} />
              <h2 className='text-3xl font-semibold'>We offer a wide range of services</h2>
            </div>
            <p className='text-sm text-gray-600 flex-1 h-fit my-4 text-justify'>At LiquiLogic, we harness technology, data, and human insight to deliver consistent value with trust and integrity at the core. Finance has evolved from instinct to algorithms, from manual to real-time. Our infrastructure is built for speed, precision, and adaptability across complex markets.</p>
          </div>
          <TradingSections />
        </div>
        <span id='core_values'></span>
        <div className='px-8 max-sm:px-4 w-full'>
          <CoreValues />
          <CultureSection />
          <FoundersSection />
        </div>
        <Footer />
      </div>
    </div>

  )
}



export default App
