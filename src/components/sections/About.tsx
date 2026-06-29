"use client";

import { motion } from "framer-motion";

const STATS = [
  { label: "Current CGPA", value: "3.85/4" },
  { label: "Projects Completed", value: "4+" },
  { label: "Certifications", value: "4" },
  { label: "Leadership Experience", value: "Yes" },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I am a driven second-year Engineering student specializing in Artificial Intelligence and Machine Learning, concurrently pursuing Honors in Data Analytics. My passion lies at the intersection of complex data systems and intuitive user experiences.
            </p>
            <p>
              I thrive on building intelligent solutions using Python, exploring how data can be leveraged to solve real-world problems. Whether it's developing predictive ML models, programming autonomous robots, or crafting responsive web applications, I bring a unique blend of analytical thinking and creative problem-solving.
            </p>
            <p>
              I'm actively seeking an internship opportunity where I can learn, contribute to meaningful projects, and strengthen my practical skills in AI and ML.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 flex flex-col justify-center items-center text-center space-y-2 group hover:border-primary/50 transition-colors"
              >
                <span className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
