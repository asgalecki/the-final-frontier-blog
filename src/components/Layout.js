import React from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

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