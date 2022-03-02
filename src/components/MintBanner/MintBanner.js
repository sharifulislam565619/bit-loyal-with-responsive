import React, { useState } from "react";
import img from "../../images/banner-img/img.png";
import img1 from "../../images/banner-img/img1.png";
import img2 from "../../images/banner-img/img2.png";
import img3 from "../../images/banner-img/img3.png";
import img4 from "../../images/banner-img/img4.png";
import logo from "../../images/icon/image 7.png";
import "./MintBanner.css";
import '../Banner/Banner.css'
const MintBanner = () => {
  const [counter, setCounter] = useState(1);
  return (
    <div id="banner_section" className="MintBanner position-relative">
      <h1 className="banner-title">XXX is</h1>
      <h2 className="banner-title1">XXXXXXXX Platform</h2>
      <img className="banner-img" src={require('../../images/banner-img/Pink_elipse.png')} alt="img" />

      <img className="banner-img1" src={require('../../images/banner-img/Yellow_elipse.png')} alt="img" />
      <img className="banner-img2" src={require('../../images/banner-img/Purple_elipse2.png')} alt="img" />
      <img className="banner-img3" src={img3} alt="" />
      <img className="banner-img4" src={img4} alt="" />
      <img src={require('../../images/banner-img/bg_linear.png')} alt="img" className="bg_linear" />
      <div className="whitelist">
        <div className="mint_control_box">
          <h2 className="text-center my-4 price_counter">
            {Number(counter * 0.2).toFixed(1)} ETH
          </h2>
          <div className="controler mb-4 d-flex justify-content-center text-white align-items-center">
            <button
              className="mx-2 plus_btn"
              onClick={() => setCounter(counter + 1)}
            >
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  r="19.5"
                  transform="matrix(-1 0 0 1 20 20)"
                  stroke="white"
                  strokeOpacity="0.3"
                />
                <path d="M27 20H13" stroke="white" strokeWidth={2} />
                <path d="M20 27L20 13" stroke="white" strokeWidth={2} />
              </svg>
            </button>

            <span>{counter}</span>

            <button
              className="mx-2 minus_btn"
              onClick={() => setCounter(counter - 1)}
            >
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  r="19.5"
                  transform="matrix(-1 0 0 1 20 20)"
                  stroke="white"
                  strokeOpacity="0.3"
                />
                <path
                  opacity="0.5"
                  d="M27 20H13"
                  stroke="white"
                  strokeWidth={2}
                />
              </svg>
            </button>
          </div>

          <div className="controler_action text-start">
            <span className="text-white-50 ms-4 d-inline-block mb-2">
              134 / 888
            </span>
            <button className="btn_mint_action rounded-pill">Mint</button>
          </div>
        </div>
      </div>

      {/* <button className="btn btn_floating_box">
        <img src={require("../../images/floatin_icon.png")} alt="img" />
      </button> */}
    </div>
  );
};

export default MintBanner;
