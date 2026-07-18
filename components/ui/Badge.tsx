import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "outline" | "cyan";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium font-mono border transition-all duration-300",
        {
          // Primary (Violet themed)
          "bg-accent/10 border-accent/20 text-accent-glow": variant === "primary",
          // Secondary (Muted gray)
          "bg-white/5 border-white/10 text-text-secondary": variant === "secondary",
          // Outline (Border only)
          "bg-transparent border-white/20 text-text-primary": variant === "outline",
          // Cyan Theme (Alternative accent)
          "bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan": variant === "cyan",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
