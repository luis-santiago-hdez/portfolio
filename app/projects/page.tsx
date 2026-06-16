import { FaGithub } from "react-icons/fa6";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/layout/ProjectCard";
import Link from "next/link";
import { textStyle } from "@/components/ui/styles";

export default function Projects() {
  return (
    <section className=" p-3 scroll-mt-24" id="projects">
      <h2 className="text-center text-2xl">Available Soon</h2>
      <div className="flex flex-col gap-2 md:flex-row">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="flex items-center justify-center p-4">
        <Link href="/allprojects" className={textStyle}>
          All projects
        </Link>
      </div>
    </section>
  );
}
