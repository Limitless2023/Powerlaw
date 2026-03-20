import { motion } from "framer-motion"
import GradientBg from "@/components/GradientBg"

const projects = [
  {
    title: "MEAgent Architecture",
    description: "多专家智能体架构设计与思考",
    href: "meagent-architecture.html",
    emoji: "🤖",
    tag: "Architecture",
  },
]

export default function Portal() {
  return (
    <>
      <GradientBg />
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-purple-200 to-blue-300 bg-clip-text text-transparent">
            Powerlaw
          </h1>
          <p className="mt-4 text-lg text-white/50 max-w-md mx-auto">
            Ideas, Projects & Experiments
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid gap-6 w-full max-w-2xl">
          {projects.map((project, i) => (
            <motion.a
              key={project.href}
              href={project.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group block rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{project.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors">
                      {project.title}
                    </h2>
                    <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/50">
                      {project.tag}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-white/40 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <span className="text-white/20 group-hover:text-white/50 transition-colors text-xl mt-1">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-xs text-white/20"
        >
          Built by Limitless
        </motion.p>
      </main>
    </>
  )
}
