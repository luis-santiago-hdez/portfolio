import { MdLanguage } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

import Button from "../ui/Button";
import { iconStyle } from "../ui/styles";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-md">
      <nav className=" border-b border-zinc-800 ">
        <div className=" mx-auto w-full flex items-center justify-between px-3 py-3">
          <div className="flex gap-2 items-center">
            <div className="text-2xl border border-zinc-600 rounded-xl p-2">
              LS
            </div>

            <span className="hidden lg:block text-2xl">LUIS SANTIAGO</span>
          </div>

          <div className="flex gap-4">
            <ul className="hidden md:flex items-center text-2xl gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-zinc-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center ">
              <Button className={iconStyle} aria-label="Toggle Dark Mode">
                <IoMoonOutline />
              </Button>
              <Button className={iconStyle} aria-label="Change Language">
                <MdLanguage />
              </Button>

              <Button
                className={`${iconStyle} md:hidden`}
                aria-label="Open menu"
              >
                <AiOutlineMenu />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
