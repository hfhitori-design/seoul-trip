# CLAUDE.md — 首尔 Solo Trip 项目指引

## 项目简介

首尔 Solo Trip 行程规划器 — 纯静态单页应用，HTML/CSS/JS 零依赖，localStorage 数据持久化，移动端优先设计。

## 文档索引

| 文档 | 路径 | 说明 |
|------|------|------|
| 开发需求 | `docs/requirements.md` | 功能列表、已完成/待规划 |
| 技术规范 | `docs/technical-spec.md` | 数据模型、存储方案、安全 |
| 设计规范 | `docs/design-spec.md` | 色值、字体、间距、圆角 |
| 开发流程 | `docs/development-guide.md` | 环境、测试、部署 |

## 开发日志

- 目录：`dev-log/`
- 格式：`YYYY-MM-DD.md`
- 每个开发会话开始前，读取最新日志了解当前状态
- 每个开发会话结束后，更新当日日志（完成事项 + 待办事项）
- 规范说明见 `dev-log/README.md`

## 关键开发规则

1. **零依赖** — 不引入任何 npm 包、CDN 或第三方库
2. **移动端优先** — 以手机屏幕为主要目标，max-width: 480px
3. **操作确认** — 删除、重置等破坏性操作必须有 confirm 弹窗
4. **用户输入转义** — 所有用户输入通过 `escapeHtml()` 防 XSS
5. **数据完整性** — localStorage 读取需 try-catch，损坏时回退默认数据
6. **无构建步骤** — 修改源码后刷新浏览器即生效
