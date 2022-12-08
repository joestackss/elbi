import React from "react";

const Button = () => {
  return (
    <div className="inner">
      <div className="col-1 ">
        <button className="button-col">Submit Coin</button>
      </div>
      <div className="aside-social-icon">
        <img src="/twitter-icon.svg" alt="twitter-icon" />
        <img src="/telegram-icon.svg" alt="telegram-icon" />
        <img src="/world-icon.svg" alt="world-icon" />
        <img src="/telegram-icon.svg" alt="telegram-icon" />
      </div>
    </div>
  );
};

export default Button;
