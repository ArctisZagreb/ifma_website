"use client";
import React from "react";

const IntroVideo = () => {
  return (
    <div className="max-sm:pt-[100px]">
      <video className="w-full" autoPlay={true} loop={true} muted>
        <source src="/video/ifma.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default IntroVideo;
