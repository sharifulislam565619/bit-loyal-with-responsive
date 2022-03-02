import React from "react";
import img1 from "../../images/banner-img/img1.png";
import img2 from "../../images/banner-img/img2.png";
import img3 from "../../images/banner-img/img3.png";
import img4 from "../../images/banner-img/img4.png";
import logo from "../../images/icon/image 7.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="banner_section">
      <div className="title">
        <h1 className="banner-title text-nowrap">XXX is</h1>
        <h2 className="banner-title1 text-nowrap">XXXXXXXX Platform</h2>
      </div>
      <img className="banner-img" data-ttt src={require('../../images/banner-img/Pink_elipse.png')} alt="img" />
      <img className="banner-img1" src={img1} alt="" />
      <img className="banner-img2" src={img2} alt="" />
      <img className="banner-img3" src={img3} alt="" />
      <img className="banner-img4" src={img4} alt="" />
      <div className="whitelist">
        <div>
          <p>
            The white list is already! <br /> open Check it now
          </p>
          <p className="wallet">
            <a href="#" >
              Get Whitelisted
            </a>
            <img src={logo} alt="" />
          </p>
          <a className="condition" href="#">
            Our Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
