import React from "react";

function AboutTeam() {
  return (
    <section
      id="aboutTeam"
      className=" relative
       p-2.5 tablet:p-0 snap-start min-w-screen min-h-screen py-20 laptop:py-0 laptop:px-[26px] flex flex-col laptop:flex-row justify-evenly items-center"
    >
      <img
        src="Indiagate.svg"
        className=" hidden laptop:block absolute tablet:left-10 laptop:left-20
         bottom-10  tablet:w-[350px]  laptop:w-[442px] laptop:h-[200px]"
        alt="Indiagate image"
      />
      <div className="absolute top-20 laptop:top-5 laptop:left-48  tablet:-rotate-10 tablet:w-[500px] laptop:w-[540px] h-[500.64px] flex flex-col items-center gap-4 text-center">
        <img
          src="paperClip.svg"
          alt="paper clip"
          className="w-[500px]"
        />
        <p className="absolute p-10 laptop:p-15 z-10 text-[22px] tablet:text-[24px] text-left  tracking-wide font-sub-heading leading-tight">
          Some craft films. Some build brands. Some curate art. We bring it all
          together — a collective of storytellers driven by one belief: every
          project deserves to be more than just a message; it should become a
          masterpiece. <br /> From first spark to final frame, from raw ideas to
          timeless visuals — we shape stories that stay with you.
        </p>
      </div>

      <div
        className="
        absolute bottom-30 tablet:bottom-50 tablet:left-1/2  tablet:-translate-x-[100px] px-2.5 laptop:px-0
        "
      >
        <img
          src="People.svg"
          alt="People image"
          className="
      w-[500px]  tablet:w-[1050px]"
        />
        <p
          className="absolute font-heading text-[24px] tablet:text-[42px] text-[#103255] left-1/5 -top-10 tablet:-top-15
        "
        >
          Film Makers
        </p>
        <p className=" absolute font-heading text-[24px] tablet:text-[42px] text-[#103255] left-0 tablet:-left-20   -bottom-5 tablet:-bottom-10 laptop:bottom-5">
          Branding Experts
        </p>
        <p className="absolute font-heading text-[24px] tablet:text-[42px] text-[#103255] top-0 tablet:-top-5 laptop:top-10 right-2 tablet:-right-20">
          Art Curators
        </p>
      </div>
    </section>
  );
}

export default AboutTeam;
