import { useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";

interface Part4Props {
  onImageClick?: (src: string) => void;
}

const tabs = ["有效做法", "AI做得好的", "踩过的坑"];

const fade = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.1 * i },
});

/* ── Tab: 有效做法 ── */
function EffectiveTab() {
  const practices = [
    {
      title: "截图 > 文字",
      desc: "一张截图胜过千言万语，AI 理解视觉信息更准确",
    },
    {
      title: "给参考系",
      desc: "「参考 Vercel AI 的风格」比「好看一点」有效 100 倍",
    },
    {
      title: "增量推进",
      desc: "每次只改一个小点，而不是一口气描述 10 个改动",
    },
    {
      title: "Plan → Confirm → Execute",
      desc: "复杂任务先让 AI 出方案，确认后再执行",
    },
    {
      title: "先看现状",
      desc: "让 AI 先读代码/截图了解现状，再提改进",
    },
    {
      title: "让 AI 写文档",
      desc: "每次改动完让 AI 总结成文档，自动归档",
    },
    {
      title: "多 Agent 并行",
      desc: "不同任务开不同 Agent，互不干扰，效率翻倍",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {practices.map((p, i) => (
        <motion.div key={p.title} {...fade(i)}>
          <GlassCard className="h-full">
            <h4 className="text-white font-semibold text-sm mb-2">{p.title}</h4>
            <p className="text-zinc-400 text-xs">{p.desc}</p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Tab: AI做得好的 ── */
function AIGoodTab() {
  const items = [
    {
      title: "Purpose 全栈打通",
      desc: "3 个仓库 × 3 种语言，AI 理解了数据流向并正确实现",
    },
    {
      title: "CSS 手术刀修改",
      desc: "精准定位样式问题，不影响周围组件，改完即用",
    },
    {
      title: "错误追查全链路",
      desc: "从前端报错到后端日志，AI 能串联完整链路定位问题",
    },
    {
      title: "先预览后动手",
      desc: "AI 先生成 HTML 预览确认效果，满意后再改代码",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <motion.div key={item.title} {...fade(i)}>
          <GlassCard accent="green">
            <h4 className="text-white font-semibold text-sm mb-2">{item.title}</h4>
            <p className="text-zinc-400 text-sm">{item.desc}</p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Tab: 踩过的坑 ── */
function PitfallsTab() {
  const items = [
    {
      title: "不要说「帮我优化」",
      desc: "太模糊，AI 会过度修改。要具体：「把间距从 8px 改成 12px」",
    },
    {
      title: "AI 过度工程",
      desc: "AI 喜欢加抽象层。简单问题不需要 3 层 wrapper",
    },
    {
      title: "代理变量 / ESLint",
      desc: "本地代理大小写都要清；项目 ESLint 不认 _ 前缀",
    },
    {
      title: "本地环境 AI 帮不了",
      desc: "Docker / ES / 多租户路由等环境问题，还得自己搞",
    },
    {
      title: "审美无限循环",
      desc: "「再好看一点」→ AI 改 → 「还是之前好」→ 死循环。要有明确标准",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, i) => (
        <motion.div key={item.title} {...fade(i)}>
          <GlassCard accent="red">
            <h4 className="text-white font-semibold text-sm mb-2">{item.title}</h4>
            <p className="text-zinc-400 text-sm">{item.desc}</p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Main Component ── */
export default function Part4({ onImageClick: _onImageClick }: Part4Props) {
  const [tab, setTab] = useState(0);

  void _onImageClick;

  return (
    <div className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-white mb-2"
      >
        最佳实践
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-zinc-500 mb-8"
      >
        Best practices
      </motion.p>

      {/* Tab bar */}
      <div className="flex gap-1 mb-6">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setTab(i)}
            className={`px-4 py-2 rounded-xl text-sm transition-all ${
              tab === i
                ? "glass-strong text-white"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div key={tab}>
        {tab === 0 && <EffectiveTab />}
        {tab === 1 && <AIGoodTab />}
        {tab === 2 && <PitfallsTab />}
      </div>
    </div>
  );
}
