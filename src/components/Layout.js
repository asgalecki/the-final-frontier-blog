import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;