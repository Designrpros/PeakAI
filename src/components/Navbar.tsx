'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-50/80 backdrop-blur-sm border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-light tracking-tight">peak</span>
          <span className="text-2xl font-semibold">ai</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-950 transition-colors">hjem</Link>
          <Link href="/install" className="hover:text-zinc-950 transition-colors">install</Link>
          <Link href="/documentation" className="hover:text-zinc-950 transition-colors">documentation</Link>
        </nav>
        
        <button 
          className="hidden md:block text-zinc-500 hover:text-zinc-950 transition-colors"
          aria-label="Github"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </button>
        
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-zinc-950 p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-50 border-t border-zinc-200 shadow-lg">
          <nav className="flex flex-col gap-1 py-4">
            <Link 
              href="/" 
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 text-lg text-zinc-950 hover:bg-zinc-100 transition-colors"
            >
              hjem
            </Link>
            <Link 
              href="/install" 
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 text-lg text-zinc-950 hover:bg-zinc-100 transition-colors"
            >
              install
            </Link>
            <Link 
              href="/documentation" 
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 text-lg text-zinc-950 hover:bg-zinc-100 transition-colors"
            >
              documentation
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
