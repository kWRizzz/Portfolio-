"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Code2, Sparkles, Layers } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "./SocialIcons";

interface Project {
  id: number;
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
  gradient: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Talent-Rush-Pro",
    category: "Real-time Platform",
    shortDescription: "A scalable real-time coding interview platform supporting 50+ programming languages with auto-evaluation and collaboration.",
    longDescription: "Talent-Rush-Pro is a scalable real-time coding interview platform built for technical recruitment. It supports auto-evaluation for 50+ programming languages and features low-latency multi-user collaboration tools, including real-time coding editors, interactive whiteboards, instant feedback, and chat functions.",
    tags: ["React", "Node.js", "Socket.IO", "WebSockets", "Compiler API", "Tailwind CSS"],
    githubLink: "https://github.com/kWRizzz/Talent-Rush",
    liveLink: "https://github.com/kWRizzz/Talent-Rush",
    gradient: "from-orange-500 to-red-600",
    features: [
      "Developed a scalable real-time coding interview platform supporting 50+ programming languages with auto-evaluation",
      "Implemented real-time collaboration using WebSockets and Socket.IO enabling multi-user sessions, live coding, chat, and screen sharing",
      "Engineered the system to handle concurrent coding sessions with low latency ensuring smooth real-time performance",
      "Designed a secure and scalable system architecture with features like interactive whiteboard, instant feedback, and role-based sessions"
    ]
  },
  {
    id: 2,
    title: "Microservices Cab Service",
    category: "Microservices & Cloud",
    shortDescription: "A scalable cab booking platform built using microservices architecture, Stripe payments, and container orchestration.",
    longDescription: "A scalable cab booking system built using a MERN-based microservices architecture. It includes dedicated services for users, booking tracking, and payment processing, fully orchestrated using Docker and Kubernetes with API Gateway routing.",
    tags: ["Docker", "Kubernetes", "MERN Stack", "Maps API", "Socket.IO", "Stripe API"],
    githubLink: "https://github.com/kWRizzz/MicroServices-Project",
    liveLink: "https://github.com/kWRizzz/MicroServices-Project",
    gradient: "from-red-500 to-pink-600",
    features: [
      "Built a scalable cab booking platform using microservices architecture with MERN stack",
      "Implemented core services including User Service (JWT + MongoDB), Ride Service (Maps API + Socket.IO) for real-time tracking, and Payment Service (Stripe)",
      "Deployed using Docker and Kubernetes with API Gateway routing, and integrated Firebase notifications for a reliable and scalable distributed system"
    ]
  },
  {
    id: 3,
    title: "Recurly",
    category: "AI Web App",
    shortDescription: "An AI-powered study assistance platform utilizing note management and automated doubt-solving tools.",
    longDescription: "Recurly is an AI-driven study assistance application developed to help students manage learning resources efficiently. The platform integrates AI-generated explanations, doubt solving, and secure user notes management in a fully responsive UI.",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "AI Integrations", "Tailwind CSS"],
    githubLink: "https://github.com/kWRizzz/Recurly",
    liveLink: "https://github.com/kWRizzz/Recurly",
    gradient: "from-pink-500 to-rose-600",
    features: [
      "Developed an AI-powered study assistance platform using React.js, Node.js (Express), and MongoDB to help students manage learning resources efficiently",
      "Implemented secure user authentication and note management features, allowing users to create, organize, update, and access study notes seamlessly",
      "Integrated AI-generated explanations and intelligent doubt-solving capabilities to provide instant academic assistance and improve learning outcomes",
      "Designed a responsive and user-friendly interface with optimized backend APIs, ensuring fast performance, scalability, and a smooth user experience"
    ]
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#080c14] relative z-20">

      <div className="absolute left-1/3 bottom-10 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg">
            A curated list of web applications and engineering projects I've built using modern frontend frameworks and full-stack solutions.
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="group relative rounded-2xl bg-card border border-border/40 overflow-hidden flex flex-col h-full cursor-pointer hover:border-primary/30 transition-all duration-300"
              whileHover={{ y: -8 }}
              onClick={() => setActiveProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
         
              <div className={`h-48 w-full bg-gradient-to-tr ${project.gradient} flex items-center justify-center p-6 relative overflow-hidden`}>
         
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Code2 className="w-16 h-16 text-white/20 group-hover:text-white/40 group-hover:scale-110 transition-all duration-500" />
                
     
                <div className="absolute top-4 right-4 bg-[#080c14]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold tracking-wider text-white uppercase flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                  {project.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.shortDescription}
                </p>

            
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium bg-[#161f30] text-zinc-300 px-2.5 py-1 rounded-md border border-border/40"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-medium bg-[#161f30] text-zinc-300 px-2 py-1 rounded-md border border-border/40">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                <div className="text-sm font-semibold text-primary group-hover:underline flex items-center gap-1">
                  Learn More <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-card border border-border max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/60 hover:bg-background border border-border/40 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

          
              <div className={`h-40 bg-gradient-to-r ${activeProject.gradient} p-8 flex items-end relative`}>
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10">
                  <span className="text-xs font-bold uppercase tracking-wider bg-black/40 px-2.5 py-1 rounded border border-white/10 text-white/90">
                    {activeProject.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-3">
                    {activeProject.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
                <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Project Overview
                </h4>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {activeProject.longDescription}
                </p>

                <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                  Key Features
                </h4>
                <ul className="flex flex-col gap-2 mb-6">
                  {activeProject.features.map((feature, idx) => (
                    <li key={idx} className="text-zinc-300 text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-[#161f30] text-zinc-300 px-3 py-1 rounded-md border border-border/40 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 border-t border-border/40 pt-6">
                  <a
                    href={activeProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={activeProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#161f30] hover:bg-[#1a253a] text-white font-medium py-3 px-4 rounded-xl border border-border/60 transition-all duration-200 text-sm"
                  >
                    <GithubIcon className="w-4 h-4 text-primary" />
                    Github Repository
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
