# Entelecheia - 塔罗占卜应用 (重设计版)

## 🌟 项目概述

**Entelecheia** 是一个专业、高级的在线塔罗占卜应用。通过现代化的设计和沉浸式的用户体验，让用户感受到真实的塔罗占卜仪式感。

### 核心特性

✨ **UI/UX 升级**
- 星空主题深色界面
- 神秘学风格设计
- 金色细节装饰
- 平滑动画过渡
- 响应式设计

🎯 **多种牌阵系统**
- 单张指引牌 (1张)
- 三牌阵 (3张) - 过去/现在/未来
- 爱情牌阵 (5张)
- 事业牌阵 (5张)
- 凯尔特十字 (10张)
- 每日运势 (3张)

📖 **深度解读引擎**
- 单牌解释
- 多牌组合分析
- 整体故事线构建
- 个性化建议生成
- 行动指南

🎮 **沉浸式体验**
- 洗牌动画
- 卡牌翻转效果
- 音效系统
- 发光视觉效果

💾 **结果管理**
- PDF报告导出
- 分享链接生成
- 占卜历史记录
- 云存储支持

## 🚀 快速开始

### 环境要求
- Node.js 18+
- npm 或 yarn

### 安装步骤

```bash
# 1. 克隆仓库
git clone https://github.com/shenngn/Entelecheia-project.git
cd Entelecheia-project

# 2. 检出新分支
git checkout redesign/nextjs-upgrade

# 3. 安装依赖
npm install

# 4. 运行开发服务器
npm run dev

# 5. 打开浏览器
# 访问 http://localhost:3000
```

## 📁 项目结构

```
Entelecheia-project/
├── pages/
│   ├── index.tsx              # 首页
│   ├── divination.tsx         # 占卜页面
│   ├── share/[token].tsx      # 分享页面
│   ├── api/
│   │   ├── draw-card.ts       # 抽牌API
│   │   ├── cards.ts           # 卡牌列表API
│   │   └── save-reading.ts    # 保存结果API
│   ├── _app.tsx               # App配置
│   └── _document.tsx          # Document配置
│
├── components/
│   ├── Layout/
│   │   └── MysticalLayout.tsx     # 布局组件
│   ├── Card/
│   │   └── TarotCard.tsx          # 塔罗卡牌组件
│   ├── Button/
│   │   └── MysticalButton.tsx     # 自定义按钮
│   ├── Modal/
│   │   └── Modal.tsx              # 模态框
│   ├── Loading/
│   │   └── LoadingSpinner.tsx     # 加载动画
│   ├── Result/
│   │   └── ResultPage.tsx         # 结果页面
│   ├── History/
│   │   └── ReadingHistoryPage.tsx # 历史记录
│   └── About/
│       └── AboutPage.tsx          # 关于页面
│
├── lib/
│   ├── types.ts               # TypeScript类型定义
│   ├── constants.ts           # 常量定义
│   ├── utils.ts               # 工具函数
│   ├── store.ts               # Zustand状态管理
│   ├── tarot-reader.ts        # AI解读引擎
│   ├── pdf-exporter.ts        # PDF导出
│   └── sound-manager.ts       # 音效管理
│
├── public/
│   ├── global.css             # 全局样式
│   └── audio/                 # 音效文件
│
├── data/
│   └── tarot-cards.json       # 塔罗牌数据
│
└── 配置文件
    ├── package.json
    ├── tsconfig.json
    ├── next.config.js
    ├── tailwind.config.ts
    └── postcss.config.js
```

## 🎨 设计系统

### 色彩方案
- **主色**: 金色 (#D4AF37)
- **暗色**: 深蓝 (#0F1729)
- **更深**: 极深蓝 (#050A15)
- **亮色**: 月白 (#E8E8E8)
- **紫色**: 神秘紫 (#6B46C1)

### 动画设计
- 浮动效果 (3s)
- 发光脉冲 (2s)
- 闪烁效果 (2s)
- 卡牌翻转 (0.6s)
- 平滑过渡 (0.3s)

## 🔧 技术栈

- **框架**: Next.js 14
- **前端**: React 18 + TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **状态管理**: Zustand
- **PDF生成**: jsPDF + html2canvas
- **API**: Next.js API Routes

## 📚 核心功能说明

### 1. 占卜流程

```
选择牌阵 → 洗牌动画 → 选择位置 → 翻牌效果 → 播放音效 → 显示结果
```

### 2. 解读系统

**TarotReader** 类提供以下方法：
- `getSingleCardReading()` - 单张卡牌解读
- `getThreeCardReading()` - 三牌阵解读
- `getLoveReading()` - 爱情占卜解读
- `getCareerReading()` - 事业占卜解读
- `getDailyGuidance()` - 每日运势指引

### 3. 音效系统

**SoundManager** 类提供：
- `playShuffleSound()` - 洗牌音
- `playFlipSound()` - 翻牌音
- `playSuccessSound()` - 成功音
- `playMysticalSound()` - 神秘音

### 4. PDF导出

生成专业的占卜报告，包含：
- 占卜日期和时间
- 所选牌阵信息
- 抽取的卡牌展示
- 详细解读内容
- 品牌页脚

## 🎯 使用指南

### 首页 (/)
- 项目介绍
- 功能展示
- 开始占卜按钮

### 占卜页 (/divination)
1. **选择牌阵** - 6种牌阵可选
2. **洗牌** - 沉浸式洗牌动画
3. **抽牌** - 依次点击卡牌位置
4. **翻牌** - 3D翻转效果显示结果
5. **查看解读** - 深度AI解读

### 结果页
- 卡牌展示
- 详细解读
- 行动建议
- PDF导出
- 分享链接
- 再次占卜

## 🔐 隐私与数据

- 占卜结果可本地存储
- 分享链接加密生成
- 支持匿名使用
- 无跟踪代码

## 🚧 开发路线

- [ ] 完整的78张塔罗牌数据
- [ ] 后端数据库集成
- [ ] 用户账户系统
- [ ] 云存储功能
- [ ] 多语言支持
- [ ] 深度学习模型优化解读
- [ ] 占卜统计分析
- [ ] 社区分享功能

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📝 许可证

MIT License

## 👤 作者

**shenngn** - 创意、设计、开发

---

✨ **Entelecheia** - 探索命运的秘密，发现内在的光芒 ✨
