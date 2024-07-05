"use client"

import '../globals.css'
import Navbar from './Navbar'
import Footer from './Footer'
import React from 'react'

export default function MainLayout({children}: {children: React.ReactNode}) {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // Simulate a login action
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <html>
      <body>
        <div>
          <Navbar isLoggedIn={isLoggedIn}/>
          <main>{children}</main>
          <Footer />
        </div>
      </body>    
    </html>
    
  )
}