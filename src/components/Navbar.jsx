import React from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
    const navItems = [
        { icon: <Home size={20} />, label: "Home", href: "#" },
        { icon: <Briefcase size={20} />, label: "Work", href: "#work" },
        { icon: <Mail size={20} />, label: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center gap-2 p-2 glass"
            >
                {navItems.map((item, i) => (
                    <a
                        key={i}
                        href={item.href}
                        className="relative group p-3 text-white/50 hover:text-white transition-colors"
                    >
                        {item.icon}
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-blue transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(0,140,255,0.8)]" />
                    </a>
                ))}
            </motion.div>
        </nav>
    );
};

export default Navbar;
