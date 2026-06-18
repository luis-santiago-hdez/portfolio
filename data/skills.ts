export type Skill = {
  name: string;
  icon: string;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "JavaScript", icon: "/icons/js.svg" },
      { name: "TypeScript", icon: "/icons/ts.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Tailwind", icon: "/icons/tailwind.svg" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "/icons/node.svg" },
      { name: "Express", icon: "/icons/express.svg" },
      { name: "NestJS", icon: "/icons/nestjs.svg" },
    ],
  },

  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "AWS", icon: "/icons/aws.svg" },
      { name: "Vercel", icon: "/icons/vercel.svg" },
    ],
  },

  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "Prisma", icon: "/icons/prisma.svg" },
    ],
  },

  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "/icons/git.svg" },
      { name: "GitHub", icon: "/icons/github.svg" },
      { name: "Postman", icon: "/icons/postman.svg" },
      { name: "VS Code", icon: "/icons/vscode.svg" },
    ],
  },

  {
    category: "Others",
    skills: [
      { name: "Linux", icon: "/icons/linux.svg" },
      { name: "Windows", icon: "/icons/windows.svg" },
    ],
  },
];
