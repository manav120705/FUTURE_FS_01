import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Travel List",
    category: "React Application",
    description:
      "Interactive single-page packing management app built with React.js. Features CRUD operations, sorting, item tracking, and reusable component architecture using React Hooks.",
    tags: ["React.js", "JavaScript (ES6+)", "JSX"],
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "NexLearn",
    category: "Full-Stack Web App",
    description:
      "Online Learning Management System (OLMS) with session-based authentication, responsive SPA interface using AngularJS with two-way data binding, and a relational MySQL database.",
    tags: ["AngularJS", "Node.js", "MySQL"],
    color: "from-primary/10 to-primary/5",
  },
];

const Projects = () => {
  return (
    <section id="work" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Recent <span className="italic text-accent">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-colors cursor-pointer"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}
              >
                <span className="font-display text-2xl font-bold opacity-30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="p-8">
                <p className="text-xs tracking-[0.2em] uppercase text-accent font-body mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground font-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
