import React from 'react';
import {Link} from 'gatsby';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="social-media">
          <ul className="social-media__list">
            <li className="social-media__link">
              <Link className="social-media__link--link" to="/">Github</Link>
            </li>
            <li className="social-media__link">
              <Link className="social-media__link--link" to="/">Facebook</Link>
            </li>
            <li className="social-media__link">
              <Link className="social-media__link--link" to="/">Twitter</Link>
            </li>
            <li className="social-media__link">
              <Link className="social-media__link--link" to="/">Instagram</Link>
            </li>
          </ul>
        </section>

        <section className="inner-links">
        <ul className="inner-links__list">
          <li className="inner-links__link">
            <Link className="inner-links__link--link" to="/">Privacy</Link>
          </li>
          <li className="inner-links__link">
            <Link className="inner-links__link--link" to="/">Contact</Link>
          </li>
        </ul>
        </section>

        <section className="newsletter">
          <form className="newsletter__form">
            <h5 className="newsletter__title">Subscribe to our Newsletter!</h5>
            <div className="newsletter__input">
              <label htmlFor="email">Email: </label>
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