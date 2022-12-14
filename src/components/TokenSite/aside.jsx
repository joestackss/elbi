import React from "react";
import ColumnOne from "../../components/TokenSite/SubmitPage/ColumnOne";
import ColumnOne1 from "../../components/TokenSite/SubmitPage/ColumnOne1";
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
        image="/Trophy.svg"
      />
      <ColumnOne
        title="Newborn Tokens"
        content="Trending"
        content1="Binance"
        content2="Etherum"
        content3="Dogechain"
        image="/fire.svg"
      />
      <ColumnOne
        title="Telegram Channels"
        content="@jadensafecalls"
        content1="@bsc safe sniper"
        content2="@doxxedChannel"
        image="/telegram-icon.svg"
      />
      <ColumnOne1 title="Airdrops" image="/airdrop.svg" />
      <ColumnOne1 title="Contract Scanner" image="/contract.svg" />
      <ColumnOne
        title="Advertise"
        content="Traffic Stats"
        content1="Promote Coins"
        content2="Banners"
        image="/advertise.svg"
      />
      <Button />
    </div>
  );
};

export default Aside;
