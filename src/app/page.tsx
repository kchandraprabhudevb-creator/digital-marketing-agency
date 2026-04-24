import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content reveal active">
            <h1>We Scale Brands to <span className="text-gradient">Stratospheric</span> Heights.</h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
              Data-driven strategies meets cutting-edge creative. We are the digital marketing agency for the modern world. While traditional agencies guess, we use proprietary AI, real-time analytics, and psychological conversion triggers to systematically dominate your market. Stop paying for vanity metrics and start investing in measurable pipeline.
            </p>
            <div className="hero-actions">
              <Link href="/services" className="btn btn-primary">Explore Services</Link>
              <Link href="/contact" className="btn btn-outline">Get a Free Audit</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section (New Expanded Content) */}
      <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div className="reveal active">
              <h2 className="section-title">The exceln8n Methodology</h2>
              <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                We believe that marketing is no longer an art; it is a hard science. Every campaign we launch is backed by millions of data points and optimized continuously.
              </p>
              <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
                Our proprietary framework focuses on <strong>three pillars of growth:</strong> Traffic Acquisition, Conversion Optimization, and Lifetime Value Expansion. We don't just want to get you clicks; we want to restructure your entire digital ecosystem to turn those clicks into high-value, retained customers.
              </p>
              <ul style={{ marginBottom: '2rem' }}>
                <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--color-accent)' }}>✓</span> Full-Funnel Attribution
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--color-accent)' }}>✓</span> Multi-Touchpoint Journey Mapping
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--color-accent)' }}>✓</span> Automated Retargeting Ecosystems
                </li>
              </ul>
              <Link href="/about" className="card-link" style={{ fontSize: '1.1rem' }}>Read our full story &rarr;</Link>
            </div>
            <div className="reveal active card" style={{ padding: '3rem', border: '1px solid rgba(59, 130, 246, 0.2)', background: 'linear-gradient(135deg, rgba(20, 27, 45, 0.9), rgba(11, 15, 25, 0.9))' }}>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }} className="text-gradient">3x</h3>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Average ROAS for our e-commerce clients within the first 90 days.</p>
              
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }} className="text-gradient">65%</h3>
              <p style={{ fontSize: '1.2rem' }}>Reduction in Customer Acquisition Cost (CAC) utilizing our first-party data strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal active">
            <span className="section-subtitle">Our Expertise</span>
            <h2 className="section-title">Modern Marketing Solutions</h2>
            <p className="text-muted" style={{ marginTop: '1rem', maxWidth: '700px', margin: '1rem auto 0' }}>
              We provide end-to-end digital marketing services. Select a specialty below to learn how our dedicated teams can scale your specific channels.
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="card reveal active" style={{ transitionDelay: '0.1s' }}>
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>
              </div>
              <h3>SEO Dominance</h3>
              <p>Outrank competitors with advanced technical SEO, programmatic content architectures, and high-authority Digital PR link-building strategies.</p>
              <Link href="/services/seo" className="card-link">Learn more &rarr;</Link>
            </div>

            <div className="card reveal active" style={{ transitionDelay: '0.2s' }}>
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" /></svg>
              </div>
              <h3>Performance Marketing</h3>
              <p>Hyper-targeted PPC and paid social campaigns designed to maximize ROI, leveraging machine learning bidding algorithms and dynamic creative optimization.</p>
              <Link href="/services/ppc" className="card-link">Learn more &rarr;</Link>
            </div>

            <div className="card reveal active" style={{ transitionDelay: '0.3s' }}>
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.45" /></svg>
              </div>
              <h3>AI Automation</h3>
              <p>Leverage the latest AI tools to automate lead nurturing, build intelligent chatbots, personalize customer journeys, and drastically reduce operational overhead.</p>
              <Link href="/services/ai-automation" className="card-link">Learn more &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'rgba(59, 130, 246, 0.05)' }}>
        <div className="container text-center reveal active">
          <h2 className="section-title">Ready to Outperform Your Competitors?</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.125rem' }}>
            Stop leaving money on the table. Let our team of experts craft a comprehensive strategy that turns clicks into loyal customers and transforms your brand into an industry leader.
          </p>
          <Link href="/contact" className="btn btn-primary">Start Your Project</Link>
        </div>
      </section>
    </>
  );
}
