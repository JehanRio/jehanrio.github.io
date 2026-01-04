# AI 问答助手部署指南

## 🚀 功能概述
在个人博客中添加了大模型问答功能，包括：
- 智能聊天界面
- OpenAI GPT 集成
- 对话历史记录
- 响应式设计

## 📋 部署架构

### 分离式架构：GitHub Pages + Vercel API
- **前端**：静态部署到 GitHub Pages
- **后端**：API 路由部署到 Vercel
- **优势**：完全免费托管，前端和后端分离，更灵活

## 📝 部署步骤

### 第一步：上传代码到 GitHub
```bash
git add .
git commit -m "添加 AI 问答助手功能（GitHub Pages + Vercel API 架构）"
git push origin main
```

### 第二步：配置 GitHub Pages
1. 进入 GitHub 仓库的 Settings
2. 找到 "Pages" 选项
3. 在 Source 下拉菜单中选择 "GitHub Actions"
4. GitHub Actions 会自动部署前端到 GitHub Pages

### 第三步：配置 Vercel API 部署
1. 访问 [Vercel](https://vercel.com)
2. 使用 GitHub 账户登录
3. 点击 "New Project"
4. 选择你的个人博客仓库
5. 点击 "Import"
6. 在配置页面，确保只部署 API 路由：
   - 构建命令：`npm run build`
   - 输出目录：`.next`
7. 点击 "Deploy"

### 第四步：配置环境变量
1. 在 Vercel 项目设置中：
   - 进入 "Settings" > "Environment Variables"
   - 添加以下变量：
   ```
   OPENAI_API_KEY=sk-your-api-key-here
   ```
   - 点击 "Save"
2. 在 GitHub Pages 前端项目中：
   - 进入仓库的 Settings > Secrets and variables > Actions
   - 在 "Variables" 部分添加：
   ```
   NEXT_PUBLIC_API_URL=https://your-vercel-app.vercel.app
   ```

### 第五步：更新部署配置
确保仓库中的 `vercel.json` 文件已正确配置为仅部署 API 路由：

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm ci",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "functions": {
    "src/app/api/**/route.ts": {
      "runtime": "nodejs18.x"
    }
  },
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1",
      "headers": {
        "cache-control": "s-maxage=60, stale-while-revalidate=300"
      }
    }
  ],
  "redirects": [],
  "rewrites": [],
  "headers": []
}
```

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
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 3. 启动开发服务器
```bash
npm run dev
```

访问 `http://localhost:3000` 查看效果。

## ⚠️ 注意事项

### 静态导出配置
- Next.js 已配置为静态导出（`output: 'export'`）
- 动态路由需要 `generateStaticParams()` 函数
- 图片组件需要设置 `unoptimized: true`

### API 跨域处理
- Vercel API 已添加 CORS 头
- 前端使用绝对 URL 调用 API
- 环境变量 `NEXT_PUBLIC_API_URL` 指向 Vercel API

### API 成本控制
- GPT-3.5-turbo 相对便宜（$0.002/1K tokens）
- GPT-4 更贵但效果更好（$0.03/1K tokens）
- 建议设置 API 使用限制

### 安全考虑
- ✅ API 密钥已通过环境变量保护
- ✅ 后端验证输入内容
- ✅ 错误处理完善
- ✅ CORS 配置允许跨域请求

### 性能优化
- API 响应缓存（可选）
- 对话历史限制（已实现）
- 错误重试机制（已实现）

## 🔄 故障排除

### 常见问题

1. **GitHub Pages 部署失败**
   - 检查 GitHub Actions 日志
   - 确认 `output: 'export'` 配置正确
   - 确认动态路由的 `generateStaticParams()` 实现

2. **Vercel API 部署失败**
   - 检查 vercel.json 配置
   - 确认 API 路由文件路径正确
   - 确认环境变量已正确设置

3. **API 密钥错误**
   - 检查 Vercel 环境变量是否正确设置
   - 确认 API 密钥格式正确

4. **CORS 错误**
   - 检查 API 路由是否正确返回 CORS 头
   - 确认前端使用的 API URL 正确

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
- Vercel Analytics 查看 API 访问统计
- GitHub Pages Analytics 查看前端访问统计

### 定期维护
- 更新依赖包
- 检查 API 成本
- 优化对话体验
- 监控 API 使用量和性能

---

🎉 **恭喜！你的 AI 问答助手已就绪！**

## 架构图

```
+----------------------+     +-----------------------+
|                      |     |                       |
|   GitHub Pages       |     |     Vercel            |
|   (前端静态网站)      | --> |    (API 路由)         |
|                      |     |                       |
+----------------------+     +-----------------------+
        |                             |
        |                             |
        v                             v
+----------------+          +---------------------+
|                |          |                     |
|  React/Next.js |          |  OpenAI API         |
|  聊天界面       |          |  请求处理           |
|                |          |                     |
+----------------+          +---------------------+
```

## 部署流程图

```
+----------------+      +-----------------+      +------------------+
|                |      |                 |      |                  |
|   代码推送      | ---> |   GitHub Actions| ---> |   GitHub Pages   |
|   到 GitHub    |      |   构建并部署    |      |   前端静态网站   |
|                |      |   前端          |      |                  |
+----------------+      +-----------------+      +------------------+
       |                                               |
       |                                               |
       v                                               v
+----------------+                              +-----------------+
|                |                              |                 |
|   Vercel       |                              |   用户访问      |
|   检测变更     |                              |   前端网站      |
|   并部署 API   |                              |                 |
|                |                              +-----------------+
+----------------+                                     |
       |                                                |
       |                                                |
       v                                                v
+----------------+                              +-----------------+
|                |                              |                 |
|   OpenAI API   | <------------------------- |   前端发起请求  |
|   返回响应      |                              |   到 API        |
|                |                              |                 |
+----------------+                              +-----------------+
```