import React from "react";
import ebike from "../assets/ebike.png";
function LoadingScene() {
  return (
    <div className="z-0 w-screen h-screen content-center grid justify-center justify-items-center">
      <img src={ebike} className="max-w-screen-md" alt="" />
      <div className="w-full flex justify-center mt-6">
        <div className="loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScene;
