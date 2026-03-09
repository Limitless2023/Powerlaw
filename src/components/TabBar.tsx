/**
 * [INPUT]: 无外部依赖
 * [OUTPUT]: TabBar 组件
 * [POS]: components 的 tab 切换器，被 Part1/Part2/Part4/Part5 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

interface TabBarProps {
  tabs: string[]
  active: number
  onChange: (index: number) => void
}

export default function TabBar({ tabs, active, onChange }: TabBarProps) {
  return (
    <div className="flex gap-1 mb-6 flex-wrap">
      {tabs.map((label, i) => (
        <button
          key={label}
          onClick={() => onChange(i)}
          className={`px-4 py-2 rounded-xl text-sm transition-all ${
            active === i
              ? "glass-strong text-white"
              : "text-white/50 hover:text-white/80"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
