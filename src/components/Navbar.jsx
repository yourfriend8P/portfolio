// components/Navbar.jsx
import { useTheme } from "../context/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState } from "react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const { dark, setDark } = useTheme();

  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-4 sticky top-0 bg-white/60 dark:bg-[#0B0F0E]/60 backdrop-blur-md z-50 transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-2 font-bold text-lg dark:text-[#EDEFEC]">
        <img src={Logo} /> Prabal {/* replace with your logo */}
      </div>
      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600 dark:text-[#9BA6A1]">
        <li className="hover:text-green-dark  transition-all duration-300 ease-in-out">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-green-dark  transition-all duration-300 ease-in-out">
          <a href="#about">About Me</a>
        </li>
        <li className="hover:text-green-dark  transition-all duration-300 ease-in-out">
          <a href="#projects">Projects</a>
        </li>
        {/* <li className="hover:text-green-dark  transition-all duration-300 ease-in-out">
          <a href="#blog">Blog</a>
        </li> */}
      </ul>
      <div className="flex items-center gap-3">
        <button
          className="bg-green-brand rounded-full px-5 py-2 text-sm font-medium hidden md:block shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-white cursor-pointer hover:bg-green-dark transition-all duration-300 ease-in-out"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Contact Me
        </button>
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors"
        >
          {dark ? (
            <MdLightMode className="w-5 h-5 text-yellow-400" />
          ) : (
            <MdDarkMode className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-8 md:hidden">
          <a href="#about" onClick={() => setOpen(false)}>
            About Me
          </a>
          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
