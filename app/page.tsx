import Hero from "@/components/sections/Hero";
import Projects from "./projects/page";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Hero />

        <Skills />
        <Projects />
        <About />
      </div>
    </>
  );
}
