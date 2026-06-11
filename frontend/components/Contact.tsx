"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0f1d] relative z-20 overflow-hidden">
      <div className="absolute right-1/4 bottom-0 w-80 h-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Contact
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg">
            Feel free to reach out for collaborations, project inquiries, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 flex flex-col gap-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Let's build something cool.
            </h3>
            
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              I am open to full-time roles, freelance opportunities, and collaborative ventures. If you have an exciting concept you'd like to bring to life, drop a line!
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#161f30] border border-border/60 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 block">Call Me</span>
                  <a href="tel:+917982534243" className="text-sm font-semibold text-white hover:text-primary transition-colors">
                    +91 7982534243
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#161f30] border border-border/60 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 block">Email Me</span>
                  <a href="mailto:kbhargava120@gmail.com" className="text-sm font-semibold text-white hover:text-primary transition-colors">
                    kbhargava120@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#161f30] border border-border/60 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 block">Location</span>
                  <span className="text-sm font-semibold text-white">
                    New Delhi, India
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-border/40 pt-8 mt-4">
              <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-4">
                Connect with me
              </span>
              <div className="flex gap-4">
                <a
                  href="https://github.com/kWRizzz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#161f30] border border-border/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary transition-all duration-300"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/krishna-bhargava-46b29b2b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#161f30] border border-border/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary transition-all duration-300"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-card border border-border/40 p-8 rounded-2xl relative">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 flex flex-col items-center justify-center text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary flex items-center justify-center text-primary mb-2">
                    <CheckCircle className="w-8 h-8 animate-bounce" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-zinc-400 text-sm max-w-sm">
                    Thank you for reaching out, Krishna. I have received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-xs font-semibold text-primary border border-primary/20 hover:border-primary px-5 py-2.5 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Doe"
                      className="bg-[#080c14] border border-border/60 hover:border-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-zinc-600"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="johndoe@example.com"
                      className="bg-[#080c14] border border-border/60 hover:border-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-zinc-600"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Project Collaboration"
                      className="bg-[#080c14] border border-border/60 hover:border-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-zinc-600"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Krishna, I'd like to discuss a project..."
                      className="bg-[#080c14] border border-border/60 hover:border-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-zinc-600 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-white font-medium py-3.5 px-6 rounded-xl transition-all duration-300 orange-glow disabled:opacity-50 text-sm mt-2"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
