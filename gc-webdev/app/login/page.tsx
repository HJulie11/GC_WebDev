// LogInPage.tsx
"use client"
import React, { useState } from 'react'
import LogIn from '../component/LogIn'
import StoreContextProvider from '../context/storeContext'

const LogInPage: React.FC = () => {
    const [email, setEmail] = useState<string>(""); // Initialize with an empty string
    
    return (
        <StoreContextProvider>
            <div className='flex center items-center justify-center h-screen'>
                <LogIn setEmail={setEmail} />
            </div>
        </StoreContextProvider>
    )
}

export default LogInPage;