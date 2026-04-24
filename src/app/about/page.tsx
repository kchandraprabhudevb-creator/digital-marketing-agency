import { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about exceln8n, our mission, our team, and how we leverage data science to drive marketing success.',
};

export default function About() {
  return (
    <>
      <SchemaMarkup type="Organization" />
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '60vh', padding: '10rem 0 4rem' }}>
        <div className="container text-center reveal active">
          <h1>We are the Architects of <span className="text-gradient">Digital Growth</span></h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
            Founded in 2026, exceln8n was built on a simple premise: marketing shouldn't be guesswork. It should be an exact science powered by data, driven by psychology, and executed with creative brilliance.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div className="reveal active">
              <h2 className="section-title" style={{ fontSize: '2rem' }}>Our Story</h2>
              <p className="text-muted" style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                We noticed a massive gap in the industry. Traditional agencies were slow, bloated, and entirely disconnected from the rapid advancements in AI, machine learning, and advanced data analytics. They were selling vanity metrics—likes, impressions, and fluff—while businesses needed actual revenue.
              </p>
              <p className="text-muted" style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                exceln8n was formed to bridge that gap. We combine elite creative talent with hardcore data science to deliver campaigns that don't just look good—they dominate. Our team is composed of former FAANG engineers, behavioral psychologists, and award-winning creatives who understand how to capture attention and convert it into capital.
              </p>
              <p className="text-muted" style={{ lineHeight: '1.8' }}>
                When you partner with us, you're not getting an outsourced vendor; you're gaining an entire growth department dedicated to scaling your brand to the next echelon.
              </p>
            </div>
            <div className="card reveal active" style={{ transitionDelay: '0.2s' }}>
              <h3 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '0' }}>250%</h3>
              <p className="text-muted" style={{ marginBottom: '1.5rem' }}>Average ROI Increase across our portfolio</p>
              
              <h3 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '0', marginTop: '1.5rem' }}>$50M+</h3>
              <p className="text-muted" style={{ marginBottom: '1.5rem' }}>Direct Revenue Generated for Clients in 2025</p>
              
              <h3 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '0', marginTop: '1.5rem' }}>98%</h3>
              <p className="text-muted">Client Retention Rate after 12 months</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Values */}
      <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div className="container text-center reveal active">
          <h2 className="section-title">Our Core Values</h2>
          <div className="grid grid-3" style={{ marginTop: '3rem', textAlign: 'left' }}>
            <div className="card">
              <h3 style={{ color: 'var(--color-primary)' }}>Radical Transparency</h3>
              <p className="text-muted">No black-box strategies. You see what we see, with real-time dashboards and brutally honest reporting.</p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--color-secondary)' }}>Relentless Innovation</h3>
              <p className="text-muted">We invest 20% of our resources into testing new platforms, AI tools, and algorithms before they become mainstream.</p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--color-accent)' }}>Obsessive Excellence</h3>
              <p className="text-muted">Good enough is the enemy of great. We optimize every pixel, every word, and every bid strategy until it performs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
