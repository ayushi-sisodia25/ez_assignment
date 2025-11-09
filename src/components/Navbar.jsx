import React, { useState } from "react";

function Navbar({ active }) {
  const isHero = active === "hero";

  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Services", path: "#services" },
    { name: "Their Stories", path: "#aboutTeam" },
    { name: "Our Story", path: "#aboutUs" },
    { name: "Varnan", path: "#hero" },
  ];

  return (
    <>
      <nav className="fixed flex justify-between items-center w-screen h-[70px] laptop:h-[100px] z-50 bg-[#FFFBFB59] px-[26px] font-text">
     {/* Logo */}
        <a href="#hero">
          <img
            src="Logo.svg"
            alt="Logo"
            className={`${
              isHero ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          />
        </a>
{/* Hidden nav */}
        <div className="flex  items-center gap-6">
          {/* DEsktop View (Horizontal) */}
          <ul
            className={` hidden laptop:flex gap-6 items-center transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className="text-lg font-medium hover:text-gray-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="flex items-center gap-3 bg-[#F15D2B] text-white p-4 rounded-3xl cursor-pointer"
                 onClick={() => setIsOpen(false)}
              >
                <p>Let’s Talk</p>
                <img src="mail.png" alt="mail" />
              </a>
            </li>
          </ul>
          {/* Mobile View (vertical) */}
          <ul
            className={`flex laptop:hidden flex-col fixed top-[70px] left-0 w-screen h-screen bg-white items-center justify-center gap-8 z-40 transition-transform duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className="text-2xl laptop:text-3xl font-medium hover:text-gray-800 transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
       
            <li>
              <a
                href="#contact"
                className="text-2xl laptop:text-3xl font-medium hover:text-gray-800 transition-colors cursor-pointer flex items-center gap-3 bg-[#F15D2B] text-white px-6 py-4 rounded-3xl "
                onClick={() => setIsOpen(false)}
              >
                <p>Let's Talk</p>
                <img src="mail.png" alt="mail" className="w-5 h-5" />
              </a>
            </li>
          </ul>
          <button
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <img
              src={`${isOpen ? "Opened" : "Closed"}.svg`}
              alt="Toggle"
            />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
