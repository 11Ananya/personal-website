import { cn } from "@/lib/utils";

interface TechPillProps {
  tech: string;
  className?: string;
}

export function TechPill({ tech, className }: TechPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-mono",
        "bg-white/[0.05] border border-white/[0.08] text-neutral-300",
        "hover:border-white/[0.15] hover:bg-white/[0.06] transition-colors duration-200",
        className
      )}
    >
      {tech}
    </span>
  );
}
