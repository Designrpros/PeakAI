import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PeakAI — Den åpne kildekode AI-agenten',
  description: 'PeakAI er en åpen kildekode AI-agent designet for utviklere. 100% gratis, ingen datainnsamling.',
  keywords: ['AI', 'coding', 'development', ' agents', 'open source', 'llm'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <body className="bg-white text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  )
}
