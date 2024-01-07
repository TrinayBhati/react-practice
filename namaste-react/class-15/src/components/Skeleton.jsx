import React from "react";

const Skeleton = () => {
  return (
    <div className="flex flex-wrap justify-between">
      {Array(20)
        .fill("")
        .map((elem, index) => (
          <div
            key={index}
            className="flex flex-col justify-center shadow-2xl w-60 h-80 m-1 rounded-md bg-slate-500 p-5"
          >
            <div className="rounded-md h-2/3 mb-2 shadow-lg bg-slate-600"></div>
            <div className="rounded-md h-7 mb-2  shadow-lg bg-slate-600 "></div>
            <div className="rounded-md h-7 mb-2  shadow-lg bg-slate-600 "></div>
            <div className="rounded-md h-7 mb-2  shadow-lg bg-slate-600 "></div>
          </div>
        ))}
    </div>
  );
};

export default Skeleton;
