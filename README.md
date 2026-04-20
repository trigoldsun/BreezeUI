# BreezeUI — 明亮清新风设计系统

> 轻盈通透、温暖自然、清新明亮

**版本**: 1.0.0 | **日期**: 2026-04-20 | **输出者**: Hermes01

---

## 一、设计理念

BreezeUI 是一套面向全硬件平台的明亮清新风格设计语言体系。以云白和淡青灰为主基底，天蓝为强调色，薄荷绿和樱粉为点缀，传达通透舒适的呼吸感。

> "清风徐来，水波不兴"

## 二、与 NueroUI 的关系

| 风格 | NueroUI（稳重科技风） | BreezeUI（明亮清新风） |
|------|---------------------|----------------------|
| 基调 | 深海蓝黑 `#0B0E17` | 云白 `#F8FAFE` |
| 主强调 | 科技青 `#00D4FF` | 天蓝 `#4A9FFF` |
| 次强调 | 能量紫 `#7B61FF` | 薄荷绿 `#36D399` |
| 风格关键词 | 深邃·精准·内敛 | 通透·温暖·轻盈 |
| 适用场景 | 专业后台/企业系统/深色模式 | 消费者产品/移动应用/浅色主题 |

两者**互补**，可根据产品定位和用户场景切换使用。

## 三、快速开始

### CDN 引入
```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@breezeui/core@1.0.0/breeze-ui.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@breezeui/core@1.0.0/motion.min.css">

<!-- 或完整引入 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@breezeui/core@1.0.0/breeze-full.min.css">
```

### NPM 安装
```bash
npm install @breezeui/core
```

### 使用
```html
<!DOCTYPE html>
<html data-theme="light">
<head>
  <link rel="stylesheet" href="breeze-ui.css">
  <link rel="stylesheet" href="motion.css">
</head>
<body>
  <button class="bz-btn bz-btn--primary">天蓝按钮</button>
  <button class="bz-btn bz-btn--secondary">薄荷绿按钮</button>
  <button class="bz-btn bz-btn--warm">暖橙按钮</button>
</body>
</html>
```

## 四、主题切换

```html
<!-- 明亮主题（默认） -->
<html>

<!-- Breeze Dark -->
<html data-theme="breeze-dark">

<!-- Breeze Warm（暖阳橙） -->
<html data-theme="breeze-warm">

<!-- Breeze Dream（梦幻紫粉） -->
<html data-theme="breeze-dream">
```

## 五、组件列表

### 基础组件
- Button（7种变体 + 5种尺寸 + 图标/Loading/Pill）
- Input / Textarea
- Checkbox / Radio / Switch
- Badge / Tag
- Tooltip
- Progress Bar
- Skeleton
- Avatar
- Divider
- Spinner
- Alert/Notice
- Tabs

### 复合组件
- Card
- Modal / Dialog
- Drawer
- Table
- Dropdown Menu
- Pagination
- Breadcrumb
- Sidebar / TopNav / BottomNav

## 六、动效系统

| 动效 | 类名 | 说明 |
|------|------|------|
| 淡入 | `.bz-animate-fade-in` | 通用进入 |
| 滑入 | `.bz-animate-slide-up` | 上下进入 |
| 缩放 | `.bz-animate-scale-in` | 弹性缩放 |
| 弹入 | `.bz-animate-bounce-in` | Bounce效果 |
| 骨架屏 | `.bz-skeleton-wave` | shimmer动画 |
| 呼吸 | `.bz-breathe` | 柔和呼吸 |
| 浮动 | `.bz-float` | 上下浮动 |

## 七、跨平台

| 平台 | 文件 |
|------|------|
| CSS | `breeze-ui.css` / `motion.css` |
| Flutter | `platforms/flutter/breeze_ui_tokens.dart` |
| SwiftUI | `platforms/swiftui/breeze_ui_tokens.swift` |
| Jetpack Compose | `platforms/compose/breeze_ui_tokens.kt` |
| Vue 3 | `vue/breeze-ui-vue3.ts` |
| React | `react/breeze-ui-react.tsx` |

## 八、设计资源

- **字体**: Nunito（标题） + DM Sans（正文）
- **图标**: 120个统一 24x24 线性图标
- **圆角**: 6-24px（比NueroUI更圆润）
- **阴影**: 轻柔通透（NueroUI的50%深度）

## 九、设计令牌

完整令牌见 [`tokens.css`](tokens.css) 和 [`SPEC.md`](SPEC.md)

---

**GitHub**: https://github.com/trigoldsun/BreezeUI
**文档**: https://trigoldsun.github.io/BreezeUI/
