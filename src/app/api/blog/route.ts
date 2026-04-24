import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { password, title, category, author, excerpt, content } = await request.json();

    // In a real app, use environment variables and secure comparison
    if (password !== 'secret123') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const date = new Date().toISOString().split('T')[0];

    const markdownContent = `---
title: "${title}"
date: "${date}"
author: "${author || 'Admin'}"
category: "${category || 'General'}"
excerpt: "${excerpt || ''}"
---

${content}
`;

    const postsDirectory = path.join(process.cwd(), '_posts');
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true });
    }

    const filePath = path.join(postsDirectory, `${slug}.md`);
    fs.writeFileSync(filePath, markdownContent);

    return NextResponse.json({ success: true, slug });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
}
