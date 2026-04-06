import type { Metadata } from 'next'
import { Source_Serif_4 } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import Footer from '@/components/layout/Footer'

const sourceSerif = Source_Serif_4({ 
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://travelpowerplugs.com'),
  title: 'Travel Power Plugs - Electric Plug Types Guide for 227 Countries & Territories',
  description: 'Complete guide to electric plug types, socket types, voltage and frequency for 227 countries and territories worldwide. Find out which adapter you need.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://travelpowerplugs.com',
    siteName: 'Travel Power Plugs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Travel Power Plugs Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@travelpowerplugs'
  },
  alternates: {
    canonical: 'https://travelpowerplugs.com'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4F46E5" />
      </head>
      <body className={`${sourceSerif.variable}`}>
        <GoogleAnalytics />
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}