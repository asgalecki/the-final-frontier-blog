import React from 'react';
import {Link} from 'gatsby';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="social-media">
          <ul className="social-media__list">
            <li className="social-media__link">
              <a className="social-media__link--link" href="/" target="_blank" rel="noreferrer">Github</a>
            </li>
            <li className="social-media__link">
              <a className="social-media__link--link" href="/" target="_blank" rel="noreferrer">Facebook</a>
            </li>
            <li className="social-media__link">
              <a className="social-media__link--link" href="/" target="_blank" rel="noreferrer">Twitter</a>
            </li>
            <li className="social-media__link">
              <a className="social-media__link--link" href="/" target="_blank" rel="noreferrer">Instagram</a>
            </li>
          </ul>
        </section>

        <section className="inner-links">
        <ul className="inner-links__list">
          <li className="inner-links__link">
            <Link className="inner-links__link--link" to="/">Privacy</Link>
          </li>
          <li className="inner-links__link">
            <Link className="inner-links__link--link" to="/contact">Contact</Link>
          </li>
        </ul>
        </section>

        <section className="newsletter">
          <form className="newsletter__form">
            <h5 className="newsletter__title">Subscribe to our Newsletter!</h5>
            <div className="newsletter__input">
              <label htmlFor="email" className="newsletter__input--cursor">Email: </label>
              <input type="email" id="email" />
            </div>
          </form>
        </section>
      </div>
      <div className="site-bottom">Created by ag-vectivus | 2020</div>
    </footer>
  )
};

export default Footer;