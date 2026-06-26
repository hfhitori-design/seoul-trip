# 技术规范

## 技术栈

| 层级 | 选型 | 说明 |
|------|------|------|
| 结构 | HTML5 | 语义化标签 |
| 样式 | CSS3 | 零预处理，原生 CSS |
| 逻辑 | Vanilla JS (ES6+) | 零框架、零依赖 |
| 文本存储 | localStorage | 键名 `seoul-trip`，行程数据 |
| 图片存储 | IndexedDB | 数据库 `seoul-trip-images`，存 Blob |
| 运行 | 任意 HTTP 服务器 | 无构建步骤 |

## 文件职责

| 文件 | 职责 |
|------|------|
| `index.html` | 页面结构、meta 标签、弹窗模板 |
| `script.js` | 数据模型、渲染、编辑、localStorage 读写 |
| `style.css` | 全局样式、卡片、弹窗、动画 |

## 数据模型

```json
{
  "days": [
    {
      "title": "Day 1 · 延禧洞 + 延南洞",
      "items": [
        {
          "time": "10:00",
          "place": "default value 咖啡店",
          "traffic": "地铁2号线弘大站 → 公交龙山02路",
          "note": "虹吸咖啡，延禧洞逛吃起点"
        }
      ]
    }
  ]
}
```

### 字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `days` | Array | 是 | 天数组 |
| `days[].title` | String | 是 | 天标题 |
| `days[].items` | Array | 是 | 该天行程列表（可为空） |
| `items[].time` | String | 否 | 时间，如 "14:00" |
| `items[].place` | String | 是 | 地点名称（表单校验） |
| `items[].traffic` | String | 否 | 交通方式 |
| `items[].note` | String | 否 | 备注 |
| `items[].imageIds` | Array | 否 | 图片 ID 数组，对应 IndexedDB 记录 |

## 存储方案

### localStorage（行程数据）
- **存储键**：`seoul-trip`
- **格式**：JSON 字符串
- **容错**：解析失败时回退到默认数据
- **重置**：删除该键后重新渲染默认数据

### IndexedDB（图片数据）
- **数据库**：`seoul-trip-images`，版本 1
- **Object Store**：`images`，keyPath: `id`
- **记录格式**：`{ id, data: Blob, place, addedAt }`
- **操作**：save / load / delete，均为 Promise 异步

## 安全

- 用户输入通过 `escapeHtml()` 转义，防止 XSS
- 无后端，无敏感数据传输
