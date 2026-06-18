import Hero from "@/components/sections/Hero";
import Projects from "./projects/page";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import ProjectsDemo from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8">
      <Hero />

      <Skills />
      <ProjectsDemo />
      <About />
      <Contact />
    </div>
  );
}
