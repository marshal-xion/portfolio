function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "Tailwind"];
  return (
    <section className="p-4 border border-gray-200 rounded">
      <h2 className="text-xl font-semibold">Skills</h2>
      <ul className="flex flex-col gap-2">
        {skills.map((skill, index) => (
          <li key={index} className="p-2 bg-gray-100 rounded hover:bg-gray-200">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Skills;