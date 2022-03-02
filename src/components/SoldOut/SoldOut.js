import React, { useState } from "react";
import img from "../../images/banner-img/img.png";
import img1 from "../../images/banner-img/img1.png";
import img2 from "../../images/banner-img/img2.png";
import img3 from "../../images/banner-img/img3.png";
import img4 from "../../images/banner-img/img4.png";
import logo from "../../images/icon/image 7.png";
import "../MintBanner/MintBanner.css";
import Navigation from "../Navigation/Navigation";
import SoldOutBanner from "../SoldOutBanner/SoldOutBanner";
const SoldOut = () => {
  return (
    <div id="home">
      <Navigation></Navigation>

      <SoldOutBanner></SoldOutBanner>
    </div>
  );
};

export default SoldOut;
