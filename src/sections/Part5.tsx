import { useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import PreviewEmbed from "@/components/PreviewEmbed";

interface Part5Props {
  onImageClick?: (src: string) => void;
}

const tabs = ["设计探索", "HTML预览", "IntegHub", "文档整理"];

const fade = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.1 * i },
});

/* ── Tab: 设计探索 ── */
function DesignTab() {
  const areas = [
    { label: "ICON", desc: "图标选型和风格统一" },
    { label: "配色", desc: "色板探索和对比" },
    { label: "排版", desc: "间距、字体、层级" },
    { label: "布局", desc: "响应式和组件布局" },
    { label: "格式", desc: "Markdown 渲染样式" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-5 gap-3">
        {areas.map((a, i) => (
          <motion.div key={a.label} {...fade(i)}>
            <GlassCard className="text-center py-4">
              <h4 className="text-white font-semibold text-sm mb-1">{a.label}</h4>
              <p className="text-zinc-500 text-xs">{a.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <motion.div {...fade(5)}>
        <GlassCard accent="teal" className="text-center">
          <p className="text-lg text-white font-semibold">
            AI 是低成本试错引擎
          </p>
          <p className="text-sm text-zinc-400 mt-2">
            想法 &rarr; HTML 预览 &rarr; 确认 &rarr; 写入代码，几分钟完成一次设计迭代
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
}

/* ── Tab: HTML预览 ── */
function PreviewTab() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div {...fade(0)}>
          <PreviewEmbed
            src="/previews/feedback-icon-picker.html"
            title="Feedback Icon Picker"
            height={400}
          />
        </motion.div>

        <motion.div {...fade(1)}>
          <PreviewEmbed
            src="/previews/tooltip-designs-v4.html"
            title="Tooltip Designs v4"
            height={400}
          />
        </motion.div>
      </div>

      <motion.div {...fade(2)}>
        <GlassCard accent="teal">
          <p className="text-white text-sm">
            项目过程中共生成{" "}
            <span className="text-accent font-bold text-lg">36</span>{" "}
            个 HTML 预览文件 — 每次设计讨论都有可交互的产出
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
}

/* ── Tab: IntegHub ── */
function IntegHubTab() {
  const stats = [
    { value: "78", label: "App" },
    { value: "57", label: "Workflow" },
    { value: "6+", label: "平台" },
  ];

  const platforms = [
    { name: "飞书", count: "15+" },
    { name: "天眼查", count: "7" },
    { name: "钉钉 / 企微", count: "2+" },
    { name: "AI / 通用", count: "15+" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <motion.div key={s.label} {...fade(i)}>
            <GlassCard className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">{s.value}</div>
              <div className="text-xs text-zinc-500">{s.label}</div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Platform table */}
      <motion.div {...fade(3)}>
        <GlassCard>
          <h4 className="text-white font-semibold text-sm mb-3">平台覆盖</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500 text-xs">
                  <th className="text-left py-2 pr-4">平台</th>
                  <th className="text-right py-2">App 数量</th>
                </tr>
              </thead>
              <tbody>
                {platforms.map((p) => (
                  <tr key={p.name} className="border-b border-white/5">
                    <td className="py-2 pr-4 text-zinc-300">{p.name}</td>
                    <td className="py-2 text-right text-accent font-mono">{p.count}</td>
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

/* ── Tab: 文档整理 ── */
function DocsTab() {
  const cards = [
    {
      title: "改动文档 19 份",
      desc: "每个功能点一份 Markdown，包含背景、方案、改动文件列表和截图对比",
    },
    {
      title: "开发回溯",
      desc: "完整记录每次对话的决策过程，方便复盘和知识传承",
    },
    {
      title: "经验提炼 v1 → v3",
      desc: "从初始记录到结构化模板，三轮迭代沉淀最佳实践",
    },
    {
      title: "Code Review 准备",
      desc: "按仓库整理改动清单，标注 AI 辅助程度和人工审查重点",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
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
export default function Part5({ onImageClick: _onImageClick }: Part5Props) {
  const [tab, setTab] = useState(0);

  void _onImageClick;

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-zinc-800 mb-2"
      >
        不止写代码
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-zinc-600 mb-8"
      >
        Beyond coding
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
                : "text-zinc-600 hover:text-zinc-800"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div key={tab}>
        {tab === 0 && <DesignTab />}
        {tab === 1 && <PreviewTab />}
        {tab === 2 && <IntegHubTab />}
        {tab === 3 && <DocsTab />}
      </div>
    </div>
  );
}
