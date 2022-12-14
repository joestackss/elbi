import React from "react";

const TokenDetailAside = () => {
  return (
    <section className=" max-w-[100%]">
      <div>
        <div className="btn-wide btn-primary-variant flex items-center justify-center">
          <img src="/thumbs-up.svg" alt="" className="mr-2" />
          <button className="">Vote Phenix</button>
        </div>
        <div className="btn-wide btn-green-variant my-4 flex items-center justify-center">
          <img src="/share.svg" alt="" className="mr-2" />
          <button className="">Shill More</button>{" "}
        </div>
        <div className="btn-wide btn-orange-variant flex items-center justify-center">
          <img src="/crown.svg" alt="" className="mr-2" />
          <button className="">Promote</button>{" "}
        </div>

        <hr className="my-4" />

        <h4 className="mr-4 phenix mb-2">Phenix</h4>
        <h4 className="price">$0.002214</h4>

        <div className="flex justify-between items-center my-4">
          <div className="green-box flex justify-center items-center flex-col">
            <h4>5m</h4>
            <h3>0.6%</h3>
          </div>
          <div className="green-box flex justify-center items-center flex-col">
            <h4>1h</h4>
            <h3>1.0%</h3>
          </div>
          <div className="green-box flex justify-center items-center flex-col">
            <h4>6h</h4>
            <h3>-2.7%</h3>
          </div>
          <div className="green-box flex justify-center items-center flex-col">
            <h4>24h</h4>
            <h3>-4.%</h3>
          </div>
        </div>

        <div className="volume-data flex flex-wrap justify-between items-center bg-[#2D3463]">
          <div className="col-1 w-[24%]">5m</div>
          <div className="col-1 w-[24%] bg-[#564691]">1h</div>
          <div className="col-1 w-[24%]">6h</div>
          <div className="col-1 w-[24%]">24h</div>
          <div className="col-1 w-[24%] flex flex-col">
            <div className="gray-text">TXN</div>

            <div className="my-2">7</div>
          </div>
          <div className="col-1 w-[24%] flex flex-col">
            <div className="gray-text">Buy</div> <div className="my-2">7</div>
          </div>
          <div className="col-1 w-[24%] flex flex-col ">
            <div className="gray-text">Sell</div>
            <div className="my-2">2</div>
          </div>
          <div className="col-1 w-[24%] flex flex-col">
            <div className="gray-text">Volume</div>
            <div className="my-2">$404,228</div>
          </div>
        </div>

        <div className="volume-data flex flex-wrap justify-between items-center my-4">
          <div className="col-1 w-[50%] flex flex-col">
            <div className="gray-text">Buy/Sell Fee</div>{" "}
            <div className="my-2">10%/14%</div>
          </div>
          <div className="col-1 w-[50%] flex flex-col ">
            <div className="gray-text">Liquidity</div>
            <div className="my-2">$107,816</div>
          </div>
          <div className="col-1 w-[50%] flex flex-col">
            <div className="gray-text">Total Supply</div>
            <div className="my-2">600.0M</div>
          </div>
          <div className="col-1 w-[50%] flex flex-col">
            <div className="gray-text">600.0M</div>
            <div className="my-2">$1.33M</div>
          </div>
        </div>

        <div className="flex justify-between items-center my-4 w-[100%]">
          <div className="green-box box flex justify-center items-center flex-col w-[50%]">
            <h4 className="mb-1">#Holders</h4>
            <h3>5118</h3>
          </div>
          <div className="green-box box flex justify-center items-center flex-col w-[50%]">
            <h4 className="mb-1">Diversity</h4>
            <h3>Excellent</h3>
          </div>
          <div className="green-box box flex justify-center items-center flex-col w-[50%]">
            <h4 className="mb-1">Reputation</h4>
            <h3>Excellent</h3>
          </div>
        </div>

        <hr className="my-4" />

        <div className="my-8">
          <div className="time-high flex justify-between">
            <h3 className="gray-text">All Time High</h3>
            <h4 className="text-[#ffffff]">$0.008330</h4>
          </div>
          <div className="time-high flex justify-between">
            <h3 className="gray-text">Oct 11, 2022, 12:04 AM</h3>
            <h4 className="text-[#FF5151]">-73.42%</h4>
          </div>
        </div>

        <div>
          <div className="time-high flex justify-between">
            <h3 className="gray-text">All Time High LP</h3>
            <h4 className="text-[#ffffff]">$242,072</h4>
          </div>

          <div className="time-high flex justify-between">
            <h3 className="gray-text ">Nov 11, 2022, 12:04 AM</h3>
            <h4 className="text-[#FF5151]">-10.72%</h4>
          </div>
        </div>

        <hr className="my-4" />

        <div>
          <div className="btn-wide btn-purple-variant mb-3 flex items-center justify-center">
            <img src="/m-icon.svg" alt="" className="mr-2" />
            <button className="">Visit on CoinMarketCap</button>
          </div>
          <div className="btn-wide btn-purple-variant mb-3 flex items-center justify-center">
            <img src="/turtle-icon.svg" alt="" className="mr-2" />
            <button className="">Visit CoinGecko</button>
          </div>
          <div className="btn-wide btn-purple-variant mb-3 flex items-center justify-center">
            <img src="/contract.svg" alt="" className="mr-2" />
            <button className="">Check Contract</button>
          </div>
          <div className="btn-wide btn-purple-variant mb-3 flex items-center justify-center">
            <img src="/frog.svg" alt="" className="mr-2" />
            <button className="">Trade on MMFinance</button>
          </div>
          <div className="btn-wide btn-purple-variant mb-3 flex items-center justify-center">
            <img src="/shield.svg" alt="" className="mr-2" />
            <button className="">Scan Contract</button>
          </div>
        </div>

        <hr className="my-4" />

        <div className="flex flex-wrap justify-between">
          <div className="btn-wide-1 btn-purple-variant mb-3 flex items-center justify-center">
            <img src="/web.svg" alt="" className="mr-2" />
            <button className="">Website</button>
          </div>
          <div className="btn-wide-1 btn-purple-variant mb-3 flex items-center justify-center">
            <img src="/telegram-icon.svg" alt="" className="mr-2" />
            <button className="">Telegram</button>
          </div>
          <div className="btn-wide-1 btn-purple-variant mb-3 flex items-center justify-center">
            <img src="/twitter-icon.svg" alt="" className="mr-2" />
            <button className="">Twitter</button>
          </div>
          <div className="btn-wide-1 btn-purple-variant mb-3 flex items-center justify-center">
            <img src="/discord.svg" alt="" className="mr-2" />
            <button className="">Discord</button>
          </div>
        </div>

        <hr className="my-4" />

        <div className="flex justify-center items-center">
          <h4 className="text-[#ffffff]">Launched on Mar 22, 2022</h4>
        </div>
      </div>
    </section>
  );
};

export default TokenDetailAside;
