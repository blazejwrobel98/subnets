import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CIDR Subnet Calculator & VLSM Planner',
  description: 'Professional subnet calculator and VLSM planner for network administrators',
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

