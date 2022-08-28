import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'


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

export default App