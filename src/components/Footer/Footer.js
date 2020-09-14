import React from 'react';
import { Link } from 'gatsby';
import NewsletterForm from '../Forms/NewsletterForm';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__links">

          <section className="social-media">
            <ul className="social-media__list">
              <li className="social-media__link">
                <a href="https://github.com/asgalecki"  target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="social-media__icon" />
                </a>
              </li>
              <li className="social-media__link">
                <a href="https://www.linkedin.com/in/artur-gałecki-29468b1b5"  target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="social-media__icon" />
                </a>
              </li>
            </ul>
          </section>

          <section className="inner-links">
          <ul className="inner-links__list">
            <li className="inner-links__link">
              <Link className="inner-links__link--link" to="/privacy">Privacy</Link>
            </li>
            <li className="inner-links__link">
              <Link className="inner-links__link--link" to="/contact">Contact</Link>
            </li>
          </ul>
          </section>

        </div>
        <NewsletterForm />
      </div>
      <div className="site-bottom">
        Created by
        <a className="site-bottom__link" href="https://github.com/asgalecki"  target="_blank" rel="noopener noreferrer">
          Artur Gałecki
        </a>
        | 2020
      </div>
    </footer>
  )
};

export default Footer;