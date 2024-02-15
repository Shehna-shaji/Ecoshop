import React from 'react';
//import '../../pages/Home.css';

export default function SearchBar({url}) {
  return (
    <div>
      <nav>
      {/* <div className="navigation-bar-top"> */}
      <div className="search-bar">
            <img src={url} className="icon" />
            <input type="text" placeholder="Search here" className="search" />
          </div>
          {/* </div> */}
          
      </nav>
    </div>
  )
}
