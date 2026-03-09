/**
 * [INPUT]: 无外部依赖
 * [OUTPUT]: fade 动画工厂函数
 * [POS]: lib 的动画工具，被所有 section 组件消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

/* ── 渐入上移动画 ── */
export const fade = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.1 * i },
})
