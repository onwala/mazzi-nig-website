import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'API Q1 and ISO Certification Consultants Africa | Mazzi Nigeria Limited',
  description:
    'Africa-wide management systems consultancy. End-to-end API Q1, ISO 9001, ISO 14001, and ISO 45001 certification support for the oil and gas industry.',
  keywords: [
    'API Q1 certification Africa',
    'ISO 9001 consultant oil gas Africa',
    'QMS consultancy oil gas Africa',
    'ISO 14001 Africa',
    'ISO 45001 consultant Africa',
    'management systems certification Africa',
    'API Q1 certification Nigeria',
    'ISO 9001 consultant Port Harcourt',
  ],
  openGraph: {
    title: 'Mazzi Nigeria Limited - API Q1 and ISO Certification Consultants',
    description:
      'End-to-end management systems certification for the oil and gas industry across Africa.',
    url: 'https://www.mazzi-nig.com',
    siteName: 'Mazzi Nigeria Limited',
    locale: 'en',
    type: 'website',
  },
  metadataBase: new URL('https://www.mazzi-nig.com'),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Mazzi Nigeria Limited',
  description: 'Management Systems Consultancy, Auditing and Training',
  url: 'https://www.mazzi-nig.com',
  telephone: '+2348037073829',
  email: 'info@mazzi-nig.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '21 Woji Road, Rumuogba, Obio',
    addressLocality: 'Port Harcourt',
    addressCountry: 'NG',
  },
  areaServed: 'Africa',
  priceRange: 'Contact for pricing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@700;800;900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
