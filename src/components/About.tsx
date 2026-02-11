import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
            About Me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            Building the web,
            <br />
            <span className="italic text-accent">one pixel</span> at a time
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6 font-body"
        >
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm Manav Vinod Goyal, a B.Tech + MBA (Integrated) student at Mukesh Patel School of Technology Management and Engineering, Shirpur. I'm passionate about full-stack web development, data analytics, and building seamless digital experiences.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            With hands-on experience in React, Node.js, AngularJS, and data visualization tools like Power BI, I love turning complex problems into clean, functional solutions. I'm also an active community volunteer and have participated in multiple hackathons.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
            {[
              { number: "3.70", label: "CGPA / 4.00" },
              { number: "2+", label: "Projects Built" },
              { number: "2+", label: "Hackathons" },
              { number: "3+", label: "Leadership Roles" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-accent">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
