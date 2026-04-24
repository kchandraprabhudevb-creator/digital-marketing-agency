"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'blog' | 'media'>('blog');
  const router = useRouter();

  // Blog State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('SEO');
  const [author, setAuthor] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [blogStatus, setBlogStatus] = useState('');

  // Media State
  const [file, setFile] = useState<File | null>(null);
  const [mediaStatus, setMediaStatus] = useState('');
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [markdownSnippet, setMarkdownSnippet] = useState('');

  const BLOG_CATEGORIES = ['SEO', 'PPC', 'Social Media', 'Content Marketing', 'AI Automation', 'General', 'Company News'];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '@AsdfghJkl67*') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBlogStatus('Publishing...');

    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, title, category, author, excerpt, content }),
    });

    if (res.ok) {
      const data = await res.json();
      setBlogStatus('Published successfully! Redirecting...');
      setTimeout(() => {
        router.push(`/blog/${data.slug}`);
      }, 2000);
    } else {
      setBlogStatus('Failed to publish');
    }
  };

  const handleMediaUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setMediaStatus('Uploading...');
    const formData = new FormData();
    formData.append('file', file);
    formData.append('password', password);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      const data = await res.json();
      setUploadedUrl(data.url);
      setMarkdownSnippet(data.markdownSnippet);
      setMediaStatus('Upload successful!');
      setFile(null);
    } else {
      setMediaStatus('Upload failed.');
    }
  };

  if (!isAuthenticated) {
    return (
      <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ maxWidth: '400px' }}>
          <div className="card">
            <h2 className="text-center" style={{ marginBottom: '2rem' }}>Admin Access</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '2rem' }}>Admin Dashboard</h1>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <button className={`btn ${activeTab === 'blog' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setActiveTab('blog')}>Write Blog</button>
          <button className={`btn ${activeTab === 'media' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setActiveTab('media')}>Media Upload</button>
        </div>

        {activeTab === 'blog' && (
          <div className="card">
            <h2>New Blog Post</h2>
            <form onSubmit={handleBlogSubmit} style={{ marginTop: '1.5rem' }}>
              <div className="form-group">
                <label className="form-label">Meta Title / Headline</label>
                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
              </div>
              <div className="grid grid-2" style={{ gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label className="form-label">Category</label>
                  <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} required style={{ appearance: 'auto' }}>
                    {BLOG_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
                <div>
                  <label className="form-label">Author</label>
                  <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Meta Description / Excerpt</label>
                <textarea className="form-control" style={{ minHeight: '80px' }} value={excerpt} onChange={(e) => setExcerpt(e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label">Markdown Content</label>
                <textarea
                  className="form-control"
                  style={{ minHeight: '300px', fontFamily: 'monospace' }}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  placeholder="Use Markdown here (e.g., ### Heading, **bold**, ![image](/uploads/img.jpg))"
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Publish Post</button>
              {blogStatus && <p style={{ marginTop: '1rem', textAlign: 'center', fontWeight: 'bold' }}>{blogStatus}</p>}
            </form>
          </div>
        )}

        {activeTab === 'media' && (
          <div className="card">
            <h2>Upload Media</h2>
            <p className="text-muted" style={{ marginBottom: '1.5rem' }}>Upload images to get a markdown snippet you can paste into your blogs.</p>
            <form onSubmit={handleMediaUpload}>
              <div className="form-group">
                <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} className="form-control" required style={{ padding: '0.5rem' }} />
              </div>
              <button type="submit" className="btn btn-primary">Upload File</button>
            </form>
            {mediaStatus && <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{mediaStatus}</p>}
            {markdownSnippet && (
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: 'var(--border-radius)' }}>
                <p style={{ marginBottom: '0.5rem' }}><strong>Markdown Snippet:</strong></p>
                <code style={{ userSelect: 'all', padding: '0.5rem', display: 'block', background: 'rgba(0,0,0,0.2)' }}>{markdownSnippet}</code>
                <p style={{ marginTop: '1rem', marginBottom: '0.5rem' }}><strong>Direct URL:</strong></p>
                <code style={{ userSelect: 'all', padding: '0.5rem', display: 'block', background: 'rgba(0,0,0,0.2)' }}>{uploadedUrl}</code>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
