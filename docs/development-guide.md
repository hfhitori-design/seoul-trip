# 开发流程与执行步骤

## 环境准备

### 本地测试

项目是纯静态文件，需要 HTTP 服务器（因为部分浏览器限制 `file://` 协议下的 localStorage）。

```bash
# 在项目根目录执行，任选一种
python -m http.server 8080
# 或
npx serve -l 8080
```

浏览器打开 `http://localhost:8080`

### 手机测试

电脑和手机连同一 WiFi，手机浏览器访问 `http://<电脑局域网IP>:8080`。

> 如果连不上，检查 Windows 防火墙是否拦截了 8080 端口。

## 开发流程

1. **修改代码**：直接编辑 `index.html` / `script.js` / `style.css`
2. **刷新浏览器**：无构建步骤，刷新即生效
3. **清除数据**：浏览器 DevTools → Application → Local Storage → 删除 `seoul-trip` 键，或点击页面上的 ↺ 重置按钮
4. **确认无误**：检查编辑/新增/删除功能正常，数据持久化正常

## 代码规范

### HTML
- 语义化标签（header, footer, section 等）
- 表单使用原生 form + input，不走 div 模拟

### CSS
- 不引入第三方样式库
- 选择器命名语义化（`.day-card`, `.btn-edit`, `.modal-box`）
- 移动端优先，不设复杂媒体查询

### JavaScript
- 零依赖，不使用任何 npm 包或 CDN
- 状态集中在 `tripData` 变量
- 所有 UI 变更通过 `render()` 驱动
- 用户输入使用 `escapeHtml()` 转义
- 破坏性操作（删除、重置）需 `confirm()` 确认

## 部署

静态文件托管即可，推荐：
- GitHub Pages
- Netlify
- Vercel

直接将项目根目录上传即可，无需构建。
