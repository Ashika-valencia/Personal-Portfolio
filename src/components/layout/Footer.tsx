"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-background/50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-primary/5 blur-[120px] -z-10 rounded-full" />
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-bold tracking-tighter text-gradient">AV</span>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} Ashika Valencia A. All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <motion.a
            whileHover={{ y: -3, color: "#0ea5e9" }}
            href="https://github.com/Ashika-valencia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors"
          >
            <FaGithub size={20} />
            <span className="sr-only">GitHub</span>
          </motion.a>
          
          <motion.a
            whileHover={{ y: -3, color: "#0ea5e9" }}
            href="https://www.linkedin.com/in/ashika-valencia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors"
          >
            <FaLinkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
          
          <motion.a
            whileHover={{ y: -3, color: "#0ea5e9" }}
            href="mailto:ashikaantony06@gmail.com"
            className="text-muted-foreground transition-colors"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
