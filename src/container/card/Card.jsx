import React from 'react'

import './card.css';
const photo ="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png";
const video ="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v";

const card = () => {
  return (
    <div className='netflix_card'>
        <div className="netflix_card_container">
            <div className="netflix_card_container-text">
                <h1>Enjoy on your TV.</h1>
                <p>Watch on smart TVs, PlayStation, Xbox,<br /> Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className="netflix_card_container-photo">
                <img src={photo} alt="Tv-Photo" />
                <video src={video}
                    loop
                    autoPlay
                />
            </div>
        </div>
    </div>
  )
}

export default card
