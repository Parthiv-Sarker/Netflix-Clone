import React from 'react';

import './watchcard.css';

const video ="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v";
const photo ="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png";

const Watchcard = () => {
  return (
    <div className='netflix-watchcard'>
      <div className="netflix-watchcard-text">
        <h1>Watch everywhere.</h1>
        <h3>Stream unlimited movies and TV shows on your <br /> phone, tablet, laptop, and TV.</h3>
      </div>
      <div className="netflix-watchcard-rightbar">
        <img src={photo} alt="" />
        <video src={video} 
            muted
            loop
            autoPlay
        />
      </div>
    </div>
  )
}

export default Watchcard;
