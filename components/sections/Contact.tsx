import Button from "../ui/Button";
import { textStyle } from "../ui/styles";

export default function Contact() {
  return (
    <section className="flex flex-col w-full p-3 ">
      <div className="border border-zinc-500 p-4 rounded-2xl">
        <p className="text-2xl text-center mb-4">Contact</p>
        <p className="text-xl mb-4">Send me an Email</p>
        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              className="border border-zinc-600 rounded-lg p-2 bg-transparent"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="border border-zinc-600 rounded-lg p-2 bg-transparent"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={5}
              className="border border-zinc-600 rounded-lg p-2 bg-transparent resize-none"
            />
          </div>
          <Button type="submit" className={textStyle}>
            Send Email
          </Button>
        </form>
      </div>
    </section>
  );
}
