import React from 'react'
import subscribe from '../../assets/subscribe.png';
import './Subscribe.css';

export default function SubscribeSection() {
  return (
    <div>
      <div className='subscription-section'>
        {/* <div>
            <img src={subscribe} className='subscription-image'/>

        </div> */}
        <div className='card-subscribe'>
          <div>
            <h5 className='subscription-header'>Subscribe to our newsletter</h5>
           <p className='subscribe-text'> Be the first to know about exclusive offers, eco-tips, and new arrivals!</p>
          </div>
          <div className='input-container'>
            <input type='text' placeholder='Your email' className='input-text'/>
            <button type='submit' className='subscribe-button'>Subscribe</button>

          </div>

        </div>

      </div>
    </div>
  )
}
