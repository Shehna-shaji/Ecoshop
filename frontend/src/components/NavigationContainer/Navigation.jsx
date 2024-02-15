import React from 'react'
import LogoContainer from './LogoContainer'
import SearchBar from './SearchBar'
import Logo from "../../assets/Logo.png";
import search from "../../assets/Vector.png";
import profile from "../../assets/profile.png";
import bag from "../../assets/bag.png";

import './Nav.css'
import '../MenuBar/Menu.css';
import IconContainer from './IconContainer';



export default function Navigation() {
  return (
    <div>
      <nav>
        <div className="navigation-bar-top">
        <LogoContainer url={Logo}/>
        <SearchBar url={search}/>
        <IconContainer url={profile} className="profile-icon"/>
        <IconContainer url={bag} className="bag-icon"/>
        
        </div>
      </nav> 
    </div>
  )
}
