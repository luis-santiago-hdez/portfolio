import Image from "next/image";
import Anchor from "../ui/Anchor";
import { textStyle } from "../ui/styles";
import Link from "../ui/Link";

export default function Hero() {
  return (
    <section
      className=" flex flex-col gap-10 items-center rounded-xl md:flex-row scroll-mt-24 py-12 md:py-16 lg:py-20"
      id="home"
    >
      <div className="relative w-48 h-48 md:h-64 md:w-64 lg:h-96 lg:w-96">
        <Image
          src="/images/avatar.jpg"
          alt="avatar"
          fill
          className="rounded-full object-contain shrink-0"
        ></Image>
      </div>

      <div className="flex flex-col gap-5 flex-1 text-center max-w-2xl ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl">
          Hi I&apos;m Luis Santiago
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl">
          Full Stack Developer
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl">
          I enjoy building modern, scalable web applications. I&apos;m
          passionate about web development and I focus on creating practical
          solutions to real-world problems.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className={textStyle}>
            Contact Me
          </a>
          <Link href="/projects" className={textStyle}>
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
