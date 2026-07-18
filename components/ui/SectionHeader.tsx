import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  marker: string;
  title?: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  marker,
  title,
  description,
  className,
}) => {
  return (
    <div className={cn("mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-border-subtle pb-6", className)}>
      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs text-text-secondary tracking-wider">
          .../{marker} ...
        </span>
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold font-display uppercase text-text-primary tracking-wide">
            {title}
          </h2>
        )}
      </div>
      {description && (
        <p className="max-w-md text-sm text-text-secondary font-sans leading-relaxed md:text-right">
          {description}
        </p>
      )}
    </div>
  );
};
