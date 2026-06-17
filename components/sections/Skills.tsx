import SkillCard from "../layout/SkillCard";

export default function Skills() {
  return (
    <section className="flex flex-col gap-4 scroll-mt-24" id="skills">
      <h3 className="text-2xl md:text-3xl lg:text-4xl text-center">Skills</h3>
      <h4 className="text-xl md:text-2xl lg:text-3xl">Frontend</h4>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 lg:gap-6">
        <SkillCard name="HTML" icon="icons/html.svg"></SkillCard>
        <SkillCard name="CSS" icon="icons/css.svg"></SkillCard>
        <SkillCard
          name="JavaScript"
          icon="icons/js.svg"
          level="Intermediate"
        ></SkillCard>
        <SkillCard
          name="TypeScript"
          icon="icons/ts.svg"
          level="Intermediate"
        ></SkillCard>
        <SkillCard
          name="React"
          icon="icons/react.svg"
          level="Intermediate"
        ></SkillCard>
        <SkillCard
          name="Next.js"
          icon="icons/nextjs.svg"
          level="Intermediate"
        ></SkillCard>
      </div>
      <h4 className="text-xl md:text-2xl lg:text-3xl">Backend</h4>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
        <SkillCard
          name="Node.js"
          icon="icons/node.svg"
          level="Intermediate"
        ></SkillCard>
      </div>
      <h4 className="text-xl md:text-2xl lg:text-3xl">Database</h4>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
        <SkillCard
          name="PostgreSQL"
          icon="icons/postgresql.svg"
          level="Intermediate"
        ></SkillCard>
      </div>
    </section>
  );
}
