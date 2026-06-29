"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Bot, Database, Activity, Layout } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "Procrastination & Performance Detection",
    description: "Developed an ML model using Python to analyze behavioral and academic data. Applied data preprocessing and classification techniques to predict academic performance patterns.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    icon: Activity,
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "Social Media Sentiment Analysis",
    description: "Built a Natural Language Processing model to classify social media text as positive, negative, or neutral. Utilized TF-IDF vectorization and Logistic Regression.",
    tech: ["Python", "NLTK", "Logistic Regression"],
    icon: Database,
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50"
  },
  {
    title: "House Price Prediction Model",
    description: "Implemented a multiple linear regression model to predict housing prices based on features like area, bedrooms, and location. Focused on exploratory data analysis and feature engineering.",
    tech: ["Python", "Matplotlib", "Seaborn"],
    icon: Code2,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50"
  },
  {
    title: "Autonomous Line Following Robot",
    description: "Designed and built an autonomous robot using IR sensors and microcontroller logic to detect path deviations and precisely control dual-motor movement.",
    tech: ["Microcontrollers", "IR Sensors", "C++"],
    icon: Bot,
    color: "from-orange-500/20 to-amber-500/20",
    border: "group-hover:border-orange-500/50"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl">
            A showcase of my recent work in Artificial Intelligence, Machine Learning, and Software Development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "glass-card rounded-3xl p-8 flex flex-col h-full group relative overflow-hidden transition-all duration-500 border border-white/5",
                  project.border
                )}
              >
                {/* Hover gradient background */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br -z-10",
                  project.color
                )} />

                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 group-hover:bg-white/10 transition-colors">
                    <Icon className="text-foreground" size={24} />
                  </div>
                  <div className="flex space-x-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub Repository">
                      <FaGithub size={20} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm flex-grow mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-mono font-medium tracking-tight text-muted-foreground/80 bg-white/5 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
