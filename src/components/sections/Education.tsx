"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl">
            My academic journey and qualifications.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative border-l border-white/10 ml-4 md:ml-auto">
          {/* Timeline Item 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 pl-8 relative group"
          >
            <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-background border border-primary/50 flex items-center justify-center group-hover:scale-110 group-hover:border-primary transition-all">
              <GraduationCap size={20} className="text-primary" />
            </div>
            
            <div className="glass-card p-8 rounded-2xl">
              <span className="text-xs font-bold text-primary mb-2 block tracking-widest uppercase">2024 - 2028 (Expected)</span>
              <h3 className="text-2xl font-bold text-foreground mb-1">CHRIST (Deemed to be University)</h3>
              <p className="text-lg text-muted-foreground mb-4 font-medium">B.Tech in Artificial Intelligence & Machine Learning</p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award className="text-accent mr-3 shrink-0 mt-1" size={18} />
                  <span className="text-muted-foreground">Pursuing Honors in Data Analytics</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="text-accent mr-3 shrink-0 mt-1" size={18} />
                  <span className="text-muted-foreground">Current CGPA: 3.85/4</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Timeline Item 2 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pl-8 relative group"
          >
            <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-background border border-accent/50 flex items-center justify-center group-hover:scale-110 group-hover:border-accent transition-all">
              <BookOpen size={20} className="text-accent" />
            </div>
            
            <div className="glass-card p-8 rounded-2xl">
              <span className="text-xs font-bold text-accent mb-2 block tracking-widest uppercase">2022 - 2024</span>
              <h3 className="text-2xl font-bold text-foreground mb-1">CHRIST Junior College</h3>
              <p className="text-lg text-muted-foreground mb-2 font-medium">Science Stream (PCMC)</p>
              <p className="text-muted-foreground">
                Pre-University education completed with excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
