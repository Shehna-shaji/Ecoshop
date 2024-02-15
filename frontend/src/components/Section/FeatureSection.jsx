import React from 'react'
import Rectangle from '../../assets/Rectangle.png';
import shipping from '../../assets/shipping.png';
import satisfaction from '../../assets/satisfaction.png';
import ecofriendly from '../../assets/eco-friendly.png';
import response from '../../assets/response.png';
import Feature from './Feature';
import './FeatureSection.css';

export default function FeatureSection() {
  return (
    <div>
      <section>
        <div className='feature-section'>
            <div className='feature-header'>
                <img src={Rectangle} className='title-image'/>
                <h2 className='section-title'>Why Bought From Us?</h2>

            </div>
            <div className='section-container'>
                {/* <div className='feature-card'>
                    <div className='shipping'>
                        <img src={shipping} className='shipping-image'/>

                    </div>
                    <div className='card-container'>
                        <h3 className='feature-heading'>Free Shipping</h3>
                        <h5 className='feature-text'>Shop now and enjoy free shipping on all orders</h5>
                    </div>

                </div>
                <div className='feature-card'>
                    <div className='satisfaction'>
                        <img src={satisfaction} className='satisfaction-image'/>

                    </div>
                    <div className='card-container'>
                        <h3 className='feature-heading'>Satisfaction Guaranteed</h3>
                        <h5 className='feature-text'>Our satisfaction guarantee ensures quality products</h5>
                    </div>

                </div> 
                <div className='feature-card'>
                    <div className='ecofriendly'>
                        <img src={ecofriendly} className='ecofriendly-image'/>

                    </div>
                    <div className='card-container'> 
                        <h3 className='feature-heading'>Eco Friendly Packaging</h3>
                        <h5 className='feature-text'>Using eco-friendly materials, sustainable and biodegradable.</h5>
                    </div>

                </div> 
                <div className='feature-card'>
                    <div className='response'>
                        <img src={response} className='response-image'/>

                    </div>
                    <div className='card-container'>
                        <h3 className='feature-heading'>Fast Response</h3>
                        <h5 className='feature-text'>24/7 fast and reliable assistance whenever you need it.</h5>
                    </div>

                </div>  */}
                <Feature url={shipping} heading='Free Shipping' text='Shop now and enjoy free shipping on all orders' classname='shipping-image'/>
                <Feature url={satisfaction} heading='Satisfaction Guaranteed' text='Our satisfaction guarantee ensures quality products' classname='satisfaction-image'/>
                <Feature url={ecofriendly} heading='Eco Friendly Packaging' text='Using eco-friendly materials, sustainable and biodegradable.' classname='ecofriendly-image'/>
                <Feature url={response} heading='Fast Response' text='24/7 fast and reliable assistance whenever you need it' classname='response-image'/>

            </div>


        </div>
      </section>
    </div>
  )
}
