import { BrowserRouter , Route, Routes} from 'react-router-dom'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/About/About'
// import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
// import Contact from './components/contact/Contact'


const App = () => {
  return(
    <BrowserRouter>
      <Header/>
    <Nav/>


    {/* Experience will be added for 2.0 release */}
    {/* <Experience/> */}
    
    {/* Services will be added for 2.0 release */}
    {/* <Services/> */}
      


     {/* Contact Form will be added for 2.0 release */}
    {/* <Contact/> */}

    <Footer/>
    <Routes>
      <Route path='/' element={}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    </BrowserRouter>
  
       
    
  )
}

export default App