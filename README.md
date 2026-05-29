# 🔮 Entelecheia - 塔罗占卜项目

## 项目介绍

**Entelecheia** 是一个交互式的塔罗占卜应用。Entelecheia 在希腊哲学中意为"完全实现的力量"，象征着潜能的完全释放和实现。

这个项目结合了塔罗牌的神秘性和现代网页技术，为用户提供一个优雅、直观的占卜体验。

## ✨ 功能特性

- 🔮 **随机抽牌** - 从塔罗牌库中随机抽取一张牌
- 📖 **牌义解读** - 每张牌都附带详细的寓意说明
- 🎨 **精美界面** - 使用现代化的 UI 设计和动画效果
- 📱 **响应式设计** - 支持桌面和手机浏览
- 🎯 **正逆位显示** - 随机显示牌的正位或逆位

## 🚀 快速开始

### 环境要求
- Python 3.7+
- Flask 2.3.0

### 安装步骤

1. **克隆仓库**
```bash
git clone https://github.com/shenngn/Entelecheia-project.git
cd Entelecheia-project
```

2. **创建虚拟环境**
```bash
python -m venv venv
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate
```

3. **安装依赖**
```bash
pip install -r requirements.txt
```

4. **运行应用**
```bash
python app.py
```

5. **打开浏览器**
访问 `http://localhost:5000`

## 📁 项目结构

```
Entelecheia-project/
├── app.py                  # Flask 主应用
├── requirements.txt        # Python 依赖
├── templates/
│   └── index.html         # HTML 模板
└── static/
    ├── style.css          # 样式表
    └── script.js          # JavaScript 脚本
```

## 🔧 技术栈

- **后端**: Python + Flask
- **前端**: HTML5 + CSS3 + JavaScript
- **样式**: 现代化渐变设计

## 📚 API 端点

### GET `/api/draw-card`
随机抽取一张塔罗牌

**响应示例**:
```json
{
    "id": 1,
    "name": "魔术师",
    "meaning": "力量，聪慧，创造力",
    "reversed": false
}
```

### GET `/api/cards`
获取所有塔罗牌信息

## 🎓 学习资源

- [Flask 官方文档](https://flask.palletsprojects.com/)
- [塔罗牌介绍](https://zh.wikipedia.org/wiki/%E5%A1%94%E7%BD%97%E7%89%8C)

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建新的功能分支 (`git checkout -b feature/新功能`)
3. 提交更改 (`git commit -m '添加新功能'`)
4. 推送到分支 (`git push origin feature/新功能`)
5. 创建 Pull Request

## 📝 许可证

本项目暂无指定许可证。

## 👤 作者

**shenngn**

## 💡 计划中的功能

- [ ] 添加更多塔罗牌（完整的 78 张）
- [ ] 三牌阵展示
- [ ] 用户历史记录
- [ ] 深度解读功能
- [ ] 多语言支持

---

**Entelecheia** - 探索命运的秘密 ✨
