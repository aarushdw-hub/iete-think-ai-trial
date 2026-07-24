import React, { useState, useEffect } from 'react';
import { Clock, Flame } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date(EVENT_DETAILS.registrationDeadline).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col items-center my-6">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-4 shadow-lg shadow-amber-500/5">
        <Flame className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
        <span className="font-semibold tracking-wide">REGISTRATION CLOSING SOON</span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg w-full">
        {timeUnits.map((unit, idx) => (
          <div
            key={idx}
            className="glass-card flex flex-col items-center rounded-2xl p-3 sm:p-5 relative group hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
          >
            {/* Top accent glow */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

            <span className="text-2xl sm:text-4xl font-black font-mono text-white tracking-wider text-gradient-emerald drop-shadow-sm">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-[9px] sm:text-xs font-mono text-slate-400 mt-1 uppercase tracking-widest font-bold">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
