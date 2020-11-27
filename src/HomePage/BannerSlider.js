import React, { useState } from "react";
import "./BannerSlider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function BannerSlider({ banners }) {
  const [slides, useSlides] = useState([
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/family/17th-Nov/D18787601_BAU_Xiaomi_Family_DesktopHero_1500x600_2._CB415252218_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg",
  ]);
  return (
    <div className="banner">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay={1500}
        showThumbs={false}
        className="homeBanner"
      >
        {slides.map((slide) => (
          <div>
            <img src={slide} />
          </div>
        ))}
      </Carousel>
      {/* <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
        alt=""
        className="homeBanner"
      /> */}
    </div>
  );
}

export default BannerSlider;
