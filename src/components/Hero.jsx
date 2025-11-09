import React from "react";

function Hero() {
  return (
 <section
  id="hero"
  className="p-2.5 snap-start min-w-screen min-h-screen py-20 laptop:py-0 laptop:px-[26px] flex flex-col laptop:flex-row justify-around tablet:justify-evenly items-center"
>

      <img
        src="/HeroLogo.svg"
        className="place-self-center w-[200px]   tablet:w-[565px]"
        alt="VFilms Logo"
      />
      <div className=" h-full place-self-center flex flex-col items-center justify-evenly  tablet:p-[100px]">
        <h1 className="font-heading text-[50px] tablet:text-[70px] laptop:text-[100px] text-center  leading-[100%] tracking-[0] text-[#0F3255]">
          Varnan is where stories find <br /> their voice and form
        </h1>
        <p className="font-sub-heading text-[#F15D2B] text-[40px] ">
          Films . Brands . Art
        </p>
        <p className="font-text text-[#252729] text-[18px]  leading-[100%] tracking-[0] text-center tablet:w-[487px]">
          Since 2009, V’ve been telling stories - stories of people, their
          journeys, and the places that shape them. Some begin in polished
          boardrooms, others in humble village squares. But every story starts
          the same way - by listening with intention. V believes it takes trust,
          patience, and an eye for the unseen to capture what truly matters. V
          doesn’t just tell stories - V honors them.
        </p>
      </div>
    </section>
  );
}

export default Hero;
