import { useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";

interface Part2Props {
  onImageClick?: (src: string) => void;
}

const tabs = ["总览", "提需求", "协作方案", "开发验证", "归档"];

const fade = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.1 * i },
});

/* ── Tab: 总览 ── */
function OverviewTab() {
  const steps = ["提需求", "协作方案", "开发验证", "归档"];

  return (
    <div className="space-y-8">
      {/* Flow diagram */}
      <motion.div {...fade(0)}>
        <GlassCard>
          <div className="flex items-center justify-center gap-3 py-4 flex-wrap">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="px-5 py-3 rounded-xl glass-strong text-white font-semibold text-sm">
                  {step}
                </div>
                {i < steps.length - 1 && (
                  <span className="text-accent text-lg">&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Key point */}
      <motion.div {...fade(1)}>
        <GlassCard accent="teal" className="text-center">
          <p className="text-lg text-white font-semibold">
            我全程做的事情：
            <span className="text-accent"> 描述、选择、判断、验收</span>
          </p>
          <p className="text-sm text-zinc-400 mt-2">
            没有写一行代码，但每一步都在做产品决策
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
}

/* ── Tab: 提需求 ── */
function RequirementsTab() {
  const scenarios = [
    {
      id: "A",
      title: "知道要什么",
      desc: "明确的需求，直接描述期望结果",
      example: "「把 Thinking 区域默认折叠，点击展开」",
    },
    {
      id: "B",
      title: "有方向不确定",
      desc: "知道方向，但细节需要讨论",
      example: "「工具调用需要展示更多信息，你觉得怎么展示好？」",
    },
    {
      id: "C",
      title: "模糊想法",
      desc: "只有一个大致感觉，需要探索",
      example: "「对话界面感觉信息密度不够，帮我看看怎么优化」",
    },
    {
      id: "D",
      title: "发现问题",
      desc: "使用中发现 bug 或体验问题",
      example: "「这个错误信息展示不出来，帮我排查一下」",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {scenarios.map((s, i) => (
        <motion.div key={s.id} {...fade(i)}>
          <GlassCard>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-xs font-bold flex items-center justify-center">
                {s.id}
              </span>
              <h4 className="text-white font-semibold text-sm">{s.title}</h4>
            </div>
            <p className="text-zinc-400 text-sm mb-3">{s.desc}</p>
            <p className="text-xs text-zinc-500 font-mono bg-white/5 rounded-lg px-3 py-2">
              {s.example}
            </p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Tab: 协作方案 ── */
function CollaborationTab() {
  const scenarios = [
    {
      id: "A",
      title: "简单任务",
      desc: "直接让 AI 做，一轮完成",
      detail: "CSS 修改、文案调整、简单组件",
    },
    {
      id: "B",
      title: "中等复杂",
      desc: "AI 出方案，我选择确认后执行",
      detail: "组件重构、新增功能模块",
    },
    {
      id: "C",
      title: "高复杂度",
      desc: "Plan → Confirm → Execute 三步走",
      detail: "跨仓库特性、架构级改动",
    },
    {
      id: "D",
      title: "表述有歧义",
      desc: "AI 会反问确认，避免跑偏",
      detail: "模糊需求、多种实现路径时",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {scenarios.map((s, i) => (
        <motion.div key={s.id} {...fade(i)}>
          <GlassCard>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-xs font-bold flex items-center justify-center">
                {s.id}
              </span>
              <h4 className="text-white font-semibold text-sm">{s.title}</h4>
            </div>
            <p className="text-zinc-400 text-sm mb-2">{s.desc}</p>
            <p className="text-xs text-zinc-500">{s.detail}</p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Tab: 开发验证 ── */
function DevTab() {
  const cards = [
    { title: "单任务迭代", desc: "一个 Agent 反复修改直到满意" },
    { title: "多 Agent 并行", desc: "不同 Agent 同时处理不同任务" },
    { title: "跨仓库联动", desc: "前后端 + 框架层协同修改" },
    { title: "踩坑调试", desc: "AI 帮定位问题，人做最终判断" },
  ];

  const repos = [
    { name: "frontend", lang: "TypeScript / React", files: "~30" },
    { name: "copilot", lang: "Python", files: "~15" },
    { name: "meagent", lang: "Python", files: "~10" },
    { name: "server", lang: "Java / Spring Boot", files: "~7" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((c, i) => (
          <motion.div key={c.title} {...fade(i)}>
            <GlassCard accent="teal">
              <h4 className="text-white font-semibold text-sm mb-1">{c.title}</h4>
              <p className="text-zinc-400 text-xs">{c.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <motion.div {...fade(4)}>
        <GlassCard>
          <h4 className="text-white font-semibold text-sm mb-3">仓库概览</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500 text-xs">
                  <th className="text-left py-2 pr-4">仓库</th>
                  <th className="text-left py-2 pr-4">语言</th>
                  <th className="text-right py-2">文件数</th>
                </tr>
              </thead>
              <tbody>
                {repos.map((r) => (
                  <tr key={r.name} className="border-b border-white/5">
                    <td className="py-2 pr-4 font-mono text-accent">{r.name}</td>
                    <td className="py-2 pr-4 text-zinc-300">{r.lang}</td>
                    <td className="py-2 text-right text-zinc-400">{r.files}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}

/* ── Tab: 归档 ── */
function ArchiveTab() {
  const cards = [
    {
      title: "改动文档 19 份",
      desc: "每个功能一份 MD，包含背景、方案、改动列表、截图",
    },
    {
      title: "结构化提炼",
      desc: "从 v1 到 v3 迭代，经验沉淀为可复用模板",
    },
    {
      title: "Code Review 准备",
      desc: "按仓库整理改动，标注 AI 辅助程度和审查重点",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {cards.map((c, i) => (
        <motion.div key={c.title} {...fade(i)}>
          <GlassCard accent="teal">
            <h4 className="text-white font-semibold text-sm mb-2">{c.title}</h4>
            <p className="text-zinc-400 text-sm">{c.desc}</p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Main Component ── */
export default function Part2({ onImageClick: _onImageClick }: Part2Props) {
  const [tab, setTab] = useState(0);

  // onImageClick is accepted for interface consistency but not used in this section
  void _onImageClick;

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-white mb-2"
      >
        怎么做到的
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-zinc-500 mb-8"
      >
        Real workflow
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
        {tab === 0 && <OverviewTab />}
        {tab === 1 && <RequirementsTab />}
        {tab === 2 && <CollaborationTab />}
        {tab === 3 && <DevTab />}
        {tab === 4 && <ArchiveTab />}
      </div>
    </div>
  );
}
