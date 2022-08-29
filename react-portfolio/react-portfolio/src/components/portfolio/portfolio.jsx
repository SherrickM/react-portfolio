import React from 'react'
import './portfolio.css'

function Portfolio() {
  return (
    <section id="portfolio">

      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
          {/* Portfolio Item 1 */}
          <div className="portfolio_item">
              <div className="portfolio_item_img"></div>
              <h3>Polite-Mail</h3>
              <a href="https://github.com/SherrickM/polite-mail" className='btn'>GitHub</a>
              <a href="https://polite-mail.herokuapp.com/" className='btn btn-primary'>Live Demo</a>
          </div>

          {/* Portfolio Item 2 */}
          <div className="portfolio_item">
              <div className="portfolio_item_img"></div>
              <h3>Sum It Up</h3>
              <a href="https://github.com/SherrickM/sum-it-up" className='btn'>GitHub</a>
              <a href="https://sum-it-up2.herokuapp.com/" className='btn btn-primary'>Live Demo</a>
          </div>

          {/* Portfolio Item 3 */}
          <div className="portfolio_item">
              <div className="portfolio_item_img"></div>
              <h3>HomeMade</h3>
              <a href="https://github.com/SherrickM/homemade" className='btn'>GitHub</a>
              <a href="https://sherrickm.github.io/homemade/" className='btn btn-primary'>Live Demo</a>
          </div>

          {/* Portfolio Item 4 */}
          <div className="portfolio_item">
              <div className="portfolio_item_img"></div>
              <h3>Code Quiz</h3>
              <a href="https://github.com/SherrickM/code-quiz-project" className='btn'>GitHub</a>
              <a href="https://sherrickm.github.io/code-quiz-project/" className='btn btn-primary'>Live Demo</a>
          </div>

          {/* Portfolio Item 5 */}
          <div className="portfolio_item">
              <div className="portfolio_item_img"></div>
              <h3>Weather Dashboard</h3>
              <a href="https://github.com/SherrickM/weather-dashboard" className='btn'>GitHub</a>
              <a href="https://sherrickm.github.io/weather-dashboard/" className='btn btn-primary'>Live Demo</a>
          </div>

          {/* Portfolio Item 6 */}
          <div className="portfolio_item">
              <div className="portfolio_item_img"></div>
              <h3>Note Taker</h3>
              <a href="https://github.com/SherrickM/note-taker" className='btn'>GitHub</a>
              <a href="https://guarded-springs-98042.herokuapp.com/" className='btn btn-primary'>Live Demo</a>
          </div>

      </div>

    </section>
  )
}

export default Portfolio