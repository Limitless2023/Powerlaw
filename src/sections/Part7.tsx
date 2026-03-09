import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";

interface Part7Props {
  onImageClick?: (src: string) => void;
}

const fade = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.1 * i },
});

const mainCards = [
  {
    title: "好奇心",
    desc: "对 AI 能做什么保持好奇，尝试超出「常规用法」的场景",
  },
  {
    title: "Get your feet wet",
    desc: "从一个小任务开始，感受 AI 的能力边界",
  },
  {
    title: "Get your hands dirty",
    desc: "真正在生产项目中用起来，而不只是 demo",
  },
  {
    title: "多多记录分享",
    desc: "记录过程、踩坑、心得 — 分享就是最好的复盘",
  },
];

const smallCards = [
  {
    title: "AI 有 Memory",
    desc: "CLAUDE.md / 上下文文档让 AI 记住项目信息",
  },
  {
    title: "非技术 + AI",
    desc: "产品、设计、运营都能用 AI 做「技术活」",
  },
  {
    title: "反馈速度",
    desc: "几秒出结果 vs 等排期 — 试错成本趋近于零",
  },
  {
    title: "分享 = 复盘",
    desc: "准备分享的过程就是梳理和内化的过程",
  },
];

export default function Part7({ onImageClick: _onImageClick }: Part7Props) {
  void _onImageClick;

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-white mb-2"
      >
        收尾
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-zinc-500 mb-8"
      >
        Takeaways
      </motion.p>

      {/* Main 2x2 grid */}
      <div className="grid md:grid-cols-2 gap-5 mb-8">
        {mainCards.map((c, i) => (
          <motion.div key={c.title} {...fade(i)}>
            <GlassCard accent="teal" className="h-full">
              <h4 className="text-white font-semibold text-lg mb-2">{c.title}</h4>
              <p className="text-zinc-400 text-sm">{c.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Smaller cards row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {smallCards.map((c, i) => (
          <motion.div key={c.title} {...fade(i + 4)}>
            <GlassCard className="h-full">
              <h4 className="text-white font-semibold text-sm mb-1">{c.title}</h4>
              <p className="text-zinc-500 text-xs">{c.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
