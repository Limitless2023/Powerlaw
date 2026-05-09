export type Audience =
  | "业务负责人"
  | "法务"
  | "IT"
  | "技术团队"
  | "合作伙伴"
  | "售前"

export type MaterialType =
  | "产品概览"
  | "场景方案"
  | "演示"
  | "架构"
  | "安全"
  | "集成"
  | "FAQ"
  | "案例"
  | "使用指南"

export type Product = "MeFlow" | "MeAgent" | "MeCheck" | "PowerDoc" | "通用"

export type Stage =
  | "初步了解"
  | "方案评估"
  | "技术评审"
  | "POC"
  | "采购决策"

export type Visibility = "public" | "gated" | "internal"

export interface ContentItem {
  id: string
  title: string
  description: string
  href?: string
  audience: Audience[]
  materialType: MaterialType
  product: Product
  stage: Stage[]
  visibility: Visibility
  tags: string[]
  owner: string
  lastUpdated: string
}

export interface ProductSummary {
  product: Product
  title: string
  description: string
  position: string
  href?: string
  status: "available" | "planned"
}

export interface MaterialGroup {
  id: string
  title: string
  description: string
  materialTypes: MaterialType[]
}

export const productSummaries: ProductSummary[] = [
  {
    product: "MeFlow",
    title: "MeFlow 3.0",
    description: "Agent 工作流引擎，把业务流程、工具调用、模型能力和人工审核编排成可运行的自动化链路。",
    position: "流程与业务自动化",
    href: "meflow-agent.html",
    status: "available",
  },
  {
    product: "MeAgent",
    title: "MeAgent",
    description: "多专家智能体平台，用统一架构承载专业分工、任务协作和复杂问题拆解。",
    position: "多专家智能体平台",
    href: "meagent-architecture.html",
    status: "available",
  },
  {
    product: "MeCheck",
    title: "MeCheck 3.0",
    description: "智能审查引擎，面向合同、招投标和合规文本的风险识别、规则校验与审查建议。",
    position: "智能审查引擎",
    status: "planned",
  },
  {
    product: "PowerDoc",
    title: "PowerDoc",
    description: "长文档结构化理解引擎，支持超大合同、制度和资料包的拆解、索引和审查。",
    position: "长文档理解",
    href: "powerdoc.html",
    status: "available",
  },
]

export const materialGroups: MaterialGroup[] = [
  {
    id: "product",
    title: "产品能力",
    description: "客户第一次了解 Powerlaw 时，快速判断每个模块解决什么问题。",
    materialTypes: ["产品概览", "演示", "使用指南"],
  },
  {
    id: "scenario",
    title: "场景与方案",
    description: "按客户业务场景组织材料，方便售前在沟通中直接转发。",
    materialTypes: ["场景方案", "案例"],
  },
  {
    id: "technology",
    title: "技术与安全",
    description: "给 IT、技术团队和安全评审看的架构、部署、模型与合规说明。",
    materialTypes: ["架构", "安全", "集成"],
  },
  {
    id: "resource",
    title: "资源中心",
    description: "面向客户常见问题、白皮书和后续资料下载的统一入口。",
    materialTypes: ["FAQ"],
  },
]

