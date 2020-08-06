import React from 'react';

const Hamburger = (props) => {
  return (
    <button className={props.className} {...props}>
      <span className="hamburger__box">
        <span className="hamburger__inner"></span>
      </span>
    </button>
  )
};

export default Hamburger;