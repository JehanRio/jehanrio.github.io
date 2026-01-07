import { NextRequest, NextResponse } from 'next/server'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ChatRequest {
  message: string
  history: ChatMessage[]
}

export async function POST(request: NextRequest) {
  try {
    const { message, history }: ChatRequest = await request.json()
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: '消息内容无效' },
        { 
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }
        }
      )
    }

    // 检查环境变量
    const deepseekApiKey = process.env.DEEPSEEK_API_KEY
    if (!deepseekApiKey) {
      return NextResponse.json(
        { error: '服务器配置错误：API密钥未设置' },
        { 
          status: 500,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }
        }
      )
    }

    // 构建对话历史
    const messages = [
      {
        role: 'system',
        content: '你是一个专业的AI助手，专门回答关于开发者技能、项目经验、技术问题等。你友好、专业，能够提供有用的建议和解答。请用中文回复。'
      },
      ...history.slice(-10), // 只保留最近10条消息
      {
        role: 'user',
        content: message
      }
    ]

    // 调用 DeepSeek API 流式输出
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${deepseekApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7,
        top_p: 1,
        stream: true,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      console.error('DeepSeek API 错误:', errorData)
      
      if (response.status === 401) {
        return NextResponse.json(
          { error: 'API密钥验证失败' },
          {
            status: 401,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
          }
        )
      }
      
      if (response.status === 429) {
        return NextResponse.json(
          { error: '请求过于频繁，请稍后再试' },
          {
            status: 429,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
          }
        )
      }

      return NextResponse.json(
        { error: 'AI服务暂时不可用，请稍后再试' },
        {
          status: 503,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }
        }
      )
    }

    // 确保响应是可读取的流
    if (!response.body) {
      return NextResponse.json(
        { error: '服务器响应格式错误' },
        {
          status: 500,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }
        }
      )
    }

    // 创建读取器
    const reader = response.body.getReader()
    const decoder = new TextDecoder('utf-8')

    // 创建流式响应
    return new Response(
      new ReadableStream({
        async start(controller) {
          try {
            let buffer = ''
            
            while (true) {
              const { done, value } = await reader.read()
              if (done) {
                break
              }

              // 解码新数据并添加到缓冲区
              buffer += decoder.decode(value, { stream: true })
              
              // 处理缓冲区中的所有完整事件
              let boundary = buffer.indexOf('\n\n')
              while (boundary !== -1) {
                const chunk = buffer.substring(0, boundary)
                buffer = buffer.substring(boundary + 2)
                
                // 跳过空行
                if (chunk.trim() === '') {
                  continue
                }

                // 处理每个事件块
                if (chunk.startsWith('data: ')) {
                  const dataChunk = chunk.substring(6)
                  
                  // 检查是否为结束信号
                  if (dataChunk === '[DONE]') {
                    break
                  }

                  try {
                    // 解析JSON数据
                    const parsed = JSON.parse(dataChunk)
                    
                    // 提取内容
                    if (parsed.choices && parsed.choices[0] && parsed.choices[0].delta) {
                      const content = parsed.choices[0].delta.content || ''
                      
                      // 发送内容块
                      if (content) {
                        controller.enqueue(new TextEncoder().encode(content))
                      }
                    }
                  } catch (e) {
                    console.error('JSON解析错误:', e)
                  }
                }

                // 寻找下一个事件边界
                boundary = buffer.indexOf('\n\n')
              }
            }
          } catch (error) {
            console.error('流式响应处理错误:', error)
            controller.error(error)
          } finally {
            controller.close()
            reader.releaseLock()
          }
        },

        cancel() {
          reader.releaseLock()
        }
      }),
      {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Transfer-Encoding': 'chunked',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      }
    )

  } catch (error) {
    console.error('聊天API错误:', error)
    
    // 处理 JSON 解析错误
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: '请求格式无效' },
        {
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }
        }
      )
    }

    return NextResponse.json(
      { error: '服务器内部错误' },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      }
    )
  }
}

// 处理 OPTIONS 请求（CORS 预检）
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}