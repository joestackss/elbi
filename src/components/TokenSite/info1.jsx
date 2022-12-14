import React from "react";

const TokenInfo1 = () => {
  return (
    <div className="info-main">
      {/* CONTENT */}

      <div className="thead thead-1 " id="token-light">
        <div className="col-icon">
          <img src="/heart-icon.svg" alt="heart" />
        </div>

        <div className="col-1">
          <div className="inner-1">
            <img src="/turtle-icon.svg" alt="turtle" />
            <img src="/m-icon.svg" alt="m" />
          </div>
          <div>
            <img src="/fox-icon.svg" alt="fox" />
          </div>
          <div className="inner-3">
            <h3>Golden Sparrows</h3>
            <div className="icon-col flex">
              <img src="/c-icon.svg" alt="c" className="mr-2" />
              <img src="/c-icon-1.svg" alt="c" />
            </div>
          </div>
        </div>

        <div className="col-2">
          <img src="/twitter-icon.svg" alt="twitter-icon" />
          <img src="/telegram-icon.svg" alt="telegram-icon" />
          <img src="/world-icon.svg" alt="world-icon" />
        </div>

        <div className="col-3">
          <h3 className="text-green">-0.59%</h3>
        </div>

        <div className="col-4">
          <h3 className="text-red">-0.59%</h3>
        </div>

        <div className="col-5">
          <h3>125</h3>
        </div>

        <div className="col-6">
          <h3>$37K</h3>
        </div>

        <div className="col-7">
          <h3>$1.9M</h3>
        </div>

        <div className="col-8">
          <h3>$261K</h3>
        </div>

        <div className="col-9">
          <h3>8 Months</h3>
        </div>

        <div className="col-10">
          <h3>🚀 11531</h3>
        </div>
      </div>
    </div>
  );
};

export default TokenInfo1;
