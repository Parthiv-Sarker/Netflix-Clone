import React from 'react';

import { Header,Card,Offlinecard,Watchcard,Childcard } from './container';
import { Line,Navbar,Footer,Accordian } from './components';
import './App.css';


const App = () => {
  return (
    <div className='main'>
      <div className='main_home-bg'>
        <div className='main_home'>
          <Navbar />
          <Header />
          <Line />
        </div>
      </div>
      <Card />
      <Line />
      <Watchcard />
      <Line />
      <Offlinecard />
      <Line />
      <Childcard />
      <Line />
      <div>
        <Accordian />
        <Line />
      </div>
      <Footer />
    </div>
  )
}

export default App
