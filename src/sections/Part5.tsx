/**
 * [INPUT]: 依赖 react 的 useState，依赖 framer-motion 的 motion，
 *          依赖 @/lib/motion 的 fade，依赖 @/components 的 GlassCard/SectionHeader/TabBar/PreviewEmbed
 * [OUTPUT]: Part5 组件（不止写代码：设计探索 / HTML预览 / IntegHub / 文档整理）
 * [POS]: sections 的第五章节，被 App 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { useState } from "react"
import { motion } from "framer-motion"
import GlassCard from "@/components/GlassCard"
import SectionHeader from "@/components/SectionHeader"
import TabBar from "@/components/TabBar"
import PreviewEmbed from "@/components/PreviewEmbed"
import { fade } from "@/lib/motion"

const tabs = ["设计探索", "HTML预览", "IntegHub", "文档整理"]

/* ── Tab: 设计探索 ── */
function DesignTab() {
  const areas = [
    { label: "ICON", desc: "图标选型和风格统一" },
    { label: "配色", desc: "色板探索和对比" },
    { label: "排版", desc: "间距、字体、层级" },
    { label: "布局", desc: "响应式和组件布局" },
    { label: "格式", desc: "Markdown 渲染样式" },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-5 gap-3">
        {areas.map((a, i) => (
          <motion.div key={a.label} {...fade(i)}>
            <GlassCard className="text-center py-4">
              <h4 className="text-white font-semibold text-sm mb-1">{a.label}</h4>
              <p className="text-white/50 text-xs">{a.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <motion.div {...fade(5)}>
        <GlassCard className="text-center">
          <p className="text-lg text-white font-semibold">
            AI 是低成本试错引擎
          </p>
          <p className="text-sm text-white/60 mt-2">
            想法 &rarr; HTML 预览 &rarr; 确认 &rarr; 写入代码，几分钟完成一次设计迭代
          </p>
        </GlassCard>
      </motion.div>
    </div>
  )
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
        <GlassCard>
          <p className="text-white/80 text-sm">
            项目过程中共生成{" "}
            <span className="text-accent font-mono text-lg font-bold">36</span>{" "}
            个 HTML 预览文件 — 每次设计讨论都有可交互的产出
          </p>
        </GlassCard>
      </motion.div>
    </div>
  )
}

/* ── Tab: IntegHub ── */
function IntegHubTab() {
  const stats = [
    { value: "78", label: "App" },
    { value: "57", label: "Workflow" },
    { value: "6+", label: "平台" },
  ]

  const platforms = [
    { name: "飞书", count: "15+" },
    { name: "天眼查", count: "7" },
    { name: "钉钉 / 企微", count: "2+" },
    { name: "AI / 通用", count: "15+" },
  ]

  return (
    <div className="space-y-6">
      {/* 统计数字 */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <motion.div key={s.label} {...fade(i)}>
            <GlassCard className="text-center">
              <div className="text-3xl font-bold text-accent font-mono mb-1">{s.value}</div>
              <div className="text-xs text-white/50 uppercase tracking-wider">{s.label}</div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* 平台覆盖表 */}
      <motion.div {...fade(3)}>
        <GlassCard>
          <h4 className="text-white font-semibold text-sm mb-3">平台覆盖</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-white/50 text-xs uppercase tracking-wider">
                  <th className="text-left py-2 pr-4">平台</th>
                  <th className="text-right py-2">App 数量</th>
                </tr>
              </thead>
              <tbody>
                {platforms.map((p) => (
                  <tr key={p.name} className="border-b border-white/5">
                    <td className="py-2 pr-4 text-white/80">{p.name}</td>
                    <td className="py-2 text-right text-accent font-mono">{p.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  )
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
  ]

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {cards.map((c, i) => (
        <motion.div key={c.title} {...fade(i)}>
          <GlassCard>
            <h4 className="text-white font-semibold text-sm mb-2">{c.title}</h4>
            <p className="text-white/60 text-sm">{c.desc}</p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  )
}

/* ── Main Component ── */
export default function Part5() {
  const [tab, setTab] = useState(0)

  return (
    <div>
      <SectionHeader title="不止写代码" subtitle="Beyond coding" />
      <TabBar tabs={tabs} active={tab} onChange={setTab} />

      {/* Tab 内容 */}
      <div key={tab}>
        {tab === 0 && <DesignTab />}
        {tab === 1 && <PreviewTab />}
        {tab === 2 && <IntegHubTab />}
        {tab === 3 && <DocsTab />}
      </div>
    </div>
  )
}
