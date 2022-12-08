import React from "react";
import ColumnOne from "../../SubmitPage/ColumnOne";
import ColumnOne1 from "../../SubmitPage/ColumnOne1";
import Button from "./button";

const Aside = () => {
  return (
    <div className="">
      <ColumnOne
        title="Top 100 Lists"
        content="1h Gainers"
        content1="24h Gainers"
        content2="New Listings"
        content3="Daily Top"
        content4="All Time Top"
      />
      <ColumnOne
        title="Newborn Tokens"
        content="Trending"
        content1="Binance"
        content2="Etherum"
        content3="Dogechain"
      />
      <ColumnOne
        title="Telegram Channels"
        content="@jadensafecalls"
        content1="@bsc safe sniper"
        content2="@doxxedChannel"
      />
      <ColumnOne1 title="Airdrops" />
      <ColumnOne1 title="Contract Scanner" />
      <ColumnOne
        title="Advertise"
        content="Traffic Stats"
        content1="Promote Coins"
        content2="Banners"
      />
      <Button />
    </div>
  );
};

export default Aside;
