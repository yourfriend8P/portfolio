import {
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import Logo from "../assets/logo.png"; // your corgi logo

export default function Footer() {
  return (
    <footer className="bg-[#21C68E] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Prabal" className="w-14 h-12" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Prabal Shakya</h3>
              <p className="text-sm text-white/80 mt-1 leading-relaxed">
                UI/UX designer & CS student crafting calm, intentional digital
                experiences.
              </p>
            </div>
            {/* Social icons */}
            <div className="flex gap-3 mt-2">
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm text-white/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  My Projects
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  Blogs & Articles
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 — Projects */}
          <div>
            <h4 className="font-bold text-base mb-4">Projects</h4>
            <ul className="flex flex-col gap-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  E-Commerce Landing Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Accounting System SaaS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ride Sharing App
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Business Networking Application
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Restaurant Management System
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-white/70">
          <p>©2026, Prabal Shakya | All Rights Reserved</p>
          {/* <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
