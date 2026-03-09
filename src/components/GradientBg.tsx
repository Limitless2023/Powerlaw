/**
 * [INPUT]: 依赖全局 window.Color4Bg（CDN 加载）
 * [OUTPUT]: GradientBg 组件（无 props，单一暖色配色）
 * [POS]: components 的全局背景渲染器，被 App 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    Color4Bg: {
      BlurGradientBg: new (options: {
        dom: string
        colors: string[]
        loop: boolean
      }) => void
    }
  }
}

/* ── 暖色渐变 — 唯一配色 ── */
const COLORS = ["#F6C9B9", "#FDD2BF", "#FFD9CA", "#FFE5DB"]

export default function GradientBg() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    try {
      new window.Color4Bg.BlurGradientBg({
        dom: "bg-root",
        colors: COLORS,
        loop: true,
      })
    } catch (err) {
      console.warn("Color4Bg init failed:", err)
    }
  }, [])

  return null
}
