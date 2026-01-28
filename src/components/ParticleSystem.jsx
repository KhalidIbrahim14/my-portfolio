import React, { useState, useEffect, useCallback } from 'react';

const ParticleSystem = () => {
    const [particles, setParticles] = useState([]);

    const spawnParticles = useCallback((e) => {
        const newParticles = [];
        for (let i = 0; i < 12; i++) {
            newParticles.push({
                id: Math.random(),
                x: e.clientX,
                y: e.clientY,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4,
                size: Math.random() * 3 + 1,
                life: 1.0
            });
        }
        setParticles(prev => [...prev, ...newParticles]);
    }, []);

    useEffect(() => {
        window.addEventListener('click', spawnParticles);

        const interval = setInterval(() => {
            setParticles(prev =>
                prev
                    .map(p => ({
                        ...p,
                        x: p.x + p.vx,
                        y: p.y + p.vy,
                        life: p.life - 0.02
                    }))
                    .filter(p => p.life > 0)
            );
        }, 16);

        return () => {
            window.removeEventListener('click', spawnParticles);
            clearInterval(interval);
        };
    }, [spawnParticles]);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 1000 }}>
            {particles.map(p => (
                <div
                    key={p.id}
                    style={{
                        position: 'absolute',
                        left: p.x,
                        top: p.y,
                        width: p.size,
                        height: p.size,
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-blue)',
                        opacity: p.life,
                        boxShadow: `0 0 ${p.size * 2}px var(--accent-blue)`,
                        transform: 'translate(-50%, -50%)'
                    }}
                />
            ))}
        </div>
    );
};

export default ParticleSystem;
