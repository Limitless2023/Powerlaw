# /src/sections

> L2 | 父级: /src/CLAUDE.md

演示文稿各章节组件，每个文件对应一个幻灯片页面，被 App.tsx 按顺序消费。

## 成员清单

Cover.tsx: 封面页，项目标题与统计数据，使用 fade + StatCounter，全白色系
Part1.tsx: 第一章「先看东西」，5 Tab（概览/UI优化/Purpose/Artifact/子Agent），唯一使用 onImageClick 的 section，使用 SectionHeader + TabBar
Part2.tsx: 第二章「怎么做到的」，5 Tab（总览/提需求/协作方案/开发验证/归档），使用 SectionHeader + TabBar，无 onImageClick
Part3.tsx: 第三章「复杂度地图」，L1-L5 表格 + L5 特别卡片，使用 SectionHeader，无 TabBar，无 onImageClick
Part4.tsx: 第四章「最佳实践」，3 Tab（有效做法/AI做得好的/踩过的坑），使用 SectionHeader + TabBar
Part5.tsx: 第五章「不止写代码」，4 Tab（设计探索/HTML预览/IntegHub/文档整理），使用 SectionHeader + TabBar
Part6.tsx: 第六章「为什么能 work」，关键因素卡片 + 反思表 + 正负循环，使用 SectionHeader
Part7.tsx: 第七章「收尾 Takeaways」，核心卡片 + 补充小卡片，使用 SectionHeader
ThankYou.tsx: 结尾感谢页，独立布局不使用 SectionHeader

## 设计系统规范（DAN KOE 暗黑极简风格）

- 背景：纯暗色 #050505，零动画零渐变
- 文字颜色：text-ink (#f0f0f0) / text-ink-light (#888) / text-white 系列
- 卡片：边框风格 (#222 border)，hover 提亮至 #444，无填充无模糊
- 字体：Inter (300/400/600/800) + JetBrains Mono
- 排版：大标题 tracking-tight/tighter，高对比度极简
- 共享组件：fade（@/lib/motion）、SectionHeader、TabBar、GlassCard
- Section 间以 border-t border-white/5 分隔

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
