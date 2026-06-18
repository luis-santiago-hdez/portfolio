import Image from "next/image";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      className="flex flex-col gap-4 scroll-mt-24"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <h3
        className="text-2xl md:text-3xl lg:text-4xl text-center"
        id="skills-heading"
      >
        Skills
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-6 mt-2">
        {skillCategories.map((category) => (
          <div
            key={category.category}
            className="border rounded-2xl p-2 w-full text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <h4 className="font-semibold mb-3">{category.category}</h4>

            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2 text-sm"
                >
                  <div className="relative w-5 h-5">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
