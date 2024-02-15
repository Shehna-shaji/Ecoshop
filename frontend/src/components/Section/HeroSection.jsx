import React from 'react';
import cultery from "../../assets/greenery-top-view 1.png";
import './HeroSection.css';


export default function HeroSection() {
  return (
    <div>
        <section className='hero-section'>
              
          <div className="content">
            <h1 className="content-heading">Healthy cutlery, healthy body</h1>
            <p>
              Upgrade your dining experience and begin your path to a healthy
              you right now.
            </p>
            <button className="button">
              <h4 className="button-text"> Learn More</h4>
            </button>
          </div>
          <div className="hero-image">
            <img src={cultery} className="picture" />
          </div>
        
      </section>
    </div>
  )
}
