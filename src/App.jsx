import React from 'react'
import Navbar from './Components/Navbar'
import Section from './Components/Header'
import HerosSection from './Components/HerosSection'
import Finance from './Components/Finance'
import Services from './Components/ServiceSection'
import TrustedBy from './Components/TrustedSection'
import IncomeTaxFiling from './Components/IncomeTaxFilings'
import StayInformed from './Components/StayInformed'
import Testimonial from './Components/Testimonial'    
import FAQSection from "./Components/FAQ"   
import Footer from './Components/Footer'
import "./App.css"




function App() {


  return (
    <>
    <Navbar/>
    <Section/>
    <HerosSection/>
    <Finance/>
    <Services/>
    <TrustedBy/>
    <IncomeTaxFiling/>
    <StayInformed/>
    <Testimonial/>
    <FAQSection/>
    <Footer/>
    
    

    </>
  )
}

export default App
