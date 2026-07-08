import { MdMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { PiChatCircleBold } from "react-icons/pi";
import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "29e685d4-fc1d-467f-b578-ef07249fcd65");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <section
      className="px-6 md:px-32 pt-20 pb-30 grid md:grid-cols-2 gap-16 items-start relative overflow-hidden"
      id="contact"
    >
      <div className="flex flex-col gap-8 h-full justify-center">
        <PiChatCircleBold className="text-green-brand w-[50px] h-[50px]" />
        <h2 className="text-2xl font-bold dark:text-[#EDEFEC]">
          Let's build something <br />
          together
        </h2>
        <p className="text-gray-500 text-sm w-100 dark:text-[#9BA6A1]">
          Open to freelance projects, collaborations, and internship
          opportunities. I respond within 24 hours.
        </p>
        <div className="dark:text-[#EDEFEC] flex flex-col gap-3 justify-items-start">
          <div className="text-sm flex flex-row items-center gap-[6px] ">
            <MdMailOutline className="text-green-brand h-5 w-5" />
            prabalshakyall@gmail.com
          </div>
          <div className="text-sm flex flex-row items-center gap-[6px]">
            <GrLocation className="text-green-brand h-6 w-6" />
            Kathmandu, Nepal
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full justify-center gap-5">
        <h3 className="text-xl font-bold text-green-brand">Contact Me</h3>

        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            required
            className="input"
            placeholder="Full Name"
          />
          <input
            type="number"
            name="phno"
            required
            className="input"
            placeholder="Phone No"
          />
          <input
            type="email"
            name="email"
            required
            className="input"
            placeholder="Email Address"
          />
          <textarea
            name="message"
            required
            rows={5}
            className="input w-full resize-none"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-green-brand text-white py-3 rounded-lg font-semibold w-full hover:bg-green-dark  transition-all duration-300 ease-in-out
  hover-raise hover:shadow-(--glow) cursor-pointer dark:text-black"
          >
            Submit
          </button>
          <span className="text-[12px] text-green-brand font-medium">
            {result}
          </span>
        </form>
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
    </section>
  );
}
