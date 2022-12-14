import React from "react";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navs">
        <div className="col-1 ">
          <div className="inner-1">
            <img src="/hamburger-menu.svg" alt="hamburger-icon" />
          </div>
          <div className="inner-2">
            <h2>LOGO HERE</h2>
          </div>
        </div>
        <div className="col-3">
          <div className="input">
            <img src="/search.svg" alt="search-icon" />
            <input type="text" placeholder="Search Tokens" />
          </div>
        </div>
        <div className="col-4">
          <div className="inner">
            <h2>
              {" "}
              ETH <span className="span"> -1.02% </span> <br />{" "}
              <span className="price"> $1200</span>
            </h2>
          </div>
          <div className="inner">
            <h2>
              {" "}
              BNB<span className="span"> -0.67% </span> <br />{" "}
              <span className="price"> $270.12</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
