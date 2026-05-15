import { Project } from "@/data/projects";
import Anchor from "../ui/Anchor";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { iconStyle } from "../ui/styles";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="max-w-3xl mx-auto flex flex-col p-3 gap-2">
      <div className="flex items-center gap-2">
        <div className="relative w-40 h-40">
          <Image
            src={project.image}
            alt="App"
            fill
            className="object-cover "
          ></Image>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <p>Updated: {project.updatedAt}</p>
        </div>
      </div>
      <p>{project.description}</p>

      <div>
        <h3 className="font-semibold">Features</h3>
        <ul className="list-disc pl-5">
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <div>
        <div>
          <h3 className="font-semibold">Technologies</h3>
          <ul className="list-disc pl-5">
            {project.technologies.map((tech) => (
              <li key={tech} className="bg-gray-200 px-2 py-1 rounded">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className=" flex justify-center items-center gap-3">
        <div className="flex items-center justify-center">
          <p>Demo</p>
          {project.demo && (
            <Anchor href={project.demo} className={iconStyle}>
              <HiOutlineExternalLink />
            </Anchor>
          )}
        </div>

        <div className="flex items-center justify-center ">
          <p>Code</p>
          {project.github && (
            <Anchor href={project.github} className={iconStyle}>
              <FaGithub />
            </Anchor>
          )}
        </div>
      </div>
    </div>
  );
}
