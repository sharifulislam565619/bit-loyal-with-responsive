import React from "react";
import Navigation from "../Navigation/Navigation";
import MintBanner from "../MintBanner/MintBanner";

function Mint(props) {
  return (
    <div id="home">
      <Navigation></Navigation>

      <MintBanner></MintBanner>
    </div>
  );
}

export default Mint;
