import React, { useState } from 'react'
import "../Work/work.css"

const WorkItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} className="work__img" alt='item img'></img>
      <h3 className="work__title">{item.title}</h3>

      <span className="work__button" onClick={() => toggleTab(5)}>
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </span>

      <div className={toggleState === 5 ? "works__modal active-modal" : "works__modal"}>
        <div className="works__modal-content">
          <i onClick={() => toggleTab(0)} className="uil uil-times works__modal-close"></i>

          <h3 className="works__modal-title" key={item.id}>{item.title}</h3><center><img src={item.image} className="work__img-inside" alt='item img'></img></center>
          <p className="works__modal-description">
            {item.description}
          </p>

          <ul className="works__modal-works grid">
            <li className="works__modal-work">
              <i className="uil uil-check-circle works__modal-icon"></i>
              <p className="works__model-info"><b>Area of the Project : </b>{item.area}</p>
            </li>

            <li className="works__modal-work">
              <i className="uil uil-check-circle works__modal-icon"></i>
              <p className="works__model-info"><b>Used Softwares : </b>{item.softwares}</p>
            </li>

            <li className="works__modal-work">
              <i className="uil uil-check-circle works__modal-icon"></i>
              <p className="works__model-info"><b>Project Type : </b>{item.type}</p>
            </li>

            <li className="works__modal-work">
              <i className="uil uil-check-circle works__modal-icon"></i>
              <p className="works__model-info"><b>Project Status : </b>{item.status}</p>
            </li>

            <li className="works__modal-work">
              <i className="uil uil-check-circle works__modal-icon"></i>
              <a href={item.url} className="work__button" target="_blank" rel="noreferrer"><p className="works__model-info link-url"><b>View Project : </b><i class="uil uil-external-link-alt"></i></p></a>
            </li>
          </ul>
        </div>
        <div className='url-display'>{item.url}</div>
      </div>

    </div >
  )
}

export default WorkItems