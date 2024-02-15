import React from "react";
//import '../../pages/Home.css';

export default function LogoContainer({url}) {
  return (
    <div>
      <nav>
        {/* <div className="navigation-bar-top"> */}
          <div className="container">
            <div>
              <img src={url} />
            </div>
          </div>
        {/* </div> */}
      </nav>
    </div>
  );
}
