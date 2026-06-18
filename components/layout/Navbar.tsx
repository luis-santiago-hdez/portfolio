"use client";

import { MdLanguage } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import Button from "../ui/Button";
import { iconStyle } from "../ui/styles";

import { useState, useEffect, useRef } from "react";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-md">
      <nav className=" border-b border-zinc-800 ">
        <div className=" mx-auto w-full flex items-center justify-between px-3 py-3">
          <div className="flex gap-2 items-center">
            <div className="text-2xl border border-zinc-600 rounded-xl p-2">
              LS
            </div>

            <span className="hidden lg:block text-2xl text-blue-400">
              &lt;LUIS SANTIAGO/&gt;
            </span>
          </div>

          <div className="flex md:gap-4 ">
            <ul className="hidden md:flex items-center text-xl lg:text-2xl gap-6">
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
            </div>

            <div className="relative md:hidden" ref={menuRef}>
              <Button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-label="Toggle menu"
                className={`${iconStyle}`}
              >
                <AiOutlineMenu />
              </Button>

              {open && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-xl overflow-hidden">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 hover:bg-gray-100 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
