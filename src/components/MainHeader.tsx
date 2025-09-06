
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

interface MainHeaderProps {
  NAV_LINKS: Array<{ label: string; href: string }>;
}

export const MainHeader = ({ NAV_LINKS }: MainHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Update header style when scrolled
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [NAV_LINKS]);

  return (
    <nav 
      className={`w-full sticky top-0 z-40 flex items-center justify-between px-6 py-3 transition-all duration-300 ${
        scrolled 
          ? "bg-black/80 backdrop-blur-md shadow-lg border-b border-white/20" 
          : "bg-black border-b border-white/10"
      }`}
    >
      <span className="font-bold tracking-wide text-xl text-white relative group cursor-pointer">
        SS
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
      </span>
      
      <div className="hidden md:flex gap-6 items-center">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`relative px-2 py-1 transition-all duration-300 ${
              activeSection === link.href.substring(1) 
                ? "text-yellow-300" 
                : "text-white hover:text-yellow-300"
            } group`}
          >
            <span className="relative z-10">{link.label}</span>
            <span 
              className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-300 transition-all duration-300 ${
                activeSection === link.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
            <span className="absolute inset-0 bg-yellow-300/0 rounded-md -z-0 transition-all duration-300 group-hover:bg-yellow-300/10"></span>
          </a>
        ))}
        <ThemeToggle />
      </div>
      
      <button
        className="block md:hidden p-2 rounded focus:outline-none text-white"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? (
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className="w-5 h-0.5 bg-white transform rotate-45 translate-y-0.5"></span>
            <span className="w-5 h-0.5 bg-white transform -rotate-45 -translate-y-0"></span>
          </div>
        ) : (
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1">
            <span className="w-5 h-0.5 bg-white"></span>
            <span className="w-5 h-0.5 bg-white"></span>
            <span className="w-5 h-0.5 bg-white"></span>
          </div>
        )}
      </button>

      {menuOpen && (
        <div className="md:hidden z-50 absolute top-16 right-0 left-0 bg-black/95 border-b border-white/20 py-4 shadow-md text-white backdrop-blur-md">
          <div className="flex flex-col items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative w-full text-center py-3 transition-all duration-300 hover:text-yellow-300 hover:bg-yellow-300/10 ${
                  activeSection === link.href.substring(1) ? "text-yellow-300" : "text-white"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                <span 
                  className={`absolute -bottom-1 left-1/4 right-1/4 h-0.5 bg-yellow-300 transition-all duration-300 ${
                    activeSection === link.href.substring(1) ? "w-1/2 mx-auto" : "w-0 mx-auto"
                  }`}
                ></span>
              </a>
            ))}
            <div className="pt-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
