import React from 'react';
import { motion } from 'framer-motion';

const FloatingTech = () => {
    const techs = [
        { name: "React", x: "10%", y: "20%", duration: 25 },
        { name: "JavaScript", x: "80%", y: "15%", duration: 30 },
        { name: "Tailwind", x: "15%", y: "70%", duration: 28 },
        { name: "Node.js", x: "75%", y: "80%", duration: 35 },
        { name: "Vite", x: "50%", y: "10%", duration: 22 },
        { name: "Framer", x: "85%", y: "50%", duration: 40 },
    ];

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 opacity-20">
            {techs.map((tech, i) => (
                <motion.div
                    key={i}
                    initial={{ x: tech.x, y: tech.y }}
                    animate={{
                        y: [tech.y, "calc(" + tech.y + " - 40px)", tech.y],
                        x: [tech.x, "calc(" + tech.x + " + 20px)", tech.x],
                    }}
                    transition={{
                        duration: tech.duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute text-white/5 font-bold text-6xl md:text-8xl select-none"
                    style={{ left: tech.x, top: tech.y }}
                >
                    {tech.name}
                </motion.div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>
    );
};

export default FloatingTech;
