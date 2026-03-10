/**
 * [INPUT]: 依赖 framer-motion 的 motion
 * [OUTPUT]: SectionHeader 组件
 * [POS]: components 的标题渲染器，被所有 Part section 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  subtitle: string
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-ink mb-2 tracking-tight"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-ink-light mb-8"
      >
        {subtitle}
      </motion.p>
    </>
  )
}
