import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button-flex" : "qualification__button button-flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button-flex" : "qualification__button button-flex"} onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__section">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Multimedia Technology</h3>
                <span className="qualification__subtitle"> Department of ICT - USJ</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>{" "}2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Software Developer</h3>
                <span className="qualification__subtitle">VTA - Kalutara North</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>{" "}2019 - 2020
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">GCE Advanced Level</h3>
                <span className="qualification__subtitle">K D M V - Katukurunda</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>{" "}2018 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">GCE Ordinary Level</h3>
                <span className="qualification__subtitle">Ariyawansha m.v.</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>{" "}2017 - 2018
                </div>
              </div>
            </div>
          </div>
          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Graphic Designer</h3>
                <span className="qualificatio__subtitle">Hemas Pharmaceuticals Pvt. Ltd.</span>
                <div className="qualificatio__calender">
                  <i className="uil uil-calendar-alt"></i>{" "}2024 (06 Months)
                </div>
              </div>
              <div>
                < span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Ux Ui Designer</h3>
                <span className="qualificatio__subtitle">STS Software Development</span>
                <div className="qualificatio__calender">
                  <i className="uil uil-calendar-alt"></i>{" "}2020 - 2024
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Developer</h3>
                <span className="qualification__subtitle">Bees Digital - Panadura</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>{" "}2021 (06 Months)
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification