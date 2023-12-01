import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import NavBar from '../../Components/NavBar'


export const metadata: Metadata = {
  title: 'Brew',
  description: 'App for those who want to make their own drinks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        <main className='relative overflow-hidden'>
          {children}
        </main>
        </body>
    </html>
  )
}
