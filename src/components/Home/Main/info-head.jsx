import React from "react";

const TokenInfoHead = () => {
  return (
    <div className="info-main">
      <div className="thead theading">
        <div className="col-icon">{/* <h3>Icon</h3> */}</div>

        <div className="col-1">
          <h3>Name</h3>
        </div>

        <div className="col-2">
          <h3>Social</h3>
        </div>

        <div className="col-3">
          <h3>1h%</h3>
        </div>

        <div className="col-4">
          <h3>24h%</h3>
        </div>

        <div className="col-5">
          <h3>TXN</h3>
        </div>

        <div className="col-6">
          <h3>Volume</h3>
        </div>

        <div className="col-7">
          <h3>Market Cap</h3>
        </div>

        <div className="col-8">
          <h3>LP</h3>
        </div>

        <div className="col-9">
          <h3>Age</h3>
        </div>

        <div className="col-10">
          <h3>Vote</h3>
        </div>
      </div>
    </div>
  );
};

export default TokenInfoHead;
