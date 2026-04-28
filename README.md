# Powerlaw

Powerlaw 是一个面向售前、方案演示和对外交流的内容门户。当前站点托管在 GitHub Pages，用一个 React/Vite 入口页组织产品板块，再用静态 HTML 页面承载具体演示、培训材料和架构说明。

站点地址：

<https://limitless2023.github.io/Powerlaw/>

## 内容结构

首页入口由 `src/pages/Portal.tsx` 维护，当前按产品线组织：

- `MeCheck 3.0`：智能审查引擎，当前为占位板块
- `MeFlow 3.0`：智能工作流引擎
  - `public/meflow-agent.html`
  - `public/cognition.html`
- `MeAgent`：多专家智能体平台
  - `public/meagent-architecture.html`
  - `public/powerdoc.html`

其他内容页：

- `public/cognition-contract-agent.html`：合同起草智能体客户培训材料

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

- 首页 `Portal.tsx` 只维护产品线入口和卡片，不承载长文档内容。
- 长内容优先放在 `public/*.html`，并从 Portal 或上级索引页链接进入。
- 新静态页优先从 `public/_template.html` 复制，复用 `public/_shared.css`。
- `public/powerdoc.html` 当前是独立风格页面，暂不强行迁移。
- 如果一个产品线开始积累多篇内容，先建立索引页，再从索引页链接到具体内容页。

