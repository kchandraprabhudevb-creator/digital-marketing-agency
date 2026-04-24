import { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';
import { servicesData } from '@/lib/services';

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
            {servicesData.map((service, index) => (
              <div key={service.slug} className="card reveal active" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.45" /></svg>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href={`/services/${service.slug}`} className="card-link">Explore {service.title.split(' ')[0]} &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
