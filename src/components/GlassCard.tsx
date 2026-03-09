import { cn } from "@/lib/utils";

const ACCENT_COLORS = {
  teal: "#13ACBA",
  red: "#ef4444",
  green: "#22c55e",
  amber: "#f59e0b",
} as const;

interface GlassCardProps {
  children: React.ReactNode;
  accent?: keyof typeof ACCENT_COLORS;
  className?: string;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  accent,
  className,
  onClick,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
