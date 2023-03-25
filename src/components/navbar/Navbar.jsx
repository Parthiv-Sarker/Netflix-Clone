import React from 'react'

import './navbar.css';
import logo from '../../resources/netflix-logo.png';
import 'boxicons';

const Navbar = () => {
  return (
    <div className='netflix_navbar'>
      <div className="netflix_navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="netflix_navbar-button">
        <div className='netflix_navbar-button-lang'>
          <box-icon name='globe' color='white'></box-icon>
          <h6>English</h6>
          <box-icon type='solid' name='down-arrow' color='white'></box-icon>
        </div>
        <button className='netflix_navbar-button-signin'><h6>Sign In</h6></button>
      </div>
    </div>
  )
}

export default Navbar;
