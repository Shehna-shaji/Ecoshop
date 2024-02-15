import React from "react";
import Ecologo from '../../assets/Ecologo.png';
import BCAcard from '../../assets/BCA.png';
import MANDIRIcard from '../../assets/MANDIRI.png';
import BNIcard from '../../assets/BNI.png';
import BANKBRI from '../../assets/BRI.png';
import BSIcard from '../../assets/BSI.png';
import MEGAcard from '../../assets/MEGA.png';
import MAYBANK from '../../assets/MAYBANK.png';
import GOPAY from '../../assets/GOPAY.png';
import shopeepay from '../../assets/shopeepay.png';
import danacard from '../../assets/dana.png';
import visacard from '../../assets/VISA.png';
import mastercard from '../../assets/mastercard.png';
import whatsapp from '../../assets/whatsapp.jpg';
import tiktok from '../../assets/tiktok.jpg';
import insta from '../../assets/insta.jpg';
import facebook from '../../assets/facebook.jpg';
import promotion from '../../assets/promotion.png';
import Chat from '../../assets/Chat.png';
import './SocialMedia.css';
import './Footer.css';
import SocialMedia from "./SocialMedia";

export default function FooterSection() {
  return (
    <div className="footer-section">
       <div className="badge">
            <img src={Ecologo} className="badge-img"/>

            </div>
      <div className="background">
     
           
        
        <div className="footer-menu">
        <div className="menu-list">
          <h5 className="menu-text">Eco Shop</h5>
          <div className="footer-container">
            <div className="footer-link">
              <a href="#">About Us</a>
            </div>
            <div className="footer-link">
              <a href="#">Contact Us</a>
            </div>
            <div className="footer-link">
              <a href="#">FAQs</a>
            </div>
          </div>
        </div>
        <div className="menu-list">
          <h5 className="menu-text">Product Category</h5>
          <div className="footer-container">
            <div className="footer-link">
              <a href="#">New</a>
            </div>
            <div className="footer-link">
              <a href="#">Clothing</a>
            </div>
            <div className="footer-link">
              <a href="#">Bath & Bedding</a>
            </div>
            <div className="footer-link">
              <a href="#">Home Goods</a>
            </div>

            <div className="footer-link">
              <a href="#">Furniture</a>
            </div>

            <div className="footer-link">
              <a href="#">Accesories</a>
            </div>
            <div className="footer-link">
              <a href="#">Gift</a>
            </div>
          </div>
        </div>
        <div className="menu-list">
          <h5 className="menu-text">Support</h5>
          <div className="footer-container">
            <div className="footer-link">
              <a href="#">Shipping</a>
            </div>
            <div className="footer-link">
              <a href="#">Returns</a>
            </div>
            <div className="footer-link">
              <a href="#">Privacy Policy</a>
            </div>
            <div className="footer-link">
              <a href="#">Terms of Use</a>
            </div>

            <div className="footer-link">
              <a href="#">Affiliates</a>
            </div>

            
          </div>
        </div>
        <div className="menu-list">
          <h5 className="menu-text">Payment</h5>
          <div className="payment-logo">
            <div >
              <img src={BCAcard} className="card-name"/>

            </div>
            <div>
              <img src={MANDIRIcard} className="card-name"/>
            </div>
            <div>
              <img src={BNIcard} className="card-name"/>
            </div>
            <div>
              <img src={BANKBRI} className="card-name"/>
            </div>


           

            
          </div>
          <div className="payment-logo">
            <div >
              <img src={BSIcard} className="card-name"/>

            </div>
            <div>
              <img src={MEGAcard} className="card-name"/>
            </div>
            <div>
              <img src={MAYBANK} className="card-name"/>
            </div>
            <div>
              <img src={GOPAY} className="card-name"/>
            </div>


           

            
          </div>
          <div className="payment-logo">
            <div >
              <img src={shopeepay} className="card-name"/>

            </div>
            <div>
              <img src={danacard} className="card-name"/>
            </div>
            <div>
              <img src={visacard} className="card-name"/>
            </div>
            <div>
              <img src={mastercard} className="card-name"/>
            </div>


           

            
          </div>

          
        </div>
        
        

      </div>
      <hr/> 
      <div className="footer-bottom">
          <div>
            <h6 className="bottom-text">© 2023 Eco Shop Indonesia. All Rights Reserved.</h6>
          </div>
          <div className="media-group" >

          <SocialMedia url={whatsapp}/>
          <SocialMedia url={tiktok}/>
          <SocialMedia url={insta}/>
          <SocialMedia url={facebook}/>
          </div>
        </div>
        
          <img src={promotion} className="promotion-icon"/>
        
          
          <img src={Chat} className="chat-icon"/>
          
        
        
      
      </div>
      
            


        
     

    </div>
  );
}
