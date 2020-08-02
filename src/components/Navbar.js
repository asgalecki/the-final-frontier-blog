import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <Link className="nav__logo" to={`/`}>The Final Frontier</Link>
        <button className="nav__button">Menu</button>
        {/* <ul className="nav__navbar">
          <li className="nav__navbar--link"><Link to={`/`}>Home</Link></li>
          <li className="nav__navbar--link"><Link to={`/about`}>About</Link></li>
          <li className="nav__navbar--link"><Link to={`/contact`}>Contact</Link></li>
        </ul> */}
      </div>
    </nav>
  )
};

export default Navbar;