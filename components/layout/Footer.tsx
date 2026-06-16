import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Anchor from "../ui/Anchor";
import { iconStyle } from "../ui/styles";

export default function Footer() {
  return (
    <footer className="flex justify-center">
      <div>
        <div className="flex items-center justify-center">
          <Anchor
            href="https://github.com/luis-santiago-hdez"
            className={iconStyle}
          >
            <FaGithub />
          </Anchor>
          <Anchor
            href="https://www.linkedin.com/in/luissantiagohdez/"
            className={iconStyle}
          >
            <FaLinkedin />
          </Anchor>
        </div>
        <div className="flex justify-center gap-4">
          <p>&copy; Luis Santiago 2026</p>
        </div>
      </div>
    </footer>
  );
}
