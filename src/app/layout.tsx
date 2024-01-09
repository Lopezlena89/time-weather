import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers/Providers';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';




export const metadata: Metadata = {
  title: 'Time - Calendar',
  description: 'Calendar for your days ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
       <Providers>
        {children}
       </Providers>
        </body>
    </html>
  )
}
