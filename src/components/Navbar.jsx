// components/Navbar.jsx
import { useState } from "react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-4 sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <div className="flex items-center gap-2 font-bold text-lg">
        <img src={Logo} /> Prabal {/* replace with your logo */}
      </div>
      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
      </ul>
      <button className="bg-green-brand rounded-full px-5 py-2 text-sm font-medium hidden md:block shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-white">
        Contact Me
      </button>
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
