import React from "react";

const ColumnOne = ({
  title,
  content,
  content1,
  content2,
  content3,
  content4,
  image,
}) => {
  return (
    <div className="asides">
      <div className="col-1">
        <div >
          <div className="inner">
            <div className="col-1">
              <img src={image} alt="ic" />
            </div>
            <div className="mb-4">
              <h3> {title}</h3>
            </div>
          </div>

          <div className="inner">
            <div className="col-1">
              {/* <img src="/fire.svg" alt="trophy-icon" /> */}
            </div>
            <div className="mb-4">
              <h4>{content}</h4>
            </div>
          </div>

          <div className="inner">
            <div className="col-1">
              {/* <img src="/trophy.png" alt="trophy-icon" /> */}
            </div>
            <div className="mb-4">
              <h4>{content1}</h4>
            </div>
          </div>

          <div className="inner">
            <div className="col-1">
              {/* <img src="/trophy.png" alt="trophy-icon" /> */}
            </div>
            <div className="mb-4">
              <h4>{content2}</h4>
            </div>
          </div>

          <div className="inner">
            <div className="col-1">
              {/* <img src="/trophy.png" alt="trophy-icon" /> */}
            </div>
            <div className="mb-4">
              <h4>{content3 ? content3 : ""}</h4>
            </div>
          </div>

          <div className="inner">
            <div className="col-1">
              {/* <img src="/trophy.png" alt="trophy-icon" /> */}
            </div>
            <div className="mb-4">
              <h4>{content4 ? content4 : ""}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnOne;
