# Powerlaw

Powerlaw 是一个面向客户、伙伴和售前转发场景的 AI 产品资料中心。当前站点托管在 GitHub Pages，用一个 React/Vite 入口页组织对外资料架构，再用静态 HTML 页面承载具体演示、产品说明和架构材料。

站点地址：

<https://limitless2023.github.io/Powerlaw/>

## 内容结构

首页入口由 `src/pages/Portal.tsx` 渲染，内容元数据集中维护在 `src/data/content.ts`。当前按“对外为主 + 售前嵌入”的资料中心结构组织：

- 产品能力地图：MeFlow 3.0、MeAgent、MeCheck 3.0、PowerDoc
- 产品能力：产品概览、演示、客户使用指南
- 场景与方案：行业方案、案例和客户可转发的场景材料
- 技术与安全：架构、安全、部署、集成与模型接入
- 资源中心：对外 FAQ、白皮书、客户常见问题

已有内容页：

- `public/meflow-agent.html`：MeFlow Agent 演示
- `public/meflow-open-platform.html`：MeFlow 3.0 集成平台
- `public/meflow-ai-models.html`：Agent 大模型接入
- `public/meagent-architecture.html`：MeAgent Architecture
- `public/powerdoc.html`：PowerDoc
- `public/cognition.html`：认知模块，后续可改写为客户使用指南
- `public/cognition-contract-agent.html`：合同起草智能体培训，后续可改写为客户使用指南

新增内容页时，优先参考 [docs/CONTENT.md](docs/CONTENT.md)。

## 技术栈

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- Framer Motion
- GitHub Pages 自动部署

## 本地开发

```bash
pnpm install
pnpm dev
```

构建检查：

```bash
pnpm build
```

Lint：

```bash
pnpm lint
```

## 部署

仓库使用 GitHub Actions 部署到 GitHub Pages。推送到 `main` 分支后会自动执行：

1. `pnpm install --frozen-lockfile`
2. `pnpm build`
3. 上传 `dist/` 到 GitHub Pages

Vite 的 `base` 已配置为 `/Powerlaw/`，静态页面中应使用相对路径引用站内资源，避免部署到子路径后链接失效。

## 内容维护原则

- 首页 `Portal.tsx` 只负责布局和渲染，不直接硬编码资料清单。
- 资料清单、受众、阶段、可见性和标签统一维护在 `src/data/content.ts`。
- 长内容优先放在 `public/*.html`，并从 Portal 或上级索引页链接进入。
- 新静态页优先从 `public/_template.html` 复制，复用 `public/_shared.css`。
- `public/powerdoc.html` 当前是独立风格页面，暂不强行迁移。
- 如果一个产品线开始积累多篇内容，先建立索引页，再从索引页链接到具体内容页。
- 内部 Battle Card、报价、SLA、敏感客户信息不放入公开站点；公开站点只保留可外发材料。
