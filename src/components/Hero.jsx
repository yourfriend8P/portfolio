// components/Hero.jsx
export default function Hero() {
  return (
    <section
      className="relative text-center pt-20 pb-0 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center"
      id="home"
    >
      {/* Clouds (use absolute positioned divs or SVG) */}
      <p className="text-green-brand text-sm font-semibold tracking-widest uppercase">
        UI/UX Designer & CS Student
      </p>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-3 leading-tight">
        Where Calm Meets Creativity
      </h1>
      <p className="text-gray-500 mt-4 max-w-md mx-auto">
        Designing meaningful experiences that feel effortless
      </p>
      <div className="flex gap-4 justify-center mt-8">
        <button className="bg-green-brand hover:bg-gray-200 px-6 py-3 rounded-full font-medium text-white ">
          View My Works
        </button>
        <button className="border border-gray-800 px-6 py-3 rounded-full font-medium">
          Download CV
        </button>
      </div>
      <svg
        className="absolute bottom-0 left-0 w-1/2"
        viewBox="0 0 456 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-6.5875 46.3696C-2.88056 43.5737 1.19774 41.3078 5.52987 39.6371L99.6262 3.34937C116.134 -3.01691 134.778 -0.184649 148.651 10.797L161.96 21.3325C170.793 28.3246 181.728 32.129 192.993 32.129H213.57C225.644 32.129 237.31 36.4981 246.414 44.4293L294.883 86.6553H652H-21L-60 86.6553L-6.5875 46.3696Z"
          fill="#E2F0FB"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-1/2"
        viewBox="0 0 400 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMax meet"
      >
        <path
          d="M36.6196 21.3614C48.0022 28.0013 60.9437 31.5 74.1213 31.5C90.8817 31.5 107.151 37.157 120.296 47.5552L123.923 50.4245C130.126 55.3308 137.802 58 145.711 58C162.663 58 179.043 64.1311 191.828 75.2621L214.5 95H457H0V0L36.6196 21.3614Z"
          fill="#21C68E"
        />
      </svg>

      {/* Bottom Right Hills */}
      <svg
        className="absolute bottom-0 right-0 w-1/2"
        viewBox="0 0 900 155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMax meet"
      >
        <path
          d="M814.447 46.525C807.725 49.731 800.371 51.3947 792.924 51.3947H741.957C722.688 51.3947 703.83 56.9615 687.651 67.4255L657.978 86.6162C649.888 91.8482 640.459 94.6316 630.825 94.6316H600.707C579.922 94.6316 559.653 101.108 542.719 113.162L483.939 155H0H912V0L814.447 46.525Z"
          fill="#E2F0FB"
        />
      </svg>
      <svg
        className="absolute bottom-0 right-0 w-1/2"
        viewBox="0 0 720 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMax meet"
      >
        <path
          d="M698.348 13.5703C690.962 17.6363 682.668 19.7684 674.236 19.7684H638.102C618.883 19.7684 600.071 25.3067 583.918 35.7203L563.918 48.6135C555.842 53.8204 546.436 56.5895 536.826 56.5895H517.778C497.044 56.5895 476.823 63.0343 459.913 75.0321L413.447 108H0H723V0L698.348 13.5703Z"
          fill="#21C68E"
        />
      </svg>

      <div className="mt-16">
        {/* Inline SVG for the green hills landscape */}
      </div>
    </section>
  );
}
