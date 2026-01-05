# 项目架构说明

## 目录结构

```
project-root/
├── src/                    # Next.js 前端应用 (GitHub Pages)
│   ├── app/               # 页面路由
│   │   ├── page.tsx      # 首页
│   │   ├── layout.tsx
│   │   ├── blog/
│   │   ├── projects/
│   │   └── ...
│   ├── components/        # React 组件
│   └── ...
├── api/                   # 后端 API (Vercel Serverless)
│   ├── src/
│   │   └── app/
│   │       └── api/
│   │           └── chat/
│   │               └── route.ts  # Vercel API 路由
│   ├── package.json
│   ├── tsconfig.json
│   └── vercel.json       # Vercel 专用配置
├── public/                # 静态资源
├── next.config.js         # Next.js 配置
└── package.json
```

## 部署方式

### GitHub Pages (前端)
- 部署 `src/` 目录中的 Next.js 应用
- 使用 `output: 'export'` 静态导出
- 环境变量：`NEXT_PUBLIC_API_URL` (指向 Vercel API)

### Vercel (后端 API)
- 部署 `api/` 目录中的 Serverless Functions
- 环境变量：`OPENAI_API_KEY`

## 快速开始

### 1. 安装依赖
```bash
# 安装前端依赖
npm install

# 安装 API 依赖
cd api && npm install
```

### 2. 本地开发
```bash
# 启动前端
npm run dev

# API 在 Vercel 本地环境测试
cd api && npx vercel dev
```

### 3. 部署
```bash
# 推送代码到 GitHub
git add .
git commit -m "实现前后端分离架构"
git push origin main

# Vercel 会自动部署 api/ 目录中的 Serverless Functions
# GitHub Actions 会部署前端到 Pages
```

## API 端点

部署后，API 可通过以下地址访问：

- POST `https://your-project.vercel.app/api/chat`
- GET `https://your-project.vercel.app/api/health`

## 环境变量配置

### GitHub (前端)
- Settings > Secrets and variables > Actions > Variables
  - `NEXT_PUBLIC_API_URL`: `https://your-vercel-api.vercel.app`

### Vercel (后端 API)
- Settings > Environment Variables
  - `OPENAI_API_KEY`: `sk-your-api-key-here`
