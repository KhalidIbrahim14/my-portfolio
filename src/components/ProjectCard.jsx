import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import GlassCard from './GlassCard';

const ProjectCard = ({ title, category, description, image, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-md group"
        >
            <GlassCard className="p-8 border-white/5 group-hover:border-accent-blue/30 transition-colors duration-500 overflow-hidden">
                <div
                    style={{ transform: "translateZ(60px)" }}
                    className="relative h-56 w-full mb-8 bg-black/40 rounded-xl border border-white/5 flex items-center justify-center"
                >
                    <img
                        src="/logo.png"
                        alt={title}
                        className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    <span className="hidden text-6xl">{image}</span>

                    {/* Subtle Inner Glow */}
                    <div className="absolute inset-0 bg-radial-gradient from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <div style={{ transform: "translateZ(40px)" }}>
                    <h3 className="text-3xl font-bold mb-3 tracking-tight">{title}</h3>
                    <p className="text-accent-blue text-xs uppercase tracking-[0.3em] font-bold mb-5">{category}</p>
                    <p className="text-white/40 text-base leading-relaxed mb-8">{description}</p>

                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-7 py-3.5 bg-white text-black text-sm font-bold rounded-xl hover:bg-accent-blue hover:text-white hover:premium-glow transition-all duration-500"
                        >
                            Live Demo
                            <ExternalLink size={16} />
                        </a>
                    )}
                </div>
            </GlassCard>

            {/* Outer Floating Backlight */}
            <div className="absolute -inset-2 bg-accent-blue/10 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none -z-10" />
        </motion.div>
    );
};

export default ProjectCard;
