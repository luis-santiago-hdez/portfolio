export default function About() {
  return (
    <section
      className="flex flex-col p-3 gap-2 scroll-mt-24 text-xl"
      id="about"
    >
      <h3 className="text-2xl md:text-3xl lg:text-4xl text-center">About Me</h3>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="border rounded-2xl p-2 text-base">
          <p>
            I&apos;m a full stack developer focused on building modern,
            responsive, and scalable web applications.
          </p>
        </div>
        <div className="border rounded-2xl p-2 text-base">
          <p>
            I enjoy working across both frontend and backend development,
            creating user interfaces, APIs, and full stack systems using
            technologies like Next.js, TypeScript, Tailwind CSS, and databases.
          </p>
        </div>
        <div className="border rounded-2xl p-2 text-base">
          <p>
            Currently, I&apos;m improving my skills by building real-world
            projects and exploring modern web technologies, perfomance
            optimization, and application architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
