"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="card reveal active" style={{ transitionDelay: '0.1s', textAlign: 'center', padding: '3rem' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" style={{ width: '32px', height: '32px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 style={{ marginBottom: '0.5rem' }}>Message Sent!</h3>
        <p className="text-muted">Thank you for reaching out. We will get back to you within 24 hours.</p>
        <button onClick={() => setStatus('idle')} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Send Another</button>
      </div>
    );
  }

  return (
    <div className="card reveal active" style={{ transitionDelay: '0.1s' }}>
      <form name="contact" onSubmit={handleFormSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        
        {status === 'error' && (
          <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', borderRadius: '0.5rem', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
            There was an error sending your message. Please try again.
          </div>
        )}

        <div className="form-group">
          <label className="form-label" htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" className="form-control" required placeholder="John Doe" disabled={status === 'submitting'} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" className="form-control" required placeholder="john@example.com" disabled={status === 'submitting'} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="service">Interested Service</label>
          <select id="service" name="service" className="form-control" disabled={status === 'submitting'} style={{ appearance: 'none', backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'%23ffffff\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>")', backgroundRepeat: 'no-repeat', backgroundPositionX: '98%', backgroundPositionY: '50%' }}>
            <option value="seo">SEO</option>
            <option value="ppc">Performance Marketing</option>
            <option value="social">Social Media</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="message">Project Details</label>
          <textarea id="message" name="message" className="form-control" required placeholder="Tell us about your goals..." disabled={status === 'submitting'}></textarea>
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
