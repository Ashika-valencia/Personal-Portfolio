"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { Dancing_Script } from "next/font/google";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export function Hero() {


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Particles Placeholder - You can implement 3D here later */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[128px]" />
      </div>

      {/* Dynamic Floating Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -50, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-primary/15 rounded-full blur-[140px]" 
        />
        <motion.div 
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 40, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-accent/15 rounded-full blur-[140px]" 
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center max-w-4xl space-y-10">
        {/* Floating pill badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest backdrop-blur-md shadow-sm"
        >
          <span>✨ Frontend Developer & AI Enthusiast</span>
        </motion.div>

        {/* Massive Center Title */}
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-5xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary leading-[1.1] pb-2 ${dancingScript.className}`}
          >
            Ashika Valencia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl font-bold tracking-tight text-foreground/90 max-w-3xl mx-auto"
          >
            Engineering <span className="text-gradient">Intelligence</span>. Designing <span className="text-gradient">the Future</span>.
          </motion.p>
        </div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl leading-relaxed mx-auto"
        >
          I'm a second-year Engineering student specializing in Artificial Intelligence and Machine Learning, concurrently pursuing Honors in Data Analytics. I explore how data and design merge to solve real-world challenges.
        </motion.p>

        {/* Centered Actions & Socials */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
        >
          <a 
            href="#projects" 
            className="flex items-center space-x-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 group"
          >
            <span>Explore Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/Ashika-valencia" 
              target="_blank" 
              rel="noreferrer" 
              className="w-12 h-12 rounded-full glass border border-primary/20 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all hover:scale-110 shadow-sm"
            >
              <FaGithub size={22} className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ashika-valencia" 
              target="_blank" 
              rel="noreferrer" 
              className="w-12 h-12 rounded-full glass border-primary/20 flex items-center justify-center hover:bg-primary/10 hover:text-[#0a66c2] transition-all hover:scale-110 shadow-sm"
            >
              <FaLinkedin size={22} className="text-muted-foreground hover:text-[#0a66c2] transition-colors" />
            </a>
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
