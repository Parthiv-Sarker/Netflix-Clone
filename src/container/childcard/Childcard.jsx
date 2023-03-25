import React from 'react'

import './childcard.css';
const photo ="https://occ-0-2232-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420";


const Childcard = () => {
  return (
    <div className='netflix-childcard'>
      <img src={photo} alt="" />
      <div className="netflix-childcard-text">
        <h1>Create profiles for <br /> children.</h1>
        <h3>Send children on adventures with their favourite <br /> characters in a space made just for them—free <br /> with your membership.</h3>
      </div>
    </div>
  )
}

export default Childcard
