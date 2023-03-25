import React from 'react'

import './offlinecard.css';

const photo ="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg";
const minipic ="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png";


const Offlinecard = () => {
  return (
    <div className='netflix_offlinecard'>
      <div className="netflix_offlinecard-photo">
        <img src={photo} alt="Photo" />
        <div className="netflix_offlinecard-photo-bar">
            <img src={minipic} alt="Minipic" />
            <div className="netflix_offlinecard-photo-bar-text">
                <h5>Stranger Things</h5>
                <h6>Downloading...</h6>
            </div>
        </div>
      </div>
      <div className="netflix_offlinecard-text">
        <h1>Download your shows <br /> to watch offline.</h1>
        <h3>Save your favourites easily and always have <br /> something to watch.</h3>
      </div>
    </div>
  )
}

export default Offlinecard
