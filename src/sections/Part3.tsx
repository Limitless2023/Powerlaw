import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";

interface Part3Props {
  onImageClick?: (src: string) => void;
}

const fade = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.1 * i },
});

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

export default function Part3({ onImageClick: _onImageClick }: Part3Props) {
  void _onImageClick;

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-white mb-2"
      >
        复杂度地图
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-zinc-500 mb-8"
      >
        Complexity map
      </motion.p>

      {/* Table */}
      <motion.div {...fade(1)}>
        <GlassCard className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-zinc-500 text-xs">
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
                    r.highlighted
                      ? "bg-amber-500/10"
                      : ""
                  }`}
                >
                  <td className={`py-3 pr-4 font-mono font-bold ${
                    r.highlighted ? "text-amber-400" : "text-accent"
                  }`}>
                    {r.level}
                  </td>
                  <td className="py-3 pr-4 text-white">{r.type}</td>
                  <td className="py-3 pr-4 text-zinc-300">{r.ratio}</td>
                  <td className={`py-3 pr-4 ${
                    r.highlighted ? "text-amber-400 font-semibold" : "text-zinc-300"
                  }`}>
                    {r.autonomy}
                  </td>
                  <td className="py-3 pr-4 text-zinc-400">{r.myRole}</td>
                  <td className="py-3 text-zinc-500 text-xs">{r.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </GlassCard>
      </motion.div>

      {/* Summary */}
      <motion.div {...fade(2)} className="mt-6">
        <GlassCard accent="teal" className="text-center">
          <p className="text-white font-semibold">
            L1 - L4 同一个 Agent 内闭环 —{" "}
            <span className="text-accent">占 85% 工作量</span>
          </p>
        </GlassCard>
      </motion.div>

      {/* L5 special card */}
      <motion.div {...fade(3)} className="mt-4">
        <GlassCard accent="amber">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0">
              <span className="text-amber-400 font-bold font-mono">L5</span>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">
                换一个不同视角的 Agent
              </h4>
              <p className="text-zinc-400 text-sm">
                当一个 Agent 卡住时，换一个模型或上下文重新开始。
                <br />
                <span className="text-zinc-500 font-mono text-xs">
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
