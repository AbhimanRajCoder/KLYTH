"use client";

import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
  className?: string;
  onComplete?: () => void;
  showLabels?: boolean;
}

export default function Countdown({
  targetDate,
  className = "",
  onComplete,
  showLabels = true
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isOver: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: false });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        if (onComplete) onComplete();
        return true;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isOver: false
      });
      return false;
    };

    const isOverAlready = calculateTime();
    if (isOverAlready) return;

    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate, onComplete]);

  if (timeLeft.isOver) {
    return (
      <span className="font-sans font-semibold tracking-wider bg-gradient-to-r from-[#EDCF72] via-[#E2B842] to-[#CFA536] bg-clip-text text-transparent uppercase text-sm">
        Session Active / Archive Online
      </span>
    );
  }

  const timeBlocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Mins" },
    { value: timeLeft.seconds, label: "Secs" }
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`} aria-label={`Countdown: ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes remaining`}>
      {timeBlocks.map((block, idx) => (
        <div key={idx} className="flex items-center">
          <div className="flex flex-col items-center">
            <span className="font-sans font-bold text-2xl md:text-3xl tracking-tight bg-gradient-to-b from-[#EDCF72] via-[#E2B842] to-[#CFA536] bg-clip-text text-transparent">
              {String(block.value).padStart(2, "0")}
            </span>
            {showLabels && (
              <span className="font-sans text-[9px] uppercase tracking-widest text-klyth-cream/40 mt-1">
                {block.label}
              </span>
            )}
          </div>
          {idx < timeBlocks.length - 1 && (
            <span className="text-klyth-gold/30 font-light text-xl md:text-2xl ml-4 self-start select-none">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
