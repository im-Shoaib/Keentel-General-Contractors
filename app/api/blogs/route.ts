// src/app/api/blogs/route.ts
import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { blobs } = await list({ prefix: 'blog/' });
    const slugs = blobs
      .filter((blob: any) => blob.pathname.endsWith('.json'))
      .map((blob: any) => blob.pathname.replace('blog/', '').replace('.json', ''));
    return NextResponse.json({ slugs });
  } catch (error) {
    console.error('❌ /api/blogs ERROR:', error);
    // Fallback to static list
    return NextResponse.json({
      slugs: [
        'florida-building-permits-guide-2026',
        'general-contractor-cost-florida-2026',
        'tampa-general-contractor-guide-2026'
      ]
    });
  }
}