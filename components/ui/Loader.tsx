"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const loadingSteps = [
  { text: "Initializing Python FastAPI kernel...", delay: 150 },
  { text: "Establishing connection pool to PostgreSQL...", delay: 450 },
  { text: "Checking dynamic database connections for SaaS tenants...", delay: 750 },
  { text: "Mounting Next.js 15 Server Components & assets...", delay: 1050 },
  { text: "Establishing secure SSL connection on port 443...", delay: 1300 },
  { text: "Kamal Sroor Engine Ready. Redirecting to home...", delay: 1550 },
];

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Logs simulation matching delays
    loadingSteps.forEach((step) => {
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, `> ${step.text} [OK]`]);
      }, step.delay);
      return () => clearTimeout(timer);
    });

    // 2. Smooth progress increment up to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          const endTimer = setTimeout(() => {
            onComplete();
          }, 350); // Pause briefly at 100%
          return 100;
        }
        return prev + 1;
      });
    }, 16); // Reaches 100% in ~1.6 seconds

    return () => {
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#0A0A0F] z-[9999] flex flex-col items-center justify-center p-6 select-none font-mono">
      <div className="max-w-md w-full flex flex-col gap-10">
        
        {/* Central Geometric Pulsing Core */}
        <div className="flex items-center justify-center relative h-36">
          {/* Inner Pulsing Ring 1 */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.5, 0.2], rotate: 45 }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute w-24 h-24 border border-accent/25 rounded-2xl"
          />
          {/* Inner Pulsing Ring 2 */}
          <motion.div
            animate={{ scale: [1, 0.94, 1], opacity: [0.3, 0.7, 0.3], rotate: -45 }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3 }}
            className="absolute w-20 h-20 border border-accent-cyan/20 rounded-2xl"
          />
          {/* Static Monogram */}
          <div className="relative z-10 text-3xl font-black font-display text-text-primary tracking-widest text-glow-violet select-none">
            KS
          </div>
        </div>

        {/* Sleek Horizontal Neon Progress Bar */}
        <div className="flex flex-col gap-2.5 w-full">
          <div className="flex justify-between items-center text-[10px] md:text-xs font-mono tracking-widest text-accent-cyan">
            <span className="animate-pulse">LOADING_SYSTEM_RESOURCES</span>
            <span className="font-bold text-glow-cyan">{progress}%</span>
          </div>
          {/* Bar track */}
          <div className="w-full h-[6px] bg-black/60 border border-border-subtle/40 rounded-full overflow-hidden p-[1px] relative shadow-inner">
            {/* Glowing fill */}
            <div
              className="h-full bg-gradient-to-r from-accent via-accent-cyan to-accent rounded-full transition-all duration-100 ease-out shadow-[0_0_12px_rgba(6,182,212,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Simulated Command-line / Terminal output */}
        <div className="bg-black/60 border border-border-subtle/80 rounded-md p-5 min-h-[160px] text-[10px] md:text-xs flex flex-col gap-2 text-text-secondary shadow-inner shadow-black/80">
          <div className="flex items-center gap-1.5 border-b border-border-subtle/30 pb-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="text-xxs font-semibold ml-2 tracking-widest text-text-secondary/50">BOOT_LOGS</span>
          </div>

          <div className="flex flex-col gap-1.5">
            {logs.map((log, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className={idx === logs.length - 1 ? "text-accent-cyan text-glow-cyan" : ""}
              >
                {log}
              </motion.div>
            ))}
            {progress < 100 && (
              <div className="flex items-center gap-1">
                <span>&gt;</span>
                <span className="inline-block w-2 h-3.5 bg-accent-cyan animate-pulse" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
