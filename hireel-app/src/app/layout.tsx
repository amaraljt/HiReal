// src/app/layout.tsx : Root Layout (REQUIRED)

import type { Metadata } from 'next';
import './globals.css'

export const metadata: Metadata = {
  title: 'HiReel',
  description: 'clips clips clips',
  icon: '../../public/favicon.ico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}
