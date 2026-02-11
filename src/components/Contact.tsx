import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-padding bg-primary text-primary-foreground"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16"
        >
          <div>
            <p className="text-sm tracking-[0.3em] uppercase opacity-60 mb-4 font-body">
              Get in Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Let's work
              <br />
              <span className="italic">together</span>
            </h2>
            <p className="opacity-70 font-body leading-relaxed max-w-md">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out if you'd like to
              collaborate.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity font-body"
              >
                <Mail className="w-4 h-4" />
                manav.goyal111@nmims.in
              </a>
              <p className="flex items-center gap-3 opacity-70 font-body">
                <MapPin className="w-4 h-4" />
                silvassa, DNH
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-body opacity-70">Name</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-primary-foreground/20 pb-3 font-body text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/60 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-body opacity-70">Email</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-primary-foreground/20 pb-3 font-body text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/60 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-body opacity-70">Message</label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-primary-foreground/20 pb-3 font-body text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/60 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button className="mt-4 inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body text-sm tracking-wide uppercase rounded-lg hover:opacity-90 transition-opacity">
              Send Message
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm opacity-50">
            © 2026 Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map((link) => (
              <a
                key={link}
                href="https://www.linkedin.com/in/manav-v-goyal/"
                className="font-body text-sm opacity-50 hover:opacity-100 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
