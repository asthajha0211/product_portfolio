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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100&display=swap" rel="stylesheet" />
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,100,0,0&icon_names=light_mode" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,100,0,0&icon_names=dark_mode" /> */}
      </head>
      <body>
        {children}
        <Analytics />
        </body>
    </html>
  )
}
