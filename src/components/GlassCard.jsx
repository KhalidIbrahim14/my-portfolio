import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "", ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className={`glass ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
