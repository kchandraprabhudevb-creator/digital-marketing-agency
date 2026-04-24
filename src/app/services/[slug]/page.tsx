import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/services';
import SchemaMarkup from '@/components/SchemaMarkup';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);
  if (!service) return { title: 'Not Found' };
  
  return {
    title: `${service.title} Services`,
    description: service.description,
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);
  
  if (!service) {
    notFound();
  }

  return (
    <>
      <SchemaMarkup 
        type="Service" 
        data={{
          name: service.title,
          description: service.description,
          serviceType: service.title
        }} 
      />
      
      <section className="hero" style={{ minHeight: '50vh', padding: '10rem 0 2rem' }}>
        <div className="container text-center reveal active">
          <span className="section-subtitle">{service.subtitle}</span>
          <h1>{service.title.split(' ').map((word, i) => i === service.title.split(' ').length - 1 ? <span key={i} className="text-gradient">{word}</span> : word + ' ')}</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto' }}>{service.description}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'flex-start' }}>
            <div className="reveal active">
              <h2 style={{ fontSize: '2rem' }}>Why Our Approach Works</h2>
              <p className="text-muted" style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>{service.whyItWorks}</p>
              
              <ul style={{ marginTop: '2rem' }}>
                {service.bullets.map((bullet, idx) => (
                  <li key={idx} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <span style={{ color: 'var(--color-accent)', fontSize: '1.5rem', lineHeight: '1' }}>✓</span>
                    <div>
                      <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{bullet.title}</h4>
                      <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.6' }}>{bullet.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="card reveal active" style={{ background: 'linear-gradient(180deg, var(--color-surface), rgba(11, 15, 25, 0))', border: 'none', padding: '0' }}>
              <div style={{ width: '100%', height: '400px', background: 'rgba(59, 130, 246, 0.05)', borderRadius: 'var(--border-radius-lg)', border: '1px solid rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--color-primary)" style={{ width: '64px', height: '64px', marginBottom: '1rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
                <h3 className="text-gradient">Measurable Impact</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ background: 'rgba(59, 130, 246, 0.05)' }}>
        <div className="container text-center reveal active">
          <h2 className="section-title">Ready to Dominate?</h2>
          <a href="/contact" className="btn btn-primary">Start Your Project</a>
        </div>
      </section>
    </>
  );
}
