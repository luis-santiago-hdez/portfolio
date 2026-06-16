import Button from "../ui/Button";
import { textStyle } from "../ui/styles";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const inputStyle = "border border-zinc-600 rounded-lg p-2 bg-transparent";

export default function Contact() {
  return (
    <section
      className="flex flex-col w-full p-3 gap-4 scroll-mt-24 md:flex-row justify-center"
      id="contact"
    >
      <div className="border border-zinc-500 p-4 rounded-2xl w-full">
        <h2 className="text-2xl mb-4 text-center">Send me an Email</h2>
        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              required
              className={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              className={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              rows={5}
              className={`${inputStyle} resize-none`}
            />
          </div>
          <Button type="submit" className={textStyle}>
            Send Email
          </Button>
        </form>
      </div>

      <div className="border border-zinc-500 p-4 rounded-2xl flex flex-col gap-2 w-full">
        <h2 className="text-center text-2xl">Contact Information</h2>
        <div className="flex gap-2 items-center">
          <div className="text-2xl">
            <MdOutlineEmail />
          </div>
          <div className="flex flex-col">
            <p>Email</p>
            <a href="mailto:luis.santiago.he@gmail.com">
              luis.santiago.he@gmail.com
            </a>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="text-2xl">
            <MdOutlinePhone />
          </div>
          <div className="flex flex-col">
            <p>Phone</p>
            <p>+52 4821083533</p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="text-2xl">
            <IoLocationOutline />
          </div>
          <div className="flex flex-col">
            <p>Location</p>
            <p>Mexico</p>
          </div>
        </div>
      </div>
    </section>
  );
}
