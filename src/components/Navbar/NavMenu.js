import React from 'react';
import { Link } from 'gatsby';

const NavMenu = (props) => {
  return (
    <div className={props.className} data-testid="navMenu">
      <ul className="nav__list">
        <li className="nav__item"><Link className="nav__item--link" to={`/`}>Home</Link></li>
        <li className="nav__item"><Link className="nav__item--link" to={`/about`}>About</Link></li>
        <li className="nav__item"><Link className="nav__item--link" to={`/contact`}>Contact</Link></li>
      </ul>
    </div>
  )
};

export default NavMenu;