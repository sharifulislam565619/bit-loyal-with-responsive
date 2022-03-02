import React from "react";
import aboutUs from "../../images/aboutUs.png";
import "./About.css";

const About = () => {
  return (
    <div
      id="about_section"
      className="container about"
      style={{ marginTop: "50px" }}
    >
      <div className="row">
        <div className="col-md-7 text-start">
          <h2 className="text-center text-md-start mb-3" style={{ color: "#FFFF14", fontSize: "64px" }}>About Us</h2>
          <p className="text-white para_content">
            Bit Royale (<span className="royal">"Royale"</span>) is the most
            promising NFT game of 2022. In it you can purchase your{" "}
            <span className="royal">"Royale"</span> tokens and use them to get
            your NFT heroes, trainers and Lands to play our P2E game. The P2E
            game will feature IDLE battle mechanisms in our{" "}
            <span className="pve">PVE</span> mode and also a strategic
            turn-based <span className="pve">PVE</span> mode, where the player
            can challenge their opponents to earn more tokens, and thus, evolve
            their NFT team, or sell their tokens on the market . The project has
            an innovative economy system, which differs from all current
            projects on the Blockchain. A modern reinvestment system will be
            used in the game, as well as revenue from ads within our social
            networks, website and game, where all the amount collected will
            allow us to realize periodically “buyback” the{" "}
            <span className="royal">"Royale"</span> token directly on the{" "}
            <span style={{ color: "#FFFF14" }}>DEXs</span>. Completing our
            metaverse, a second project for the{" "}
            <span className="royal">"Royale"</span> token will also be made,
            where it will bring real utility to the token, thus making it scarce
            and valuable.
          </p>
        </div>
        <div className="col-md-5 h-auto">
          <div className="h-100 d-flex justify-content-center align-items-center">
            <img className="about_us_img" src={aboutUs} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
