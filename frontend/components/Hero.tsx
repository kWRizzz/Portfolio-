"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

const roles = ["Software Developer", "MERN Stack Engineer", "Full Stack Creator"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden grid-pattern"
    >
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div
          className="md:col-span-7 flex flex-col justify-center text-center md:text-left order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <span className="text-lg md:text-xl font-semibold text-zinc-400">Hello</span>
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="w-2 h-2 rounded-full bg-primary -ml-2" />
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 mb-4 relative">
            <div className="hidden md:block w-16 h-[2px] bg-primary/60 -ml-20 absolute left-0" />
            <h1 className="text-3xl md:text-5xl font-light text-zinc-300">
              I'm <span className="font-bold text-white tracking-tight">Krishna Bhargava</span>
            </h1>
          </div>

          <div className="h-16 md:h-20 mb-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              {displayText}
              <span className="text-primary animate-pulse ml-1">|</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="#contact"
              className="group relative flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 orange-glow hover:orange-glow-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Got a project?
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#contact" // Let's scroll to contact or allow resume view
              className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-medium border border-primary/40 hover:border-primary px-8 py-4 rounded-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileText className="w-4 h-4 text-primary" />
              My resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-5 flex justify-center items-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div
            className="relative w-72 h-72 md:w-96 md:h-96 flex justify-center items-center cursor-pointer"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="absolute left-0 text-primary/30 font-mono text-5xl md:text-7xl pointer-events-none select-none"
              animate={{
                x: [-10, 0, -10],
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              &lt;
            </motion.div>

            <motion.div
              className="absolute right-0 text-primary/30 font-mono text-5xl md:text-7xl pointer-events-none select-none"
              animate={{
                x: [10, 0, 10],
                y: [5, -5, 5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              &gt;
            </motion.div>

            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="w-60 h-60 md:w-80 md:h-80 rounded-full relative p-[6px] transition-all duration-200 ease-out"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-primary/50 to-transparent opacity-80 blur-[8px] animate-spin-slow pointer-events-none" />
              
              <div className="absolute inset-[3px] rounded-full bg-gradient-to-tr from-primary via-primary/20 to-[#080c14] z-0" />

              <div className="w-full h-full rounded-full overflow-hidden bg-[#0c1220] relative z-10 border-4 border-[#080c14]">
                <Image
                  src="/developer_avatar.png"
                  alt="Krishna Bhargava"
                  fill
                  sizes="(max-width: 768px) 240px, 320px"
                  priority
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
