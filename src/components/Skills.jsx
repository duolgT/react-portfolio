import skills from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      {skills.map((group) => (
        <div key={group.category} className="skill-group">
          <h3>{group.category}</h3>

          <div className="skills-grid">
            {group.items.map((skill) => {
              const Icon = skill.icon;

              return (
                <div className="skill-card" key={skill.name}>
                  <Icon className="skill-icon" />
                  <h4>{skill.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;