// src/hooks/useParallax.js
import { useState, useEffect } from 'react';

export const useParallax = (speed) => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const x = (clientX - window.innerWidth / 2) * speed;
            const y = (clientY - window.innerHeight / 2) * speed;
            setOffset({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [speed]);

    return offset;
};

