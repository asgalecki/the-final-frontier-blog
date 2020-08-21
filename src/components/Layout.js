import React from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ScrollUpButton from "react-scroll-up-button";

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <Header />
      <ScrollUpButton 
        showAtPosition={500} 
        AnimationDuration={1000} 
        style={{bottom: 30, width: 40, height: 40}}
      />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;