"use client";

import { motion } from "framer-motion";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export function Hero() {
  const phrases = [
    "Artificial Intelligence Engineer",
    "Machine Learning Enthusiast",
    "Future Data Scientist",
    "Problem Solver",
    "Frontend Developer",
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Particles Placeholder - You can implement 3D here later */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start text-left space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-snug mb-2"
          >
            Engineering <span className="text-gradient">Intelligence.</span> <br className="hidden md:block" />
            Designing <span className="text-gradient">the Future.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl text-muted-foreground h-[40px] md:h-[48px]"
          >
            <TypewriterText phrases={phrases} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-muted-foreground/80 max-w-lg leading-relaxed"
          >
            I'm a second-year Engineering student specializing in AI and Machine Learning, 
            pursuing Honors in Data Analytics. I explore how data solves real-world problems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a 
              href="#projects" 
              className="flex items-center space-x-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg text-white px-8 py-4 rounded-full font-semibold transition-all group"
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Image/Visuals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Glowing animated frame */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 blur-[2px] animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full border-2 border-accent/40 blur-[1px] animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 glass-card flex flex-col items-center justify-center overflow-hidden">
              <span className={`text-4xl md:text-6xl text-foreground font-bold text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent ${dancingScript.className}`}>
                Ashika<br/>Valencia
              </span>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 glass rounded-2xl flex items-center justify-center border border-white/10"
            >
              <span className="text-2xl font-bold text-primary">AI</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [10, -10, 10] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-4 w-20 h-20 glass rounded-full flex items-center justify-center border border-white/10"
            >
              <span className="text-xl font-bold text-accent">ML</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
