import React from "react";
import Category from "./Category";
import clothing from "../../assets/image 999.png";
import homegoods from "../../assets/image 1002.png";
import bedding from "../../assets/image 1000.png";
import furniture from "../../assets/image 1001.png";
import accessories from "../../assets/image 1003.png";
import "./CategorySection.css";

export default function CategorySection() {
  return (
    <div>
      <section className="category-section">
        
          <div>
            <h3>Category for you</h3>
          </div>

          <Category url={clothing} title="Clothing" />

          <Category url={homegoods} title="Home Goods" />

          <Category url={bedding} title="Bedding" />
          <Category url={furniture} title="Furniture" />
          <Category url={accessories} title="Accessories" />
        
      </section>
    </div>
  );
}
