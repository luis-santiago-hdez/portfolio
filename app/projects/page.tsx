import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/layout/ProjectCard";

export default function Projects() {
  return (
    <section className="w-full p-3">
      <h3 className="text-center text-2xl md:text-3xl lg:text-4xl">
        My Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
