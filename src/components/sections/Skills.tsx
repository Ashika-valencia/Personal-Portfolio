"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SKILL_CATEGORIES = [
  {
    title: "AI & Machine Learning",
    skills: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Programming & DSA",
    skills: ["C", "C++", "Java", "DSA Fundamentals"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Web Development",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React"],
    color: "from-orange-500 to-amber-400"
  },
  {
    title: "Tools & Technologies",
    skills: ["SQL", "Git & GitHub", "Jupyter", "Hadoop", "Figma", "Cisco Packet Tracer"],
    color: "from-emerald-500 to-teal-400"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl">
            A comprehensive overview of my technical skills, ranging from core programming to specialized artificial intelligence tools and modern web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group"
            >
              {/* Subtle background gradient glow on hover */}
              <div 
                className={cn(
                  "absolute -inset-10 opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 bg-gradient-to-br",
                  category.color
                )}
              />
              
              <h3 className="text-2xl font-semibold mb-6 text-foreground relative z-10">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + skillIdx * 0.05 }}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors cursor-default shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
