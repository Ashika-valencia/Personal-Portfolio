"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 glass bg-white/5 mb-6">
            <MessageSquare size={14} className="text-primary" />
            <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">Get In Touch</span>
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Let's Build Something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
              Extraordinary
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Whether you have an exciting project, an internship opportunity, or just want to chat about the future of AI, my inbox is always open. Let's create the next big thing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="glass-card p-6 rounded-2xl flex items-start space-x-4 hover:border-primary/50 transition-colors group">
              <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">Email</h4>
                <a href="mailto:ashikaantony06@gmail.com" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  ashikaantony06@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-start space-x-4 hover:border-accent/50 transition-colors group">
              <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">Phone</h4>
                <a href="tel:+919741560336" className="text-lg font-semibold text-foreground hover:text-accent transition-colors">
                  +91 97415 60336
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-start space-x-4 hover:border-emerald-500/50 transition-colors group">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">Location</h4>
                <span className="text-lg font-semibold text-foreground">
                  Bangalore, Karnataka, India
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center space-x-4">
              <span className="text-sm font-medium text-muted-foreground mr-2">Connect on:</span>
              <a href="https://github.com/Ashika-valencia" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-primary transition-all hover:scale-110">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/ashika-valencia" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-[#0a66c2] transition-all hover:scale-110">
                <FaLinkedin size={22} />
              </a>
            </div>
          </motion.div>

          {/* Creative Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="glass-card p-8 rounded-3xl flex flex-col space-y-6 relative overflow-hidden">
              {/* Form abstract glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full blur-[50px] pointer-events-none" />

              <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
              
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-muted-foreground ml-1">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="John Doe" 
                  className="w-full bg-white/80 border border-gray-200/50 shadow-sm rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground ml-1">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="john@example.com" 
                  className="w-full bg-white/80 border border-gray-200/50 shadow-sm rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground ml-1">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..." 
                  className="w-full bg-white/80 border border-gray-200/50 shadow-sm rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none placeholder:text-muted-foreground/50"
                />
              </div>

              <button 
                type="button" 
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white rounded-xl px-6 py-4 font-semibold text-lg flex items-center justify-center space-x-2 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] group"
              >
                <span>Launch Message</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
