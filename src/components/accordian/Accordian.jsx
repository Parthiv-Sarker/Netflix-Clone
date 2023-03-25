import React, { useState } from 'react';

import { questions } from './api';
import './accordian.css';
import Myaccordian from './Myaccordian';

const Accordian = () => {
    const [ data , setData ] = useState(questions);
  return (
    <div className='accordian_home'>
    <h1>Frequently Asked Questions</h1>
    {
        data.map((curEle) =>{
            const { id } = curEle;
            return <Myaccordian key={id}{...curEle}/>
        })
    }
    <div className='netflix-bottom'>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className="netflix_header-getstart">
            <input type="text" placeholder='Email address'/>
            <button className='getstart-button'><h6>Get Started</h6><box-icon name='chevron-right' color='white'></box-icon></button>
        </div>
    </div>
    </div>
  )
}

export default Accordian
