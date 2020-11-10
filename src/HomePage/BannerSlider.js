import React, { useState } from "react";
import "./BannerSlider.css";

function BannerSlider({ banners }) {
  return (
    <div className="banner">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
        alt=""
        className="homeBanner"
      />
    </div>
  );
}

export default BannerSlider;
