"use client"

import '../globals.css'
import React from 'react'
import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: "GyeongCheong",
//   description: "영어 듣기 학습 사이트",
// };

export default function AdminLayout({
    children
}: {
    children: React.ReactNode
}) {

    return (
        <>{children}</>
    )
}