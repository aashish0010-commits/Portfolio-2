import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Example icons from react-icons

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close menu on click for mobile
  };

  const getLinkClass = (link) => {
    return activeLink === link ? "bg-black" : "hover:bg-customHover1";
  };

  return (
    <div className="fixed w-full top-0 left-0 bg-gradient-to-r from-blue-500 to-purple-600 p-2 z-50 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl m-auto px-5">
        <div className="text-white font-bold text-lg">
          <h1 className="flex items-center h-full">AASHISH</h1>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className={`lg:flex ${menuOpen ? "flex" : "hidden"} flex-col lg:flex-row lg:items-center`}>
          <ul className="list-none flex flex-col lg:flex-row gap-3 items-center">
            <li className={`flex items-center justify-center p-1.5 border-none border-2 rounded-md ${getLinkClass("home")}`}>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className="text-white text-sm font-bold no-underline cursor-pointer flex items-center"
                onClick={() => handleClick("home")}
              >
                Home
              </Link>
            </li>
            <li className={`flex items-center justify-center p-1.5 border-none border-2 rounded-md ${getLinkClass("about")}`}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className="text-white text-sm font-bold no-underline cursor-pointer flex items-center"
                onClick={() => handleClick("about")}
              >
                About Me
              </Link>
            </li>
            <li className={`flex items-center justify-center p-1.5 border-none border-2 rounded-md ${getLinkClass("skills")}`}>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className="text-white text-sm font-bold no-underline cursor-pointer flex items-center"
                onClick={() => handleClick("skills")}
              >
                My Skills
              </Link>
            </li>
            <li className={`flex items-center justify-center p-1.5 border-none border-2 rounded-md ${getLinkClass("services")}`}>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className="text-white text-sm font-bold no-underline cursor-pointer flex items-center"
                onClick={() => handleClick("services")}
              >
                My Services
              </Link>
            </li>
            <li className={`flex items-center justify-center p-1.5 border-none border-2 rounded-md ${getLinkClass("portfolio")}`}>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className="text-white text-sm font-bold no-underline cursor-pointer flex items-center"
                onClick={() => handleClick("portfolio")}
              >
                My Portfolio
              </Link>
            </li>
            <li className={`flex items-center justify-center p-1.5 border-none border-2 rounded-md ${getLinkClass("contact")}`}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className="text-white text-sm font-bold no-underline cursor-pointer flex items-center"
                onClick={() => handleClick("contact")}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
