import React from 'react';
import Menu from './Menu';
import './Menu.css';


export default function MenuBar() {
  return (
    <div>
        <nav>
        <div className="menu-bar">
            <Menu menu="NEW!"/>
            <Menu menu="Clothing"/>
            <Menu menu="Bath"/>
            <Menu menu="Bedding"/>
            <Menu menu="Home Goods"/>
            <Menu menu="Furniture"/>
            <Menu menu="FootWear"/>
            <Menu menu="Accessories"/>




            </div>
        </nav>
      
    </div>
  )
}
