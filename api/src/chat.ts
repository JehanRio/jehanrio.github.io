interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ChatRequest {
  message: string
  history: ChatMessage[]
}

export class ChatController {
  private openaiApiKey: string;

  constructor() {
    this.openaiApiKey = process.env.OPENAI_API_KEY || '';
  }

  async handleChat(request: Request): Promise<NextResponse> {
    try {
      const { message, history }: ChatRequest = await request.json();

      if (!message || typeof message !== 'string') {
        return NextResponse.json(
          { error: '消息内容无效' },
          { status: 400 }
        );
      }

      if (!this.openaiApiKey) {
        return NextResponse.json(
          { error: '服务器配置错误：API密钥未设置' },
          { status: 500 }
        );
      }

      const messages = [
        {
          role: 'system',
          content: '你是一个专业的AI助手，专门回答关于开发者技能、项目经验、技术问题等。你友好、专业，能够提供有用的建议和解答。请用中文回复。'
        },
        ...(history || []).slice(-10),
        { role: 'user', content: message }
      ];

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.openaiApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages,
          max_tokens: 1000,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error('OpenAI API 错误:', errorData);

        if (response.status === 401) {
          return NextResponse.json(
            { error: 'API密钥验证失败' },
            { status: 401 }
          );
        }

        if (response.status === 429) {
          return NextResponse.json(
            { error: '请求过于频繁，请稍后再试' },
            { status: 429 }
          );
        }

        return NextResponse.json(
          { error: 'AI服务暂时不可用，请稍后再试' },
          { status: 503 }
        );
      }

      const data = await response.json();

      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        return NextResponse.json(
          { error: 'AI响应格式错误' },
          { status: 500 }
        );
      }

      const aiResponse = data.choices[0].message.content;

      return NextResponse.json({
        response: aiResponse,
        usage: data.usage || null
      });

    } catch (error) {
      console.error('聊天API错误:', error);

      if (error instanceof SyntaxError) {
        return NextResponse.json(
          { error: '请求格式无效' },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { error: '服务器内部错误' },
        { status: 500 }
      );
    }
  }
}
