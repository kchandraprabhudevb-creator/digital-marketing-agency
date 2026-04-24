import { Metadata } from 'next';
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Marketing Insights & Blog',
  description: 'The latest strategies, data, and insights from our team of experts at exceln8n.',
};

export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      <SchemaMarkup type="Organization" />
      <section className="hero" style={{ minHeight: '40vh', padding: '10rem 0 2rem' }}>
        <div className="container text-center reveal active">
          <span className="section-subtitle">Insights</span>
          <h1>Marketing <span className="text-gradient">Intelligence</span></h1>
          <p>The latest strategies, data, and insights from our team of experts.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="grid grid-3">
            {allPostsData.map(({ slug, date, title, category, excerpt }) => (
              <Link href={`/blog/${slug}`} className="card reveal active" style={{ display: 'block' }} key={slug}>
                <span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>{category || 'Uncategorized'}</span>
                <h3 style={{ marginTop: '0.5rem' }}>{title}</h3>
                <p>{excerpt}</p>
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="card-link">Read Article &rarr;</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{new Date(date).toLocaleDateString()}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
