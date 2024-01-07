import React from "react";

const Skeleton = () => {
  return (
    <div className="main-body">
      {Array(20)
        .fill("")
        .map((elem, index) => (
          <div key={index} className="skeleton-card">
            <div className="skeleton-image"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
          </div>
        ))}
    </div>
  );
};

export default Skeleton;
