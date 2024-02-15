import React from 'react';
import handsoap from "../../assets/Product Image.png"
import Products from './Products';
import slipper from '../../assets/slipper.png';
import basket from '../../assets/basket.png';
import powder from '../../assets/powder.png';
import './Products.css'

export default function ProductsSection() {
  return (
    <div>
            <section className='products-section'>
        
          <div className="products-banner">
            <h2 className="h2">Our Most Wanted Products</h2>
            <h6 className="h6">Good for environment, good for you</h6>

          </div>
          <div className="products-container">
          <Products url={handsoap} name="Alpine Provisions | Cedar + Sandalwood Hand Soap" price="Rp259.000" newprice="Rp99.900"/>
          <Products url={slipper} name="Women's Classic Sole Low Back Wool Slippers"  price="Rp159.900" newprice="Rp79.900"/>
          <Products url={basket} name="Large Patterned Hamper Basket" price="Rp329.900" newprice="Rp199.900"/>
          <Products url={powder} name="Meliora | Eco Laundry Powder" price="Rp259.000" newprice="Rp159.000"/>
          </div>


    
    </section>
    </div>
  )
}
