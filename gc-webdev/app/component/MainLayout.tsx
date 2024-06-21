"use client"

import '../globals.css'
import Navbar from './Navbar'
import Footer from './Footer'
import React from 'react'
import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: "GyeongCheong",
//   description: "영어 듣기 학습 사이트",
// };

export default function MainLayout({children}: {children: React.ReactNode}) {
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // Simulate a login action
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    // <html lang="en">
    //   <Navbar isLoggedIn={isLoggedIn} />
    //   <body>
    //     <main>{children}</main>
    //   </body>
    //   <footer><Footer /></footer>
    // </html>
    <html>
      <body>
        <div>
          <Navbar isLoggedIn={isLoggedIn} />
          <main>{children}</main>
          <Footer />
        </div>
      </body>    
    </html>
    
  )
}