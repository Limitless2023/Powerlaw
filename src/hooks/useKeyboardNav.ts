/**
 * [INPUT]: 依赖 react 的 useEffect/useCallback
 * [OUTPUT]: useKeyboardNav hook
 * [POS]: hooks 的键盘导航，被 App 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { useEffect, useCallback } from "react"

export default function useKeyboardNav(
  onNavigate: (direction: 1 | -1) => void
) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName
      if (tag === "INPUT" || tag === "TEXTAREA") return

      switch (e.key) {
        case "ArrowDown":
        case "ArrowRight":
        case " ":
          e.preventDefault()
          onNavigate(1)
          break
        case "ArrowUp":
        case "ArrowLeft":
          e.preventDefault()
          onNavigate(-1)
          break
      }
    },
    [onNavigate]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])
}
