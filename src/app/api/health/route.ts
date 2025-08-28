import { NextResponse } from 'next/server';

export async function GET() {
  const isConfigured = !!process.env.GITHUB_TOKEN;
  
  return NextResponse.json({
    configured: isConfigured,
    message: isConfigured 
      ? 'GitHub integration is properly configured' 
      : 'GitHub token not configured - team submissions will not work'
  });
}
