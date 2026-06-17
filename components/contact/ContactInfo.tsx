import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function ContactInfo() {
  return (
    <div className="border border-zinc-500 p-4 rounded-2xl flex flex-col gap-2">
      <p className="text-center text-lg md:text-xl lg:text-2xl ">
        Contact Information
      </p>
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
  );
}
