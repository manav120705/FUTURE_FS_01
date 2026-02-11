import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Download, Award } from "lucide-react";
import cv from "@/assets/Manav_Goyal_CV.pdf";

const experience = [
  {
    role: "Community Service Volunteer",
    company: "Lions Club of Vapi Platinum, Vapi, Gujarat",
    period: "Jun 2024 – Jul 2024",
    description:
      "Participated in nutritional distribution drives, cow feeding initiatives, and tree plantation activities. Coordinated on-ground logistics and developed leadership and teamwork skills.",
  },
];

const education = [
  {
    degree: "B.Tech + MBA (MBA Tech) in Computer Engineering",
    institution:
      "Mukesh Patel School of Technology Management and Engineering, Shirpur",
    period: "2023 – Present",
    description:
      "CGPA: 3.70 / 4.00. Studying core CS subjects including Data Structures, Algorithms, OOP, and Database Management.",
  },
  {
    degree: "Class XII (PCM + Computer Science)",
    institution: "BAPS Swaminarayan Vidyamandir, Silvassa",
    period: "2023",
    description: "Scored 80.6%.",
  },
  {
    degree: "Class X",
    institution: "BAPS Swaminarayan Vidyamandir, Silvassa",
    period: "2021",
    description: "Scored 82%.",
  },
];

const positions = [
  {
    role: "Core Member – Finance Committee",
    org: "Ganpati Mahotsav, NMIMS Shirpur",
    period: "2025–2026",
    description:
      "Assisted in budget planning, expense tracking, and financial coordination for Ganpati Mahotsav events.",
  },
  {
    role: "Core Member – Flavium (Annual Sports Fest)",
    org: "NMIMS Shirpur",
    period: "2025–2026",
    description:
      "Contributed to planning and on-ground execution of the annual sports fest.",
  },
];

const achievements = [
  {
    title: "Participant – CodeKraken Hackathon 2023",
    org: "Google Developer Student Club (GDSC), MPSTME Shirpur",
    description:
      "Collaborated in a competitive coding environment to solve real-world problem statements under time constraints.",
  },
  {
    title: "Participant – Yugantar 2.0 Inter-Institute Hackathon 2025",
    org: "SVKM's NMIMS, Shirpur",
    description:
      "Worked on a Digital Platform for Centralized Alumni Data Management and Engagement. Contributed to system architecture planning and feature conceptualization.",
  },
];

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
              My Journey
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Resume & <span className="italic text-accent">Experience</span>
            </h2>
          </div>

          <a
            href={cv}
            download="Manav_Goyal_CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-body text-sm tracking-wide uppercase rounded-lg hover:opacity-90 transition-opacity w-fit"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-5 h-5 text-accent" />
              <h3 className="font-display text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-border">
              {experience.map((item, i) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="pl-8 relative"
                >
                  <span className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-accent border-[3px] border-background" />
                  <p className="text-xs tracking-[0.2em] uppercase text-accent font-body mb-1">
                    {item.period}
                  </p>
                  <h4 className="font-display text-lg font-bold">
                    {item.role}
                  </h4>
                  <p className="text-sm text-muted-foreground font-body mb-2">
                    {item.company}
                  </p>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Positions of Responsibility */}
            <div className="flex items-center gap-3 mb-8 mt-12">
              <Award className="w-5 h-5 text-accent" />
              <h3 className="font-display text-2xl font-bold">Leadership</h3>
            </div>
            <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-border">
              {positions.map((item, i) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="pl-8 relative"
                >
                  <span className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-accent border-[3px] border-background" />
                  <p className="text-xs tracking-[0.2em] uppercase text-accent font-body mb-1">
                    {item.period}
                  </p>
                  <h4 className="font-display text-lg font-bold">
                    {item.role}
                  </h4>
                  <p className="text-sm text-muted-foreground font-body mb-2">
                    {item.org}
                  </p>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-5 h-5 text-accent" />
              <h3 className="font-display text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-border">
              {education.map((item, i) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="pl-8 relative"
                >
                  <span className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-accent border-[3px] border-background" />
                  <p className="text-xs tracking-[0.2em] uppercase text-accent font-body mb-1">
                    {item.period}
                  </p>
                  <h4 className="font-display text-lg font-bold">
                    {item.degree}
                  </h4>
                  <p className="text-sm text-muted-foreground font-body mb-2">
                    {item.institution}
                  </p>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div className="flex items-center gap-3 mb-8 mt-12">
              <Award className="w-5 h-5 text-accent" />
              <h3 className="font-display text-2xl font-bold">Achievements</h3>
            </div>
            <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-border">
              {achievements.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="pl-8 relative"
                >
                  <span className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-accent border-[3px] border-background" />
                  <h4 className="font-display text-lg font-bold">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-body mb-2">
                    {item.org}
                  </p>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
