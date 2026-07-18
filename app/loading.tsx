import React from "react";

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 bg-[#0A0A0F]/90 backdrop-blur-md z-[9999] flex flex-col items-center justify-center font-mono select-none pointer-events-none">
      
      {/* Sleek top glowing progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-accent-cyan to-accent overflow-hidden z-[99999]">
        <div className="w-full h-full bg-white/20 animate-pulse" />
      </div>

      <div className="flex flex-col items-center gap-6">
        {/* Premium glowing loader ring */}
        <div className="w-14 h-14 rounded-full border-2 border-accent/25 border-t-accent-cyan animate-spin flex items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.15)]">
          <div className="w-8 h-8 rounded-full border border-accent-cyan/10 border-t-accent animate-spin" style={{ animationDirection: "reverse" }} />
        </div>
        
        <span className="text-[10px] text-accent-cyan text-glow-cyan tracking-[4px] uppercase animate-pulse">
          Routing / Loading ...
        </span>
      </div>
    </div>
  );
}
