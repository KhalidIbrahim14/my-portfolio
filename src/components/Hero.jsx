import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="z-10 max-w-4xl"
            >
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-accent-blue font-medium tracking-[0.4em] uppercase text-sm mb-6"
                >
                    Senior Front-end Engineering
                </motion.p>

                <motion.h1
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent"
                >
                    KHALID IBRAHIM
                </motion.h1>

                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="inline-block"
                >
                    <GlassCard className="px-8 py-4">
                        <p className="text-lg md:text-2xl text-white/60 font-light tracking-wide italic">
                            "Crafting Digital Weightlessness & High-Performance Web Experiences"
                        </p>
                    </GlassCard>
                </motion.div>
            </motion.div>

            {/* Subtle Drift Indicator */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute bottom-12 border-l border-white/20 h-16 opacity-30"
            />
        </section>
    );
};

export default Hero;
