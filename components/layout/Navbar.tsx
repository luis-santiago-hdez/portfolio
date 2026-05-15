import { MdLanguage } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

import Button from "../ui/Button";
import { iconStyle } from "../ui/styles";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-md">
      <nav className="px-3 py-3 border-b border-zinc-800 ">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between ">
          <div className="space-y-0 text-2xl border border-zinc-600 rounded-xl p-2">
            <p>LS</p>
          </div>
          <div className="flex">
            <Button className={iconStyle}>
              <IoMoonOutline />
            </Button>
            <Button className={iconStyle}>
              <MdLanguage />
            </Button>
            <Button className={iconStyle}>
              <AiOutlineMenu />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
