"use client"
import React from 'react'
import AdminNavbar from './AdminNavbar'
import AdminFooter from './AdminFooter'

const AdminMainLayout = ({children}: {children: React.ReactNode}) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    }
    
    return (
        <html>
            <body>
                <div>
                    <AdminNavbar isLoggedIn={isLoggedIn} />
                    <main>{children}</main>
                    <AdminFooter />
                </div>
            </body>    
        </html>
    
  )
}

export default AdminMainLayout