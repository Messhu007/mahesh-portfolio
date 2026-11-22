import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'Mahesh Nagar | Creative Web Designer & Frontend Developer',
  description:
    'Portfolio of Mahesh Nagar, a Web Designer and Frontend Developer with 3 years of experience creating modern, responsive, and high-performance websites using React.js, Next.js, and WordPress.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
