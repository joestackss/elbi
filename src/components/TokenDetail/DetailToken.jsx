import React from "react";
import Ads from "../TokenSite/ads";
import Aside from "../TokenSite/aside";
import Price from "../TokenSite/price";
import WatchList from "./WatchList";

const DetailToken = () => {
  return (
    <div className="main-token">
      <div className="aside">
        <Aside />
      </div>

      <main className="hero">
        <Price />

        <div className="ads-container">
          <Ads />
          <WatchList />
        </div>
      </main>
    </div>
  );
};

export default DetailToken;
