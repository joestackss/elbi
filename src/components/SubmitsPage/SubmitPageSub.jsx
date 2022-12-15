import React from "react";
import Aside from "../TokenSite/aside";

const SubmitPageSub = () => {
  return (
    <div className="main-token">
      <div className="aside">
        <Aside />
      </div>

      <main className="hero ">
        <div className="submit-main">
          <div className="ads-container submit-page" id="submit-page">
            <h2 className="mb-4">Submit a Project</h2>

            <div className="bg-[#242B43] p-8">
              <hr className="my-4" />

              <div className="flex justify-between items-end">
                <div className="">
                  <h2 className="">Upload a Token Logo</h2>
                  <div className="py-4">
                    <img src="/question-mark.svg" alt="question-mark" />
                  </div>
                  <h4 className="gray-text">Please Upload Your Logo</h4>
                  <span className="text-[#FF5151]"> (Required) </span>
                </div>

                <div className="flex flex-col ">
                  <h4 className="gray-text text-sm">
                    Optimal dimensions 512x512px, size up to 1MB
                  </h4>
                  <div className="my-4 flex ">
                    <button className="btn-wide-1 btn-purple-variant-1">
                      Upload
                    </button>
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <h3 className="my-4">Project Information</h3>

              <div className="input-column">
                <div className="mb-10">
                  <h5 className="mb-2">
                    Blockchain{" "}
                    <span className="text-[#FF5151]"> (Required) </span>
                  </h5>
                  <div className="label flex justify-between items-center w-[100%]">
                    <div className="w-5%">
                      <img src="/binance.svg" alt="" />
                    </div>
                    <label className="w-[90%]">
                      {" "}
                      <input
                        type="text"
                        placeholder="Binance Smart Chain (BSC)"
                      />{" "}
                    </label>
                    <div className="w-[5%] flex justify-between ">
                      <img src="/cross.svg" alt="" />
                      <img src="/drop-down.svg" alt="" />
                    </div>
                  </div>
                </div>

                <div className="input-column mb-10">
                  <h5 className="mb-2">
                    Contract Address ✅
                    <span className="text-[#FF5151]"> (Required) </span>
                  </h5>
                  <div className="label flex justify-between items-center w-[100%]">
                    <label className="w-[100%]">
                      {" "}
                      <input
                        type="text"
                        placeholder="0x4ee58e4e634183169fcb84b5e02694a94d9a93d4"
                      />{" "}
                    </label>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="input-column  mb-10 w-[48%]">
                    <h5 className="mb-2">
                      Name
                      <span className="text-[#FF5151]"> (Required) </span>
                    </h5>
                    <div className="label flex justify-between items-center w-[50%]">
                      <label className="w-[50%]">
                        {" "}
                        <input type="text" placeholder="Alpha Protocall" />{" "}
                      </label>
                    </div>
                  </div>

                  <div className="input-column  mb-10 w-[48%]">
                    <h5 className="mb-2">
                      Symbol
                      <span className="text-[#FF5151]"> (Required) </span>
                    </h5>
                    <div className="label flex justify-between items-center w-[50%]">
                      <label className="w-[50%]">
                        {" "}
                        <input type="text" placeholder="$Alpha" />{" "}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="input-column  mb-10">
                  <h5 className="mb-2">Is this a presale project?</h5>
                  <div className="flex">
                    <label className="w-[10%] flex justify-center items-center">
                      <input
                        type="checkbox"
                        className="mr-2 input-checkbox"
                        id="input-checkbox"
                      />
                      Yes
                    </label>
                    <label className="w-[10%] flex justify-center items-center">
                      <input type="checkbox" className="mr-2" />
                      No
                    </label>
                  </div>
                </div>

                <div className="input-column  mb-10">
                  <h5 className="mb-2">
                    Launch Date
                    <span className="text-[#FF5151]"> (Required) </span>
                  </h5>
                  <div className="label flex justify-between items-center w-[100%]">
                    <label className="w-[100%]">
                      {" "}
                      <input type="text" placeholder="11/12/22" />{" "}
                    </label>
                  </div>
                </div>

                <div className="input-column  mb-10">
                  <h5 className="mb-2">
                    Description
                    <span className="text-[#FF5151]"> (Required) </span>
                  </h5>
                  <div className="label flex justify-between items-center w-[100%]">
                    <label className="w-[100%] h-[157px]">
                      {" "}
                      <input
                        type="textarea"
                        placeholder="Describe your NFT/Token here. What are your goal and plans, why is this project unique."
                      />{" "}
                    </label>
                  </div>
                </div>

                <div className="input-column  mb-10">
                  <h5 className="mb-2">Website Link</h5>
                  <div className="label flex justify-between items-center w-[100%]">
                    <label className="w-[100%]">
                      {" "}
                      <input
                        type="text"
                        placeholder="Website (htttp://website.com)"
                      />{" "}
                    </label>
                  </div>
                </div>

                <div className="input-column  mb-10">
                  <h5 className="mb-2">Twitter Link</h5>
                  <div className="label flex justify-between items-center w-[100%]">
                    <label className="w-[100%]">
                      {" "}
                      <input
                        type="text"
                        placeholder="Twitter (http://twitter.com)"
                      />{" "}
                    </label>
                  </div>
                </div>

                <div className="input-column  mb-10">
                  <h5 className="mb-2">Discord Link</h5>
                  <div className="label flex justify-between items-center w-[100%]">
                    <label className="w-[100%]">
                      {" "}
                      <input
                        type="text"
                        placeholder="Discord (http://discord.com)"
                      />{" "}
                    </label>
                  </div>
                </div>

                <div className="input-column  mb-10">
                  <h5 className="mb-2">Facebook Link</h5>
                  <div className="label flex justify-between items-center w-[100%]">
                    <label className="w-[100%]">
                      {" "}
                      <input type="text" placeholder="Facebook Link" />
                    </label>
                  </div>
                </div>

                <div className="input-column  mb-10">
                  <h5 className="mb-2">Reddit Link</h5>
                  <div className="label flex justify-between items-center w-[100%]">
                    <label className="w-[100%]">
                      {" "}
                      <input
                        type="text"
                        placeholder="Reddit (http://reddit.com)"
                      />
                    </label>
                  </div>
                </div>

                <div className="input-column  mb-10">
                  <h5 className="mb-2">Linktree.ee</h5>
                  <div className="label flex justify-between items-center w-[100%]">
                    <label className="w-[100%]">
                      {" "}
                      <input
                        type="text"
                        placeholder="Linktree (http://linktr.ee.)"
                      />
                    </label>
                  </div>
                </div>

                <h6 className="text-[#FF5151] text-sm">Please Upload A Logo</h6>

                <hr className="my-4" />

                <div className="bg-[#FFECBE] p-4 rounded-md">
                  <h4 className="text-[#71500A] text-sm text-center ">
                    Every submit will undergo manual review, it may take up to 8
                    hours. Promoted coins will automatically become verified.
                  </h4>
                </div>

                <div className="bg-[#5D5FEF] p-4 my-6 text-center rounded-md">
                  <button className="text-gray text-sm">Submit Coin</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubmitPageSub;
