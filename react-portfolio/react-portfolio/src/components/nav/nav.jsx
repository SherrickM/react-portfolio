import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'



function Nav() {
  return (
    <nav>
      <a href="#header"><FaHome/></a>
      <a href="#about"><BiUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#portfolio"><HiOutlineDesktopComputer/></a>
      <a href="#contact"><MdOutlineMarkEmailUnread/></a>
    </nav>
  )
}

export default Nav