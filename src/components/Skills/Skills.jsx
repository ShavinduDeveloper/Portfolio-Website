import React from 'react'
import Designer from './Designer'
import Developer from './Developer'
import Other from './Other'
import "./skills.css"

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical level</span>

            <div className="skills__container container grid">
                <Designer />

                <Developer />
                
                <Other />
            </div>
        </section>
    )
}

export default Skills