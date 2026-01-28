import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import FloatingTech from './components/FloatingTech';
import GlassCard from './components/GlassCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Copy, Check } from 'lucide-react';

function App() {
  const [copied, setCopied] = useState(false);
  const email = "khalidibrahimgharib1@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const masterpiece = {
    title: "Capsule Medicine (كبسولة الدواء)",
    category: "Masterpiece Showcase",
    description: "A high-performance pharmaceutical solution platform built with a focus on pristine user experience and efficient logistics management.",
    image: "💊",
    link: "https://kabsolet-eldawaa.vercel.app"
  };

  return (
    <div className="relative selection:bg-accent-blue/30 overflow-x-hidden">
      <FloatingTech />
      <Navbar />

      <main>
        <Hero />

        <section id="work" className="py-40 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-sm uppercase tracking-[1em] text-white/20 font-bold mb-6">
              Featured Work
            </h2>
            <div className="w-16 h-[2px] bg-accent-blue mx-auto rounded-full" />
          </motion.div>

          <div className="flex justify-center">
            <ProjectCard {...masterpiece} />
          </div>
        </section>

        <section id="contact" className="py-40 px-6">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-12 md:p-24 text-center relative border-white/5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter">
                  Let's Connect
                </h2>
                <p className="text-white/40 text-lg md:text-xl mb-16 max-w-xl mx-auto font-light leading-relaxed">
                  Available for collaboration on high-end digital projects. Let's create something weightless.
                </p>

                <div className="flex flex-col gap-8 justify-center items-center">
                  <button
                    onClick={handleCopyEmail}
                    className="group relative w-full md:w-auto px-10 py-5 glass hover:bg-white/10 anti-gravity-hover flex items-center justify-center gap-4 group"
                  >
                    <Mail size={20} className="text-accent-blue" />
                    <span className="font-medium tracking-wide">{email}</span>
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      {copied ? <Check size={16} className="text-accent-green" /> : <Copy size={16} />}
                    </div>

                    <AnimatePresence>
                      {copied && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: -50, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute bg-accent-blue text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl"
                        >
                          Copied! 🚀
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>

                  <a
                    href="tel:+201284488820"
                    className="w-full md:w-auto px-10 py-5 glass hover:bg-white/10 anti-gravity-hover flex items-center justify-center gap-4"
                  >
                    <Phone size={20} className="text-accent-blue" />
                    <span className="font-medium tracking-wide">+20 128 448 8820</span>
                  </a>
                </div>
              </motion.div>

              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Mail size={80} />
              </div>
            </GlassCard>
          </div>
        </section>

        <footer className="py-20 border-t border-white/5 text-center">
          <p className="text-[10px] text-white/20 tracking-[0.5em] uppercase font-bold">
            © 2026 KHALID IBRAHIM. SOPHISTICATED GLASSMORPHISM.
          </p>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{
        __html: `
        section { scroll-margin-top: 100px; }
        .bg-radial-gradient {
          background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
        }
      `}} />
    </div>
  );
}

export default App;
