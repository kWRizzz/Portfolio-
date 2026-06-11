"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Code, Server, Smartphone, CheckCircle, Award, Briefcase } from "lucide-react";

// Counter Component for Stats
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1.5; // seconds
      const incrementTime = 16; // ms (~60fps)
      const totalSteps = Math.ceil((duration * 1000) / incrementTime);
      const stepSize = end / totalSteps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        if (step >= totalSteps) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.round(stepSize * step));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-bold text-white text-3xl md:text-5xl tracking-tight orange-text-glow">
      {count}
      {suffix}
    </span>
  );
}

const services = [
  {
    id: 1,
    title: "Website Development",
    description: "Building responsive, modern, and high-converting websites using Next.js and Tailwind CSS.",
    icon: Code,
  },
  {
    id: 2,
    title: "App Development",
    description: "Creating full-stack scalable web applications using the MERN stack (MongoDB, Express, React, Node.js).",
    icon: Smartphone,
  },
  {
    id: 3,
    title: "Website Hosting",
    description: "Deploying and managing cloud instances (AWS, Vercel, Netlify) with continuous integration and delivery.",
    icon: Server,
  },
];

export default function About() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="about" className="py-24 bg-[#0a0f1d] relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute right-0 top-1/3 w-72 h-72 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          
          {/* Left Column: Vertical Timeline Services */}
          <div className="md:col-span-6 order-2 md:order-1 relative">
            <h3 className="text-zinc-500 font-semibold tracking-wider text-xs uppercase mb-8 md:hidden">
              My Services
            </h3>

            {/* Vertical Connector Line */}
            <div className="absolute left-[26px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-primary via-primary/30 to-zinc-800" />

            <div className="flex flex-col gap-8">
              {services.map((service, idx) => {
                const IconComponent = service.icon;
                const isSelected = selectedService === service.id;

                return (
                  <motion.div
                    key={service.id}
                    className="flex gap-6 items-start relative cursor-pointer"
                    onClick={() => setSelectedService(isSelected ? null : service.id)}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    {/* Circle Dot with Icon */}
                    <div className="relative z-10 flex items-center justify-center w-[54px] h-[54px] rounded-full bg-[#080c14] border-2 border-primary transition-all duration-300 hover:scale-115 hover:orange-glow-sm">
                      <IconComponent className="w-5 h-5 text-primary" />
                      {/* Pulsing indicator */}
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary animate-pulse" />
                    </div>

                    {/* Service Info Content */}
                    <div className="flex-1 pt-3">
                      <h4 className="text-lg font-semibold text-white hover:text-primary transition-colors duration-200">
                        {service.title}
                      </h4>
                      
                      {/* Expandable description using Framer Motion */}
                      <motion.p 
                        className="text-zinc-400 text-sm mt-2 leading-relaxed"
                        initial={{ height: "auto", opacity: 0.8 }}
                        animate={{ 
                          height: isSelected ? "auto" : "auto", 
                          opacity: isSelected ? 1 : 0.8 
                        }}
                      >
                        {service.description}
                      </motion.p>

                      {isSelected && (
                        <motion.div 
                          className="mt-3 text-xs text-primary font-medium flex items-center gap-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <CheckCircle className="w-3.5 h-3.5" /> Selected service for booking
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: About Narrative & Stats */}
          <div className="md:col-span-6 order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                About me
              </h2>
              
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-10">
                I started my software journey from photography. Through that, I learned to love the process of creating from scratch. Since then, this has led me to love software development as it fulfills my love for learning and building things. I specialize in building fully responsive web apps with beautiful micro-interactions, clean architectures, and modern styling.
              </p>

              {/* Stats Grid matching the screenshot */}
              <div className="grid grid-cols-3 gap-6 border-t border-border/40 pt-8">
                
                {/* Stat 1 */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-1">
                    <Counter value={120} suffix=" +" />
                  </div>
                  <span className="text-zinc-400 text-xs md:text-sm font-medium mt-1">
                    Completed Projects
                  </span>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-1">
                    <Counter value={95} suffix=" %" />
                  </div>
                  <span className="text-zinc-400 text-xs md:text-sm font-medium mt-1">
                    Client satisfaction
                  </span>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-1">
                    <Counter value={10} suffix=" +" />
                  </div>
                  <span className="text-zinc-400 text-xs md:text-sm font-medium mt-1">
                    Years of experience
                  </span>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
