"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "Python Using AI Workshop",
    issuer: "AI For Techies",
    date: "2023",
    description: "Hands-on workshop exploring the integration of Python programming with Artificial Intelligence concepts and practical applications."
  },
  {
    title: "Machine Learning Using Python",
    issuer: "Simplilearn | SkillUP",
    date: "2023",
    description: "Comprehensive training covering supervised and unsupervised learning algorithms, data preprocessing, and model evaluation techniques."
  },
  {
    title: "Android App Development",
    issuer: "Skyfi Labs",
    date: "2022",
    description: "Practical project-based learning focused on building functional Android applications from scratch."
  },
  {
    title: "Network Fundamentals",
    issuer: "Infosys Springboard",
    date: "2024",
    description: "In-depth exploration of core networking concepts, protocols, packet transmission, and network architecture."
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl">
            Continuous learning is part of my journey. Here are some of the professional certifications and workshops I've completed to stay at the forefront of technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary/30 transition-colors">
                <Award className="text-primary" size={24} />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                {cert.title}
              </h3>
              
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-accent font-medium">{cert.issuer}</span>
                <span className="text-muted-foreground">{cert.date}</span>
              </div>
              
              <p className="text-muted-foreground text-sm flex-grow mb-6 line-clamp-3">
                {cert.description}
              </p>
              
              <button className="mt-auto flex items-center text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors w-max space-x-2">
                <span>View Credential</span>
                <ExternalLink size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
