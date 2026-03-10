/**
 * [INPUT]: 依赖 @/lib/utils 的 cn
 * [OUTPUT]: GlassCard 组件
 * [POS]: components 的卡片容器，被所有 section 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function GlassCard({ children, className, onClick }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-5",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
