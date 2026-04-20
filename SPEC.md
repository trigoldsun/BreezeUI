# BreezeUI 设计系统规范
# 版本: 1.0.0
# 日期: 2026-04-20
# 输出者: Hermes01

---

## 一、设计理念与愿景

**清晨微风 — 轻盈通透、温暖自然、清新明亮**

BreezeUI 是一套面向全硬件平台的明亮清新风格设计语言体系。视觉以云白和淡青灰为主基底，传达通透舒适的呼吸感；以天蓝 `#4A9FFF` 贯穿细节，注入清澈活力；薄荷绿 `#36D399` 和樱粉 `#FF6B9D` 点缀其间，营造温暖亲和的愉悦氛围。

> "清风徐来，水波不兴 — 轻盈而不轻飘，清新而不冷淡，温暖而不燥热。"

**设计关键词**：云白·天蓝·薄荷·柔圆·通透·温暖

---

## 二、色彩系统

### 主色板（云白·淡青·天蓝系）

| Token | HEX | RGB | HSL | 用途 |
|-------|-----|-----|-----|------|
| `--breeze-bg-primary` | `#F8FAFE` | `248,250,254` | `220°,60%,98%` | 主背景·远天云白 |
| `--breeze-bg-secondary` | `#EEF3FA` | `238,243,250` | `214°,50%,96%` | 卡片/面板底·淡青灰 |
| `--breeze-bg-elevated` | `#FFFFFF` | `255,255,255` | `0°,0%,100%` | 悬浮层·纯白 |
| `--breeze-bg-overlay` | `#DDE5F0` | `221,229,240` | `212°,25%,90%` | 遮罩/模态底 |
| `--breeze-bg-input` | `#F0F5FC` | `240,245,252` | `214°,50%,96%` | 输入框底 |
| `--breeze-bg-hover` | `#E8F0FB` | `232,240,251` | `214°,60%,95%` | 悬浮态 |

### 强调色板（清澈明亮）

| Token | HEX | RGB | HSL | 用途 |
|-------|-----|-----|-----|------|
| `--breeze-accent-primary` | `#4A9FFF` | `74,159,255` | `212°,100%,65%` | 主强调·天蓝 |
| `--breeze-accent-secondary` | `#36D399` | `54,211,153` | `158°,65%,52%` | 次强调·薄荷绿 |
| `--breeze-accent-tertiary` | `#FF9F43` | `255,159,67` | `31°,100%,63%` | 点缀·柔和橙 |
| `--breeze-accent-warm` | `#FF6B9D` | `255,107,157` | `343°,100%,71%` | 温暖·樱粉 |

### 功能色板

| Token | HEX | RGB | HSL | 用途 |
|-------|-----|-----|-----|------|
| `--breeze-success` | `#22C55E` | `34,197,94` | `142°,69%,45%` | 清新绿 |
| `--breeze-warning` | `#F59E0B` | `245,158,11` | `38°,92%,50%` | 暖黄 |
| `--breeze-danger` | `#EF4444` | `239,68,68` | `0°,84%,60%` | 柔和红 |
| `--breeze-info` | `#4A9FFF` | `74,159,255` | `212°,100%,65%` | 天蓝信息 |

### Pastel 柔和色板

| Token | HEX | 用途 |
|-------|-----|------|
| `--breeze-pastel-blue` | `#DBEAFE` | 淡蓝背景 |
| `--breeze-pastel-green` | `#D1FAE5` | 淡绿背景 |
| `--breeze-pastel-orange` | `#FEF3C7` | 淡橙背景 |
| `--breeze-pastel-pink` | `#FCE7F3` | 淡粉背景 |
| `--breeze-pastel-gray` | `#F1F5F9` | 淡灰背景 |

### 文字色

| Token | HEX | 用途 |
|-------|-----|------|
| `--breeze-text-primary` | `#1E3A5F` | 深青文字 |
| `--breeze-text-secondary` | `#5A7A9A` | 次级青灰 |
| `--breeze-text-tertiary` | `#94A8BE` | 占位/禁用 |
| `--breeze-text-inverse` | `#FFFFFF` | 反色文字 |
| `--breeze-text-link` | `#4A9FFF` | 链接 |

### 边框与分隔

| Token | HEX | 用途 |
|-------|-----|------|
| `--breeze-border` | `rgba(74,159,255,0.15)` | 默认边框 |
| `--breeze-border-hover` | `rgba(74,159,255,0.4)` | 悬浮边框 |
| `--breeze-border-focus` | `#4A9FFF` | 聚焦边框 |
| `--breeze-border-subtle` | `rgba(74,159,255,0.08)` | 极淡分隔线 |

### 光效与柔和投影

| Token | 值 | 用途 |
|-------|---|------|
| `--breeze-glow-primary` | `0 4px 16px rgba(74,159,255,0.25)` | 天蓝光晕 |
| `--breeze-glow-secondary` | `0 4px 16px rgba(54,211,153,0.2)` | 薄荷光晕 |
| `--breeze-shadow-sm` | `0 2px 6px rgba(30,58,95,0.08)` | 微阴影 |
| `--breeze-shadow-md` | `0 4px 16px rgba(30,58,95,0.1)` | 卡片阴影 |
| `--breeze-shadow-lg` | `0 8px 28px rgba(30,58,95,0.12)` | 浮层阴影 |
| `--breeze-shadow-float` | `0 8px 32px rgba(30,58,95,0.12)` | 弹出层 |

