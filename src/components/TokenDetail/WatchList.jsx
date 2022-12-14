import React from "react";
import TokenDetailAside from "./TokenDetailAside";

const WatchList = () => {
  return (
    <section className="watchlist bg-[#242B43] mt-4">
      <div className="main ">
        <div className="column-1 ">
          <div className="inner-1">
            <div className="inner-img mr-4">
              <img src="/pheonix-logo.png" alt="pheonix-logo" />
            </div>

            <div className="inner-content">
              <div className="part-1">
                <div className="sec-1">
                  <div className="cols">
                    <img src="/star.svg" alt="active-star" />
                    <h4 className="">Promoted</h4>
                  </div>

                  <div className="cols">
                    <img src="/star-unactive.svg" alt="unactive-star" />
                    <h4>Add to Watchlist</h4>
                  </div>
                </div>

                <div className="sec-2">
                  <h4 className="mr-4">Phenix</h4>
                  <div className="flex mx-2">
                    <img src="/m-icon.svg" alt="m-icon" className="mx-2" />
                    <img src="/turtle-icon.svg" alt="turtle-icon" />
                  </div>
                </div>

                <h4 className="text-white mb-4">
                  0x52438441073A33b6FcBc70fa3F3F334F2dA19906
                </h4>

                <h4 className="text-white mb-4">Network: Cronos</h4>
                <div className="flex w-[100%]">
                  <div className="flex bg-[#2C4265] p-2 border-radius mr-4 items-center h-[40px]">
                    <div className="w-[50%] mr-2">
                      <h4>Votes</h4>
                    </div>
                    <div className="bg-[#4D9FEB] p-2  w-[60%] border-radius items-center">
                      <h4>3.7K</h4>
                    </div>
                  </div>
                  <div className="flex bg-[#2C4265] p-2 border-radius mr-4 items-center h-[40px]">
                    <img src="/telegram-icon.svg" alt="" className="mr-2" />
                    <div className="bg-[#4D9FEB] p-2 w-[60%] border-radius items-center">
                      <h4>17.0K</h4>
                    </div>
                  </div>
                  <div className="flex bg-[#2C4265] p-2 border-radius mr-4 items-center h-[40px]">
                    <img src="/telegram-icon.svg" alt="" className="mr-2" />
                    <div className="bg-[#4D9FEB] p-2 w-[60%] border-radius items-center">
                      <h4>17.0K</h4>
                    </div>
                  </div>
                  <div className="flex bg-[#2C4265] p-2 border-radius mr-4 items-center h-[40px]">
                    <img src="/telegram-icon.svg" alt="" className="mr-2" />
                    <div className="bg-[#4D9FEB] p-2  w-[60%] border-radius items-center">
                      <h4>17.0K</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4" />

        <h4 className="phenix mb-4">About Phenix</h4>
        <p className="phenix-paragraph mb-8">
          Phenix Finance is a DeFi project launched on the CRONOS Chain which
          provides its users with an automated high-yield auto-staking protocol
          which makes passive income easy, secure, and sustainable. We introduce
          our one of a kind RX3 Protocol which governs our auto-staking token
          system.
        </p>

        <hr className="my-4" />

        <div className="flex w-[100%] ">
          <div className="w-[50%]">
            <button className="btn btn-primary">Cronos Chart</button>
          </div>
          <div className="w-[50%]">
            <button className="btn btn-primary-outline">Polygon Chart</button>
          </div>
        </div>

        <div className="my-4">
          <img src="/graph.png" alt="" />
        </div>

        <div>
          <div className="flex w-[100%]">
            <div className="w-[70%] bg-[#37C771] px-2 py-1 flex justify-end">
              <h4 className="text-white">$315</h4>
            </div>
            <div className="w-[30%] bg-[#FF5151] px-2 py-1">
              <h4 className="text-white">$15</h4>
            </div>
          </div>

          <div className="flex flex-col mt-4 ">
            <div className="token-header flex bg-[#27314A] h-[41px] items-center p-4 ">
              <div className="w-[10%]"></div>
              <div className="w-[18%] data-body">Time</div>
              <div className="w-[18%] data-body">Volume</div>
              <div className="w-[18%] data-body">PHNX</div>
              <div className="w-[18%] data-body">Price</div>
              <div className="w-[18%] data-body">Transactions</div>
            </div>

            <div className="token-detail flex bg-[#192034] h-[58px] items-center p-4">
              <div className="w-[10%] data-body text-[#7FEEAB]">Buy</div>
              <div className="w-[18%]">
                <div className="data-body text-[#7FEEAB]">20:42:36</div>

                <div className="data-body text-[#7FEEAB]">Nov 22</div>
              </div>
              <div className="w-[18%] data-body text-[#7FEEAB]">$64.20</div>
              <div className="w-[18%] data-body text-[#7FEEAB]">28,999.35</div>
              <div className="w-[18%] data-body text-[#7FEEAB]">$0.002</div>
              <div className="w-[18%] data-body text-[#588BFF]">
                0x1c76..494
              </div>
            </div>

            <div className="token-detail flex bg-[#131722] h-[58px] items-center p-4">
              <div className="w-[10%] data-body text-[#7FEEAB]">Buy</div>
              <div className="w-[18%]">
                <div className="data-body text-[#7FEEAB]">20:42:36</div>

                <div className="data-body text-[#7FEEAB]">Nov 22</div>
              </div>
              <div className="w-[18%] data-body text-[#7FEEAB]">$64.20</div>
              <div className="w-[18%] data-body text-[#7FEEAB]">28,999.35</div>
              <div className="w-[18%] data-body text-[#7FEEAB]">$0.002</div>
              <div className="w-[18%] data-body text-[#588BFF]">
                0x1c76..494
              </div>
            </div>

            <div className="token-detail flex bg-[#192034] h-[58px] items-center p-4">
              <div className="w-[10%] data-body text-[#FF5151]">Buy</div>
              <div className="w-[18%]">
                <div className="data-body text-[#FF5151]">20:42:36</div>

                <div className="data-body text-[#FF5151]">Nov 22</div>
              </div>
              <div className="w-[18%] data-body text-[#FF5151]">$64.20</div>
              <div className="w-[18%] data-body text-[#FF5151]">28,999.35</div>
              <div className="w-[18%] data-body text-[#FF5151]">$0.002</div>
              <div className="w-[18%] data-body text-[#588BFF]">
                0x1c76..494
              </div>
            </div>

            <div className="token-detail flex bg-[#131722] h-[58px] items-center p-4">
              <div className="w-[10%] data-body text-[#7FEEAB]">Buy</div>
              <div className="w-[18%]">
                <div className="data-body text-[#7FEEAB]">20:42:36</div>

                <div className="data-body text-[#7FEEAB]">Nov 22</div>
              </div>
              <div className="w-[18%] data-body text-[#7FEEAB]">$64.20</div>
              <div className="w-[18%] data-body text-[#7FEEAB]">28,999.35</div>
              <div className="w-[18%] data-body text-[#7FEEAB]">$0.002</div>
              <div className="w-[18%] data-body text-[#588BFF]">
                0x1c76..494
              </div>
            </div>

            <div className="token-detail flex bg-[#192034] h-[58px] items-center p-4">
              <div className="w-[10%] data-body text-[#7FEEAB]">Buy</div>
              <div className="w-[18%]">
                <div className="data-body text-[#7FEEAB]">20:42:36</div>

                <div className="data-body text-[#7FEEAB]">Nov 22</div>
              </div>
              <div className="w-[18%] data-body text-[#7FEEAB]">$64.20</div>
              <div className="w-[18%] data-body text-[#7FEEAB]">28,999.35</div>
              <div className="w-[18%] data-body text-[#7FEEAB]">$0.002</div>
              <div className="w-[18%] data-body text-[#588BFF]">
                0x1c76..494
              </div>
            </div>

            <div className="token-detail flex bg-[#131722] h-[58px] items-center p-4">
              <div className="w-[10%] data-body text-[#FF5151]">Buy</div>
              <div className="w-[18%]">
                <div className="data-body text-[#FF5151]">20:42:36</div>

                <div className="data-body text-[#FF5151]">Nov 22</div>
              </div>
              <div className="w-[18%] data-body text-[#FF5151]">$64.20</div>
              <div className="w-[18%] data-body text-[#FF5151]">28,999.35</div>
              <div className="w-[18%] data-body text-[#FF5151]">$0.002</div>
              <div className="w-[18%] data-body text-[#588BFF]">
                0x1c76..494
              </div>
            </div>

            <div className="token-detail flex bg-[#192034] h-[58px] items-center p-4">
              <div className="w-[10%] data-body text-[#7FEEAB]">Buy</div>
              <div className="w-[18%]">
                <div className="data-body text-[#7FEEAB]">20:42:36</div>

                <div className="data-body text-[#7FEEAB]">Nov 22</div>
              </div>
              <div className="w-[18%] data-body text-[#7FEEAB]">$64.20</div>
              <div className="w-[18%] data-body text-[#7FEEAB]">28,999.35</div>
              <div className="w-[18%] data-body text-[#7FEEAB]">$0.002</div>
              <div className="w-[18%] data-body text-[#588BFF]">
                0x1c76..494
              </div>
            </div>

            <div className="token-detail flex bg-[#131722] h-[58px] items-center p-4">
              <div className="w-[10%] data-body text-[#7FEEAB]">Buy</div>
              <div className="w-[18%]">
                <div className="data-body text-[#7FEEAB]">20:42:36</div>

                <div className="data-body text-[#7FEEAB]">Nov 22</div>
              </div>
              <div className="w-[18%] data-body text-[#7FEEAB]">$64.20</div>
              <div className="w-[18%] data-body text-[#7FEEAB]">28,999.35</div>
              <div className="w-[18%] data-body text-[#7FEEAB]">$0.002</div>
              <div className="w-[18%] data-body text-[#588BFF]">
                0x1c76..494
              </div>
            </div>

            <div className="token-detail flex bg-[#192034] h-[58px] items-center p-4">
              <div className="w-[10%] data-body text-[#7FEEAB]">Buy</div>
              <div className="w-[18%]">
                <div className="data-body text-[#7FEEAB]">20:42:36</div>

                <div className="data-body text-[#7FEEAB]">Nov 22</div>
              </div>
              <div className="w-[18%] data-body text-[#7FEEAB]">$64.20</div>
              <div className="w-[18%] data-body text-[#7FEEAB]">28,999.35</div>
              <div className="w-[18%] data-body text-[#7FEEAB]">$0.002</div>
              <div className="w-[18%] data-body text-[#588BFF]">
                0x1c76..494
              </div>
            </div>

            <div className="token-detail flex bg-[#131722] h-[58px] items-center p-4">
              <div className="w-[10%] data-body text-[#7FEEAB]">Buy</div>
              <div className="w-[18%]">
                <div className="data-body text-[#7FEEAB]">20:42:36</div>

                <div className="data-body text-[#7FEEAB]">Nov 22</div>
              </div>
              <div className="w-[18%] data-body text-[#7FEEAB]">$64.20</div>
              <div className="w-[18%] data-body text-[#7FEEAB]">28,999.35</div>
              <div className="w-[18%] data-body text-[#7FEEAB]">$0.002</div>
              <div className="w-[18%] data-body text-[#588BFF]">
                0x1c76..494
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between">
          <div className="gray-text">
            Incase of missing or misleading information please contact us OR
          </div>
          <div className="gray-text">ID:63562</div>
        </div>

        <div className="flex w-[100%] my-4 bg-[#27366A] items-center justify-center btn-wide">
          <img src="/shield.svg" alt="" className="mr-2" />
          <div className="">Submit Token Information Update</div>
        </div>

        <hr className="my-4" />
      </div>

      <div className="aside">
        <div className="w-[100%]">
          <TokenDetailAside />
        </div>
      </div>
    </section>
  );
};

export default WatchList;
