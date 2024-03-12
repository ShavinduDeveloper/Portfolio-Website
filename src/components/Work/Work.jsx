import React from 'react'
import "./work.css"
import Works from './Works'

const Work = () => {
  return (
    <section className="work section" id="portfolio">
         <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent Works</span>
            {/* <h3 className="uc">This section is Under Construction.</h3> */}
            <Works />
    </section>
  )
}

export default Work