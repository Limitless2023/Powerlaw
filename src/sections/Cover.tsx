import { motion } from "framer-motion";
import StatCounter from "@/components/StatCounter";

export default function Cover() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 relative">
      {/* Top label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-8"
      >
        MEFLOW COPILOT · 2026.03
      </motion.div>

      {/* Main title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold text-center leading-tight mb-6"
      >
        <span className="text-white">一个 Half 产品的</span>
        <br />
        <span className="text-accent">沉浸式 Vibe Coding</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-zinc-400 text-center mb-16 font-mono"
      >
        4 个仓库 · ~60 个文件 · 3 种语言 · 我写的代码：0 行
      </motion.p>

      {/* Stat counters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-16"
      >
        <StatCounter value={4} label="仓库" />
        <StatCounter value={60} label="文件改动" prefix="~" />
        <StatCounter value="MAX 50%" label="Claude $200/月" />
        <StatCounter value="60%" label="Codex $20/月" />
      </motion.div>

      {/* Author */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-sm text-zinc-500"
      >
        Limitless · 产品
      </motion.div>
    </div>
  );
}
