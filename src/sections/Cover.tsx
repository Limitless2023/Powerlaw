/**
 * [INPUT]: 依赖 framer-motion 的 motion，依赖 @/components/StatCounter，依赖 @/lib/motion 的 fade
 * [OUTPUT]: Cover 组件
 * [POS]: sections 的封面页，被 App 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { motion } from "framer-motion";
import StatCounter from "@/components/StatCounter";
import { fade } from "@/lib/motion";

export default function Cover() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center relative">
      {/* 顶部标签 */}
      <motion.div
        {...fade(1)}
        className="text-xs tracking-[0.3em] text-white/50 uppercase mb-8"
      >
        MeAgent & MeFlow Agent · 2026.03
      </motion.div>

      {/* 主标题 */}
      <motion.h1
        {...fade(2)}
        className="text-5xl md:text-7xl font-bold text-center leading-tight mb-6"
      >
        <span className="text-white">一个 Half 产品的</span>
        <br />
        <span className="text-accent">沉浸式 Vibe Coding</span>
      </motion.h1>

      {/* 副标题 */}
      <motion.p
        {...fade(3)}
        className="text-lg text-white/50 text-center mb-16 font-mono"
      >
        4 个仓库 · ~60 个文件 · 3 种语言
      </motion.p>

      {/* 数据计数器 */}
      <motion.div
        {...fade(4)}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-8"
      >
        <StatCounter value={4} label="仓库" />
        <StatCounter value={60} label="文件改动" prefix="~" />
        <StatCounter value="50%" label="Claude $200/月" />
        <StatCounter value="60%" label="Codex $20/月" />
      </motion.div>

      {/* 零代码高亮 */}
      <motion.div
        {...fade(4.5)}
        className="text-lg text-accent font-mono font-semibold mb-8"
      >
        我写的代码：0 行
      </motion.div>

      {/* 仓库标签 */}
      <motion.div {...fade(5)} className="flex gap-3 mb-8">
        {["frontend", "copilot", "meagent", "server"].map((repo) => (
          <span
            key={repo}
            className="px-3 py-1.5 rounded-lg text-xs font-mono text-white/70 bg-white/10 border border-white/10"
          >
            {repo}
          </span>
        ))}
      </motion.div>

      {/* 作者 */}
      <motion.div {...fade(5.5)} className="text-sm text-white/50">
        Limitless
      </motion.div>
    </div>
  );
}
