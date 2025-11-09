import React, { useState } from "react";

function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: "film",
      title: `"Filmmaking is a chance to live many lifetimes." - Robert Altman`,
      heading: "Film Production",
      img: "FilmProduction.png",
      content: `
Art isn’t meant to sit on distant walls — it’s meant to breathe, to travel, to belong.<br/>
Through every festival, every performance, and every gathering, we help stories find their stage and their people.<br/><br/>
V curates:<br/>
<ul class="list-disc list-inside">
  <li>Art Festivals</li>
  <li>Live Performances</li>
  <li>Community Events</li>
  <li>Cultural Storytelling</li>
</ul>
`,
    },
    {
      id: "branding",
      title: `"A brand is a voice, and a product is a souvenir." - Lisa Gansky`,
      heading: "Branding",
      img: "Branding.png",
      content: `
A brand isn’t just what you see — it’s what you remember, what you carry home, and what you trust.<br/>
We shape brands that people remember, return to, and fall in love with.<br/><br/>
V creates:<br/>
<ul class="list-disc list-inside">
  <li>Branding & Communication</li>
  <li>Market Mapping</li>
  <li>Content Management</li>
  <li>Social Media Management</li>
  <li>Rebranding</li>
</ul>
`,
    },
    {
      id: "art",
      title: `"Art enables us to find ourselves and lose ourselves at the same time." - Thomas Merton`,
      heading: "Art Curation",
      img: "ArtCuration.png",
      content: `
Art connects — it tells the stories we don’t always have words for.<br/>
We curate exhibitions and installations that bring creators, collectors, and audiences together.<br/><br/>
V crafts:<br/>
<ul class="list-disc list-inside">
  <li>Art Exhibitions</li>
  <li>Collaborative Installations</li>
  <li>Gallery Partnerships</li>
  <li>Visual Storytelling</li>
</ul>
`,
    },
  ];

  const handleClick = (id) => {
    const selected = services.find((el) => el.id === id);
    setActiveService(selected || null);
  };

  // Shared Card Component
  const ServiceCard = ({ service, isActive, onClick, index }) => (
    <div
      onClick={() => onClick(service.id)}
      className={`
        cursor-pointer bg-white flex flex-col items-center
        laptop:max-w-[410.4px] min-w-[100px] tablet:min-w-[240px] min-h-[80px] tablet:min-h-[100px] laptop:min-h-[420px]
        p-2 tablet:p-5 shadow-[0px_11.4px_38px_0px_#00000040] transition-transform                              
        ${!isActive && "hover:scale-105"}
        ${index === 0 ? "laptop:rotate-8 laptop:top-10" : ""}
        ${index === 1 ? "laptop:top-20" : ""}
        ${index === 2 ? "laptop:-rotate-8 laptop:top-10" : ""}
      `}
    >
      <img
        src={service.img}
        alt={service.heading}
        className="w-[250px] laptop:w-[300px] laptop:h-[380px] object-cover"
      />
      {/* tape image only on laptop */}
      <img
        src="tape.png"
        alt="tape"
        className={`absolute laptop:w-60 h-[110px] ${
          index === 0
            ? "-left-[90px] -top-10 -rotate-25"
            : index === 1
            ? "rotate-15 top-14"
            : "-right-[90px] -top-10 rotate-25"
        }`}
      />
      <p className="font-text text-xl tablet:text-3xl tablet:pt-5">
        {service.heading}
      </p>
    </div>
  );

  return (
    <section
      id="services"
      className="relative p-2.5 pt-[70px] laptop:pt-[10px] snap-start min-w-screen min-h-screen text-center"
    >
      {/* Header */}
      <div className="flex flex-col items-center laptop:h10/12">
        <h2 className="font-sub-heading text-xl tablet:text-2xl laptop:text-[40px] leading-tight">
          {activeService
            ? activeService.title
            : "The storyboard reveals the breadth of our craft."}
        </h2>
        <img
          src="stroke.svg"
          alt="stroke"
          className={`${
            activeService
              ? "laptop:w-6xl tablet:w-2xl"
              : "laptop:w-3xl tablet:w-xl"
          }`}
        />
      </div>

      {/* Content */}
      {activeService ? (
        // DETAIL VIEW
        <div className="relative flex flex-col items-center justify-center w-full h-10/12 pt-[150px] laptop:pt-0">
          {/* Background Images */}
          <div className="absolute inset-0 -z-10 hidden tablet:block">
            {[1, 2, 3, 4].map((num) => (
              <img
                key={num}
                src={`${num}.svg`}
                alt={`bg-${num}`}
                className={`absolute ${
                  num === 1
                    ? "bottom-10 laptop:left-20"
                    : num === 2
                    ? "top-10 right-20"
                    : num === 3
                    ? "top-1/2 laptop:right-1/5 -translate-y-1/2"
                    : "bottom-10 right-20"
                }`}
              />
            ))}
            <div className="absolute hidden laptop:flex bottom-20 right-5/12 translate-x-1/2 flex-col items-center">
              <p className="font-text text-[24px] mb-2">Explore Now</p>
              <img
                src={`Vector.svg`}
                alt="arrow"
              />
            </div>
          </div>

          {/* Main content */}
          <div className="flex flex-col laptop:flex-row items-center justify-center gap-10 z-10">
            {/* Image Card */}
            <div className="laptop:max-w-[430px] bg-white p-4 tablet:p-5 shadow-[0px_11.4px_38px_0px_#00000040] flex flex-col items-center">
              <img
                src={`main.png`}
                alt={activeService.heading}
                className="max-w-full max-h-[400px] object-contain"
              />
              <p className="font-text text-xl tablet:text-3xl tablet:pt-5 text-center">
                {activeService.heading}
              </p>
            </div>

            {/* Text Content */}
            <div
              className="max-w-[500px] font-text tablet:text-2xl text-left leading-relaxed text-[#252729]"
              dangerouslySetInnerHTML={{ __html: activeService.content }}
            />
          </div>

          {/* Back Button */}
          <button
            onClick={() => setActiveService(null)}
            className="absolute top-full right-2/6 tablet:top-10 tablet:left-1/12 w-32 text-[20px] py-2 px-4 rounded-3xl border border-[#F15D2B] text-[#F15D2B] hover:scale-105 flex items-center justify-center gap-2 cursor-pointer z-10"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="#F15D2B"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </button>
        </div>
      ) : (
        // MAIN GRID
        <>
          <div className="flex flex-col laptop:flex-row justify-evenly gap-5 laptop:gap-14 items-center w-full h-full laptop:h-[70%]">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={handleClick}
                isActive={false}
                index={index}
              />
            ))}
          </div>

          {/* Footer Strip */}
          <img
            src="Footer.svg"
            alt="footer-design"
            className="absolute bottom-0 -m-2.5 -z-20 object-cover"
          />
        </>
      )}
    </section>
  );
}

export default Services;
