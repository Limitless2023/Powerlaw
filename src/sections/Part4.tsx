/**
 * [INPUT]: 依赖 react 的 useState，依赖 framer-motion 的 motion，
 *          依赖 @/lib/motion 的 fade，依赖 @/components 的 GlassCard/SectionHeader/TabBar
 * [OUTPUT]: Part4 组件（最佳实践：有效做法 / AI做得好的 / 踩过的坑）
 * [POS]: sections 的第四章节，被 App 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { useState } from "react"
import { motion } from "framer-motion"
import GlassCard from "@/components/GlassCard"
import SectionHeader from "@/components/SectionHeader"
import TabBar from "@/components/TabBar"
import { fade } from "@/lib/motion"

const tabs = ["有效做法", "AI做得好的", "踩过的坑"]

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
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {practices.map((p, i) => (
        <motion.div key={p.title} {...fade(i)}>
          <GlassCard className="h-full">
            <h4 className="text-white font-semibold text-sm mb-2">{p.title}</h4>
            <p className="text-white/60 text-xs">{p.desc}</p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  )
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
  ]

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <motion.div key={item.title} {...fade(i)}>
          <GlassCard>
            <h4 className="text-white font-semibold text-sm mb-2">{item.title}</h4>
            <p className="text-white/60 text-sm">{item.desc}</p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  )
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
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, i) => (
        <motion.div key={item.title} {...fade(i)}>
          <GlassCard>
            <h4 className="text-white font-semibold text-sm mb-2">{item.title}</h4>
            <p className="text-white/60 text-sm">{item.desc}</p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  )
}

/* ── Main Component ── */
export default function Part4() {
  const [tab, setTab] = useState(0)

  return (
    <div>
      <SectionHeader title="最佳实践" subtitle="Best practices" />
      <TabBar tabs={tabs} active={tab} onChange={setTab} />

      {/* Tab 内容 */}
      <div key={tab}>
        {tab === 0 && <EffectiveTab />}
        {tab === 1 && <AIGoodTab />}
        {tab === 2 && <PitfallsTab />}
      </div>
    </div>
  )
}
