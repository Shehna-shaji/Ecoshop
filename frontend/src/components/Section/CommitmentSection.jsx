import React from "react";
import Douglas from "../../assets/Douglas.png";
import image from '../../assets/image.png';
import './Commitment.css'

export default function CommitmentSection() {
  return (
    <div>
      <div className="commitment-section">
        {/* <div className="commitment-background">
          <img src={Douglas} className="section-image" /> */}
        
        
          <div className="commitment-background">
            <h4 className="commitment-text">
              Shop guilt-free knowing that our eco-friendly e-commerce platform
              is committed to reducing environmental impact and promoting
              sustainable practices in every step of the shopping process
            </h4>
            <div className="commitment-image">
            <img src={image} className="image"/>
            </div>
          </div>
         

        
        
      </div>
    </div>
  );
}
