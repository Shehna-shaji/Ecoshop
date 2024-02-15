import React from 'react'
import Tv from '../../assets/Tv.png';
import metro from '../../assets/metro.png';
import metroglobenetwork from '../../assets/metroglobenetwork.png';
import metrotv from '../../assets/metrotv.png';
import beritasatu from '../../assets/beritasatu.png';
import seatoday from '../../assets/seatoday.png';
import iNews from '../../assets/iNews.png';
import cnbc from '../../assets/cnbc.png';


export default function Media() {
  return (
    <div>
      <div className='media-list'>
        <div>
            <img src={Tv} className='media-icon'/>
            </div>
            <div>
            <img src={metro} className='media-icon'/>
            </div>
            <div>
            <img src={metroglobenetwork} className='media-icon'/>
            </div>
            <div>

            <img src={metrotv} className='media-icon'/>
            
        </div>
        

      </div>
      <div className='media'>
            <div>
                <img src={beritasatu} className='media-icon'/>
                </div>
                <div>
                <img src={seatoday} className='media-icon'/>
            </div>
            <div>
                <img src={iNews} className='media-icon'/>
            </div>
            <div>
                <img src={cnbc} className='media-icon'/>
            </div>




        </div>

    </div>
  )
}
