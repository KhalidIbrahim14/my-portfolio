import React, { useEffect, useState } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('.project-card') ||
                target.closest('.nav-link')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div
            style={{
                position: 'fixed',
                left: position.x,
                top: position.y,
                width: isHovering ? '60px' : '20px',
                height: isHovering ? '60px' : '20px',
                border: '1px solid var(--text-primary)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9999,
                transform: 'translate(-50%, -50%)',
                transition: 'width 0.3s ease, height 0.3s ease, background 0.3s ease',
                backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                mixBlendMode: 'difference',
                backdropFilter: isHovering ? 'blur(2px)' : 'none'
            }}
        >
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '4px',
                height: '4px',
                backgroundColor: 'var(--accent-blue)',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: isHovering ? 0 : 1
            }} />
        </div>
    );
};

export default Cursor;