---

## 三、字体系统

## 字体授权

| 字体 | 用途 | 授权 | 商业可用 |
|------|------|------|----------|
| Nunito | 标题字体 | SIL OFL 1.1 | ✅ |
| DM Sans | 正文字体 | SIL OFL 1.1 | ✅ |
| JetBrains Mono | 等宽字体 | SIL OFL 1.1 | ✅ |

> 所有字体均通过 Google Fonts 加载，授权均为 SIL Open Font License 1.1，可免费用于商业产品。

### 字体栈

```css
/* 显示/标题字体 */
--breeze-font-display: 'Nunito', 'Noto Sans SC', system-ui, sans-serif;

/* 正文字体 */
--breeze-font-body: 'DM Sans', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;

/* 等宽字体 */
--breeze-font-mono: 'JetBrains Mono', 'Fira Code', 'Source Code Pro', monospace;
```

### 字阶（基于 16px 基准）

| Token | rem | px | 用途 |
|-------|-----|----|------|
| `--breeze-text-2xs` | 0.625rem | 10px | 极小标签 |
| `--breeze-text-xs` | 0.75rem | 12px | 标签/注释 |
| `--breeze-text-sm` | 0.875rem | 14px | 次级正文 |
| `--breeze-text-base` | 1rem | 16px | 正文（基准） |
| `--breeze-text-lg` | 1.125rem | 18px | 大正文 |
| `--breeze-text-xl` | 1.25rem | 20px | 小标题 |
| `--breeze-text-2xl` | 1.5rem | 24px | 区块标题 |
| `--breeze-text-3xl` | 2rem | 32px | 页面标题 |
| `--breeze-text-4xl` | 2.5rem | 40px | 大标题 |
| `--breeze-text-5xl` | 3rem | 48px | 英雄标题 |

### 字重

| Token | 值 | 用途 |
|-------|---|------|
| `--breeze-font-light` | 300 | 辅助说明 |
| `--breeze-font-normal` | 400 | 正文 |
| `--breeze-font-medium` | 500 | 强调正文 |
| `--breeze-font-semibold` | 600 | 标题 |
| `--breeze-font-bold` | 700 | 重要标题 |

---

## 四、间距系统

基于 **4px 基准网格**：

| Token | rem | px | 用途 |
|-------|-----|----|------|
| `--breeze-space-0` | 0 | 0 | 无间距 |
| `--breeze-space-1` | 0.25rem | 4px | 基础单元 |
| `--breeze-space-2` | 0.5rem | 8px | 紧凑间距 |
| `--breeze-space-3` | 0.75rem | 12px | 小间距 |
| `--breeze-space-4` | 1rem | 16px | 标准间距 |
| `--breeze-space-5` | 1.25rem | 20px | 中间距 |
| `--breeze-space-6` | 1.5rem | 24px | 宽松间距 |
| `--breeze-space-8` | 2rem | 32px | 大间距 |
| `--breeze-space-10` | 2.5rem | 40px | 区块间距 |
| `--breeze-space-12` | 3rem | 48px | 大区块 |
| `--breeze-space-16` | 4rem | 64px | 页面间距 |

---

## 五、圆角系统（更圆润）

| Token | 值 | 用途 |
|-------|-----|------|
| `--breeze-radius-sm` | 6px | 小圆角 |
| `--breeze-radius-md` | 12px | 默认组件 |
| `--breeze-radius-lg` | 18px | 卡片/面板 |
| `--breeze-radius-xl` | 24px | 大卡片/模态 |
| `--breeze-radius-2xl` | 32px | 超大容器 |
| `--breeze-radius-full` | 9999px | 药丸/圆形 |

---

## 六、阴影系统

| Token | 值 | 用途 |
|-------|-----|------|
| `--breeze-shadow-xs` | `0 1px 2px rgba(30,58,95,0.05)` | 最低阴影 |
| `--breeze-shadow-sm` | `0 2px 6px rgba(30,58,95,0.08)` | 卡片默认 |
| `--breeze-shadow-md` | `0 4px 16px rgba(30,58,95,0.1)` | 悬浮阴影 |
| `--breeze-shadow-lg` | `0 8px 28px rgba(30,58,95,0.12)` | 弹出层 |
| `--breeze-shadow-xl` | `0 16px 48px rgba(30,58,95,0.15)` | 模态框 |
| `--breeze-glow-primary` | `0 4px 16px rgba(74,159,255,0.25)` | 天蓝光效 |

---

## 七、动效规范

### 时长

| Token | 值 | 用途 |
|-------|-----|------|
| `--breeze-duration-instant` | 0ms | 无过渡 |
| `--breeze-duration-fast` | 100ms | 微交互反馈 |
| `--breeze-duration-normal` | 180ms | 常规过渡 |
| `--breeze-duration-slow` | 280ms | 展开/收起 |
| `--breeze-duration-slower` | 400ms | 页面进入 |
| `--breeze-duration-slowest` | 600ms | 复杂动画 |

