// components/Hero.jsx
import { useTheme } from "../context/ThemeContext";
export default function Hero() {
  const Cloud = ({ className, size = 1 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={(101 / 1.5) * size}
      height={(54 / 1.5) * size}
      viewBox="0 0 101 54"
      fill="none"
      className={className}
    >
      <path
        d="M20.532 24.6732C20.532 15.7504 27.7653 8.51707 36.6881 8.51707H38.9671C41.7063 3.2814 47.1264 0 53.0353 0H53.5097C58.862 0 63.8883 2.57134 67.0203 6.91158L70.333 11.5024C77.9809 11.5024 84.3455 17.3782 84.9554 25.0017L85.2734 28.9756H88.4878C95.3981 28.9756 101 34.5775 101 41.4878C101 48.3981 95.3981 54 88.4878 54H14.6634C6.56504 54 0 47.435 0 39.3366C0 31.2382 6.56503 24.6732 14.6634 24.6732H20.532Z"
        fill="#E2F0FB"
      />
    </svg>
  );
  return (
    <section
      className="relative text-center pt-20 pb-0 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center"
      id="home"
    >
      <div className="hero-glow"></div>
      {/* Clouds (use absolute positioned divs or SVG) */}
      <div className="absolute top-16 left-10 cloud-1 hidden md:block">
        <Cloud size={1} />
      </div>
      <div className="absolute top-8 right-64 cloud-2">
        <Cloud size={0.7} />
      </div>
      <div className="absolute top-32 right-10 cloud-3 hidden md:block">
        <Cloud size={1.2} />
      </div>
      <p className="text-green-brand text-sm font-semibold tracking-widest uppercase">
        UI/UX Designer & Frontend Developer
      </p>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-3 leading-tight  dark:text-[#EDEFEC]">
        Where Calm Meets Creativity
      </h1>
      <p className="text-gray-500 mt-4 max-w-md mx-auto">
        Designing meaningful experiences that feel effortless
      </p>
      <div className="flex gap-4 justify-center mt-8">
        <button
          className="bg-green-brand px-6 py-3 rounded-full font-medium text-white cursor-pointer 
  transition-all duration-300 ease-in-out hover-raise hover:bg-green-dark hover:shadow-(--glow)"
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          View My Works
        </button>
        <button
          className="border border-gray-500 px-6 py-3 rounded-full font-medium cursor-pointer hover:text-green-brand  hover:border-green-dark transition-all duration-300 ease-in-out hover-raise hover:shadow-(--glow) dark:text-[#EDEFEC]"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "https://www.shakyaprabal.com.np/PrabalShakyaCV.pdf";
            link.target = "_blank";
            link.click();
          }}
        >
          Download CV
        </button>
      </div>
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

      <div className="mt-16">
        {/* Inline SVG for the green hills landscape */}
      </div>
    </section>
  );
}
