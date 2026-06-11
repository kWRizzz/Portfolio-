"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "Javascript", category: "language" },
  { name: "Node.js", category: "backend" },
  { name: "React", category: "frontend" },
  { name: "Git", category: "tool" },
  { name: "Github", category: "tool" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export default function Skills() {
  return (
    <div className="w-full bg-card/20 border-y border-border/40 py-6 md:py-8 backdrop-blur-sm relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Desktop Layout (Standard flex row) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:flex justify-between items-center w-full"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.15, y: -4 }}
              className="text-zinc-500 hover:text-white font-medium tracking-wide text-lg cursor-pointer transition-colors duration-200 hover:orange-text-glow"
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Layout (Exactly matching the screenshot: 2 rows layout) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4 md:hidden text-center"
        >
          {/* Row 1 */}
          <div className="flex justify-around items-center">
            {skills
              .filter((_, idx) => [0, 1, 5, 6].includes(idx)) // HTML5, CSS, Git, Github
              .map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileTap={{ scale: 0.95 }}
                  className="text-zinc-400 hover:text-white font-medium text-sm px-2 py-1 hover:orange-text-glow"
                >
                  {skill.name}
                </motion.div>
              ))}
          </div>

          {/* Row 2 */}
          <div className="flex justify-around items-center">
            {skills
              .filter((_, idx) => [3, 4, 2].includes(idx)) // Node.js, React, Javascript
              .map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileTap={{ scale: 0.95 }}
                  className="text-zinc-400 hover:text-white font-medium text-sm px-2 py-1 hover:orange-text-glow"
                >
                  {skill.name}
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
