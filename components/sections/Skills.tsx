import SkillCard from "../layout/SkillCard";

export default function Skills() {
  return (
    <section className="flex flex-col gap-2 scroll-mt-24" id="skills">
      <h2 className="text-2xl text-center">Skills</h2>
      <p>Frontend</p>
      <div className="grid grid-cols-3 md:grid-cols-8 gap-2 w-full">
        <SkillCard name="HTML" icon="icons/html.svg"></SkillCard>
        <SkillCard name="CSS" icon="icons/css.svg"></SkillCard>
        <SkillCard name="JavaScript" icon="icons/js.svg"></SkillCard>
        <SkillCard name="TypeScript" icon="icons/ts.svg"></SkillCard>
        <SkillCard name="React" icon="icons/react.svg"></SkillCard>
        <SkillCard name="Next.js" icon="icons/nextjs.svg"></SkillCard>
      </div>
      <p>Backend</p>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
        <SkillCard name="Node.js" icon="icons/node.svg"></SkillCard>
      </div>
      <p>Database</p>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
        <SkillCard name="PostgreSQL" icon="icons/postgresql.svg"></SkillCard>
      </div>
    </section>
  );
}
