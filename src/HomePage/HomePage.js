import React, { useState } from "react";
import "./HomePage.css";
import Product from "./Product/Product";
import BannerSlider from "./BannerSlider";
import numeral from "numeral";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function HomePage() {
  const [banners, setBanners] = useState([]);

  const [televisions, setTelevisions] = useState([
    {
      id: "9098765870",
      title: `LG 34" C34BL85C QHD (3440 X 1440) IPS Monitor`,
      price: numeral(42600).format("0,0"),
      total: 42600,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71RC3o90shL._AC_SL1500_.jpg",
    },
    {
      id: "9098765871",
      title: `LG 29 inch Ultrawide Full HD IPS Gaming, Multitasking Monitor with 1ms Response Rate, 75Hz Refresh Rate - USB C, Display Port, HDMI, VGA - 10 W Inbuilt Speaker - 29UM69`,
      price: numeral(17065).format("0,0"),
      total: 17065,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/81t1tAzEgGL._AC_UY218_.jpg",
    },
    {
      id: "9098765872",
      title: `Acer Predator X34 Pbmiphzx 34-inch UltraWide QHD Monitor with NVIDIA G-SYNC Technology (Black)`,
      price: numeral(90000).format("0,0"),
      total: 90000,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/612yBrnxozL._AC_UY218_.jpg",
    },
    {
      id: "9098765873",
      title: `Dell U-Series 37.5" Screen LED-Lit Monitor (U3818DW)`,
      price: numeral(122879).format("0,0"),
      total: 122879,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71IjK1dq-OL._AC_UY218_.jpg",
    },
  ]);

  return (
    <div className="homePage">
      <BannerSlider />
      <div className="row">
        <Product
          id="12321341"
          title={`"Apple iMac Pro 27" with 5K Retina Display; 3.0GHz 10-Core Intel Xeon W, 128GB RAM, 2TB SSD, Radeon Pro Vega 64 (16GB HBM2)"`}
          price={numeral(464900).format("0,0")}
          total={464900}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41Y7U2M1SCL._AC_.jpg"
        />
        <Product
          id="1765341"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 1TB) - Space Grey (4th Generation)"
          price={numeral(89900).format("0,0")}
          total={89900}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"
        />
      </div>
      <div className="row">
        <Product
          id="12321341"
          title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue"
          price={numeral(119900).format("0,0")}
          total={119900}
          rating={5}
          image="https://m.media-amazon.com/images/I/71XXJC7V8tL._AC_UY218_.jpg"
        />
        <Product
          id="12349676"
          title="Marshall Acton II Wireless Wi-Fi Multi-Room Smart Speaker with Amazon Alexa Built-In, Black - NEW"
          price={numeral(31900).format("0,0")}
          total={31900}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71AOV%2BqKFhL._AC_SL1000_.jpg"
        />
        <Product
          id="123298764"
          title="OnePlus 8 Pro Onyx Black,​ 5G Unlocked Android Smartphone U.S Version"
          price={numeral(54999).format("0,0")}
          total={54999}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51az5uPx4AL._AC_SL1040_.jpg"
        />
      </div>
      <div className="carousel__container">
        <Carousel
          infiniteLoop
          useKeyboardArrows
          autoPlay
          interval={5500}
          showThumbs={false}
          showStatus={false}
        >
          {televisions.map((tv) => (
            <div className="row product__tv">
              <Product
                id={tv.id}
                title={tv.title}
                price={tv.price}
                total={tv.total}
                rating={tv.rating}
                image={tv.image}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="row">
        <Product
          id="1232134151"
          title="OnePlus 7T Glacier Blue (8GB RAM+256GB Storage)"
          price={numeral(37999).format("0,0")}
          total={37999}
          rating={5}
          image="https://m.media-amazon.com/images/I/71ncRs6HzyL._AC_UY218_.jpg"
        />
        <Product
          id="1234967641"
          title="Samsung Galaxy S10 (Black, 8GB RAM, 128GB Storage)"
          price={numeral(49994).format("0,0")}
          total={49994}
          rating={4}
          image="https://m.media-amazon.com/images/I/61-snTeMjoL._AC_UY218_.jpg"
        />
        <Product
          id="123298764521"
          title="New Apple iPhone 12 (128GB) - Black"
          price={numeral(84900).format("0,0")}
          total={84900}
          rating={5}
          image="https://m.media-amazon.com/images/I/71fVoqRC0wL._AC_UY218_.jpg"
        />
        <Product
          id="12329876146"
          title="Apple iPhone 11 Pro Max (64GB) - Midnight Green"
          price={numeral(105500).format("0,0")}
          total={105500}
          rating={4}
          image="https://m.media-amazon.com/images/I/61ers6OzvUL._AC_UY218_.jpg"
        />
      </div>
      <div className="row">
        <Product
          id="123213411"
          title="Amazon Brand - Inkast Denim Co. Men Jacket"
          price={numeral(849).format("0,0")}
          total={849}
          rating={3}
          image="https://images-eu.ssl-images-amazon.com/images/I/814DS6lmDcL._AC_UL100_SR100,100_.jpg"
        />
        <Product
          id="123496761"
          title="Rol ex Men's Automatic Submarine Daytona Watch"
          price={numeral(5900).format("0,0")}
          total={5900}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41%2Ba-f9icFL.jpg"
        />
        <Product
          id="1232987641"
          title="silk with blouse piece Saree (TWEET BLACK Free Size)"
          price={numeral(929).format("0,0")}
          total={929}
          rating={5}
          image="https://m.media-amazon.com/images/I/814U0+6V4HL._AC_UL320_.jpg"
        />
        <Product
          id="1232987641"
          title="Puma Plus Backpack II Black"
          price={numeral(739).format("0,0")}
          total={739}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/814yeFwi2yL._UL1500_.jpg"
        />
      </div>
      <div className="row">
        <Product
          id="123213412"
          title="Puma Men's 19 Fh Rubber Cricket Shoe"
          price={numeral(5499).format("0,0")}
          total={54899}
          rating={4}
          image="https://m.media-amazon.com/images/I/81feeMiqB8L._AC_UL320_.jpg"
        />
        <Product
          id="123496762"
          title="Puma Men's Speed Orbiter Running Shoe"
          price={numeral(6499).format("0,0")}
          total={6499}
          rating={3}
          image="https://m.media-amazon.com/images/I/71Eem1YQVAL._AC_UL320_.jpg"
        />
        <Product
          id="1232987642"
          title="Adidas
          Men's Zx 2k Boost Sneaker"
          price={numeral(9990).format("0,0")}
          total={9990}
          rating={4}
          image="https://m.media-amazon.com/images/I/51n-1etKMKL._AC_UL320_.jpg"
        />
        <Product
          id="1232987642"
          title="Puma
          Unisex Sf Drift Cat 5 Ultra Sneakers"
          price={numeral(2799).format("0,0")}
          total={2799}
          rating={3}
          image="https://m.media-amazon.com/images/I/814SCUSrxdL._AC_UL320_.jpg"
        />
      </div>
      <div className="row">
        <Product
          id="123213413"
          title="Haier 565 L Inverter Frost-Free Side-By-Side Refrigerator"
          price={numeral(52990).format("0,0")}
          total={52990}
          rating={4}
          image="https://m.media-amazon.com/images/I/61QRyYHQ5+L._AC_UL160_SR160,160_.jpg"
        />
        <Product
          id="123496763"
          title="IFB 6 kg 5 Star Fully-Automatic Front Loading Washing Machine"
          price={numeral(21890).format("0,0")}
          total={21890}
          rating={4}
          image="https://m.media-amazon.com/images/I/61F91pD42cL._AC_UY218_.jpg"
        />
        <Product
          id="1232987643"
          title="Samsung 689 L Frost Free Side Inverter Technology Star Refrigerator (Gentle Gold, RS73R5561F8)"
          price={numeral(87999).format("0,0")}
          total={87999}
          rating={4}
          image="https://m.media-amazon.com/images/I/21xq087cPcL._AC_UY218_.jpg"
        />
        <Product
          id="1232987643"
          title="Faber 14 Place Settings Dishwasher ( FFSD 8PR 14S, Silver, Power 3D Wash for Tough Stains, Silent operation )"
          price={numeral(44990).format("0,0")}
          total={44990}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/3142ECP6OiL._AC_US160_FMwebp_QL70_.jpg"
        />
      </div>
      <div className="row">
        <Product
          id="123213414"
          title="Toblerone of Switzerland Milk Chocolate with Honey and Almond Nougat - 6 Pack Pouch, 6 x 100 g"
          price={numeral(725).format("0,0")}
          total={725}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/51RqlDEqacL._AC_SX184_.jpg"
        />
        <Product
          id="1234967641"
          title="Cadbury Birthday Celebrations Box, 430g"
          price={numeral(455).format("0,0")}
          total={455}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/41Q8rli-QuL._AC_SX184_.jpg"
        />
        <Product
          id="1232987645"
          title="Samsung 689 L Frost Free Side Inverter Technology Star Refrigerator (Gentle Gold, RS73R5561F8)"
          price={numeral(349).format("0,0")}
          total={349}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/410mEobWVaL._AC_SX184_.jpg"
        />
        <Product
          id="1232987646"
          title="Fabelle Choco Deck – Mini Delights, Pack of 4x164gm, 8 Mini Milk"
          price={numeral(680).format("0,0")}
          total={680}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/51gRm2ujNjL._AC_SX184_.jpg"
        />
      </div>
    </div>
  );
}

export default HomePage;
