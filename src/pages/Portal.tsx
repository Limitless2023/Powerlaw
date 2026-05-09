import { motion } from "framer-motion"
import GradientBg from "@/components/GradientBg"
import type { ReactNode } from "react"
import {
  getItemsForGroup,
  materialGroups,
  productSummaries,
  type ContentItem,
  type ProductSummary,
} from "@/data/content"

const groupAccent: Record<string, string> = {
  product: "border-cyan-200 text-cyan-700 bg-cyan-50",
  scenario: "border-amber-200 text-amber-700 bg-amber-50",
  technology: "border-blue-200 text-blue-700 bg-blue-50",
  resource: "border-emerald-200 text-emerald-700 bg-emerald-50",
}

function CardLink({
  href,
  children,
  className = "",
}: {
  href?: string
  children: ReactNode
  className?: string
}) {
  if (!href) {
    return (
      <div
        className={`rounded-lg border border-dashed border-slate-200 bg-slate-50/80 ${className}`}
      >
        {children}
      </div>
    )
  }

  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
      className={`group block rounded-lg border border-slate-200 bg-white/90 shadow-sm transition-all hover:border-blue-300 hover:shadow-md ${className}`}
    >
      {children}
    </motion.a>
  )
}

function ProductCard({ product }: { product: ProductSummary }) {
  return (
    <CardLink href={product.href} className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            {product.position}
          </p>
          <h3 className="mt-2 text-lg font-bold text-slate-900">
            {product.title}
          </h3>
        </div>
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
            product.status === "available"
              ? "bg-emerald-50 text-emerald-700"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {product.status === "available" ? "已有资料" : "规划中"}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">
        {product.description}
      </p>
    </CardLink>
  )
}

function ContentCard({ item }: { item: ContentItem }) {
  return (
    <CardLink href={item.href} className="p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h4 className="text-sm font-semibold leading-5 text-slate-900">
            {item.title}
          </h4>
          <p className="mt-2 text-xs leading-5 text-slate-500">
            {item.description}
          </p>
        </div>
        {!item.href && (
          <span className="shrink-0 rounded-full bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-500">
            待补
          </span>
        )}
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600">
          {item.product}
        </span>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600">
          {item.materialType}
        </span>
        {item.audience.slice(0, 2).map((audience) => (
          <span
            key={audience}
            className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600"
          >
            {audience}
          </span>
        ))}
      </div>
    </CardLink>
  )
}

export default function Portal() {
  return (
    <>
      <GradientBg />
      <main className="relative z-10 min-h-screen px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 border-b border-slate-200 pb-10 md:grid-cols-[1.15fr_0.85fr] md:items-end"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Powerlaw
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
                AI 产品资料中心
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                面向客户、伙伴和售前转发场景的公开资料库。用一套客户可读的材料说明产品能力、业务场景、技术架构与后续评估路径。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
              <p className="text-sm font-semibold text-slate-900">
                定位原则
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                对外可分享为主，售前现场讲解可直接打开；内部 Battle Card、报价、SLA 和敏感客户信息另放私有工作库。
              </p>
            </div>
          </motion.header>

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="py-10"
          >
            <div className="mb-5 flex flex-col justify-between gap-2 md:flex-row md:items-end">
              <div>
                <h2 className="text-xl font-bold text-slate-950">
                  产品能力地图
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  先让客户在 30 秒内理解每个模块负责什么。
                </p>
              </div>
              <p className="text-xs text-slate-400">
                所有条目后续由 content registry 统一维护
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {productSummaries.map((product) => (
                <ProductCard key={product.product} product={product} />
              ))}
            </div>
          </motion.section>

          <section className="grid gap-4 pb-10 md:grid-cols-2">
            {materialGroups.map((group, index) => {
              const items = getItemsForGroup(group)

              return (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                  className="rounded-lg border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <span
                        className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${groupAccent[group.id]}`}
                      >
                        {group.title}
                      </span>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {group.description}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-slate-400">
                      {items.length} 项
                    </span>
                  </div>
                  <div className="grid gap-2.5">
                    {items.map((item) => (
                      <ContentCard key={item.id} item={item} />
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </section>

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="grid gap-4 border-t border-slate-200 py-10 md:grid-cols-[0.8fr_1.2fr]"
          >
            <div>
              <h2 className="text-xl font-bold text-slate-950">
                下一批应补内容
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                B 方案下，Powerlaw 不做内部作战手册，而是沉淀客户能读、售前能发的材料。
              </p>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {[
                "对外 FAQ：产品、安全、集成、模型、商业、ROI",
                "行业方案：法务、合同管理、投标、知识库、流程自动化",
                "MeCheck 3.0：产品概览、典型审查链路、Demo 素材",
                "数据安全与部署：私有化、权限、数据边界、模型接入",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-slate-200 bg-white/80 p-4 text-sm leading-6 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.section>

          <footer className="pb-4 text-center text-xs text-slate-400">
            Built by Limitless · Powerlaw
          </footer>
        </div>
      </main>
    </>
  )
}
