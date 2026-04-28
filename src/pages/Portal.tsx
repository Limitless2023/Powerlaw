import { motion } from "framer-motion"
import GradientBg from "@/components/GradientBg"
import type { ReactNode } from "react"

const icons = {
  architecture: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><line x1="10" y1="6.5" x2="14" y2="6.5" /><line x1="6.5" y1="10" x2="6.5" y2="14" /><line x1="17.5" y1="10" x2="17.5" y2="14" />
    </svg>
  ),
  doc: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  flow: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" /><line x1="12" y1="8" x2="12" y2="12" /><path d="M6 15h12" /><line x1="6" y1="15" x2="6" y2="19" /><line x1="12" y1="12" x2="12" y2="19" /><line x1="18" y1="15" x2="18" y2="19" />
    </svg>
  ),
  integration: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="7" height="6" rx="1.5" /><rect x="14" y="4" width="7" height="6" rx="1.5" /><rect x="8.5" y="15" width="7" height="6" rx="1.5" /><path d="M10 7h4" /><path d="M6.5 10v2.5a2.5 2.5 0 0 0 2.5 2.5" /><path d="M17.5 10v2.5A2.5 2.5 0 0 1 15 15" />
    </svg>
  ),
  book: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /><line x1="8" y1="7" x2="16" y2="7" /><line x1="8" y1="11" x2="13" y2="11" />
    </svg>
  ),
}

interface ProjectItem {
  title: string
  description: string
  href: string
  icon: ReactNode
  tag: string
  external?: boolean
}

interface ProductSection {
  name: string
  description: string
  items: ProjectItem[]
}

const topSections: ProductSection[] = [
  {
    name: "MeCheck 3.0",
    description: "智能审查引擎 — 即将上线",
    items: [],
  },
  {
    name: "MeFlow 3.0",
    description: "智能工作流引擎 — Agent 驱动的端到端自动化",
    items: [
      {
        title: "MeFlow Agent 演示",
        description: "MeFlow Agent 多场景能力演示 — 对话、编排、检索与流程自动化",
        href: "meflow-agent.html",
        icon: icons.flow,
        tag: "Demo",
      },
      {
        title: "认知模块",
        description: "产品认知与培训材料 — 帮助团队快速理解 AI 协作方式",
        href: "cognition.html",
        icon: icons.book,
        tag: "Cognition",
      },
      {
        title: "MeFlow3.0 集成平台",
        description: "开放平台文档入口 — 公共账号 opendoc / mlzn@123",
        href: "https://openv3.meflow.com.cn/docs/intro",
        icon: icons.integration,
        tag: "Open Platform",
        external: true,
      },
    ],
  },
]

const bottomSection: ProductSection = {
  name: "MeAgent",
  description: "多专家智能体平台 — 架构设计与核心能力",
  items: [
    {
      title: "MeAgent Architecture",
      description: "多专家智能体架构设计与思考",
      href: "meagent-architecture.html",
      icon: icons.architecture,
      tag: "Architecture",
    },
    {
      title: "PowerDoc",
      description: "超大型合同的智能解构与审查 — 面向长文档的结构化索引引擎",
      href: "powerdoc.html",
      icon: icons.doc,
      tag: "Product",
    },
  ],
}

export default function Portal() {
  return (
    <>
      <GradientBg />
      <main className="relative z-10 min-h-screen flex flex-col items-center px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 mt-12"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-[#00C2B1] to-blue-500 bg-clip-text text-transparent">
            Powerlaw
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-md mx-auto">
            Ideas, Projects & Experiments
          </p>
        </motion.div>

        {/* Top Row: MeCheck + MeFlow */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {topSections.map((section, si) => (
            <motion.div
              key={section.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + si * 0.15 }}
              className="flex flex-col"
            >
              <div className="mb-4">
                <h2 className="text-base font-bold text-slate-800 tracking-tight">
                  {section.name}
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  {section.description}
                </p>
              </div>

              {section.items.length > 0 ? (
                <div className="grid gap-2.5 flex-1">
                  {section.items.map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group block rounded-xl border border-slate-200 bg-white/80 backdrop-blur-xl px-4 py-3.5 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="text-slate-400 group-hover:text-slate-600 transition-colors shrink-0 mt-0.5">
                          {item.icon}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-[14px] font-semibold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-[12px] text-slate-500 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/50 px-4 py-8 text-center flex-1 flex items-center justify-center">
                  <p className="text-sm text-slate-400">即将上线</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Row: MeAgent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full max-w-4xl mt-8"
        >
          <div className="mb-4">
            <h2 className="text-base font-bold text-slate-800 tracking-tight">
              {bottomSection.name}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {bottomSection.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {bottomSection.items.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group block rounded-xl border border-slate-200 bg-white/80 backdrop-blur-xl px-4 py-3.5 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-slate-400 group-hover:text-slate-600 transition-colors shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[14px] font-semibold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[12px] text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 text-xs text-slate-300"
        >
          Built by Limitless
        </motion.p>
      </main>
    </>
  )
}
