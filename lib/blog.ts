// src/lib/blog.ts
import fs from 'fs/promises';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content/blog');

// ─── Check if we're on Vercel (has Blob token) ───
const hasBlobToken = process.env.BLOB_READ_WRITE_TOKEN;

export async function getBlogData(slug: string) {
  // ✅ If on Vercel → use Blob
  if (hasBlobToken) {
    try {
      const { head } = await import('@vercel/blob');
      const blobKey = `blog/${slug}.json`;
      const headResult = await head(blobKey);
      if (!headResult) return null;

      const url = new URL(headResult.url);
      url.searchParams.set('_t', Date.now().toString());

      const response = await fetch(url.toString(), {
        cache: 'no-store',
      });
      const content = await response.text();
      return JSON.parse(content);
    } catch (error) {
      console.error('❌ Blob read failed:', error);
      return null;
    }
  }

  // ✅ If on localhost → read from filesystem
  try {
    const filePath = path.join(contentDir, `${slug}.json`);
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch {
    return null;
  }
}

export async function getAllBlogSlugs() {
  // ✅ If on Vercel → use Blob
  if (hasBlobToken) {
    try {
      const { list } = await import('@vercel/blob');
      const { blobs } = await list({ prefix: 'blog/' });
      return blobs
        .filter((blob: any) => blob.pathname.endsWith('.json'))
        .map((blob: any) => blob.pathname.replace('blog/', '').replace('.json', ''));
    } catch {
      return fallbackSlugs();
    }
  }

  // ✅ If on localhost → read from filesystem
  try {
    const files = await fs.readdir(contentDir);
    return files
      .filter((file) => file.endsWith('.json'))
      .map((file) => file.replace('.json', ''));
  } catch {
    return fallbackSlugs();
  }
}

function fallbackSlugs() {
  return [
    'florida-building-permits-guide-2026',
    'general-contractor-cost-florida-2026',
    'tampa-general-contractor-guide-2026',
  ];
}