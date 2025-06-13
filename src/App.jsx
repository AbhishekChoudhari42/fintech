import './App.css'
import AccordionWithImage from './components/AccordionWithImage'
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
    <div className='w-screen flex justify-center overflow-hidden'>
      <div className='w-full m-0 p-0 max-w-[1440px]'>
        <Header />
        <Hero />
        <div className='flex flex-col gap-4 p-8 px-24 max-sm:px-4 bg-white'>
          <div className='w-full' >
            <SectionHeading text={'Who We Are'} />
            <h2 className='text-4xl font-semibold mt-2'>Our story started with a simple idea</h2>
          </div>
          <AccordionWithImage />
        </div>
        <div className='flex flex-col gap-4 items-center  bg-white'>
          <div className='w-4/5 p-4 flex gap-14 max-sm:flex-col max-sm:w-full items-center max-sm:h-fit max-sm:gap-4 h-[100px]' >
            <div className='h-200px flex-1'>
              <SectionHeading text={'What we do'} />
              <h2 className='text-3xl font-semibold mt-2'>We offer a wide range of services</h2>
            </div>
            <p className='text-sm flex-1 h-[100px]'>At LiquiLogic, we harness technology, data, and human insight to deliver consistent value with trust and integrity at the core. Finance has evolved—from instinct to algorithms, from manual to real-time. Our infrastructure is built for speed, precision, and adaptability across complex markets.</p>
          </div>
        <TradingSections />
        </div>
        <CoreValues />
        <FeatureGridSection />
        <CultureSection />
        <FoundersSection />
        <Footer />
      </div>
    </div>

  )
}



export default App
