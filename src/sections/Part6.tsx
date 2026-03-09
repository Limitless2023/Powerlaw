/**
 * [INPUT]: 依赖 framer-motion 的 motion，
 *          依赖 @/lib/motion 的 fade，依赖 @/components 的 GlassCard/SectionHeader
 * [OUTPUT]: Part6 组件（为什么能 work：关键因素 + 反思表 + 正负循环）
 * [POS]: sections 的第六章节，被 App 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { motion } from "framer-motion"
import GlassCard from "@/components/GlassCard"
import SectionHeader from "@/components/SectionHeader"
import { fade } from "@/lib/motion"

const factors = [
  {
    title: "经验积累",
    desc: "产品思维 + 技术理解，知道要什么、能判断对不对",
  },
  {
    title: "模型跃升",
    desc: "Claude Opus / Codex 5.4 — 多模态 + 长上下文 + 代码能力",
  },
  {
    title: "可验证性",
    desc: "前端可以截图对比，后端可以跑测试 — 结果立刻可见",
  },
  {
    title: "开发规范",
    desc: "清晰的项目结构、TypeScript、ESLint — AI 有据可循",
  },
  {
    title: "心态：信任",
    desc: "相信 AI 能做好，给它足够的上下文和试错空间",
  },
]

const reflectionRows = [
  { situation: "上下文不足", action: "补充截图、代码片段、文件路径" },
  { situation: "表述不精确", action: "换更具体的描述、给参考案例" },
  { situation: "任务太大", action: "拆分成小步骤，逐步推进" },
  { situation: "AI 卡住", action: "换一个 Agent（不同模型 / 上下文）" },
]

export default function Part6() {
  return (
    <div>
      <SectionHeader title="为什么能 work" subtitle="Why it works" />

      {/* 5 个关键因素 */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {factors.map((f, i) => (
          <motion.div key={f.title} {...fade(i)}>
            <GlassCard className="h-full">
              <h4 className="text-white font-semibold text-sm mb-2">{f.title}</h4>
              <p className="text-white/60 text-xs">{f.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* 下半区：左表右卡片 */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* 左：反思表 */}
        <motion.div {...fade(5)}>
          <GlassCard>
            <h4 className="text-white font-semibold text-sm mb-4">
              当 AI 做不好时
            </h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-white/40 text-xs uppercase tracking-wider">
                  <th className="text-left py-2 pr-4">情况</th>
                  <th className="text-left py-2">应对</th>
                </tr>
              </thead>
              <tbody>
                {reflectionRows.map((r) => (
                  <tr key={r.situation} className="border-b border-white/5">
                    <td className="py-2 pr-4 text-white/80">{r.situation}</td>
                    <td className="py-2 text-white/60">{r.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>
        </motion.div>

        {/* 右：正负循环 */}
        <div className="space-y-4">
          <motion.div {...fade(6)}>
            <GlassCard>
              <h4 className="text-white font-semibold text-sm mb-2">
                正向循环
              </h4>
              <p className="text-white/60 text-sm">
                信任 &rarr; 给充足上下文 &rarr; AI 产出好 &rarr; 更信任
                &rarr; 更愿意给上下文 &rarr; 产出更好
              </p>
            </GlassCard>
          </motion.div>

          <motion.div {...fade(7)}>
            <GlassCard>
              <h4 className="text-white font-semibold text-sm mb-2">
                负向循环
              </h4>
              <p className="text-white/60 text-sm">
                不信任 &rarr; 给最少信息 &rarr; AI 产出差 &rarr; 更不信任
                &rarr; 更不愿意用 &rarr; 错过价值
              </p>
            </GlassCard>
          </motion.div>

          <motion.div {...fade(8)}>
            <GlassCard className="text-center">
              <p className="text-white font-semibold">
                Vibe Coding 的起点是{" "}
                <span className="text-accent">信任</span>
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
