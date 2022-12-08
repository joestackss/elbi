import React from "react";

const ColumnOne = ({
  title,
  content,
  content1,
  content2,
  content3,
  content4,
}) => {
  return (
    <div className="asides">
      <div className="col-1">
        <div>
          <div className="inner">
            <div className="col-1">
              <img src="/trophy.png" alt="trophy-icon" />
            </div>
            <div>
              <h3> {title}</h3>
            </div>
          </div>

          <div className="inner">
            <div className="col-1">
              {/* <img src="/trophy.png" alt="trophy-icon" /> */}
            </div>
            <div>
              <h4>{content}</h4>
            </div>
          </div>

          <div className="inner">
            <div className="col-1">
              {/* <img src="/trophy.png" alt="trophy-icon" /> */}
            </div>
            <div>
              <h4>{content1}</h4>
            </div>
          </div>

          <div className="inner">
            <div className="col-1">
              {/* <img src="/trophy.png" alt="trophy-icon" /> */}
            </div>
            <div>
              <h4>{content2}</h4>
            </div>
          </div>

          <div className="inner">
            <div className="col-1">
              {/* <img src="/trophy.png" alt="trophy-icon" /> */}
            </div>
            <div>
              <h4>{content3 ? content3 : ""}</h4>
            </div>
          </div>

          <div className="inner">
            <div className="col-1">
              {/* <img src="/trophy.png" alt="trophy-icon" /> */}
            </div>
            <div>
              <h4>{content4 ? content4 : ""}</h4>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default ColumnOne;
