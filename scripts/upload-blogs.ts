// scripts/upload-blogs.ts
import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';

const BLOB_PREFIX = 'blog/';
const contentDir = path.join(process.cwd(), 'content/blog');

async function uploadBlogs() {
  // Skip if running locally
  if (process.env.VERCEL !== '1') {
    console.log('⏭️ Skipping upload (not on Vercel)');
    return;
  }

  // Check if token exists
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('❌ BLOB_READ_WRITE_TOKEN is missing');
    process.exit(1);
  }

  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.json'));
  
  console.log(`📁 Found ${files.length} blog files to upload`);

  for (const file of files) {
    const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    await put(`${BLOB_PREFIX}${file}`, content, {
      access: 'public',
      contentType: 'application/json',
    });
    console.log(`✅ Uploaded ${file}`);
  }
  
  console.log('🎉 All blogs uploaded to Vercel Blob!');
}

uploadBlogs().catch(console.error);