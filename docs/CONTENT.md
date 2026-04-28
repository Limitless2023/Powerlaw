# 内容维护说明

这份文档用于后续持续添加 Powerlaw 内容，目标是让新增页面有固定入口、固定样式和固定检查流程。

## 什么时候改哪里

### 新增一个产品线

修改 `src/pages/Portal.tsx`：

- 在 `topSections` 或 `bottomSection` 中新增产品线
- 给产品线补充 `name`、`description` 和 `items`
- 如果还没有内容，可以先保持 `items: []`，首页会显示“即将上线”

### 给现有产品线新增一篇内容

优先新增静态 HTML：

1. 复制 `public/_template.html`
2. 重命名为语义化文件名，例如 `public/mecheck-review-agent.html`
3. 替换页面标题、导航、hero、正文和 footer
4. 在 `Portal.tsx` 或对应索引页中补入口卡片

如果新增的是外部系统入口，可以直接在 `Portal.tsx` 的内容项里填写完整 URL，并设置 `external: true`，这样会在新标签页打开。

### 新增一组同类内容

如果一个产品线下会有多篇内容，不建议把所有入口都堆到 Portal。建议建立一个索引页，例如：

- `public/mecheck.html`
- `public/meflow-agent.html`
- `public/cognition.html`

然后从索引页进入具体文章或演示页。

## 静态页约定

静态页放在 `public/` 下，浏览器访问路径就是文件名：

```text
public/example.html -> /Powerlaw/example.html
```

站内链接优先使用相对路径：

```html
<a href="./index.html">返回首页</a>
<a href="./cognition.html">认知模块</a>
```

不要写成根路径：

```html
<!-- 避免：GitHub Pages 子路径部署时容易失效 -->
<a href="/cognition.html">认知模块</a>
```

## 共享样式

新静态页应引用：

```html
<link rel="stylesheet" href="./_shared.css">
```

`public/_shared.css` 提供：

- 基础 design tokens
- reset / typography
- 固定顶部导航
- hero
- section / card / tag / callout / table
- footer
- 移动端基础适配

如果某个页面需要特殊布局，可以在页面内部额外写少量 `<style>`，但不要复制整套基础样式。

## 页面命名

使用小写短横线：

```text
mecheck-review-agent.html
meflow-process-automation.html
meagent-evaluation.html
```

避免中文文件名、空格和过长文件名。

## 新增内容前检查清单

- 页面是否能通过相对路径打开
- 是否从 Portal 或索引页有入口
- 标题是否清楚表达内容用途
- footer 是否保持 `Built by Limitless · Powerlaw`
- 移动端是否可读
- `pnpm build` 是否通过

## 当前不做的事

- 不把现有静态 HTML 强行迁移到 MDX / VitePress
- 不重构 `Portal.tsx` 的整体结构
- 不统一改造 `public/powerdoc.html`，它当前作为独立风格页面保留

## 当前入口索引

- MeFlow 3.0 / MeFlow Agent 演示：`public/meflow-agent.html`
- MeFlow 3.0 / 认知模块：`public/cognition.html`
- MeFlow 3.0 / MeFlow3.0 集成平台：`https://openv3.meflow.com.cn/docs/intro`
- MeAgent / MeAgent Architecture：`public/meagent-architecture.html`
- MeAgent / PowerDoc：`public/powerdoc.html`
