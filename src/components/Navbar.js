import { ArrowRightIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isResponsive, setResponsive] = useState(false);
  const [activeLink, setActiveLink] = useState("#about");

  const toggleResponsive = () => {
    setResponsive(!isResponsive);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    toggleResponsive();

    
    const targetSection = document.querySelector(link);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {

      const scrollPosition = window.scrollY;

      const sectionIds = ["about", "skills", "education", "projects", "volunteer", "certificates"];

      const inViewSection = sectionIds.find((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          return scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight;
        }
        return false;
      });

      if (inViewSection) {
        setActiveLink(`#${inViewSection}`);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`bg-purple-700 md:sticky top-0 z-10`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a
            href="#about"
            className={`ml-3 text-xl ${activeLink === "#about" ? 'font-bold text-white' : 'text-gray-300'}`}
            onClick={() => handleLinkClick("#about")}
          >
            Sai Kumar Reddy
          </a>
        </a>
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleResponsive}
        >
          {isResponsive ? (
            <XIcon className="w-6 h-6 text-white" />
          ) : (
            <MenuIcon className="w-6 h-6 text-white" />
          )}
        </button>
        <nav className={`md:ml-auto md:flex md:items-center ${isResponsive ? 'block' : 'hidden'}`}>
          <a
            href="#skills"
            className={`mr-5 hover:text-white ${activeLink === "#skills" ? 'font-bold text-white' : 'text-gray-300'}`}
            onClick={() => handleLinkClick("#skills")}
          >
            Skills
          </a>
          <a
            href="#education"
            className={`mr-5 hover:text-white ${activeLink === "#education" ? 'font-bold text-white' : 'text-gray-300'}`}
            onClick={() => handleLinkClick("#education")}
          >
            Education
          </a>
          <a
            href="#projects"
            className={`mr-5 hover:text-white ${activeLink === "#projects" ? 'font-bold text-white' : 'text-gray-300'}`}
            onClick={() => handleLinkClick("#projects")}
          >
            Past Work
          </a>
          <a
            href="#volunteer"
            className={`mr-5 hover:text-white ${activeLink === "#volunteer" ? 'font-bold text-white' : 'text-gray-300'}`}
            onClick={() => handleLinkClick("#volunteer")}
          >
            Volunteer
          </a>
          <a
            href="#certificates"
            className={`mr-5 hover:text-white ${activeLink === "#certificates" ? 'font-bold text-white' : 'text-gray-300'}`}
            onClick={() => handleLinkClick("#certificates")}
          >
            Certificates
          </a>
          <a
            href="https://sai-gif.github.io/contatct/"
            className={`inline-flex items-center bg-purple-800 border-0 py-2 px-4 focus:outline-none hover:bg-purple-600 rounded-full text-lg font-semibold ml-4 transition-all duration-300`}
          >
            Hire Me
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </a>
        </nav>
      </div>
    </header>
  );
}
