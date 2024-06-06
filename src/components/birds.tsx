'use client'

import React, { useEffect, useRef } from 'react';
import Birds from 'vanta/dist/vanta.birds.min';

const BirdsBackground: React.FC = () => {
    const vantaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const vantaEffect = Birds({
            el: vantaRef.current!,
            backgroundAlpha: 0,
            color1: 0xffffff,
            color2: 0xffffff,
            birdSize: 1.5,
            wingSpan: 20,
            speedLimit: 4,
            separation: 30,
            alignment: 20,
            cohesion: 20,
            quantity: 2.00,
            colorMode: "lerp",
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    return <div ref={vantaRef} className='object-fill h-full' />;
};

export default BirdsBackground;