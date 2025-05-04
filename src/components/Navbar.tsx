"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState} from "react";
import { HiMenu, HiX } from "react-icons/hi"; 

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/Servise", label: "Servise" },
    { href: "/Gallary", label: "Gallary" },
    { href: "/Conatact", label: "Conatact" },
  ];

  return (
    <nav className="w-full fixed bg-[#1e0e3e] text-white px-6 py-4 shadow-md z-50">
      <div className="mx-auto flex justify-between items-center max-w-7xl">
        <div className="text-2xl font-bold">Rajesh Sakar</div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>
        <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
          <div className="flex flex-col items-center">
            <button
              onClick={() => setIsActive(!isActive)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                isActive ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              <div
                className={`absolute w-6 h-6 ${
                  isActive ? "bg-gray-500" : "bg-white"
                } rounded-full top-0 transition-transform duration-300 ${
                  isActive ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative group hover:text-gray-300 transition-colors"
            >
              <span
                className={`after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-out ${
                  pathname === href && label !== "Home"
                    ? "after:w-full animate-underlineGrow"
                    : "after:w-0 group-hover:after:w-full"
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 px-4 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-gray-300"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
