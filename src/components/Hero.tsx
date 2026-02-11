import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import manavPhoto from "@/assets/manav-photo.jfif";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-2"
        >
          <img
            src={manavPhoto}
            alt="Manav Goyal"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-accent shadow-lg"
          />
          <p className="font-display text-2xl md:text-3xl font-bold">
            Manav Goyal
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 font-body"
        >
          Creative Developer & Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8"
        >
          I craft digital
          <br />
          experiences that{" "}
          <span className="italic text-accent">inspire</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-body"
        >
          A passionate developer focused on creating beautiful, functional, and
          user-centered digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-wide uppercase rounded-lg hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 border border-border text-foreground font-body text-sm tracking-wide uppercase rounded-lg hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-muted-foreground/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
