# 配置 Vercel 仅部署 API 路由

为了实现前端（GitHub Pages）和后端（Vercel API）的分离架构，我们需要配置 Vercel 仅部署 API 路由。

## 步骤

1. 在 Vercel 中创建新项目
2. 导入你的 GitHub 仓库
3. 在项目设置中，配置以下内容：

### 构建命令
```
npm run build
```

### 输出目录
```
.next
```

### 环境变量
```
OPENAI_API_KEY=你的_openai_api_key
```

## 重要说明

- 这个配置将确保 Vercel 只部署 API 路由部分
- 前端将部署到 GitHub Pages，使用 GitHub Actions 工作流
- 确保在 GitHub Pages 项目中设置 `NEXT_PUBLIC_API_URL` 环境变量，指向你的 Vercel 应用 URL

## 部署流程

1. 推送代码到 GitHub 仓库
2. GitHub Actions 自动构建前端并部署到 GitHub Pages
3. Vercel 自动检测变更并部署 API 路由
4. 配置环境变量后，应用即可正常运行