import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PeakAI — Desktop AI Agent',
  description: 'A cross-platform AI agent with a Rust-powered backend. Connect to any LLM provider and automate complex tasks locally.',
  keywords: ['AI', 'agent', 'desktop', 'llm', 'ollama', 'openai', 'anthropic'],
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
