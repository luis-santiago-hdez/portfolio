export type Project = {
  slug: string;
  title: string;
  updatedAt: string;
  description: string;
  image: string;

  features: string[];
  technologies: string[];

  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "noteapp",
    title: "Note App",
    updatedAt: "May 08, 2026",
    description: "In this app you can save many notes in the cloud...",
    image: "/images/note.png",

    features: ["Responsive design", "SEO optimized"],
    technologies: ["Next.js", "Typescript", "Tailwind"],

    github: "https://github.com/luis-santiago-hdez",
    demo: "https://github.com/luis-santiago-hdez",
  },

  {
    slug: "ecommerce",
    title: "E-commerce",
    updatedAt: "May 09, 2026",
    description: "This is the best ecommerce, you can buy everything",
    image: "/images/ecommerce.jpg",

    features: ["Responsive design", "SEO optimized"],
    technologies: ["Next.js", "Typescript", "Tailwind"],

    github: "https://github.com/luis-santiago-hdez",
    demo: "https://github.com/luis-santiago-hdez",
  },

  {
    slug: "dashboard",
    title: "Dashboard",
    updatedAt: "May 10, 2026",
    description: "In this page you can admin many things",
    image: "/images/dashboard.jpg",

    features: ["Responsive design", "SEO optimized"],
    technologies: ["Next.js", "Typescript", "Tailwind"],

    github: "https://github.com/luis-santiago-hdez",
    demo: "https://github.com/luis-santiago-hdez",
  },
];
