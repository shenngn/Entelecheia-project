# Entelecheia 开发文档

## 快速开始

### 1. 克隆并切换分支
```bash
git clone https://github.com/shenngn/Entelecheia-project.git
cd Entelecheia-project
git checkout redesign/nextjs-upgrade
```

### 2. 安装依赖
```bash
npm install
```

### 3. 启动开发服务器
```bash
npm run dev
```

访问 http://localhost:3000

### 4. 生产构建
```bash
npm run build
npm start
```

## 项目命令

```bash
# 开发模式
npm run dev

# 生产构建
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint

# 类型检查
npm run type-check
```

## 文件结构详解

### pages/
- `index.tsx` - 首页，展示项目介绍
- `divination.tsx` - 主占卜页面，核心功能
- `share/[token].tsx` - 分享结果页面
- `api/` - Next.js API 路由
  - `draw-card.ts` - 获取随机卡牌
  - `cards.ts` - 获取所有卡牌
  - `save-reading.ts` - 保存占卜结果

### components/
核心 React 组件库：
- `Layout/MysticalLayout.tsx` - 基础布局，含星空背景
- `Card/TarotCard.tsx` - 塔罗卡牌组件，支持3D翻转
- `Button/MysticalButton.tsx` - 自定义按钮，多种样式
- `Modal/Modal.tsx` - 模态框
- `Loading/LoadingSpinner.tsx` - 加载动画
- `Result/ResultPage.tsx` - 结果展示页面
- `About/AboutPage.tsx` - 关于页面
- `History/ReadingHistoryPage.tsx` - 历史记录页面

### lib/
业务逻辑和工具：
- `types.ts` - TypeScript 类型定义
- `constants.ts` - 常量（颜色、动画时间等）
- `utils.ts` - 工具函数
- `store.ts` - Zustand 全局状态管理
- `tarot-reader.ts` - AI 解读引擎
- `pdf-exporter.ts` - PDF 导出工具
- `sound-manager.ts` - 音效管理系统

### public/
- `global.css` - 全局样式
- `manifest.json` - PWA 配置
- `audio/` - 音效文件（待添加）
- `images/` - 图片资源

## 开发指南

### 添加新的塔罗牌

1. 编辑 `data/tarot-cards.json`：
```json
{
  "id": 22,
  "name": "新牌名",
  "englishName": "Card Name",
  "number": "XXII",
  "arcana": "major",
  "meaning": {
    "upright": ["含义1", "含义2"],
    "reversed": ["逆位含义1", "逆位含义2"]
  },
  "description": "详细描述",
  "symbolism": "象征意义",
  "guidance": "指导建议",
  "affirmation": "肯定语",
  "keywords": ["关键词1", "关键词2"]
}
```

2. 更新 `lib/constants.ts` 中的 `MAJOR_ARCANA` 数组。

### 添加新的牌阵

1. 在 `lib/constants.ts` 中添加新牌阵到 `SPREADS`：
```typescript
{
  id: 'custom-spread',
  name: '自定义牌阵',
  description: '描述',
  positions: [
    { id: 'pos1', name: '位置1', meaning: '含义', index: 0 },
    // ...
  ],
  type: 'simple',
  icon: '🔮',
}
```

2. 在 `lib/tarot-reader.ts` 中添加对应的解读方法。

### 自定义样式

项目使用 Tailwind CSS，自定义配置在 `tailwind.config.ts`：

```typescript
const config: Config = {
  theme: {
    extend: {
      colors: {
        'mystical': {
          'dark': '#0F1729',
          'gold': '#D4AF37',
          // ...
        }
      },
      animation: {
        // 添加自定义动画
      }
    },
  },
}
```

### 添加动画效果

使用 Framer Motion：

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

## 部署指南

### Vercel 部署（推荐）

```bash
# 1. 推送代码到 GitHub
git push origin redesign/nextjs-upgrade

# 2. 连接 Vercel
# 访问 https://vercel.com/import
# 选择 GitHub 仓库
# Vercel 会自动检测 Next.js 并部署

# 3. 设置环境变量（如需要）
# 在 Vercel Dashboard 中配置
```

### Docker 部署

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t entelecheia .
docker run -p 3000:3000 entelecheia
```

## 性能优化

### 1. 图片优化
- 使用 Next.js Image 组件
- 启用 Vercel 的自动图片优化

### 2. 代码分割
- Next.js 自动进行路由级别的代码分割
- 使用 dynamic imports 进行组件级分割

```typescript
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(
  () => import('../components/DynamicComponent'),
  { loading: () => <LoadingSpinner /> }
);
```

### 3. 缓存策略
- 静态资源缓存
- API 响应缓存
- 页面预生成 (ISR)

## 调试

### 浏览器开发者工具
```bash
# Chrome DevTools
F12 或 Ctrl+Shift+I
```

### VS Code 调试

创建 `.vscode/launch.json`：
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/next",
      "args": ["dev"],
      "cwd": "${workspaceFolder}"
    }
  ]
}
```

## 常见问题

### Q: 如何添加音效？
A: 将音频文件放在 `public/audio/` 目录，然后在 `SoundManager` 中使用 Web Audio API。

### Q: 如何自定义颜色？
A: 编辑 `tailwind.config.ts` 中的 `colors.mystical` 对象。

### Q: 如何保存用户数据？
A: 实现后端 API，或使用 localStorage/IndexedDB 进行本地存储。

### Q: 支持移动设备吗？
A: 是的，使用了响应式设计，支持 PWA。

## 贡献

欢迎提交 PR 和 Issue！

## 许可证

MIT

## 联系方式

- GitHub: [@shenngn](https://github.com/shenngn)
- 项目地址: https://github.com/shenngn/Entelecheia-project
