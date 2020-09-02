import React from "react";
import "./homepage.styles.scss"

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">HAT</h1>
          <span className="subtitle">ADD TO CART</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">JACKETS</h1>
          <span className="subtitle">ADD TO CART</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">SNEAKERS</h1>
          <span className="subtitle">ADD TO CART</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">GIRLS</h1>
          <span className="subtitle">ADD TO CART</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">BOYS</h1>
          <span className="subtitle">ADD TO CART</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
