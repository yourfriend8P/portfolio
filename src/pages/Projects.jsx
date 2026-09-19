import { useState } from "react";
import projects from "../projectData";

const categories = ["All", "Web App", "UI Design", "CS Project"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);
  const [zoom, setZoom] = useState(null); // add this

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="relative min-h-screen px-6 md:px-16 pt-20 pb-40">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-green-brand text-sm font-semibold tracking-widest uppercase">
          My Work
        </p>
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2">
          Projects
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-md mx-auto text-sm">
          A collection of web apps, UI designs, and ML projects I've built.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-3 justify-center flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${
                active === cat
                  ? "bg-green-brand text-white shadow-[0_4px_12px_rgba(33,198,142,0.4)]"
                  : "bg-gray-100 dark:bg-[#151B19] text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#1B2220]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filtered.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelected(p)}
            className="group bg-white dark:bg-[#151B19] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden h-52 bg-gray-100 dark:bg-[#1B2220]">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  No preview
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1 overflow-hidden">
              <span className="text-xs text-green-brand font-medium">
                {p.category}
              </span>
              <h3 className="font-semibold text-gray-900 dark:text-white mt-1">
                {p.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 flex-1 line-clamp-2">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap mt-3">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-gray-100 dark:bg-[#1B2220] text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white dark:bg-[#151B19] rounded-2xl overflow-y-auto max-w-3xl w-full shadow-2xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <div className="sticky top-0 z-10 flex justify-end p-3 bg-white/80 dark:bg-[#151B19]/80 backdrop-blur-sm">
              <button
                onClick={() => setSelected(null)}
                className="p-2 rounded-full bg-gray-100 dark:bg-[#1B2220] text-gray-600 dark:text-gray-400 hover:bg-gray-200 transition-colors text-lg leading-none"
              >
                ✕
              </button>
            </div>

            {/* Project info */}
            <div className="px-6 pb-6">
              <span className="text-xs text-green-brand font-medium">
                {selected.category}
              </span>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                {selected.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                {selected.desc}
              </p>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap mt-3 pb-4">
                {selected.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-gray-100 dark:bg-[#1B2220] px-2 py-1 rounded-full text-gray-600 dark:text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Scrollable screenshots with heading and desc */}
              <div className="flex flex-col gap-8 px-4 pb-4">
                {selected.screenshots && selected.screenshots.length > 0 ? (
                  selected.screenshots.map((shot, i) => (
                    <div key={i} className="flex flex-col gap-3">
                      <div className="px-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                          {shot.heading}
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 leading-relaxed">
                          {shot.desc}
                        </p>
                      </div>
                      <div
                        className="relative group cursor-pointer"
                        onClick={() => setZoom(shot)}
                      >
                        <img
                          src={shot.image}
                          alt={shot.heading}
                          className="w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                        {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-xl transition-all duration-300 flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-medium bg-black/50 px-3 py-1 rounded-full transition-opacity duration-300">
                            Click to expand
                          </span>
                        </div> */}
                      </div>

                      {/* divider between screenshots except last */}
                      {i < selected.screenshots.length - 1 && (
                        <div className="border-b border-gray-100 dark:border-[#262E2B] mt-2" />
                      )}
                    </div>
                  ))
                ) : (
                  <div className="w-full h-48 bg-gray-100 dark:bg-[#1B2220] flex items-center justify-center text-gray-400 rounded-xl">
                    No preview
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-5 sticky bottom-0 p-3 bg-white/80 dark:bg-[#151B19]/80 backdrop-blur-sm">
                <a
                  href={selected.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-full bg-green-brand text-white text-sm font-medium hover:bg-green-dark transition-colors"
                >
                  {selected.label == null ? "View Demo" : selected.label}
                </a>

                <a
                  href={selected.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1B2220] transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Zoom overlay */}
      {zoom && (
        <div
          className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-6"
          onClick={() => setZoom(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoom(null)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              ✕ Close
            </button>
            <img
              src={zoom.image}
              alt={zoom.heading}
              className="w-full rounded-2xl object-contain max-h-[80vh]"
            />
            <div className="mt-4 text-center">
              <h4 className="text-white font-semibold">{zoom.heading}</h4>
            </div>
          </div>
        </div>
      )}
      <svg
        className="absolute bottom-0 left-0 w-1/2 text-[#E2F0FB] dark:text-[#12261F]"
        viewBox="0 0 456 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-6.5875 46.3696C-2.88056 43.5737 1.19774 41.3078 5.52987 39.6371L99.6262 3.34937C116.134 -3.01691 134.778 -0.184649 148.651 10.797L161.96 21.3325C170.793 28.3246 181.728 32.129 192.993 32.129H213.57C225.644 32.129 237.31 36.4981 246.414 44.4293L294.883 86.6553H652H-21L-60 86.6553L-6.5875 46.3696Z"
          fill="currentColor"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-1/2 text-[#21C68E] dark:text-[#1C4434]"
        viewBox="0 0 400 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMax meet"
      >
        <path
          d="M36.6196 21.3614C48.0022 28.0013 60.9437 31.5 74.1213 31.5C90.8817 31.5 107.151 37.157 120.296 47.5552L123.923 50.4245C130.126 55.3308 137.802 58 145.711 58C162.663 58 179.043 64.1311 191.828 75.2621L214.5 95H457H0V0L36.6196 21.3614Z"
          fill="currentColor"
        />
      </svg>

      {/* Bottom Right Hills */}
      <svg
        className="absolute bottom-0 right-0 w-1/2 text-[#E2F0FB] dark:text-[#12261F]"
        viewBox="0 0 900 155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMax meet"
      >
        <path
          d="M814.447 46.525C807.725 49.731 800.371 51.3947 792.924 51.3947H741.957C722.688 51.3947 703.83 56.9615 687.651 67.4255L657.978 86.6162C649.888 91.8482 640.459 94.6316 630.825 94.6316H600.707C579.922 94.6316 559.653 101.108 542.719 113.162L483.939 155H0H912V0L814.447 46.525Z"
          fill="currentColor"
        />
      </svg>
      <svg
        className="absolute bottom-0 right-0 w-1/2 text-[#21C68E] dark:text-[#1C4434]"
        viewBox="0 0 720 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMax meet"
      >
        <path
          d="M698.348 13.5703C690.962 17.6363 682.668 19.7684 674.236 19.7684H638.102C618.883 19.7684 600.071 25.3067 583.918 35.7203L563.918 48.6135C555.842 53.8204 546.436 56.5895 536.826 56.5895H517.778C497.044 56.5895 476.823 63.0343 459.913 75.0321L413.447 108H0H723V0L698.348 13.5703Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
