# AI 问答助手部署指南

## 🚀 功能概述
在个人博客中添加了大模型问答功能，包括：
- 智能聊天界面
- OpenAI GPT 集成
- 对话历史记录
- 响应式设计

## 📋 部署前准备

### 1. 获取 OpenAI API 密钥
1. 访问 [OpenAI Platform](https://platform.openai.com/api-keys)
2. 创建新的 API 密钥
3. 记录密钥（格式：`sk-...`）

### 2. 选择部署平台

#### 方案 A：Vercel（推荐）
- **优点**：与 GitHub 集成，自动部署
- **缺点**：需要绑定信用卡
- **适用场景**：生产环境

#### 方案 B：GitHub Pages + Vercel API
- **优点**：GitHub Pages 托管前端，Vercel 托管 API
- **缺点**：需要两个平台配置
- **适用场景**：分离式部署

## 🔧 Vercel 部署步骤

### 第一步：上传代码到 GitHub
```bash
git add .
git commit -m "添加 AI 问答助手功能"
git push origin main
```

### 第二步：在 Vercel 部署
1. 访问 [Vercel](https://vercel.com)
2. 使用 GitHub 账户登录
3. 点击 "New Project"
4. 选择你的个人博客仓库
5. 点击 "Import"

### 第三步：配置环境变量
在 Vercel 项目设置中：
1. 进入 "Settings" > "Environment Variables"
2. 添加以下变量：
   ```
   OPENAI_API_KEY=sk-your-api-key-here
   ```
3. 点击 "Save"

### 第四步：重新部署
1. 进入 "Deployments" 页面
2. 点击最新部署的 "..." 菜单
3. 选择 "Redeploy"

## 🧪 本地测试

### 1. 安装依赖
```bash
npm install
```

### 2. 配置本地环境变量
复制 `.env.example` 为 `.env.local`：
```bash
cp .env.example .env.local
```

编辑 `.env.local`，添加你的 API 密钥：
```env
OPENAI_API_KEY=sk-your-api-key-here
```

### 3. 启动开发服务器
```bash
npm run dev
```

访问 `http://localhost:3000` 查看效果。

## ⚠️ 注意事项

### API 成本控制
- GPT-3.5-turbo 相对便宜（$0.002/1K tokens）
- GPT-4 更贵但效果更好（$0.03/1K tokens）
- 建议设置 API 使用限制

### 安全考虑
- ✅ API 密钥已通过环境变量保护
- ✅ 后端验证输入内容
- ✅ 错误处理完善

### 性能优化
- API 响应缓存（可选）
- 对话历史限制（已实现）
- 错误重试机制（已实现）

## 🔄 故障排除

### 常见问题

1. **API 密钥错误**
   - 检查环境变量是否正确设置
   - 确认 API 密钥格式正确

2. **构建失败**
   - 检查 Next.js 版本兼容性
   - 确认 TypeScript 类型正确

3. **API 请求超时**
   - 检查 OpenAI API 状态
   - 考虑增加超时时间

### 调试方法
```bash
# 查看详细错误日志
npm run dev

# 检查构建
npm run build

# 检查类型
npm run type-check
```

## 📊 监控和维护

### 使用量监控
- OpenAI API Dashboard 查看调用次数
- Vercel Analytics 查看访问统计

### 定期维护
- 更新依赖包
- 检查 API 成本
- 优化对话体验

---

🎉 **恭喜！你的 AI 问答助手已就绪！**