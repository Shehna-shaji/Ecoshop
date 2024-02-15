import React from "react";



import "./Home.css";
import '../index.css'


import Navigation from "../components/NavigationContainer/Navigation";
import MenuBar from "../components/MenuBar/MenuBar";
import HeroSection from "../components/Section/HeroSection";
import CategorySection from "../components/Section/CategorySection";
import ProductsSection from "../components/Section/ProductsSection";
import NewArrivalSection from "../components/Section/NewArrivalSection";
import CommitmentSection from "../components/Section/CommitmentSection";
import FeatureSection from "../components/Section/FeatureSection";
import MediaSection from "../components/Section/MediaSection";
import SubscribeSection from "../components/Section/SubscribeSection";
import FooterSection from "../components/Section/FooterSection";

export default function Home() {
  return (
    <div className="parent">
      <header className="header">
        <h1 className="h1">Free Shipping with minimum purchase Rp250.000</h1>
      </header>

      
      <Navigation/>
      <MenuBar/>


      <HeroSection/>
      
      <CategorySection/>
     
      {/* <ProductsSection/> */}
      <NewArrivalSection/>
      
      <CommitmentSection/>
      <FeatureSection/>
      <MediaSection/>
      <SubscribeSection/>
      <FooterSection/>



    </div>
  );
}
