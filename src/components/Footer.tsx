import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href="/" className="logo" style={{ display: 'block', marginBottom: '1rem' }}>
              NEXUS<span className="text-gradient">.</span>
            </Link>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>
              The digital marketing agency that redefines what's possible for ambitious brands.
            </p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link href="/services/seo">SEO</Link></li>
              <li><Link href="/services/ppc">PPC Advertising</Link></li>
              <li><Link href="/services/content">Content Marketing</Link></li>
              <li><Link href="/services/ai-automation">AI Automation</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/blog">Insights</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/admin">Admin Login</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul className="footer-links">
              <li><a href="#">Twitter</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nexus Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
