import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const head = Bricolage_Grotesque({ subsets: ['latin'], weight: ['500', '700', '800'], variable: '--font-head' })
const body = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body' })

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
    <html lang="en" className={`${head.variable} ${body.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
