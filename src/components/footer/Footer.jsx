import React from "react";
import "./footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Franklin</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Project
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="" className="footer__social-link" target="_blank">
            <i className="uil uil-instagram"></i>
          </a>

          <a href="" className="footer__social-link" target="_blank">
            <i className="uil uil-twitter"></i>
          </a>

          <a href="" className="footer__social-link" target="_blank">
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">Allright Reserved
            &#169; 2022. StoneCode Co. 
        </span>
      </div>
    </footer>
  );
};

export default Footer;
