import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Liv's Hus - Luxury Villa in Apokoronas, Crete",
  description: 'Experience authentic Cretan living in our beautifully appointed 2-bedroom villa nestled in the olive groves of Apokoronas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
