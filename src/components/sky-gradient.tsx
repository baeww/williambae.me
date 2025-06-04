'use client'

import React, { useEffect, useState } from 'react';

interface TimeOfDay {
  start: number;
  end: number;
  startColor: string;
  endColor: string;
}

const timeOfDayColors: TimeOfDay[] = [
  // Night to Dawn
  { start: 0, end: 4.5, startColor: '#1A1A2E', endColor: '#16213E' }, // Midnight to ~4:30 AM
  // Pre-dawn to Sunrise
  { start: 4.5, end: 5.44, startColor: '#16213E', endColor: '#FF7E5F' }, // 4:30 AM to 5:44 AM (orange peak)
  // Sunrise to Morning
  { start: 5.44, end: 7, startColor: '#FF7E5F', endColor: '#87CEEB' }, // 5:44 AM to 7 AM
  // Morning to Afternoon
  { start: 7, end: 17, startColor: '#87CEEB', endColor: '#4A90E2' }, // 7 AM to 5 PM
  // Afternoon to Sunset
  { start: 17, end: 20.52, startColor: '#4A90E2', endColor: '#FEB47B' }, // 5 PM to 8:31 PM (sunset orange peak)
  // Sunset to Night
  { start: 20.52, end: 20.5, startColor: '#FEB47B', endColor: '#16213E' }, // 8:31 PM to 8:30 PM (should be 8:31 PM to night)
  // Night
  { start: 20.5, end: 24, startColor: '#16213E', endColor: '#1A1A2E' }, // 8:30 PM to Midnight
];

// Helper to convert hex to RGB
function hexToRgb(hex: string) {
  const match = hex.replace('#', '').match(/.{1,2}/g);
  if (!match) return [0, 0, 0];
  return match.map(x => parseInt(x, 16));
}

// Helper to convert RGB to hex
function rgbToHex([r, g, b]: number[]) {
  return (
    '#' +
    [r, g, b]
      .map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
  );
}

// Helper to interpolate between two colors
function interpolateColor(color1: string, color2: string, t: number) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  const rgb = rgb1.map((c, i) => Math.round(c + (rgb2[i] - c) * t));
  return rgbToHex(rgb as [number, number, number]);
}

function getInterpolatedColors(hour: number, minute: number) {
  // Convert hour and minute to a float hour
  const time = hour + minute / 60;
  // Find the two segments that this time is between
  let prev = timeOfDayColors[timeOfDayColors.length - 1];
  let next = timeOfDayColors[0];
  for (let i = 0; i < timeOfDayColors.length; i++) {
    const seg = timeOfDayColors[i];
    if (seg.start <= seg.end) {
      if (time >= seg.start && time < seg.end) {
        prev = seg;
        next = timeOfDayColors[(i + 1) % timeOfDayColors.length];
        break;
      }
    } else {
      // Overnight segment
      if (time >= seg.start || time < seg.end) {
        prev = seg;
        next = timeOfDayColors[(i + 1) % timeOfDayColors.length];
        break;
      }
    }
  }
  // Calculate t (0 to 1) between prev and next
  let segStart = prev.start;
  let segEnd = prev.end;
  if (segStart > segEnd) segEnd += 24;
  let t = (time - segStart) / (segEnd - segStart);
  if (t < 0) t += 1; // handle overnight
  // Interpolate both start and end colors
  const start = interpolateColor(prev.startColor, next.startColor, t);
  const end = interpolateColor(prev.endColor, next.endColor, t);
  return { start, end };
}

export function isNight(hour: number, minute: number) {
  const time = hour + minute / 60;
  // Night segments: 0-4.5 and 20.5-24
  return (time >= 0 && time < 4.5) || (time >= 20.5 && time < 24);
}

export function useNightState(customHour: number | null, customMinute: number) {
  return customHour !== null
    ? isNight(customHour, customMinute)
    : (() => { const now = new Date(); return isNight(now.getHours(), now.getMinutes()); })();
}

interface SkyGradientProps {
  customHour: number | null;
  setCustomHour: React.Dispatch<React.SetStateAction<number | null>>;
  customMinute: number;
  setCustomMinute: React.Dispatch<React.SetStateAction<number>>;
}

const SkyGradient: React.FC<SkyGradientProps> = ({ customHour, setCustomHour, customMinute, setCustomMinute }) => {
  const [gradient, setGradient] = useState({ start: '', end: '' });
  const [showControls, setShowControls] = useState(false);

  const updateGradient = () => {
    let hour: number, minute: number;
    if (customHour !== null) {
      hour = customHour;
      minute = customMinute;
    } else {
      const now = new Date();
      hour = now.getHours();
      minute = now.getMinutes();
    }
    setGradient(getInterpolatedColors(hour, minute));
  };

  useEffect(() => {
    updateGradient();
    if (customHour === null) {
      const interval = setInterval(updateGradient, 60000);
      return () => clearInterval(interval);
    }
  }, [customHour, customMinute]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setCustomHour(Math.floor(value / 60));
    setCustomMinute(value % 60);
  };

  const resetToCurrentTime = () => {
    setCustomHour(null);
    setCustomMinute(0);
  };

  const formatTime = (hour: number, minute: number = 0) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minute.toString().padStart(2, '0')} ${period}`;
  };

  const night = customHour !== null
    ? isNight(customHour, customMinute)
    : (() => { const now = new Date(); return isNight(now.getHours(), now.getMinutes()); })();

  const textColorClass = night ? 'text-white' : 'text-black';

  return (
    <>
      <div
        className="fixed inset-0 -z-10 transition-colors duration-1000"
        style={{
          background: `linear-gradient(to bottom, ${gradient.start}, ${gradient.end})`
        }}
      />
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowControls(!showControls)}
          className={`bg-black/40 hover:bg-black/60 px-4 py-2 rounded-lg backdrop-blur-sm transition-all shadow-lg ${textColorClass}`}
        >
          {customHour !== null ? formatTime(customHour, customMinute) : 'Current Time'}
        </button>
        {showControls && (
          <div className={`absolute bottom-16 right-0 bg-black/60 backdrop-blur-md p-6 rounded-xl shadow-2xl flex flex-col items-center min-w-[260px] ${textColorClass}`}>
            <div className="w-full flex flex-col items-center mb-4">
              <span className={`font-semibold mb-2 text-lg ${textColorClass}`}>
                {customHour !== null ? formatTime(customHour, customMinute) : 'Current Time'}
              </span>
              <input
                type="range"
                min={0}
                max={1439}
                value={customHour !== null ? customHour * 60 + customMinute : (() => { const now = new Date(); return now.getHours() * 60 + now.getMinutes(); })()}
                onChange={handleSliderChange}
                className="w-56 accent-blue-400"
              />
              <div className={`flex w-full justify-between text-xs mt-1 ${textColorClass}`}>
                <span>12:00 AM</span>
                <span>12:00 PM</span>
                <span>11:59 PM</span>
              </div>
            </div>
            <button
              onClick={resetToCurrentTime}
              className={`w-full mt-2 bg-white/20 hover:bg-white/40 px-3 py-2 rounded transition-all font-semibold ${textColorClass}`}
            >
              Reset to Current Time
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SkyGradient; 