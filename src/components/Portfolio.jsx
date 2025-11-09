import React from "react";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="p-2.5 snap-start min-w-screen min-h-screen py-20 laptop:py-0 laptop:px-[22px] flex flex-col laptop:flex-row justify-around tablet:justify-evenly items-center relative"
    >
      {/* Camera Image */}
      <img
        src="Cam.svg"
        alt="camera"
        className="hidden tablet:block w-[180px] right-4/5 absolute -z-10"
      />
      <div className="flex flex-col items-center ">
        {/* heading */}
        <div className="text-center">
          <h3 className="font-sub-heading text-[#252729] text-[40px]">
            The Highlight Reel
          </h3>
          <p className="font-text text-lg tablet:text-2xl">Watch the magic we’ve captured.</p>
        </div>
        {/* Video*/}
        <div className="relative top-20">
          <img src="portfolio.svg" alt="video" className="tablet:w-[980px] " />
          <img
            src="Play.svg"
            alt="playbtn"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hover:scale-115 cursor-pointer w-[50px] tablet:w-[100px]"
          />
        </div>
      </div>

      {/* bottom circle */}
      <img
        src="Footerircle.svg"
        alt="footercircle"
        className="absolute -z-10 top-1/2  translate-x-full"
      />
    </section>
  );
}

export default Portfolio;
