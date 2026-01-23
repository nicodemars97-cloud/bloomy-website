import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bloomy - One thought, one action, every day',
  description:
    'A minimalist wellness app that delivers one meaningful thought and one simple action each day. No overwhelm, no noise - just what matters.',
  keywords: ['wellness', 'mindfulness', 'daily ritual', 'mental health', 'self-care', 'meditation'],
  authors: [{ name: 'Bloomy' }],
  openGraph: {
    title: 'Bloomy - One thought, one action, every day',
    description:
      'A minimalist wellness app that delivers one meaningful thought and one simple action each day.',
    url: 'https://bloomy.app',
    siteName: 'Bloomy',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bloomy - One thought, one action, every day',
    description:
      'A minimalist wellness app that delivers one meaningful thought and one simple action each day.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        <main style={{ flex: 1, paddingTop: 64 }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
