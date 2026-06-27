import {
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaGithub,
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
                href="https://www.linkedin.com/in/prabal-shakya-14267627a/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/yourfriend8P"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <FaGithub className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/yourfriend._.o/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/Praba1.shakya"
                target="_blank"
                rel="noopener noreferrer"
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
                <a
                  onClick={() =>
                    document.getElementById("home")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    document.getElementById("about")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  My Projects
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    document.getElementById("blog")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Blogs & Articles
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-white transition-colors cursor-pointer"
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
                <a
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  TickTockDo
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Ride Sharing App
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Project 2
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Project 3
                </a>
              </li>
              <li>
                <a
                  Ride
                  Sharing
                  App
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Project 4
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
