import { notFound } from 'next/navigation';
import { getPostData, getAllPostSlugs } from '@/lib/blog';
import SchemaMarkup from '@/components/SchemaMarkup';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);
  if (!postData) return { title: 'Not Found' };
  
  return {
    title: postData.title,
    description: postData.excerpt,
  };
}

export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs;
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);
  
  if (!postData) {
    notFound();
  }

  return (
    <>
      <SchemaMarkup 
        type="Article" 
        data={{
          headline: postData.title,
          datePublished: postData.date,
          author: {
            "@type": "Person",
            "name": postData.author || "Nexus Digital Team"
          }
        }} 
      />
      <section className="hero" style={{ minHeight: 'auto', padding: '10rem 0 4rem' }}>
        <div className="container text-center reveal active" style={{ maxWidth: '800px' }}>
          <span style={{ color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase' }}>{postData.category}</span>
          <h1 style={{ marginTop: '1rem' }}>{postData.title}</h1>
          <p className="text-muted">By {postData.author} • {new Date(postData.date).toLocaleDateString()}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div 
            className="card reveal active blog-content" 
            style={{ background: 'var(--color-bg)', border: 'none', padding: '0', fontSize: '1.125rem', lineHeight: '1.8' }}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
          />
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{__html: `
        .blog-content h2, .blog-content h3 { margin-top: 2rem; margin-bottom: 1rem; color: var(--color-text); }
        .blog-content p { margin-bottom: 1.5rem; color: var(--color-text-muted); }
        .blog-content ul { margin-left: 1.5rem; margin-bottom: 2rem; list-style-type: disc; color: var(--color-text-muted); }
        .blog-content blockquote { border-left: 4px solid var(--color-primary); padding-left: 1.5rem; margin: 2rem 0; font-style: italic; color: var(--color-text-muted); font-size: 1.25rem; }
      `}} />
    </>
  );
}
