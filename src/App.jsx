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
        <div className='flex flex-col gap-4 p-8 px-24 max-sm:px-8 bg-white'>
          <div className='w-full' >
            <SectionHeading text={'Who We Are'}/>
            <h2 className='text-4xl font-semibold mt-2'>Our story started with a <br/>simple idea</h2>
          </div>
          <AccordionWithImage />
        </div>
        <FeatureGridSection />
        <TradingSections />
        <CultureSection />
        <CoreValues />
        <FoundersSection />
        <Footer />
      </div>
    </div>

  )
}



export default App
