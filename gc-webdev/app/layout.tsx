
'use client'
import { motion } from 'framer-motion'

import './globals.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar isLoggedIn={true} />
        <motion.main className="relative overflow-hidden">
          {children}
        </motion.main>
        <Footer />
      </body>
    </html>
  )
}