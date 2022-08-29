import React from 'react'
import './nav.css'
// import {FaHome} from 'react-icons/fa'
// import {BiUser} from 'react-icons/bi'
// import {BiBook} from 'react-icons/bi'
// import {HiOutlineDesktopComputer} from 'react-icons/hi'
// import {MdOutlineMarkEmailUnread} from 'react-icons/md'
// import {useState} from 'react'



function Nav() {
  // const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      {/* <a href="#experience"><BiBook/></a> */}
      <a href="/portfolio">Portfolio</a>
      <a href="/contact">Contact</a>
    </nav>
  )
}

export default Nav