import { NextResponse } from 'next/server';
import { ChatController } from '../../chat';

export async function POST(request: Request) {
  const controller = new ChatController();
  return controller.handleChat(request);
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
}
