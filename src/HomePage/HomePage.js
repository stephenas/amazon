import React, { useState } from "react";
import "./HomePage.css";
import Product from "./Product/Product";
import BannerSlider from "./BannerSlider";

function HomePage() {
  const [banners, setBanners] = useState([
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg",
  ]);

  return (
    <div className="homePage">
      <BannerSlider banners={banners} />
      <div className="row">
        <Product
          id="12321341"
          title={`"Apple iMac Pro 27" with 5K Retina Display; 3.0GHz 10-Core Intel Xeon W, 128GB RAM, 2TB SSD, Radeon Pro Vega 64 (16GB HBM2)"`}
          price={4999}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41Y7U2M1SCL._AC_.jpg"
        />
        <Product
          id="1765341"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 1TB) - Space Grey (4th Generation)"
          price={949.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"
        />
      </div>
      <div className="row">
        <Product
          id="12321341"
          title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue"
          price={1099}
          rating={5}
          image="https://ss7.vzw.com/is/image/VerizonWireless/iphone-12-pro-hero2-kf-md?&scl=1"
        />
        <Product
          id="12349676"
          title="Marshall Acton II Wireless Wi-Fi Multi-Room Smart Speaker with Amazon Alexa Built-In, Black - NEW"
          price={299.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71AOV%2BqKFhL._AC_SL1000_.jpg"
        />
        <Product
          id="123298764"
          title="OnePlus 8 Pro Onyx Black,​ 5G Unlocked Android Smartphone U.S Version"
          price={899.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51az5uPx4AL._AC_SL1040_.jpg"
        />
      </div>
      <div className="row">
        <Product
          id="909876587"
          title={`LG 34" C34BL85C QHD (3440 X 1440) IPS Monitor`}
          price={574.85}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71RC3o90shL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default HomePage;
