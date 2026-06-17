import Link from "../ui/Link";
import Anchor from "../ui/Anchor";
import Image from "next/image";
import { Project } from "@/data/projects";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { TfiInfoAlt } from "react-icons/tfi";
import { CiSquareInfo } from "react-icons/ci";
import { iconStyle } from "../ui/styles";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col p-4 rounded-xl shadow  ">
      <Image
        src={project.image}
        alt={project.title}
        width={1600}
        height={900}
        className="w-full h-auto rounded-lg"
      />

      <h2 className="text-lg font-bold">{project.title}</h2>

      <p className="text-gray-600">{project.description}</p>

      <div className=" flex justify-center gap-3">
        <div className="flex items-center justify-center ">
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

        <div className="flex items-center justify-center ">
          <p>Info</p>
          <Link href={`/projects/${project.slug}`} className={iconStyle}>
            <CiSquareInfo />
          </Link>
        </div>
      </div>
    </div>
  );
}
