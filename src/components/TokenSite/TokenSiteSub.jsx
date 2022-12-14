import React from "react";
import Ads from "./ads";
import Aside from "./aside";
import TokenInfo from "./info";
import TokenInfoHead from "./info-head";
import TokenInfo1 from "./info1";
import Price from "./price";

const TokenSiteSub = () => {
  return (
    <div className="main-token">
      <div className="aside">
        <Aside />
      </div>

      <main className="hero">
        <Price />
        <div className="ads-container">
          <Ads />
          <h2>Promoted</h2>
          <TokenInfoHead />
          <TokenInfo />
          <TokenInfo1 />
          <TokenInfo />
          <TokenInfo1 />
          <TokenInfo />
          <TokenInfo1 />
          <TokenInfo />
          <TokenInfo1 />
        </div>
      </main>
    </div>
  );
};

export default TokenSiteSub;
