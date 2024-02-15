import React from "react";
import semirectangle from "../../assets/semirectangle.png";
import Ellipse from '../../assets/Ellipse.png';
import dotrectangle from '../../assets/dotrectangle.png';
import zigzag from '../../assets/zigzag.png';
import curve from '../../assets/curve.png';
import './Media.css';
import Media from "./Media";

export default function MediaSection() {
  return (
    <div>
      <div className="media-section">
        <div className="media-vector">
          <img src={semirectangle} className="rectangle-img" />
          <img src={Ellipse} className="ellipse-img"/>
          <img src={dotrectangle} className="dot-rectangle-img"/>
          <img src={zigzag} className="zigzag-img"/>
          <img src={curve} className="curve-img"/>

        </div>
        <div className="media-header">
          <h3 className="media-text"> We Are Exist</h3>
        </div>
        <div className="media-container">
            <Media/>

        </div>
      </div>
    </div>
  );
}
