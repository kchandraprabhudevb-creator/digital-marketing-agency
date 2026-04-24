import { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive digital marketing services including SEO, PPC, Content Marketing, and AI Automation.',
};

export default function Services() {
  return (
    <>
      <SchemaMarkup type="Organization" />
      <section className="hero" style={{ minHeight: '50vh', padding: '10rem 0 2rem' }}>
        <div className="container text-center reveal active">
          <span className="section-subtitle">What We Do</span>
          <h1>Comprehensive <span className="text-gradient">Digital</span> Services</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto' }}>Everything you need to dominate your market, built into a seamless, integrated growth engine under one roof.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="grid grid-3">
            {/* SEO */}
            <div className="card reveal active">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>
              </div>
              <h3>Search Engine Optimization</h3>
              <p>Dominate search results and capture high-intent traffic with technical perfection and authoritative content.</p>
              <Link href="/services/seo" className="card-link">Explore SEO &rarr;</Link>
            </div>

            {/* PPC */}
            <div className="card reveal active" style={{ transitionDelay: '0.1s' }}>
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" /></svg>
              </div>
              <h3>Performance Marketing</h3>
              <p>Data-driven paid search and social campaigns that acquire customers profitably at scale.</p>
              <Link href="/services/ppc" className="card-link">Explore PPC &rarr;</Link>
            </div>

            {/* Social Media */}
            <div className="card reveal active" style={{ transitionDelay: '0.2s' }}>
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
              </div>
              <h3>Social Media Management</h3>
              <p>Build an engaged community and brand loyalty through strategic, highly creative social media presence.</p>
              <Link href="/services/social" className="card-link">Explore Social &rarr;</Link>
            </div>

            {/* Content Marketing */}
            <div className="card reveal active" style={{ transitionDelay: '0.3s' }}>
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
              </div>
              <h3>Content Strategy</h3>
              <p>High-quality, impactful content that educates your audience, builds trust, and drives conversions.</p>
              <Link href="/services/content" className="card-link">Explore Content &rarr;</Link>
            </div>

            {/* CRO */}
            <div className="card reveal active" style={{ transitionDelay: '0.4s' }}>
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>
              </div>
              <h3>Conversion Rate Optimization</h3>
              <p>Turn more visitors into buyers using A/B testing, user psychology, and advanced UX/UI improvements.</p>
              <Link href="/services/cro" className="card-link">Explore CRO &rarr;</Link>
            </div>

            {/* AI Automation */}
            <div className="card reveal active" style={{ transitionDelay: '0.5s' }}>
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.45" /></svg>
              </div>
              <h3>AI & Automation</h3>
              <p>Streamline your marketing funnels, personalize user experiences, and save hours with intelligent automation.</p>
              <Link href="/services/ai-automation" className="card-link">Explore AI &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
