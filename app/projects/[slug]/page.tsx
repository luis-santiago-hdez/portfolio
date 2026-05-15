import { projects } from "@/data/projects";
import { ProjectDetail } from "@/components/layout/ProjectDetail";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <div>Not Found</div>;

  return <ProjectDetail project={project} />;
}
