import React, { useState } from "react";
import img from "../../images/banner-img/img.png";
import img1 from "../../images/banner-img/img1.png";
import img2 from "../../images/banner-img/img2.png";
import img3 from "../../images/banner-img/img3.png";
import img4 from "../../images/banner-img/img4.png";
import logo from "../../images/icon/image 7.png";
import '../MintBanner/MintBanner.css';
import "../Banner/Banner.css";
const SoldOutBanner = () => {
    const [counter, setCounter] = useState(1);
    return (
        <div id="banner_section" className="MintBanner position-relative">
            <h1 className="banner-title">XXX is</h1>
            <h2 className="banner-title1">XXXXXXXX Platform</h2>
            <img className="banner-img" src={img} alt="" />
            <img className="banner-img1" src={img1} alt="" />
            <img className="banner-img2" src={img2} alt="" />
            <img className="banner-img3" src={img3} alt="" />
            <img className="banner-img4" src={img4} alt="" />
            <div className="whitelist">
                <div className="mint_control_box">
                    <h2 className="text-center mb-3 mt-5 price_counter">
                        All Sold Out
                    </h2>
                    <div className="controler_action text-start">
                        <span className="ms-4 d-inline-block mb-2">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0L15.0547 8.9453L24 12L15.0547 15.0547L12 24L8.9453 15.0547L0 12L8.9453 8.9453L12 0Z" fill="url(#paint0_radial_27_1159)" />
                                <defs>
                                    <radialGradient id="paint0_radial_27_1159" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(12 12) rotate(90) scale(12)">
                                        <stop stopColor="#FFE814" />
                                        <stop offset={1} stopColor="#FFA114" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </span>
                        <button className="btn_mint_action rounded-pill">
                            <img style={{ width: '30px', height: '30px' }} src={require('../../images/opensea.png')}
                                alt="img" />
                            Buy on Opensea</button>
                    </div>
                </div>
            </div>

            {/* <button className="btn btn_floating_box">
                <img src={require("../../images/floatin_icon.png")} alt="img" />
            </button> */}
        </div>
    );
};

export default SoldOutBanner;
