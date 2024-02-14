import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Shavindu Thushara</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className='footer__link'>Projects</a>
                    </li>
                    <li>
                        <a href="#testimonial" className='footer__link'>Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://lk.linkedin.com/in/shavindu-thushara-sampath-51772a1bb" className="footer__social-link" target="_blank" rel="noreferrer"><i class='bx bxl-linkedin'></i></a>
                    <a href="https://t.me/ShaviY0o" className="footer__social-link" target="_blank" rel="noreferrer"><i class='bx bxl-telegram'></i></a>
                    <a href="https://twitter.com/SampathShavindu" className="footer__social-link" target="_blank" rel="noreferrer"><i class='bx bxl-twitter'></i></a>
                </div>

                <span className="footer__copy">&#169; <b>S T S</b> - All rigths reserved - 2024</span>
            </div>
        </footer >
    )
}

export default Footer