export const contentItems: ContentItem[] = [
  {
    id: "meflow-agent-demo",
    title: "MeFlow Agent 演示",
    description: "展示 MeFlow Agent 在对话、编排、检索和流程自动化中的核心能力。",
    href: "meflow-agent.html",
    audience: ["业务负责人", "法务", "售前"],
    materialType: "演示",
    product: "MeFlow",
    stage: ["初步了解", "方案评估"],
    visibility: "public",
    tags: ["agent", "demo", "workflow"],
    owner: "Powerlaw",
    lastUpdated: "2026-04-28",
  },
  {
    id: "meflow-open-platform",
    title: "MeFlow 3.0 集成平台",
    description: "面向系统集成和开放能力评估的入口，覆盖技术架构、运维部署与集成文档。",
    href: "meflow-open-platform.html",
    audience: ["IT", "技术团队", "合作伙伴"],
    materialType: "集成",
    product: "MeFlow",
    stage: ["技术评审", "POC"],
    visibility: "public",
    tags: ["integration", "open-platform", "api"],
    owner: "Powerlaw",
    lastUpdated: "2026-04-28",
  },
  {
    id: "meflow-ai-models",
    title: "Agent 大模型接入",
    description: "说明模型选型、多模型切换、厂商适配和生产接入时需要关注的安全与稳定性问题。",
    href: "meflow-ai-models.html",
    audience: ["IT", "技术团队", "业务负责人"],
    materialType: "安全",
    product: "MeFlow",
    stage: ["方案评估", "技术评审"],
    visibility: "public",
    tags: ["model-gateway", "llm", "security"],
    owner: "Powerlaw",
    lastUpdated: "2026-04-28",
  },
  {
    id: "meagent-architecture",
    title: "MeAgent Architecture",
    description: "多专家智能体平台的架构设计、协作机制和核心能力说明。",
    href: "meagent-architecture.html",
    audience: ["IT", "技术团队", "合作伙伴"],
    materialType: "架构",
    product: "MeAgent",
    stage: ["方案评估", "技术评审"],
    visibility: "public",
    tags: ["architecture", "multi-agent"],
    owner: "Powerlaw",
    lastUpdated: "2026-04-28",
  },
  {
    id: "powerdoc",
    title: "PowerDoc",
    description: "介绍超大型合同和长文档的结构化索引、智能解构与审查能力。",
    href: "powerdoc.html",
    audience: ["法务", "业务负责人", "IT"],
    materialType: "产品概览",
    product: "PowerDoc",
    stage: ["初步了解", "方案评估"],
    visibility: "public",
    tags: ["long-document", "contract-review"],
    owner: "Powerlaw",
    lastUpdated: "2026-04-28",
  },
  {
    id: "cognition",
    title: "认知模块",
    description: "当前偏培训材料，后续可改写为客户可读的产品使用指南。",
    href: "cognition.html",
    audience: ["售前", "法务"],
    materialType: "使用指南",
    product: "MeFlow",
    stage: ["POC"],
    visibility: "public",
    tags: ["guide", "needs-external-polish"],
    owner: "Powerlaw",
    lastUpdated: "2026-04-28",
  },
  {
    id: "cognition-contract-agent",
    title: "合同起草智能体培训",
    description: "合同起草智能体的操作与协作材料，Phase 2 可改写为客户使用指南。",
    href: "cognition-contract-agent.html",
    audience: ["售前", "法务"],
    materialType: "使用指南",
    product: "MeFlow",
    stage: ["POC"],
    visibility: "public",
    tags: ["contract-agent", "guide", "needs-external-polish"],
    owner: "Powerlaw",
    lastUpdated: "2026-04-28",
  },
  {
    id: "mecheck-overview",
    title: "MeCheck 3.0 产品概览",
    description: "面向客户的智能审查引擎介绍，后续补充审查流程、风险类型和 Demo 链路。",
    audience: ["法务", "业务负责人", "售前"],
    materialType: "产品概览",
    product: "MeCheck",
    stage: ["初步了解", "方案评估"],
    visibility: "public",
    tags: ["planned", "review-engine"],
    owner: "Powerlaw",
    lastUpdated: "2026-05-09",
  },
  {
    id: "industry-solutions",
    title: "行业方案库",
    description: "按法务、合同管理、投标、知识库和流程自动化等场景沉淀对外方案。",
    audience: ["业务负责人", "法务", "售前"],
    materialType: "场景方案",
    product: "通用",
    stage: ["方案评估", "POC"],
    visibility: "public",
    tags: ["planned", "industry"],
    owner: "Powerlaw",
    lastUpdated: "2026-05-09",
  },
  {
    id: "public-faq",
    title: "对外 FAQ",
    description: "客户视角的产品、安全、集成、模型、商业和 ROI 高频问题。",
    audience: ["业务负责人", "法务", "IT", "售前"],
    materialType: "FAQ",
    product: "通用",
    stage: ["初步了解", "采购决策"],
    visibility: "public",
    tags: ["planned", "faq"],
    owner: "Powerlaw",
    lastUpdated: "2026-05-09",
  },
  {
    id: "security-deployment",
    title: "数据安全与部署专题",
    description: "面向技术评审和安全合规沟通的部署方式、数据边界和权限控制说明。",
    audience: ["IT", "技术团队", "业务负责人"],
    materialType: "安全",
    product: "通用",
    stage: ["技术评审", "采购决策"],
    visibility: "public",
    tags: ["planned", "security", "deployment"],
    owner: "Powerlaw",
    lastUpdated: "2026-05-09",
  },
]

export function getPublicContentItems() {
  return contentItems.filter((item) => item.visibility === "public")
}

export function getItemsForGroup(group: MaterialGroup) {
  return getPublicContentItems().filter((item) =>
    group.materialTypes.includes(item.materialType),
  )
}
