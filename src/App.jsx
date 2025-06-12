import './App.css'
import AccordionWithImage from './components/AccordionWithImage'
import CoreValues from './components/CoreValues'
import CultureSection from './components/CultureSection'
import FeatureGridSection from './components/FeatureGridSection'
import Footer from './components/Footer'
import FoundersSection from './components/FoundersSection'
import Header from './components/Header'
import Hero from './components/Hero'
import TradingSections from './components/TradingSections'



function App() {

  return (
      <div className='w-screen flex justify-center overflow-hidden'>
        <div className='w-full m-0 p-0 max-w-[1440px]'>
        <Header/>
        <Hero/>
        <AccordionWithImage/>
        <FeatureGridSection/>
        <TradingSections/>
        <CultureSection/>
        <CoreValues/>
        <FoundersSection/>
        <Footer/>
        </div>
      </div>
     
  )
}



export default App
