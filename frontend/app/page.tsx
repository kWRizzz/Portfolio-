import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080c14] text-foreground font-sans selection:bg-primary/30 selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero />

        {/* Skills Ribbon */}
        <Skills />

        {/* About & Services Section */}
        <About />

        {/* Selected Engineering Projects Section */}
        <Projects />

        {/* Contact Form Section */}
        <Contact />
      </main>

      {/* Modern Compact Footer */}
      <footer className="bg-[#080c14] border-t border-border/40 py-8 text-center text-zinc-500 text-xs">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Krishna Bhargava. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">Back to top</a>
            <a href="https://github.com/kWRizzz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/krishna-bhargava-46b29b2b3/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
