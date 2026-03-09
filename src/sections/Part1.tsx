/**
 * [INPUT]: 依赖 react 的 useState，依赖 framer-motion 的 motion，依赖 @/components/GlassCard、SectionHeader、TabBar，依赖 @/lib/motion 的 fade
 * [OUTPUT]: Part1 组件
 * [POS]: sections 的「先看东西」展示页，被 App 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import SectionHeader from "@/components/SectionHeader";
import TabBar from "@/components/TabBar";
import { fade } from "@/lib/motion";

interface Part1Props {
  onImageClick?: (src: string) => void;
}

const tabs = ["概览", "UI优化", "Purpose", "Artifact", "子Agent"];

/* ── Tab: 概览 ── */
function OverviewTab() {
  const timeline = [
    { day: "周五晚", desc: "开始 Vibe Coding，从 UI 优化入手" },
    { day: "周六", desc: "Purpose 全栈打通 + Artifact 预览" },
    { day: "周日", desc: "子 Agent 实时可视化 + 文档整理" },
    { day: "周一", desc: "收尾验证 + Code Review 准备" },
  ];

  const features = [
    { title: "UI 优化", desc: "Thinking 折叠、工具卡片、错误态、间距" },
    { title: "Purpose 注入", desc: "3 个仓库联动，工具调用有上下文" },
    { title: "Artifact 预览", desc: "Sandbox iframe、全屏弹窗、多 Artifact" },
    { title: "子 Agent 可视化", desc: "实时展示思考/工具/文本，默认收起" },
  ];

  return (
    <div className="space-y-8">
      {/* 时间线 */}
      <div className="flex flex-col gap-3">
        {timeline.map((t, i) => (
          <motion.div key={t.day} {...fade(i)} className="flex items-start gap-4">
            <div className="w-16 shrink-0 text-right text-accent font-mono text-sm font-semibold pt-0.5">
              {t.day}
            </div>
            <div className="w-px bg-white/10 self-stretch" />
            <div className="text-white/80 text-sm">{t.desc}</div>
          </motion.div>
        ))}
      </div>

      {/* 功能卡片 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((f, i) => (
          <motion.div key={f.title} {...fade(i + 4)}>
            <GlassCard>
              <h4 className="text-white font-semibold text-sm mb-1">{f.title}</h4>
              <p className="text-white/60 text-xs">{f.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Tab: UI优化 ── */
function UITab({ onImageClick }: { onImageClick?: (src: string) => void }) {
  const beforeImages = [
    { src: "/images/doc-assets/01-thinking-before.png", label: "Thinking - Before" },
    { src: "/images/doc-assets/02-toolcall-before.png", label: "Tool Call - Before" },
  ];

  const improvements = [
    "Thinking 折叠：默认收起，展开显示推理过程",
    "工具卡片：名称 + 状态 + 耗时，清晰可读",
    "错误态：红色边框 + 错误信息展示",
    "头像上传：全栈打通，前端 + Server 7 文件",
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Before */}
      <motion.div {...fade(0)}>
        <GlassCard>
          <h4 className="text-white/40 text-xs uppercase tracking-wider mb-4">Before</h4>
          <div className="space-y-4">
            {beforeImages.map((img) => (
              <div key={img.src}>
                <img
                  src={img.src}
                  alt={img.label}
                  onClick={() => onImageClick?.(img.src)}
                  className="w-full rounded-lg cursor-pointer hover:scale-[1.02] transition-transform"
                />
                <p className="text-xs text-white/40 mt-1">{img.label}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* After */}
      <motion.div {...fade(1)}>
        <GlassCard>
          <h4 className="text-white/40 text-xs uppercase tracking-wider mb-4">After</h4>
          <ul className="space-y-3">
            {improvements.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                {item}
              </li>
            ))}
          </ul>
        </GlassCard>
      </motion.div>
    </div>
  );
}

/* ── Tab: Purpose ── */
function PurposeTab({ onImageClick }: { onImageClick?: (src: string) => void }) {
  const before = "/images/doc-assets/12-purpose-before.png";
  const after = "/images/doc-assets/12-purpose-after-full.png";

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div {...fade(0)}>
          <GlassCard>
            <h4 className="text-white/40 text-xs uppercase tracking-wider mb-3">Before</h4>
            <img
              src={before}
              alt="Purpose before"
              onClick={() => onImageClick?.(before)}
              className="w-full rounded-lg cursor-pointer hover:scale-[1.02] transition-transform"
            />
            <p className="text-xs text-white/40 mt-2">工具调用没有上下文，用户不知道 AI 在做什么</p>
          </GlassCard>
        </motion.div>

        <motion.div {...fade(1)}>
          <GlassCard>
            <h4 className="text-white/40 text-xs uppercase tracking-wider mb-3">After</h4>
            <img
              src={after}
              alt="Purpose after"
              onClick={() => onImageClick?.(after)}
              className="w-full rounded-lg cursor-pointer hover:scale-[1.02] transition-transform"
            />
            <p className="text-xs text-white/40 mt-2">每次工具调用都带 purpose，用户一目了然</p>
          </GlassCard>
        </motion.div>
      </div>

      <motion.div {...fade(2)}>
        <GlassCard>
          <h4 className="text-white font-semibold text-sm mb-3">3 个仓库联动实现</h4>
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-accent font-mono">meagent</span>
              <p className="text-white/60 mt-1">框架层 purpose 参数注入（use_skill / SpawnSubagent / IntegHub）</p>
            </div>
            <div>
              <span className="text-accent font-mono">copilot</span>
              <p className="text-white/60 mt-1">13 个工具添加 purpose 字段 + SYSTEM_INSTRUCTIONS 引导</p>
            </div>
            <div>
              <span className="text-accent font-mono">frontend</span>
              <p className="text-white/60 mt-1">工具卡片展示 purpose，用户可见调用意图</p>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}

/* ── Tab: Artifact ── */
function ArtifactTab() {
  const features = [
    { title: "Sandbox iframe 预览", desc: "安全沙箱内渲染 HTML/CSS/JS" },
    { title: "全屏弹窗", desc: "一键放大，沉浸式查看" },
    { title: "多 Artifact 切换", desc: "Tab 切换，支持多个产出物并存" },
  ];

  return (
    <div className="space-y-6">
      <motion.div {...fade(0)}>
        <GlassCard>
          <h4 className="text-white font-semibold mb-3">Artifact 预览功能</h4>
          <p className="text-white/60 text-sm mb-4">
            AI 生成的 HTML/代码片段可以直接在对话中预览，支持交互和全屏查看。
          </p>
          <div className="aspect-video rounded-lg bg-black/30 border border-white/5 flex items-center justify-center">
            <span className="text-white/40 text-sm">Artifact Preview Screenshot</span>
          </div>
        </GlassCard>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <motion.div key={f.title} {...fade(i + 1)}>
            <GlassCard>
              <h4 className="text-white font-semibold text-sm mb-1">{f.title}</h4>
              <p className="text-white/60 text-xs">{f.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Tab: 子Agent ── */
function SubAgentTab() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <motion.div {...fade(0)}>
        <GlassCard>
          <h4 className="text-white/40 text-xs uppercase tracking-wider mb-3">Before</h4>
          <div className="aspect-video rounded-lg bg-black/30 border border-white/5 flex items-center justify-center mb-3">
            <span className="text-white/40 text-sm">Sub-Agent Black Box</span>
          </div>
          <p className="text-sm text-white/60">
            子 Agent 运行时完全黑箱，只有最终结果。用户不知道在做什么、进展如何。
          </p>
        </GlassCard>
      </motion.div>

      <motion.div {...fade(1)}>
        <GlassCard>
          <h4 className="text-white/40 text-xs uppercase tracking-wider mb-3">After</h4>
          <div className="aspect-video rounded-lg bg-black/30 border border-white/5 flex items-center justify-center mb-3">
            <span className="text-white/40 text-sm">Real-time Visualization</span>
          </div>
          <p className="text-sm text-white/60">
            实时展示子 Agent 的思考、工具调用和文本输出。默认收起，竖线串联，可展开查看。
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
}

/* ── 主组件 ── */
export default function Part1({ onImageClick }: Part1Props) {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <SectionHeader title="先看东西" subtitle="What was built" />

      <TabBar tabs={tabs} active={tab} onChange={setTab} />

      {/* Tab 内容 */}
      <div key={tab}>
        {tab === 0 && <OverviewTab />}
        {tab === 1 && <UITab onImageClick={onImageClick} />}
        {tab === 2 && <PurposeTab onImageClick={onImageClick} />}
        {tab === 3 && <ArtifactTab />}
        {tab === 4 && <SubAgentTab />}
      </div>
    </div>
  );
}
