import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: {
    template: '%s | exceln8n',
    default: 'exceln8n | Premium Marketing Agency',
  },
  description: 'A modern digital marketing agency driving explosive growth for futuristic brands. Specializing in SEO, PPC, and AI Automation.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SchemaMarkup type="Organization" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
