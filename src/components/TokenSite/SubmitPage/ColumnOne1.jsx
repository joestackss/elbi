import React from "react";

const ColumnOne1 = ({
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
        </div>
      </div>
    </div>
  );
};

export default ColumnOne1;
