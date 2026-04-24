"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="logo">
          NEXUS<span className="text-gradient">.</span>
        </Link>
        <div className="nav-links">
          <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
          <Link href="/services" className={pathname.startsWith('/services') ? 'active' : ''}>Services</Link>
          <Link href="/blog" className={pathname.startsWith('/blog') ? 'active' : ''}>Blog</Link>
          <Link href="/contact" className={`btn btn-primary ${pathname === '/contact' ? 'active' : ''}`} style={{ padding: '0.5rem 1rem', marginTop: '-0.5rem' }}>
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
}
