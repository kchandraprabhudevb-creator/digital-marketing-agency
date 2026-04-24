"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'secret123') {
      setIsAuthenticated(true);
      setStatus('');
    } else {
      setStatus('Invalid password');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Publishing...');

    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, title, category, author, excerpt, content }),
    });

    if (res.ok) {
      const data = await res.json();
      setStatus('Published successfully! Redirecting...');
      setTimeout(() => {
        router.push(`/blog/${data.slug}`);
      }, 2000);
    } else {
      setStatus('Failed to publish');
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
              {status && <p style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>{status}</p>}
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '2rem' }}>Write New Blog Post</h1>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="grid grid-2" style={{ gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label className="form-label">Category</label>
                <input type="text" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} required />
              </div>
              <div>
                <label className="form-label">Author</label>
                <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Excerpt (Short description)</label>
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
                placeholder="Use Markdown here (e.g., ### Heading, **bold**, etc.)"
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Publish Post</button>
            {status && <p style={{ marginTop: '1rem', textAlign: 'center', fontWeight: 'bold' }}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
