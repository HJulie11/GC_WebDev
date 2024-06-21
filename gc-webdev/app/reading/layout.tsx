import React from 'react'

export default function LayoutReading({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative overflow-hidden">
        {children}
    </main>
  )
}

