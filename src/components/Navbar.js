import React from 'react';
import { Link } from 'gatsby';

class Navbar extends React.Component {

  state = {
    isMenuOpen: false
  };

  handleMenuToggle = () => {
    const { isMenuOpen } = this.state;
    this.setState({ 
      isMenuOpen: !isMenuOpen 
    });
  }

  render() {
    return (
      <nav className="nav">
        <div className="nav__container">
          <Link className="nav__logo" to={`/`}>The Final Frontier</Link>
          <button 
            className={this.state.isMenuOpen ? `hamburger hamburger--active` : `hamburger`} onClick={this.handleMenuToggle}>
            <span class="hamburger__box">
              <span class="hamburger__inner"></span>
            </span>
          </button>
          <div className={this.state.isMenuOpen ? `nav__menu nav__menu--active` : `nav__menu`}>
            <ul className="nav__list">
              <li className="nav__item"><Link className="nav__item--link" to={`/`}>Home</Link></li>
              <li className="nav__item"><Link className="nav__item--link" to={`/about`}>About</Link></li>
              <li className="nav__item"><Link className="nav__item--link" to={`/contact`}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
};

export default Navbar;