### 缓动曲线

| Token | 值 | 用途 |
|-------|-----|------|
| `--breeze-ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | 默认 |
| `--breeze-ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | 进入 |
| `--breeze-ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | 退出 |
| `--breeze-ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | 匀速 |
| `--breeze-ease-spring` | `cubic-bezier(0.34, 1.3, 0.64, 1)` | 弹性 |
| `--breeze-ease-smooth` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | 平滑 |

### 动效场景

| 场景 | 动画 |
|------|------|
| 按钮点击 | scale(0.98)，100ms |
| 卡片悬浮 | translateY(-4px) + shadow-lg，280ms |
| 模态打开 | opacity 0→1 + scale(0.94→1)，400ms spring |
| Toast 进入 | translateX(110%)→translateX(0)，280ms spring |
| 骨架屏 | shimmer gradient 动画，1.8s 循环 |
| 加载旋转 | rotate(0→360)，0.8s linear 循环 |
| 页面切换 | opacity + translateY(10px→0)，400ms |
| 呼吸动画 | opacity 0.6→1 + scale，3s ease-in-out 循环 |

---

## 八、组件清单

### 基础组件（16个）

| 组件 | 状态 |
|------|------|
| Button | default / hover / active / focus / disabled / loading / pill |
| Input | default / focus / error / disabled / readonly / with prefix-suffix |
| Textarea | default / focus / error / disabled |
| Select/Dropdown | default / open / disabled |
| Checkbox | unchecked / checked / indeterminate / disabled |
| Radio | unselected / selected / disabled |
| Switch/Toggle | off / on / disabled |
| Badge/Tag | default / primary / success / warning / danger / dot / pill |
| Tooltip | hidden / visible（4个方向） |
| Progress Bar | determinate / indeterminate / 4 sizes |
| Skeleton | shimmer / pulse 动画 |
| Avatar | image / initials / placeholder / 5 sizes |
| Divider | horizontal / vertical |
| Spinner | 4 sizes / dual / glow |
| Alert/Notice | info / success / warning / danger |
| Tabs | underline / pill |

### 复合组件（10个）

| 组件 | 说明 |
|------|------|
| Card | 悬浮态带渐变描边 |
| Modal/Dialog | 居中 + 毛玻璃遮罩 |
| Drawer | 左/右/底部滑出 |
| Table | 圆角边框 / 排序 / 条纹 |
| Sidebar | 可折叠 |
| TopNav | Logo + 搜索 + 用户 |
| BottomNav | 移动端 4-5 项 |
| Breadcrumb | 路径导航 |
| Pagination | 分页控件 |
| Dropdown Menu | 下拉菜单 |

---

## 九、跨平台适配策略

### 断点

| 名称 | 宽度 | 设备 |
|------|------|------|
| xs | < 640px | 手机 |
| sm | 640px - 767px | 大手机 |
| md | 768px - 1023px | 平板 |
| lg | 1024px - 1439px | 桌面 |
| xl | ≥ 1440px | 大屏 |

### 平台变体

#### 明亮主题（默认）
- `--breeze-bg-primary: #F8FAFE`
- `--breeze-text-primary: #1E3A5F`

#### Breeze Dark（清澈夜空）
- `--breeze-bg-primary: #0F1B2D`
- `--breeze-bg-elevated: #1D2E44`
- `--breeze-text-primary: #E8F4FC`

#### Breeze Warm（暖阳橙）
- `--breeze-accent-primary: #FF9F43`
- `--breeze-accent-secondary: #FFD93D`

#### Breeze Dream（梦幻紫粉）
- `--breeze-accent-primary: #8B5CF6`
- `--breeze-accent-secondary: #EC4899`

#### 折叠屏/双屏适配
- 断点 320px / 640px / 768px / 1024px / 1440px
- 内容流自动重排
- 屏幕接缝处理（gap ≥ 8px）

---

## 十、与 NueroUI 的差异

| 维度 | NueroUI（稳重科技风） | BreezeUI（明亮清新风） |
|------|----------------------|----------------------|
| 基调 | 深海蓝黑 `#0B0E17` | 云白 `#F8FAFE` |
| 主强调 | 科技青 `#00D4FF` | 天蓝 `#4A9FFF` |
| 次强调 | 能量紫 `#7B61FF` | 薄荷绿 `#36D399` |
| 点缀色 | 朱红/墨金 | 樱粉/柔和橙 |
| 圆角 | 4-16px（偏几何） | 6-24px（更圆润） |
| 阴影 | 深沉厚重 | 轻柔通透 |
| 动效 | 精准利落 | 柔和弹性 |
| 字体 | Outfit + Inter | Nunito + DM Sans |
| 光效 | 科技发光 | 柔和光晕 |

---

## 十一、版本历史

| 版本 | 日期 | 说明 |
|------|------|------|
| 1.0.0 | 2026-04-20 | 初始版本，与NueroUI形成互补的明亮清新风 |
