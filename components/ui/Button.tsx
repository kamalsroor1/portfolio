import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={cn(
          "inline-flex items-center justify-center font-display rounded-md border text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 active:scale-98 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
          {
            // Primary (Violet glow)
            "bg-accent border-accent text-text-primary hover:bg-accent/85 hover:border-accent hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]":
              variant === "primary",
            // Secondary (Cyan outline/glow)
            "bg-transparent border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]":
              variant === "secondary",
            // Glass (Dark transparent panel)
            "bg-white/5 border-white/10 text-text-primary hover:bg-white/10 hover:border-white/20":
              variant === "glass",
            // Ghost (Minimalist)
            "bg-transparent border-transparent text-text-secondary hover:text-text-primary hover:bg-white/5":
              variant === "ghost",
          },
          {
            "px-3 py-1.5 text-xs": size === "sm",
            "px-6 py-2.5 text-sm": size === "md",
            "px-8 py-3.5 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
