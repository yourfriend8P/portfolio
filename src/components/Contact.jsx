import { MdMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { PiChatCircleBold } from "react-icons/pi";
export default function Contact() {
  return (
    <section
      className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-16 items-start"
      id="contact"
    >
      <div className="flex flex-col gap-8 h-full justify-center p-16">
        <PiChatCircleBold className="text-green-brand w-[50px] h-[50px]" />
        <h2 className="text-2xl font-bold">
          Let's build something <br />
          together
        </h2>
        <p className="text-gray-500 text-sm w-100">
          Open to freelance projects, collaborations, and internship
          opportunities. I respond within 24 hours. opportunities.
        </p>

        <div className="text-sm flex flex-row items-center gap-[6px]">
          <MdMailOutline className="text-green-brand h-5 w-5" />
          prabalshakyall@gmail.com
        </div>
        <div className="text-sm flex flex-row items-center gap-[6px]">
          <GrLocation className="text-green-brand h-6 w-6" />
          Kathmandu, Nepal
        </div>
      </div>
      <div className="flex flex-col h-full justify-center gap-5">
        <h3 className="text-xl font-bold text-green-brand">Contact Me</h3>
        <div className="flex flex-col gap-4">
          <input
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm w-full"
            placeholder="Full Name"
          />
          <input
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm w-full"
            placeholder="Phone No"
          />
          <input
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm w-full"
            placeholder="Email Address"
          />
          <textarea
            rows={5}
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm w-full resize-none"
            placeholder="Message"
          />
          <button className="bg-green-brand text-white py-3 rounded-lg font-semibold w-full">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
