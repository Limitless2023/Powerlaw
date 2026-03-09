/**
 * [INPUT]: 依赖 react 的 useEffect/useRef/useState
 * [OUTPUT]: StatCounter 组件
 * [POS]: components 的数据计数器，被 Cover 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { useEffect, useRef, useState } from "react"

interface StatCounterProps {
  value: number | string
  label: string
  prefix?: string
  suffix?: string
}

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export default function StatCounter({
  value,
  label,
  prefix = "",
  suffix = "",
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState<string>("0")
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true

          if (typeof value === "string") {
            setDisplay(value)
            return
          }

          const target = value
          const duration = 1500
          const startTime = performance.now()

          const animate = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const current = Math.round(easeOut(progress) * target)
            setDisplay(current.toLocaleString())
            if (progress < 1) requestAnimationFrame(animate)
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white">
        {prefix}{display}{suffix}
      </div>
      <div className="text-sm text-white/70 mt-1">{label}</div>
    </div>
  )
}
