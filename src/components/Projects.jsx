const projects = [
  {
    title: "Project 5",
    tags: ["JavaScript", "Tailwind CSS"],
    desc: "Lorem ipsum dolor sit amet consectetur. Vitae quisque lorem porta morbi tellus. Magna sit molestie maecenas sed viverra phasellus. Posuere egestas auctor mauris magna massa ac aliquet dignissim mi. ",
  },
  { title: "Project 4", tags: ["Python", "Bootstrap"], desc: "..." },
  { title: "Project 3", tags: ["Ruby", "Material UI"], desc: "..." },
];

export default function Projects() {
  return (
    <section className="px-6 md:px-16 py-20" id="projects">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">My Previous Projects</h2>
        <a href="#" className="text-sm text-green-brand font-medium">
          View All →
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="bg-blue-50 rounded-xl h-40 mb-4" />{" "}
            {/* project image */}
            <div className="flex gap-2 mb-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <h3 className="font-semibold text-base">{p.title}</h3>
            <p className="text-gray-500 text-sm mt-1 line-clamp-3">{p.desc}</p>
            <button className="w-full mt-4 bg-green-brand text-white py-2 rounded-lg text-sm font-medium">
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
