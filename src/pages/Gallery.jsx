import pixelenv from "../assets/gallery/pixelenv.jpeg";
import sophpixelart from "../assets/gallery/sophpixelart.jpeg";
import Potion from "../assets/gallery/Potion.png";
import Weapons from "../assets/gallery/Weapons.png";
import Knight from "../assets/gallery/Knight.gif";
import Chopper from "../assets/gallery/chopper.jpeg";

import { useState } from "react";

const artworks = [
  {
    id: 1,
    title: "Pixel Landscape",
    category: "Artwork",
    image: pixelenv,
    desc: "A cozy Artwork landscape.",
  },
  {
    id: 2,
    title: "Pixel Potrait",
    category: "Artwork",
    image: sophpixelart,
    desc: "A Artwork character with dark hair and a simple outfit.",
  },
  {
    id: 3,
    title: "Potion",
    category: "Artwork",
    image: Potion,
    desc: "Drink it to increase your HP",
  },
  {
    id: 4,
    title: "Pixel Weapons",
    category: "Artwork",
    image: Weapons,
    desc: "Choose your weapon",
  },
  {
    id: 5,
    title: "Knight",
    category: "Artwork",
    image: Knight,
    desc: "A pixel art knight swinging a sword",
  },
  {
    id: 6,
    title: "Choppaimon",
    category: "Artwork",
    image: Chopper,
    desc: "Chopper from One Piece",
  },
];

const categories = ["All", "Artwork", "UI Design", "Illustration"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    active === "All" ? artworks : artworks.filter((a) => a.category === active);

  return (
    <section className=" relative min-h-screen px-6 md:px-16 pt-20 pb-40">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-green-brand text-sm font-semibold tracking-widest uppercase">
          Creative Work
        </p>
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2">
          My Gallery
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-md mx-auto text-sm">
          A collection of pixel art, UI designs, and illustrations I've made.
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
        {filtered.map((art) => (
          <div
            key={art.id}
            onClick={() => setSelected(art)}
            className="flex-none not-only:group relative bg-white dark:bg-[#151B19] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-4">
              <span className="text-xs text-green-brand font-medium">
                {art.category}
              </span>
              <h3 className="font-semibold text-gray-900 dark:text-white mt-1">
                {art.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                {art.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white dark:bg-[#151B19] rounded-2xl overflow-hidden max-w-2xl min-w-125 w-fit shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full max-h-125 object-cover"
            />
            <div className="p-6">
              <span className="text-xs text-green-brand font-medium">
                {selected.category}
              </span>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                {selected.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                {selected.desc}
              </p>
              <button
                onClick={() => setSelected(null)}
                className="mt-4 px-5 py-2 rounded-full bg-green-brand text-white text-sm font-medium"
              >
                Close
              </button>
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
