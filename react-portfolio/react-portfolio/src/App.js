import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Nav from './components/nav/nav'
import About from './compAbout fromav/nav'

import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'


const App = () => {
  return(
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    
    {/* Services will be added for 2.0 release */}
    {/* <Services/> */}
      
    <Portfolio/>
    <Contact/>
    <Footer/>
       
    </>
  )
}