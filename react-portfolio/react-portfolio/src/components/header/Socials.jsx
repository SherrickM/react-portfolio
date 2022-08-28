import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from  'react-icons/fa'
import {TiSocialInstagramCircular} from 'react-icons/ti'

function Socials() {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com/sherrick-mcneal" ><BsLinkedin/></a>
      <a href="https://github.com/SherrickM/" ><FaGithub/></a>
      <a href="https://www.instagram.com/s.marquis_" ><TiSocialInstagramCircular/></a>
    </div>
  )
}

export default Socials