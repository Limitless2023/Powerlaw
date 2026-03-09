import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number | string;
  label: string;
  prefix?: string;
  suffix?: string;
}

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function StatCounter({
  value,
  label,
  prefix = "",
  suffix = "",
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState<string>("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // If value is a string (non-numeric), just show it directly
          if (typeof value === "string") {
            setDisplay(value);
            return;
          }

          const target = value;
          const duration = 1500; // 1.5s
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOut(progress);
            const current = Math.round(easedProgress * target);

            setDisplay(current.toLocaleString());

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-emerald-400 bg-clip-text text-transparent">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="text-sm text-zinc-500 mt-1">{label}</div>
    </div>
  );
}
