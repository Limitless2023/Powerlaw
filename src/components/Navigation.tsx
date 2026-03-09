import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  "Cover",
  "先看东西",
  "怎么做到的",
  "复杂度",
  "最佳实践",
  "不止写代码",
  "为什么能work",
  "收尾",
  "Thanks",
];

interface NavigationProps {
  currentSection: number;
  onNavigate: (index: number) => void;
}

export default function Navigation({
  currentSection,
  onNavigate,
}: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-12 px-6 flex items-center bg-black/50 border-b border-white/10">
      <span className="text-xs font-medium tracking-widest text-zinc-300 uppercase shrink-0">
        VIBE CODING
      </span>

      <div className="flex-1 flex items-center justify-center gap-1">
        {NAV_ITEMS.map((item, index) => (
          <button
            key={item}
            onClick={() => onNavigate(index)}
            className={cn(
              "px-3 h-12 text-xs tracking-wide transition-colors duration-200 border-b-2 flex items-center",
              index === currentSection
                ? "text-white border-white"
                : "text-zinc-400 border-transparent hover:text-zinc-200"
            )}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}
