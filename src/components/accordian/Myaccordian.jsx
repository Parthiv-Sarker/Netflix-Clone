import React, { useState } from 'react';

import './myaccordian.css';

const Myaccordian = ({question,answre}) => {
    const [show,setShow] = useState(false);
  return (
    <div className='accordian-main'>
        {
        <div className='accordian-q'
            onClick={()=>setShow(!show)}
        >
            <h2>{question}</h2>
            <h2>{show? "▼":"▲"}</h2>
        </div>
        }
        {
        show &&
        <div className="accordian-a">
            <h2>{answre}</h2>
        </div>
        }
    </div>
  )
}

export default Myaccordian
