"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function GridBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-background overflow-hidden">
      {/* Interactive mouse spotlight - Soft pink/purple blur */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] bg-primary/30 opacity-80"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 1 }}
      />
      
      {/* Grid pattern overlay - Light subtle grid */}
      <div 
        className="absolute inset-0 z-0 opacity-50" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Vignette mask to fade edges */}
      <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_30%,black_100%)] z-1" />
    </div>
  );
}
