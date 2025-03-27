import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Astha Jha',
  description: "Astha's Portfolio"
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/aj-logo.ico" sizes="any"/>
      </head>
      <body>
        {children}
        <Analytics />
        </body>
    </html>
  )
}
