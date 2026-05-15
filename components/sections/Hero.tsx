import Image from "next/image";
import Anchor from "../ui/Anchor";
import { textStyle } from "../ui/styles";
import Link from "../ui/Link";

export default function Hero() {
  return (
    <section className="px-3 py-10">
      <div className="flex flex-col gap-10 items-center  rounded-xl ">
        <div>
          <Image
            src="/images/avatar.jpg"
            alt="avatar"
            width={150}
            height={150}
            className="rounded-full object-cover"
          ></Image>
        </div>
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="text-4xl">Hi I&apos;m Luis Santiago</h1>
          <h2 className="text-2xl">Full Stack Developer</h2>
          <p className="text-xl">
            I enjoy building modern, scalable web applications. I&apos;m
            passionate about web development and I focus on creating practical
            soluctions to real-word problems.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="" className={textStyle}>
            Contact Me
          </Link>
          <Link href="" className={textStyle}>
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
