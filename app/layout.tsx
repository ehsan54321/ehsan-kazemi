'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import 'aos/dist/aos.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
