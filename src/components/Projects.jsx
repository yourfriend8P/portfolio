import TickTockDoImg from "../assets/projects/TickTockDo.png";
import RideSharingImg from "../assets/projects/RideSharing.jpg";
import WireframeImg from "../assets/projects/Wireframe.png";
const projects = [
  {
    title: "TickTockDo",
    tags: ["JavaScript", "Tailwind CSS"],
    desc: "A cozy pixel art productivity app built with React + Vite. Combines a todo list and pomodoro timer in one place, with a warm brown/beige pixel aesthetic, custom pixel fonts, sound effects, lofi music player, and localStorage persistence.",
    image: TickTockDoImg,
    link: "https://tick-tock-do.vercel.app/todo",
  },
  {
    title: "Ride Sharing App Prototype",
    tags: ["Figma", "Prototyping"],
    desc: "A clean and user-friendly ride-booking mobile app designed in Figma, featuring onboarding, authentication, ride booking, and a streamlined user experience.",
    image: RideSharingImg,
    link: "https://www.figma.com/proto/vOsSLYuikdhWqCqAhJJZuw/Driver-Booking-App?node-id=0-1&t=Fcg6sLazVfkD6CiT-1",
  },
  {
    title: "Wireframe To High-Fedelity design",
    tags: ["Figma"],
    desc: "Designed and prototyped a personal portfolio website in Figma, progressing from low-fidelity wireframes to a polished high-fidelity UI with a calm, nature-inspired aesthetic.",
    image: WireframeImg,
    link: "https://www.figma.com/proto/B0R3WIk1yb0rLJ9i7ViLhr/Portfolio-Design?node-id=91-272&t=WIIktAMcGwMB8hMO-1",
  },
];

export default function Projects() {
  return (
    <section className="px-6 md:px-32 py-20" id="projects">
      <div className="flex justify-between items-center mb-8 dark:text-[#EDEFEC]">
        <h2 className="text-2xl font-bold">My Previous Projects</h2>
        <a
          className="text-sm text-green-brand font-medium cursor-pointer"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "https://www.shakyaprabal.com.np/Projects.pdf";
            link.target = "_blank";
            link.click();
          }}
        >
          View All →
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md hover-raise hover:ring-1 hover:ring-green-brand transition-all duration-300 ease-in-out dark:bg-[#151B19]"
          >
            <div className="bg-blue-50 rounded-xl h-50 mb-4">
              <img src={p.image} className="h-full w-full" />
            </div>
            <div className="flex gap-2 mb-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-gray-100 px-2 py-1 rounded-full dark:bg-[#1B2220] dark:text-[#EDEFEC]"
                >
                  {t}
                </span>
              ))}
            </div>
            <h3 className="font-semibold text-base dark:text-[#EDEFEC]">
              {p.title}
            </h3>
            <p className="text-gray-500 text-sm mt-1 line-clamp-3 dark:text-[#9BA6A1]">
              {p.desc}
            </p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              <button
                className="
                w-full mt-4 
                bg-green-brand 
                text-white 
                py-2 
                rounded-lg 
                text-sm 
                font-medium 
                hover:bg-green-dark  
                transition-all duration-300 ease-in-out
                hover-raise 
                hover:shadow-(--glow) 
                cursor-pointer
                dark:text-black"
              >
                View Project
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
