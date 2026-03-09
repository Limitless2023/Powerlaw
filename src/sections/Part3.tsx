/**
 * [INPUT]: 依赖 framer-motion 的 motion，依赖 @/components/GlassCard、SectionHeader，依赖 @/lib/motion 的 fade
 * [OUTPUT]: Part3 组件
 * [POS]: sections 的「复杂度地图」表格页，被 App 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import SectionHeader from "@/components/SectionHeader";
import { fade } from "@/lib/motion";

const rows = [
  {
    level: "L1",
    type: "CSS 微调",
    ratio: "~25%",
    autonomy: "~100%",
    myRole: "描述 + 验收",
    example: "间距、颜色、字体大小",
    highlighted: false,
  },
  {
    level: "L2",
    type: "组件重构",
    ratio: "~25%",
    autonomy: "~90%",
    myRole: "描述 + 选择方案",
    example: "Thinking 折叠、工具卡片",
    highlighted: false,
  },
  {
    level: "L3",
    type: "跨层集成",
    ratio: "~20%",
    autonomy: "~70%",
    myRole: "提供上下文 + 判断",
    example: "Purpose 三仓库联动",
    highlighted: false,
  },
  {
    level: "L4",
    type: "架构特性",
    ratio: "~15%",
    autonomy: "~50%",
    myRole: "深度参与决策",
    example: "Artifact 预览、子 Agent",
    highlighted: false,
  },
  {
    level: "L5",
    type: "超难问题",
    ratio: "~15%",
    autonomy: "单 Agent 搞不定",
    myRole: "换视角 + 多 Agent",
    example: "跨环境调试、架构抉择",
    highlighted: true,
  },
];

export default function Part3() {
  return (
    <div>
      <SectionHeader title="复杂度地图" subtitle="Complexity map" />

      {/* 表格 */}
      <motion.div {...fade(1)}>
        <GlassCard className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-white/40 text-xs">
                <th className="text-left py-3 pr-4">等级</th>
                <th className="text-left py-3 pr-4">类型</th>
                <th className="text-left py-3 pr-4">占比</th>
                <th className="text-left py-3 pr-4">AI 自主度</th>
                <th className="text-left py-3 pr-4">我做什么</th>
                <th className="text-left py-3">举例</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.level}
                  className={`border-b border-white/5 ${
                    r.highlighted ? "bg-amber-500/10" : ""
                  }`}
                >
                  <td className={`py-3 pr-4 font-mono font-bold ${
                    r.highlighted ? "text-amber-400" : "text-accent"
                  }`}>
                    {r.level}
                  </td>
                  <td className="py-3 pr-4 text-white">{r.type}</td>
                  <td className="py-3 pr-4 text-white/80">{r.ratio}</td>
                  <td className={`py-3 pr-4 ${
                    r.highlighted ? "text-amber-400 font-semibold" : "text-white/80"
                  }`}>
                    {r.autonomy}
                  </td>
                  <td className="py-3 pr-4 text-white/60">{r.myRole}</td>
                  <td className="py-3 text-white/40 text-xs">{r.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </GlassCard>
      </motion.div>

      {/* 总结 */}
      <motion.div {...fade(2)} className="mt-6">
        <GlassCard className="text-center">
          <p className="text-white font-semibold">
            L1 - L4 同一个 Agent 内闭环 —{" "}
            <span className="text-accent">占 85% 工作量</span>
          </p>
        </GlassCard>
      </motion.div>

      {/* L5 特别卡片 */}
      <motion.div {...fade(3)} className="mt-4">
        <GlassCard>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0">
              <span className="text-amber-400 font-bold font-mono">L5</span>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">
                换一个不同视角的 Agent
              </h4>
              <p className="text-white/60 text-sm">
                当一个 Agent 卡住时，换一个模型或上下文重新开始。
                <br />
                <span className="text-white/40 font-mono text-xs">
                  Claude Opus &rarr; Codex 5.4 — 不同的训练数据 = 不同的视角
                </span>
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
