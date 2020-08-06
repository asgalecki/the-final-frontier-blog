import React from 'react';
import { Link } from 'gatsby';

import Hamburger from './Hamburger';
import NavMenu from './NavMenu';

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
    const hamburger = this.state.isMenuOpen ? (
      'hamburger hamburger--active'
    ) : (
      'hamburger'
    );

    const navMenu = this.state.isMenuOpen ? (
      'nav__menu nav__menu--active'
    ) : (
      'nav__menu'
    );
    
    return (
      <nav className="nav">
        <div className="nav__container">
          <Link className="nav__logo" to={`/`}>The Final Frontier</Link>
          <Hamburger className={hamburger} onClick={this.handleMenuToggle} />
          <NavMenu className={navMenu} />
        </div>
      </nav>
    )
  }
};

export default Navbar;