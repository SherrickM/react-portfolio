import React from 'react'
import './header.css'
import CTA from './CTA'

function Header() {
  return (
   <header>
    <div className="continer header_container">
      <h5>Hello I'm</h5>
      <h1>Sherrick McNeal</h1>
      <h5 className="text-light"> Fullstack Developer</h5>
      <CTA/>
    </div>

   </header>
  )
}

export default Header