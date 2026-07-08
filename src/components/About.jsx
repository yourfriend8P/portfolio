// components/About.jsx
import MyPhoto from "../assets/myphoto.jpeg";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";

const skills = [
  { name: "Figma", bg: "#D6E4F9" },
  { name: "C++", bg: "#FFFADD" },
  { name: "Prototyping", bg: "#F2F9F1" },
  { name: "SQL", bg: "#8BB5F7" },
  { name: "React", bg: "#FCE9DC" },
  { name: "JavaScript", bg: "#C8E8B6" },
];

export default function About() {
  return (
    <section
      className="relative overflow-hidden px-6 md:px-32 py-20 grid md:grid-cols-3 gap-15 items-center justify-items-center min-h-[80vh]"
      id="about"
    >
      {/* Left: Text */}
      <div className="flex flex-col gap-8 ml-1 ">
        <p className="text-sm font-bold dark:text-[#3ECF8E]">About Me</p>
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium dark:text-[#9BA6A1]">
            Hi there, I'm
          </p>
          <h2 className="text-5xl font-bold dark:text-[#EDEFEC]">
            PRABAL <br />
            SHAKYA
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed dark:text-[#9BA6A1]">
            A Computer Science student passionate about UI/UX design, pixel art,
            and creating visually engaging digital experiences, with
            project-based experience in C++, JavaScript, and React Development
          </p>
        </div>
        <div className="flex gap-3">
          <button
            className="
            bg-green-brand 
            text-white px-5 py-2 
            rounded-full 
            text-sm 
            transition-all 
            duration-300 
            ease-in-out
            hover:bg-green-dark 
            hover-raise 
            hover:shadow-(--glow)
            cursor-pointer
            dark:text-black"
          >
            Contact Me
          </button>
          <button
            className="
            border 
            border-gray-300 
            px-5 py-2 
            rounded-full 
            text-sm  
            transition-all duration-300 ease-in-out
            hover-raise
            hover:shadow-(--glow) 
             hover:border-[#3ECF8E]
            hover:text-green-dark 
            dark:text-[#EDEFEC]"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Center: Profile card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center relative w-100 h-130] dark:bg-[#1B2220]">
        {/* Social icons top-right */}
        <div className="absolute top-8 right-8 flex flex-col gap-3">
          <a
            href="https://www.linkedin.com/in/prabal-shakya-14267627a/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/Praba1.shakya"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/yourfriend8P"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
          >
            <FaGithub />
          </a>
        </div>

        {/* Profile image — tall, centered */}
        <div className="w-full h-full bg-gray-200 rounded-2xl overflow-hidden">
          <img
            src={MyPhoto}
            alt="Prabal"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Status */}
        <p className="mt-auto pt-4 text-xs text-green-brand font-medium">
          ● Available for freelance & collaboration
        </p>
      </div>

      {/* Right: Skill tags */}
      <div className="flex flex-col gap-3 w-60">
        {skills.map((skill, index) => (
          <span
            key={skill.name}
            style={{
              animationDelay: `${index * 0.3}s`,
              backgroundColor: skill.bg,
              boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.25)",
            }}
            className={`px-[20px] py-[10px] rounded-full text-sm font-medium float-animation w-fit
        ${index % 2 === 0 ? "self-start" : "self-end"}`}
          >
            {skill.name}
          </span>
        ))}
      </div>
      <svg
        className="absolute left-0 top-0 h-full w-auto hidden md:block text-[#E2F0FB] dark:text-[#12261F]"
        viewBox="-31 0 155 912"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMid meet"
      >
        <path
          d="M77.475 814.447C74.269 807.725 72.6053 800.371 72.6053 792.924L72.6053 741.957C72.6053 722.688 67.0385 703.83 56.5745 687.651L37.3838 657.978C32.1518 649.888 29.3684 640.459 29.3684 630.825L29.3684 600.707C29.3684 579.922 22.8915 559.653 10.8384 542.719L-31 483.939L-31 0L-31 912H124L77.475 814.447Z"
          fill="currentColor"
        />
      </svg>

      <svg
        className="absolute right-0 top-0 h-full w-auto hidden md:block text-[#E2F0FB] dark:text-[#12261F]"
        viewBox="-31 0 155 912"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid meet"
        style={{ transform: "scaleX(-1)" }}
      >
        <path
          d="M77.475 814.447C74.269 807.725 72.6053 800.371 72.6053 792.924L72.6053 741.957C72.6053 722.688 67.0385 703.83 56.5745 687.651L37.3838 657.978C32.1518 649.888 29.3684 640.459 29.3684 630.825L29.3684 600.707C29.3684 579.922 22.8915 559.653 10.8384 542.719L-31 483.939L-31 0L-31 912H124L77.475 814.447Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
