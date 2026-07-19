// src/app/api/blog/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content/blog');
const hasBlobToken = process.env.BLOB_READ_WRITE_TOKEN;

export async function POST(request: NextRequest) {
  try {
    const { slug, field, value } = await request.json();

    // ─── If on Vercel → use Blob ───
    if (hasBlobToken) {
      return handleBlobSave(slug, field, value);
    }

    // ─── If on localhost → save to filesystem ───
    return handleLocalSave(slug, field, value);
  } catch (error) {
    console.error('❌ Error:', error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}

async function handleBlobSave(slug: string, field: string, value: string) {
  const { put, head } = await import('@vercel/blob');
  const blobKey = `blog/${slug}.json`;

  let existing: any = {};
  try {
    const headResult = await head(blobKey);
    if (headResult) {
      const url = new URL(headResult.url);
      url.searchParams.set('_t', Date.now().toString());
      const response = await fetch(url.toString(), { cache: 'no-store' });
      const content = await response.text();
      existing = JSON.parse(content);
    }
  } catch {
    // File doesn't exist
  }

  // Handle nested fields
  const fieldParts = field.split(/\[(\d+)\]/).filter(Boolean);
  if (fieldParts.length === 1) {
    existing[field] = value;
  } else {
    let current = existing;
    for (let i = 0; i < fieldParts.length - 1; i++) {
      const part = fieldParts[i];
      if (i % 2 === 1) {
        const arrayName = fieldParts[i - 1];
        const index = parseInt(part);
        if (!current[arrayName]) current[arrayName] = [];
        if (!current[arrayName][index]) current[arrayName][index] = {};
        current = current[arrayName][index];
      } else {
        if (!current[part]) current[part] = {};
        current = current[part];
      }
    }
    const lastKey = fieldParts[fieldParts.length - 1];
    current[lastKey] = value;
  }

  await put(blobKey, JSON.stringify(existing, null, 2), {
    access: 'public',
    contentType: 'application/json',
    allowOverwrite: true,
  });

  return NextResponse.json({ success: true });
}

async function handleLocalSave(slug: string, field: string, value: string) {
  const filePath = path.join(contentDir, `${slug}.json`);

  let existing: any = {};
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    existing = JSON.parse(content);
  } catch {
    // File doesn't exist
  }

  // Handle nested fields
  const fieldParts = field.split(/\[(\d+)\]/).filter(Boolean);
  if (fieldParts.length === 1) {
    existing[field] = value;
  } else {
    let current = existing;
    for (let i = 0; i < fieldParts.length - 1; i++) {
      const part = fieldParts[i];
      if (i % 2 === 1) {
        const arrayName = fieldParts[i - 1];
        const index = parseInt(part);
        if (!current[arrayName]) current[arrayName] = [];
        if (!current[arrayName][index]) current[arrayName][index] = {};
        current = current[arrayName][index];
      } else {
        if (!current[part]) current[part] = {};
        current = current[part];
      }
    }
    const lastKey = fieldParts[fieldParts.length - 1];
    current[lastKey] = value;
  }

  await fs.writeFile(filePath, JSON.stringify(existing, null, 2));
  return NextResponse.json({ success: true });
}