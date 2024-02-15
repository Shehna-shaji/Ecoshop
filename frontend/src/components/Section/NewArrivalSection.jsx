import React from 'react'
import NewArrival from './NewArrival';
import chair from '../../assets/chair.png';
import loungechair from '../../assets/loungechair.png';
import loveseat from '../../assets/loveseat.png';
import chaise from '../../assets/chaise.png';
import arrowleft from '../../assets/Arrow.png';
import arrowright from '../../assets/arrow-right.png';


import './NewArrival.css'

export default function NewArrivalSection() {
  return (
    <div>
        <section className='New-Arrival'>
        
          <div className="arrival-container">
          <div className='arrival'>
            <h3 className="arrival-title">New Arrival</h3>
            <h6 className="arrival-text">Be the first to have the first-class product</h6>
            </div>
            <div className='arrow'>
              <img src={arrowleft} className='arrow-img'/>
              <img src={arrowright} className='arrow-img'/>
            </div>
            
          </div>
          <div className="list-frame">
          <NewArrival url={chair} name="Lollygagger Recycled Lounge Chair" price="Rp699.900"/>
          <NewArrival url={loungechair} name="Lollygagger Recycled Lounge Chair" price="Rp999.900"/>
          <NewArrival url={loveseat} name="Nisswa Recycled Loveseat" price="Rp1.399.900"/>
          <NewArrival url={chaise} name="Lollygagger Recycled Outdoor Chaise" price="Rp1.199.900"/>
          </div>
          <div className='button-text'>
          <button className='arrival-button' > See More</button></div>
          
         

          
          
          
          </section>
      
    </div>
  )
}
