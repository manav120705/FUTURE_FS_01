import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "Java", "C++", "Python", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["AngularJS", "Node.js", "Web Development"],
  },
  {
    title: "Databases & Tools",
    skills: ["MySQL", "Microsoft Power BI"],
  },
  {
    title: "Concepts",
    skills: ["Object-Oriented Programming (OOP)"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
            Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Skills & <span className="italic text-accent">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="space-y-4"
            >
              <h3 className="font-display text-xl font-bold text-accent">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-body text-muted-foreground text-sm flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
