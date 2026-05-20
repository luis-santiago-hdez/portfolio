import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/layout/ProjectCard";

export default function Projects() {
  return (
    <section className="w-full p-3">
      <div className="flex flex-col gap-2">
        <h2 className="text-center text-2xl">My Projects</h2>

        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
