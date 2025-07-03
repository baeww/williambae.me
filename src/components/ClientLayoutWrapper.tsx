'use client';

import React, { useState, useEffect } from 'react';
import SkyGradient, { isNight } from './sky-gradient';
import BirdsBackground from './birds';
import Header from './header';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  // Track the current time for night/day detection
  const [now, setNow] = useState(new Date());
  const [customHour, setCustomHour] = useState<number | null>(null);
  const [customMinute, setCustomMinute] = useState<number>(0);
  const [gradientEndColor, setGradientEndColor] = useState<string>('#00005F');

  // This will be true if the selected (or current) time is night
  const night = customHour !== null
    ? isNight(customHour, customMinute)
    : isNight(now.getHours(), now.getMinutes());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--foreground-rgb', night ? '255, 255, 255' : '0, 0, 0');
      console.debug('[ClientLayoutWrapper] AUTO night:', night, 'set --foreground-rgb to', night ? '255, 255, 255' : '0, 0, 0');
    }
  }, [night]);

  return (
    <div>
      <SkyGradient
        customHour={customHour}
        setCustomHour={setCustomHour}
        customMinute={customMinute}
        setCustomMinute={setCustomMinute}
        onGradientChange={setGradientEndColor}
      />
      <div className='position: absolute w-full h-full -z-10'>
        <BirdsBackground />
      </div>
      <main className="flex min-h-screen flex-col items-center py-20 px-6 lg:px-24">
        <div className="z-2 w-full max-w-5xl font-mono text-sm flex flex-col lg:flex-row justify-between">
          <Header borderColor={gradientEndColor} />
          <div className='lg:pl-[45%]'>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
} 