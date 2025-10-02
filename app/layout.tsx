import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CIDR Subnet Calculator & VLSM Planner - Professional Networking Tool',
  description: 'Advanced subnet calculator and VLSM planner for network administrators. Calculate CIDR subnets, split networks, and plan VLSM configurations. Free, client-side tool.',
  keywords: [
    'subnet calculator',
    'CIDR calculator', 
    'VLSM planner',
    'network calculator',
    'subnetting',
    'IP calculator',
    'network administrator',
    'subnet mask',
    'broadcast address',
    'networking tools',
    'free subnet calculator'
  ],
  authors: [{ name: 'blazejwrobel.eu', url: 'https://blazejwrobel.eu' }],
  creator: 'blazejwrobel.eu',
  publisher: 'blazejwrobel.eu',
  metadataBase: new URL('https://subnets.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CIDR Subnet Calculator & VLSM Planner',
    description: 'Professional subnet calculator and VLSM planner for network administrators. Calculate CIDR subnets, split networks, and plan VLSM configurations.',
    url: 'https://subnets.vercel.app',
    siteName: 'Subnet Calculator',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Subnet Calculator Interface',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CIDR Subnet Calculator & VLSM Planner',
    description: 'Professional subnet calculator and VLSM planner for network administrators.',
    images: ['/og-image.png'],
    creator: '@blazejwrobel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "CIDR Subnet Calculator & VLSM Planner",
    "description": "Professional subnet calculator and VLSM planner for network administrators. Calculate CIDR subnets, split networks, and plan VLSM configurations. Client-side tool with privacy protection.",
    "url": "https://subnets.vercel.app",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Person",
      "name": "blazejwrobel.eu",
      "url": "https://blazejwrobel.eu"
    },
    "publisher": {
      "@type": "Organization",
      "name": "blazejwrobel.eu",
      "url": "https://blazejwrobel.eu"
    },
    "featureList": [
      "CIDR Calculator",
      "Subnet Splitter", 
      "VLSM Planner",
      "Binary IP Display",
      "CSV Export",
      "Privacy-First Design"
    ],
    "keywords": "subnet calculator,CIDR,VLSM,network calculator,IP calculator,subnetting,networking tools"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

