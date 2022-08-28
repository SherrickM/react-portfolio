import React from 'react'
import Resume from '../../assests/Resume.pdf'

function CTA() {
  return (
    <div className='cta'>
      <a href={Resume} download>Download Resume</a>
      <a href="#contact">Let's Talk</a>
    </div>
  )
}

export default CTA