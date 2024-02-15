import React from 'react';
import './CategorySection.css';

export default function Category({url,title}) {
  return (
    <div>
         <section>
        
        <div className="category-banner">
            <img src={url} className="category-image" />
            <div>
            <button className="category-button">
              <input type='button' value={title} className='category-title'/>
            </button>
            </div>
          </div>
            
            </section>
      
    </div>
  )
}
