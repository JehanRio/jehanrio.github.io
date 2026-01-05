# Personal Blog API

后端 API 服务，独立部署到 Vercel。

## 快速开始

### 安装依赖
```bash
cd api
npm install
```

### 本地开发
```bash
cd api
npm run dev
```

API 服务将在 `http://localhost:3001` 启动。

## API 端点

### POST /api/chat
发送聊天消息。

**请求体**：
```json
{
  "message": "你好",
  "history": [
    { "role": "user", "content": "你好" },
    { "role": "assistant", "content": "有什么可以帮你的？" }
  ]
}
```

**响应**：
```json
{
  "response": "你好！有什么可以帮你的？",
  "usage": {
    "prompt_tokens": 20,
    "completion_tokens": 15,
    "total_tokens": 35
  }
}
```

### GET /api/health
健康检查。

**响应**：
```json
{
  "status": "ok",
  "timestamp": "2025-01-05T12:00:00.000Z"
}
```

## 环境变量

在 Vercel 项目设置中配置：

- `OPENAI_API_KEY`: OpenAI API 密钥
- `PORT`: 端口号 (可选，默认 3001)

## 部署

推送到 GitHub 后，Vercel 会自动部署 `api/` 目录。
