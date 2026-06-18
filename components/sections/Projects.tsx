import { FaGithub } from "react-icons/fa6";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/layout/ProjectCard";
import Link from "next/link";
import { textStyle } from "@/components/ui/styles";

export default function ProjectsDemo() {
  return (
    <section
      className="flex flex-col scroll-mt-24 gap-4 md:gap-6"
      id="projects"
    >
      <h3 className="text-center text-2xl md:text-3xl lg:text-4xl">
        Available Soon
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link href="/projects" className={textStyle}>
          All projects
        </Link>
      </div>
    </section>
  );
}
