import React from "react";

function AboutUs() {
  return (
    <section
      id="aboutUs"
      className="p-2.5 tablet:p-0  snap-start min-w-screen min-h-screen pt-10 laptop:pt-0 laptop:px-[26px] flex flex-col-reverse laptop:flex-row text-center  items-center overflow-hidden"
    >
      <div className="w-[350px] tablet:w-10/12 laptop:w-6/12 h-full laptop:h-8/12 flex flex-col items-center laptop:justify-around justify-evenly   ">
        <h2 className="font-sub-heading text-2xl tablet:text-[40px]">
          A montage of familiar faces and names.
        </h2>
        <p className="font-text text-[14px] tablet:text-[24px] text-center  tablet:w-[550px]">
          Some stories come from the biggest names. Others begin with bold,
          rising voices. We’ve been fortunate to walk alongside both -
          listening, creating, and building stories that matter.
        </p>
        <div className="flex ">
          <div className="w-40  tablet:w-[235px] rotate-10 relative left-5 laptop:left-5">
            <img src="Note-Page.svg" alt="notesPage" />
            <span className="absolute top-1 left-10 tablet:left-15 pt-5 ">
              <p className="text-4xl tablet:text-7xl laptop:text-[80px] font-text text-[#103255]">
                85+
              </p>
              <p
                className="
            font-text tablet:text-[24px]
 text-[#F15D2B]            "
              >
                Projects
              </p>
            </span>
          </div>
          <div className="w-40  tablet:w-[235px] rotate-10 relative">
            <img src="Note-Page.svg" alt="notesPage" />
            <span className="absolute top-1 left-10 tablet:left-15 pt-5 ">
              <p className="text-4xl tablet:text-7xl laptop:text-[80px] font-text text-[#103255]">
                50+
              </p>
              <p
                className="
            font-text tablet:text-[24px]
 text-[#F15D2B]            "
              >
                Happy Clients
              </p>
            </span>
          </div>
          <div className="w-40  tablet:w-[235px] rotate-10 relative right-5 laptop:right-5">
            <img src="Note-Page.svg" alt="notesPage" />
            <span className="absolute top-1 left-10 tablet:left-15 pt-5 ">
              <p className="text-4xl tablet:text-7xl laptop:text-[80px] font-text text-[#103255]">
                10+
              </p>
              <p
                className="
            font-text tablet:text-[24px]
 text-[#F15D2B]            "
              >
                Experts Team
              </p>
            </span>
          </div>{" "}
        </div>
      </div>
      <div
        className=" tablet:w-10/12 h-6/12 laptop:h-10/12
       laptop:w-6/12 p-[26px] flex flex-col "
      >
        <h1
          className="font-heading text-[#0F3255] text-center tracking-tight  leading-[100%] 
        laptop:text-[50px] tablet:text-7xl text-5xl
        "
        >
          Every project is more than just a brief - it’s a new chapter waiting
          to be written. Together, we've crafted tales that inspire, connect,
          and endure.
        </h1>

        <img
          src="About.svg"
          alt="mountainImage"
          className="hidden laptop:block w-[820px] relative -bottom-[30px]"
        />
      </div>
    </section>
  );
}

export default AboutUs;
