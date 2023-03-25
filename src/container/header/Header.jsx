import React from 'react'

import './header.css';
import 'boxicons';

const Header = () => {
  return (
    <div className='netflix_header'>
      <div className="netflix_header-p">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h6>Watch anywhere. Cancel anytime.</h6>
        <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
      </div>
      <div className="netflix_header-getstart">
        <input type="text" placeholder='Email address'/>
        <button className='getstart-button'><h6>Get Started</h6><box-icon name='chevron-right' color='white'></box-icon></button>
      </div>
    </div>
  )
}

export default Header;